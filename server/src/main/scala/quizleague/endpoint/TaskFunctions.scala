package quizleague.endpoint

import cps.*
import cps.monads.{*, given}
import quizleague.data.*
import quizleague.data.Storage.*
import quizleague.domain.*
import quizleague.domain.command.{ResultValues, ResultsSubmitCommand}
import quizleague.domain.notification.*
import quizleague.domain.util.LeagueTableRecalculator
import quizleague.endpoint.HistoricalStatsAggregator
import quizleague.task.TaskQueue.*
import quizleague.util.*
import quizleague.util.UUID.*

import java.time.LocalDateTime
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.concurrent.Future.*

object TaskFunctions {

  def resultSubmission(result: ResultsSubmitCommand) = {
    resultSubmit(result).foreach(()=>_)
  }

  def resultSubmit(result: ResultsSubmitCommand) = async[Future]{
    println(s"submit result arrived : $result")

    def haveResults = sequence(result.fixtures.map(f => {
      load[Fixture](f.fixtureKey).map(_.result.isDefined)
    })).map(_.exists(a => a))


    val hasResults = await(haveResults)
    val user = await(load[User](result.userID))

    val fixturesIt = result.fixtures.iterator

    while(fixturesIt.hasNext){
      await(saveFixture(user, result.reportText)(fixturesIt.next()))
    }

    if (!hasResults) {
      val fixturesIt = result.fixtures.iterator
      while(fixturesIt.hasNext) {
        val f = fixturesIt.next()
        val fixture = await(load[Fixture](f.fixtureKey))
        val isSubsidiary = await(subsidiary(fixture))
        val leagueTables = await(tables(fixture))
        if (!leagueTables.isEmpty) {
          await(updateTables(leagueTables, fixture))

          if (!isSubsidiary) {
            await(fireStatsUpdate(fixture, f.fixtureKey))
          }
        }
        if (!isSubsidiary) {
          await(fireNotifications(fixture))
        }
      }
    }
  }

  private def fireStatsUpdate(fixture: Fixture, key: Key) = async[Future]{

    val season = await{applicationContext()}.currentSeason
    taskQueue.send(() => statsUpdate(season.id, List((fixture, key))))

  }

  private def fireNotifications(fixture:Fixture) = async[Future]{

    def snackbarNotification() = async[Future]{
      await(save(Notification(
        uuid,
        NotificationTypeNames.result,
        londonTime,
        ResultPayload(fixture.key.get.key))))
    }

    def chatNotification() = async[Future]{
      val user = await(systemUser)
      val homechat = await(runQuery[Chat](Storage.collection[Chat]().where("name", "==", "homepagechat"))).head
      val home = await(load(fixture.home))
      val away = await(load(fixture.away))

      val result = fixture.result.get
      val hashtag = s"#${home.handle}vs${away.handle}"

      val message = ChatMessage(
        uuid,
        ref(user),
        s"$hashtag<br>${home.name} ${result.homeScore}:${result.awayScore} ${away.name}",
        LocalDateTime.now,
        List(hashtag,s"#${home.handle}",s"#${away.handle}")
      )
      val key = Key.of(homechat.key, "chatmessage", message.id)

      await(save(message.withKey(key)))

    }

    taskQueue.send(snackbarNotification)
    taskQueue.send(chatNotification)

  }



  private def updateTables(tables: List[LeagueTable], fixture: Fixture) = {

    val newTables = LeagueTableRecalculator.recalculate(tables, List(fixture))

    saveAll(newTables)
  }

  def statsUpdate(seasonId: String, fixturesAndKeys: List[(Fixture, Key)]) = async[Future]{

    val fixtures = fixturesAndKeys.map({ case (fixture, key) => fixture.withKey(key) })

    val season = await{load[Season](seasonId)}

    fixtures.foreach(StatsWorker.perform(_, season))
  }

  private def saveFixture(user: User, reportIn: Option[String])(result: ResultValues) = {
    async[Future] {
      val fixture = await{load[Fixture](result.fixtureKey)}
      val isSubsidiary = await{subsidiary(fixture)}
      val report = reportIn.filter(r => !r.trim.isEmpty && !isSubsidiary)

      def newText(reportText: String) = async[Future] {
        val id = uuid
        val text = Text(id, reportText, "text/markdown").withKey(Key(None, "text", id))
        await{save(text)}
        Ref[Text]("text", text.id)
      }

      def newResult() = {
        Some(Result(result.homeScore, result.awayScore, submitter = Some(Ref[User]("user", user.id)), None))
      }

      def newReport(reportText: String) = async[Future]{
        val team = await{teamFromUser(user)}
        Report(Ref("team", team.id), await(newText(reportText))).withKey(Key(fixture.key.get, "report", uuid))
      }

      val res = fixture.copy(result = fixture.result.fold(newResult())(Some(_))).withKey(fixture.key)

      val it = report.iterator
      while(it.hasNext){
        val reportText = it.next()
        save(await{newReport(reportText)})
      }

      save(res)
    }.flatten
  }

  private def teamFromUser(user: User) = async[Future]{

    val teams = await{list[Team]}

    val team = teams.filter(t => t.users.exists(_.id == user.id)).head

    team
  }

  private def subsidiary(fixture: Fixture) = async[Future]{
    val key = fixture.key.map(_.parentKey).flatMap(_.flatMap(Key(_).parentKey)).map(Key(_)).getOrElse(throw new IllegalArgumentException)
    val competition = await{load[Competition](key)}
    competition match {
      case _: SubsidiaryCompetition => true
      case _ => false
    }
  }
  private def tables(fixture: Fixture) = async[Future]{
      await{list[LeagueTable](fixture.key.map(_.parentKey).flatMap(_.flatMap(Key(_).parentKey)).map(Key(_)))}
  }

  def statsRegenerate(seasonId: String) = {

    for {
      season <- load[Season](seasonId)
      _ <- HistoricalStatsAggregator.perform(season)
    } yield {
      val key = Key(None, "notification", uuid)

      save(Notification(
        key.id,
        NotificationTypeNames.maintain,
        londonTime,
        MaintainMessagePayload(s"Stats regenerated for ${season.startYear}/${season.endYear}")
      ).withKey(key))
    }
  }

}

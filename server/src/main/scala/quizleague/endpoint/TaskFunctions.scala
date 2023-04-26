package quizleague.endpoint

import quizleague.data.Storage

import java.time.{LocalDateTime, ZoneId, ZonedDateTime}
import quizleague.data.Storage.{load, _}
import quizleague.data._
import quizleague.endpoint.HistoricalStatsAggregator
import quizleague.util.UUID.{randomUUID => uuid}
import quizleague.domain._
import quizleague.domain.command.{ResultValues, ResultsSubmitCommand}
import quizleague.domain.notification._
import quizleague.domain.util.LeagueTableRecalculator
import quizleague.util.json.codecs.DomainCodecs._
import quizleague.task.TaskQueue._

import scala.async.Async.{async, await}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future._
object TaskFunctions {

  def resultSubmission(result: ResultsSubmitCommand) = {
    resultSubmit(result).foreach(()=>_)
  }

  def resultSubmit(result: ResultsSubmitCommand) = async{
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
          await(save(Notification(
            uuid().toString(),
            NotificationTypeNames.result,
            LocalDateTime.now(),
            ResultPayload(fixture.key.get.key))))
        }
      }
    }
  }

  private def fireStatsUpdate(fixture: Fixture, key: Key) = async{

    val season = await(applicationContext()).currentSeason
    taskQueue.send(() => statsUpdate(season.id, List((fixture, key))))

  }

  private def updateTables(tables: List[LeagueTable], fixture: Fixture) = {

    val newTables = LeagueTableRecalculator.recalculate(tables, List(fixture))

    saveAll(newTables)
  }

  def statsUpdate(seasonId: String, fixturesAndKeys: List[(Fixture, Key)]) = async{

    val fixtures = fixturesAndKeys.map({ case (fixture, key) => fixture.withKey(key) })

    val season = await(load[Season](seasonId))

    fixtures.foreach(StatsWorker.perform(_, season))
  }

  private def saveFixture(user: User, reportIn: Option[String])(result: ResultValues) = {
    async {
      val fixture = await(load[Fixture](result.fixtureKey))
      val isSubsidiary = await(subsidiary(fixture))
      val report = reportIn.filter(r => !r.trim.isEmpty && !isSubsidiary)

      def newText(reportText: String) = async {
        val id = uuid().toString
        val text = Text(id, reportText, "text/markdown").withKey(Key(None, "text", id))
        await(save(text))
        Ref[Text]("text", text.id)
      }

      def newResult() = {
        Some(Result(result.homeScore, result.awayScore, submitter = Some(Ref[User]("user", user.id)), None))
      }

      def newReport(reportText: String) = async{
        val team = await(teamFromUser(user))
        Report(Ref("team", team.id), await(newText(reportText))).withKey(Key(fixture.key.get, "report", uuid().toString))
      }

      val res = fixture.copy(result = fixture.result.fold(newResult())(Some(_))).withKey(fixture.key)

      val it = report.iterator
      while(it.hasNext){
        val reportText = it.next()
        save(await(newReport(reportText)))
      }

      save(res)
    }.flatten
  }

  private def teamFromUser(user: User) = async{

    val teams = await(list[Team])

    val team = teams.filter(t => t.users.exists(_.id == user.id)).head

    team
  }

  private def subsidiary(fixture: Fixture) = async{
    val key = fixture.key.map(_.parentKey).flatMap(_.flatMap(Key(_).parentKey)).map(Key(_)).getOrElse(throw new IllegalArgumentException)
    val competition = await(load[Competition](key))
    competition match {
      case _: SubsidiaryCompetition => true
      case _ => false
    }
  }
  private def tables(fixture: Fixture) = async{
      await(list[LeagueTable](fixture.key.map(_.parentKey).flatMap(_.flatMap(Key(_).parentKey)).map(Key(_))))
  }

  def statsRegenerate(seasonId: String) = {

    for {
      season <- load[Season](seasonId)
      _ <- HistoricalStatsAggregator.perform(season)
    } yield {
      val key = Key(None, "notification", uuid().toString)

      save(Notification(
        key.id,
        NotificationTypeNames.maintain,
        ZonedDateTime.now(ZoneId.of("Europe/London")).toLocalDateTime,
        MaintainMessagePayload(s"Stats regenerated for ${season.startYear}/${season.endYear}")
      ).withKey(key))
    }
  }

}

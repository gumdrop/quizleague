package quizleague.web.site.fixtures

import quizleague.web.service.fixtures.FixtureGetService
import quizleague.web.service.fixtures.FixturesGetService
import quizleague.web.site.team.TeamService
import quizleague.web.site.venue.VenueService
import quizleague.web.model._
import quizleague.web.site.team.TeamService
import quizleague.web.core._

import scalajs.js
import js.JSConverters._
import rxscalajs.Observable
import rxscalajs.Observable._
import quizleague.web.model.CompetitionType
import java.time.LocalDate

import quizleague.web.util.Logging._
import quizleague.web.site.season.SeasonService
import quizleague.web.site.competition.CompetitionService
import quizleague.web.site.user.UserService
import quizleague.util.collection._
import quizleague.web.site.text.TextService
import quizleague.web.service.results.ReportGetService
import quizleague.web.service.PostService
import quizleague.domain.command.ResultsSubmitCommand
import quizleague.domain.command.ResultValues
import quizleague.domain.Key
import java.time.LocalDate.{now => today}
import java.time.LocalTime

import rxscalajs.Observable
import java.time.LocalDateTime

import quizleague.web.service.competition.CompetitionGetService
import quizleague.web.site.ApplicationContextService
import quizleague.web.site.chat.ChatService
import quizleague.web.util._

object FixturesModule extends Module {

  override val components = @@(SimpleFixturesComponent, AllFixturesComponent, QuestionsLinkComponent)
}

object FixturesService extends FixturesGetService {
  override val fixtureService = FixtureService
  override val competitionService = CompetitionService

  def nextFixtures(seasonId: String): Observable[js.Array[Fixtures]] = {
    def now = LocalDateTime.now.toString
    val fixtures = seasonFixtures(seasonId)

    fixtures
      .map(_.filter(f => now <= s"${f.date}T${f.start}")
        .groupBy(_.date)
        .toList
        .sortBy { case (k, v) => k }(Asc)
        .take(1)
        .flatMap { case (k, v) => v }
        .toJSArray)
  }
  def latestResults(seasonId:String): Observable[js.Array[Fixtures]] = {
    def now = LocalDateTime.now.toString
    val fixtures = seasonFixtures(seasonId)

    fixtures
      .map(_.filter(f => now >= s"${f.date}T${f.start}")
        .groupBy(_.date)
        .toList
        .sortBy{case (k,v) => k}(Desc)
        .take(1)
        .flatMap{case (k,v) => v}
        .toJSArray)
  }

  def activeFixtures(seasonId: String, take:Int = Integer.MAX_VALUE) = {
    val today = LocalDate.now.toString()

    seasonFixtures(seasonId).map(_.filter(_.date >= today).sortBy(_.date).take(take))
  }

  def spentFixtures(seasonId: String, take:Int = Integer.MAX_VALUE) = {
    val today = LocalDate.now.toString()

    seasonFixtures(seasonId).map(_.filter(_.date <= today).sortBy(_.date)(Desc).take(take))
  }

  private def seasonFixtures(seasonId:String) = {
    competitionFixtures(CompetitionService.firstClassCompetitions(seasonId))
  }

  def competitionFixtures(competitions:Observable[js.Array[_ <: Competition]]):Observable[js.Array[Fixtures]] = {
      val interim = competitions.map(_.map(c => FixturesService.list(c.key)))

    interim.flatMap(o => combineLatest(o.toSeq).map(_.toJSArray.flatten))
  }



}

object FixtureService extends FixtureGetService with PostService{
  override val venueService = VenueService
  override val teamService = TeamService
  override val userService = UserService
  override val fixturesService = FixturesService
  override val reportService  = ReportService

  def fixturesFrom( fixtures:Observable[js.Array[Fixtures]],
                    teamId:String,
                    take:Int = Integer.MAX_VALUE,
                    sortOrder:Ordering[String] = Asc[String]) = {

    val tf = fixturesToFixtureList(fixtures.map(_.sortBy(_.date)(sortOrder)))
      .map(_.filter(f => f.home.id == teamId || f.away.id == teamId))

    tf.map(_.take(take))
  }
  
  def teamResults(teamId: String, seasonId: String, take:Int = Integer.MAX_VALUE): Observable[js.Array[Fixture]] = {
    
    val fixtures = FixturesService.spentFixtures(seasonId).map(_.sortBy(_.date)(Desc))
    
    val tf = fixturesToFixtureList(fixtures)
    .map(_.filter(f => (f.home.id == teamId || f.away.id == teamId)))
      
    tf.map(_.take(take))
  }
    
  def teamFixturesForSeason(teamId: String, seasonId: String, take:Int = Integer.MAX_VALUE): Observable[js.Array[Fixture]] = {
    
    val fixtures = FixturesService.activeFixtures(seasonId)

    fixturesFrom(fixtures, teamId, take, Asc)
  }


  def fixturesForResultSubmission(teamId:String) = {
    val now = LocalDateTime.now().toString

    val context = ApplicationContextService.get()

    val fixtures = context.flatMap(c => {
      val fixturesSet = FixturesService
        .competitionFixtures(CompetitionService.competitions(c.currentSeason.id).map(_.sortBy(_.subsidiary)))
          .map(_
            .filter(f => now >= s"${f.date}T${f.start}")
            .sortBy(_.date)(Desc))
      fixturesFrom(fixturesSet, teamId, 4, Desc)
    })

    fixtures
      .map(_.map(f => f.parent.map(fs => (fs,f))))
      .flatMap(x => combineLatest(x.toSeq))
      .map(_.groupBy(_._1.date)
      .toList
      .sortBy(_._1)(Desc)
      .take(1)
      .flatMap(_._2)
      .map(_._2)
      .toJSArray)
  }
  

  def submitResult(fixtures:js.Array[Fixture], reportText:String, userID:String) = {
    import quizleague.util.json.codecs.CommandCodecs._

    val cmd = ResultsSubmitCommand(fixtures.map(f => ResultValues(Key(f.key.key), f.result.homeScore, f.result.awayScore)).toList, Option(reportText), userID)
    
    command[List[String],ResultsSubmitCommand](List("site","result","submit"),Some(cmd)).subscribe(unit)
  }
  
}

object ReportService extends ReportGetService {
  val textService = TextService
  val teamService = TeamService
}


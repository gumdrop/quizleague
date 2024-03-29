package quizleague.web.site.competition

import quizleague.util.collection._
import quizleague.web.core._
import quizleague.web.model.{Competition, CompetitionType, Fixtures, Key}
import quizleague.web.service.competition.CompetitionGetService
import quizleague.web.site.lazyimp
import quizleague.web.site.fixtures.FixturesService
import quizleague.web.site.leaguetable.LeagueTableService
import quizleague.web.site.season.{SeasonService, SeasonWatchService}
import quizleague.web.site.text.TextService
import quizleague.web.site.venue.VenueService
import rxscalajs.Observable

import java.time.LocalDate
import scala.reflect.ClassTag
import scala.scalajs.js

object CompetitionModule extends Module {

  private val sideMenu = {() => js.dynamicImport{CompetitionMenu}}
  private val title = {() => js.dynamicImport{CompetitionTitle}}

  override val routes = @@(
        RouteConfig(path="/competition/:key/league", components=Map("default" -> {() => js.dynamicImport{LeagueCompetitionPage}}, "title" -> title, "sidenav" -> sideMenu)),
        RouteConfig(path="/competition/:key/subsidiary", components=Map("default" -> {() => js.dynamicImport{BeerCompetitionPage}}, "title" -> title, "sidenav" -> sideMenu)),
        RouteConfig(path="/competition/:key/cup", components=Map("default" -> {() => js.dynamicImport{CupCompetitionPage}}, "title" -> title, "sidenav" -> sideMenu)),
        RouteConfig(path="/competition/:key/singleton", components=Map("default" -> {() => js.dynamicImport{SingletonCompetitionPage}}, "title" -> title, "sidenav" -> sideMenu)),
        RouteConfig(path="/competition/:key/results", components=Map("default" -> {() => js.dynamicImport{ResultsPage}}, "title" -> {() => js.dynamicImport{CompetitionResultsTitle}}, "sidenav" -> sideMenu)),
        RouteConfig(path="/competition/:key/fixtures", components=Map("default" -> {() => js.dynamicImport{FixturesPage}}, "title" -> {() => js.dynamicImport{CompetitionFixturesTitle}}, "sidenav" -> sideMenu)),

        RouteConfig(path="/competition", components=Map("default" -> {() => js.dynamicImport{CompetitionsComponent}}, "title" -> {() => js.dynamicImport{CompetitionsTitleComponent}}, "sidenav" -> sideMenu)
  ))
}

object CompetitionService extends CompetitionGetService{
  
  override val fixturesService = FixturesService
  override val leagueTableService = LeagueTableService
  override val textService = TextService
  override val venueService = VenueService
  
  def firstClassCompetitions(seasonId:String) = competitions(seasonId).map(c => c.filter(_.typeName != CompetitionType.subsidiary.toString()))
  
 
  def competitionsOfType[T <: Competition:ClassTag](seasonId:String):Observable[js.Array[T]] = {
    competitions(seasonId).map(_ collect { case element: T => element })
  }
  
  def competition[T <: Competition:ClassTag](seasonId:String, typeName:String) = 
    competitionsOfType[T](seasonId).map(_.filter(_.typeName == typeName).head)
  
  def competitions(seasonId:String) = SeasonService.get(seasonId).flatMap(_.competition)
}

object CompetitionViewService extends SeasonWatchService {
  
  def competitions() = season.flatMap(s => CompetitionService.list(s.key))
  
  def fixtures(competitionKey:Key) = CompetitionService
    .get(competitionKey)
    .flatMap(c => FixturesService.list(c.key))
  
  def nextFixtures(competitionKey:Key, take:Integer = Integer.MAX_VALUE):Observable[js.Array[Fixtures]] = {
    val today = LocalDate.now.toString
    fixtures(competitionKey).map(_.filter(_.date >= today).sortBy(_.date).take(take))
  }

  def latestResults(competitionKey:Key, take:Integer = Integer.MAX_VALUE):Observable[js.Array[Fixtures]] = {
    val today = LocalDate.now.toString
    fixtures(competitionKey).map(_.filter(_.date <= today).sortBy(_.date)(Desc).take(take))
  }
  
  def parentSeason(competitionKey:Key) = {
    SeasonService.get(Key(competitionKey.parentKey))
  }
}

package quizleague.web.site.competition.statistics

import quizleague.web.core.*
import quizleague.web.model.*
import quizleague.web.site.competition.{CompetitionMenu, CompetitionMenuComponent, CompetitionService}
import quizleague.web.site.season.SeasonService
import quizleague.web.site.team.TeamService
import quizleague.web.service.statistics.CompetitionStatisticsGetService

import scala.scalajs.js


object CompetitionStatisticsModule extends Module{
  override val routes = @@(
    RouteConfig(path="/competition/rollofhonour/:id", components=Map("default" -> {() => js.dynamicImport{CompetitionStatisticsPage}}, "title" -> {() => js.dynamicImport{CompetitionStatisticsTitle}}, "sidenav" -> {() => js.dynamicImport{CompetitionStatisticsMenuComponent}})))
}


object CompetitionStatisticsService extends CompetitionStatisticsGetService{
  override val teamService = TeamService
  override val seasonService = SeasonService
  override val competitionService = CompetitionService

}


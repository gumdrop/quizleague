package quizleague.web.site.results

import quizleague.web.site.fixtures.{FixtureService, FixturesService}
import quizleague.web.site.team.TeamService
import quizleague.web.site.text.TextService
import quizleague.web.site.user.UserService
import quizleague.web.site.fixtures.AllFixturesComponent
import quizleague.web.site.fixtures.AllFixturesTitleComponent
import quizleague.web.site.fixtures.FixturesModule
import quizleague.web.core.*
import quizleague.web.core.RouteConfig
import quizleague.web.site.fixtures.AllFixturesTitleComponent
import quizleague.web.site.fixtures.AllFixturesPage
import quizleague.web.site.season.SeasonWatchService
import quizleague.web.site.fixtures.FixturesService
import quizleague.web.site.login.LoginService

import scala.scalajs.js



object ResultsModule extends Module {

  private val menu = {() => js.dynamicImport{ResultsMenuComponent}}

  override val routes = @@(
    RouteConfig(
      path = "/results/all",
      components = Map("default" -> {() => js.dynamicImport{AllResultsPage}}, "title" -> {() => js.dynamicImport{AllResultsTitleComponent}}, "sidenav" -> menu)),
    RouteConfig(
      path = "/fixtures/all",
      components = Map("default" -> {() => js.dynamicImport{AllFixturesPage}}, "title" -> {() => js.dynamicImport{AllFixturesTitleComponent}}, "sidenav" -> menu)),
    RouteConfig(
      path = "/results/submit/instructions",
      components = Map("default" -> {() => js.dynamicImport{SubmitResultsInstructionsComponent}},  "sidenav" -> menu, "title" -> {() => js.dynamicImport{SubmitResultsTitleComponent}}),
      beforeEnter = LoginService.noAuthRouteGuard),
    RouteConfig(
      path = "/results/submit",
      components = Map("default" -> {() => js.dynamicImport{SubmitResultsComponent}},  "sidenav" -> menu, "title" -> {() => js.dynamicImport{SubmitResultsTitleComponent}}),
      beforeEnter = LoginService.routeGuard),

    RouteConfig(path = "/results", redirect = "/results/all"))

}



object ResultsViewService extends SeasonWatchService{
  def results = season.flatMap(s => FixturesService.spentFixtures(s.id))
}




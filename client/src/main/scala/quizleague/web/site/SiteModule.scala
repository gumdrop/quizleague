package quizleague.web.site

import com.felstar.scalajs.vue.*

import scalajs.js.Dynamic.literal
import scalajs.js
import js.JSConverters.*
import quizleague.web.site.home.HomeModule
import quizleague.web.core.*
import quizleague.web.site.team.TeamModule
import quizleague.web.store.Storage
import io.circe.*
import io.circe.parser.*
import io.circe.syntax.*
import io.circe.scalajs.convertJsToJson
import quizleague.domain.ApplicationContext
import rxscalajs.subjects.BehaviorSubject
import quizleague.domain.ApplicationContext
import rxscalajs.Subject
import rxscalajs.subjects.ReplaySubject
import quizleague.web.model.*
import quizleague.web.site.text.TextModule
import quizleague.web.site.venue.VenueModule
import quizleague.web.site.fixtures.*
import quizleague.web.site.leaguetable.LeagueTableModule
import quizleague.web.service.applicationcontext.ApplicationContextGetService
import quizleague.web.service.globaltext.GlobalTextGetService
import quizleague.web.site.text.TextService
import quizleague.web.service.notification.NotificationGetService
import quizleague.web.site.season.*
import quizleague.web.site.user.UserService
import quizleague.web.site.text.GlobalTextService
import quizleague.web.site.results.ResultsModule
import quizleague.web.site.competition.CompetitionModule
import quizleague.web.site.calendar.CalendarModule
import quizleague.web.site.other.*
import quizleague.web.maintain.MaintainModule
import quizleague.web.site.common.*

import java.time.LocalDateTime
import quizleague.web.shared.SharedModule
import quizleague.web.site.chat.{ChatMessageService, ChatModule}
import quizleague.web.site.competition.statistics.CompetitionStatisticsModule
import quizleague.web.site.login.{LoginModule, LoginService}
import rxscalajs.Observable

def lazyimp[T](component:T):() => js.Promise[T] = () => js.dynamicImport{component}

object SiteModule extends Module {
  
  override val modules = @@(
    CommonModule,
    HomeModule,
    TeamModule,
    TextModule,
    VenueModule,
    FixturesModule,
    ResultsModule,
    LeagueTableModule,
    CompetitionModule,
    SeasonModule,
    CalendarModule,
    CompetitionStatisticsModule,
    ChatModule,
    LoginModule,
    SharedModule)
  
  override val routes = @@(
      RouteConfig(path="/links", components = Map("default" -> {() => js.dynamicImport{LinksComponent}}, "title" -> {() => js.dynamicImport{LinksTitleComponent}})),
      RouteConfig(path="/rules", components = Map("default" -> {() => js.dynamicImport{RulesComponent}})),
      RouteConfig(path="/contact", components = Map("default" -> {() => js.dynamicImport{ContactUsComponent}})),
      RouteConfig(path="/help", components = Map("default" -> {() => js.dynamicImport{HelpComponent}},"title" -> {() => js.dynamicImport{HelpTitleComponent}},"sidenav" -> {() => js.dynamicImport{HelpMenuComponent}})),
      RouteConfig(path = "",redirect = "/home")
      )
  
  override val components = @@(SiteComponent)
   
}



object ApplicationContextService extends ApplicationContextGetService{
  
  override val globalTextService = GlobalTextService
  override val seasonService = SeasonService
  override val userService = UserService
  
}


object SiteService {
  val sidemenu = BehaviorSubject[Boolean](false)
}

object NotificationService extends NotificationGetService {

  override val chatMessageService = ChatMessageService
  def resultMessages(threshold: LocalDateTime): Observable[Observable[js.Array[Fixture]]] = super.messages("result", threshold)
    .map(_.map(m => {
      m.payload match {
        case p: ResultPayload => p
        case _ => throw new Exception("invalid payload")
      }
    }).map(p => FixtureService.get(p.fixtureKey))).map(x => Observable.combineLatest(x.toSeq).map(_.toJSArray))

  def chatNotificationMessages(threshold: LocalDateTime): Observable[js.Array[ChatNotificationPayload]] = {

    for {
      messages <- super.messages("chat", threshold)
      loggedInUser <- LoginService.userProfile if loggedInUser != null
    }yield{
     val payloads = messages.map(m => {
        m.payload match {
          case p: ChatNotificationPayload => p
          case _ => throw new Exception("invalid payload")
        }
      })
      payloads.filter(_.siteUserKey.key == loggedInUser.siteUser.key.key)
    }
  }
}
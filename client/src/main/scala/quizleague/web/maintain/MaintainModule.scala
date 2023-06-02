package quizleague.web.maintain

import quizleague.web.core.{RouteConfig, *}
import quizleague.web.maintain.applicationcontext.ApplicationContextModule
import quizleague.web.maintain.chat.ChatMessageService
import quizleague.web.maintain.competitionstatistics.CompetitionStatisticsModule
import quizleague.web.maintain.globaltext.GlobalTextModule
import quizleague.web.maintain.season.SeasonModule
import quizleague.web.maintain.stats.StatsModule
import quizleague.web.maintain.team.TeamModule
import quizleague.web.maintain.text.TextModule
import quizleague.web.maintain.user.UserModule
import quizleague.web.maintain.venue.VenueModule
import quizleague.web.model.MaintainMessagePayload
import quizleague.web.service.notification.NotificationGetService
import quizleague.web.shared.SharedModule
import rxscalajs.Observable

import java.time.LocalDateTime
import scala.scalajs.js
import scala.scalajs.js.JSConverters.*

object MaintainModule extends Module {

  override val modules = @@(
    UserModule,
    VenueModule,
    TextModule,
    TeamModule,
    ApplicationContextModule,
    GlobalTextModule,
    SeasonModule,
    StatsModule,
    CompetitionStatisticsModule,
    SharedModule)

  override val routes = @@(
    RouteConfig(path = "/maintain/*", components = Map("sidenav" -> MaintainMenuComponent)))

}

object NotificationService extends NotificationGetService {

  override val chatMessageService = ChatMessageService
  def messages(threshold: LocalDateTime): Observable[String] = super.messages("maintain", threshold)
    .map(_.map(m => {
      m.payload match {
        case p: MaintainMessagePayload => p
        case _ => throw new Exception("invalid payload")
      }
    }).foldLeft("")((s, p) => s + p.message))
}
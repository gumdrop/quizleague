package quizleague.endpoint

import io.scalajs.npm.express.*
import quizleague.domain.*
import quizleague.domain.command.{AliasEmailCommand, ChatNotificationCommand, ResultsSubmitCommand, TeamEmailCommand}
import quizleague.endpoint.SiteFunctions.*
import io.circe.generic.auto.*
import io.circe.syntax.*

object SiteEndpoints {

  private val root = "/rest/site"
  def configure(app:Application):Application = {
    app
      .post(s"$root/result/submit",  postResultSubmit)
      .post(s"$root/team-for-email/:email", postTeamForEmail)
      .post(s"$root/site-user-for-email/:email", postSiteUserForEmail)
      //.post(s"$root/save-site-user", postSaveSiteUser _)
      .post(s"$root/email/team", postEmailTeam)
      .post(s"$root/email/alias", postEmailAlias)
      .post(s"$root/chat/notifications", postChatNotifications)
  }
  private def postResultSubmit(req: Request, res: Response):Unit = send(submitResult(parse[ResultsSubmitCommand](req)),res)
  private def postTeamForEmail(req: Request, res: Response):Unit = param("email",req).foreach(email => send(teamForEmail(email),res))
  private def postSiteUserForEmail(req: Request, res: Response):Unit = param("email",req).foreach(email => send(siteUserForEmail(email), res))
  private def postSaveSiteUser(req: Request, res: Response):Unit = send(saveSiteUser(parse[SiteUser](req)), res)
  private def postEmailTeam(req: Request, res: Response):Unit = send(contactTeam(parse[TeamEmailCommand](req)), res)
  private def postEmailAlias(req: Request, res: Response):Unit = send(contactPerson(parse[AliasEmailCommand](req)), res)
  private def postChatNotifications(req:Request, res: Response):Unit = send(chatNotifications(parse[ChatNotificationCommand](req)), res)
}



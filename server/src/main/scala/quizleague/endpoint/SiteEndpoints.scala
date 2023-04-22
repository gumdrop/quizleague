package quizleague.endpoint

import io.scalajs.npm.express._
import quizleague.domain.SiteUser
import quizleague.domain.command.{AliasEmailCommand, ResultsSubmitCommand, TeamEmailCommand}
import quizleague.endpoint.SiteFunctions._
import quizleague.util.json.codecs.CommandCodecs._
import quizleague.util.json.codecs.DomainCodecs._

object SiteEndpoints {

  private val root = "/rest/site"
  def configure(app:Application):Application = {
    app
      .post(s"$root/result/submit",  postResultSubmit _)
      .post(s"$root/team-for-email/:email", postTeamForEmail _)
      .post(s"$root/site-user-for-email/:email", postSiteUserForEmail _)
      .post(s"$root/save-site-user", postSaveSiteUser _)
      .post(s"$root/email/team", postEmailTeam _)
      .post(s"$root/email/alias", postEmailAlias _)
  }
  private def postResultSubmit(req: Request, res: Response):Unit = send(submitResult(parse[ResultsSubmitCommand](req)),res)
  private def postTeamForEmail(req: Request, res: Response):Unit = param("email",req).foreach(email => send(teamForEmail(email),res))
  private def postSiteUserForEmail(req: Request, res: Response):Unit = param("email",req).foreach(email => send(siteUserForEmail(email), res))
  private def postSaveSiteUser(req: Request, res: Response):Unit = send(saveSiteUser(parse[SiteUser](req)), res)
  private def postEmailTeam(req: Request, res: Response):Unit = send(contactTeam(parse[TeamEmailCommand](req)), res)
  private def postEmailAlias(req: Request, res: Response):Unit = send(contactPerson(parse[AliasEmailCommand](req)), res)
}



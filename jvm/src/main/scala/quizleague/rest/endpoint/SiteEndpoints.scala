package quizleague.rest.endpoint

import quizleague.domain._
import quizleague.domain.command.{ResultsSubmitCommand, TeamEmailCommand}
import quizleague.util.json.codecs.CommandCodecs._
import quizleague.util.json.codecs.DomainCodecs._
import sttp.tapir.generic.auto._
import sttp.tapir.json.circe._
import sttp.tapir.server.ServerEndpoint
import sttp.tapir.{Endpoint, endpoint, stringBody, _}

import scala.concurrent.Future
import scala.concurrent.Future.successful

private object SiteEndpointDefinitions {

  val base = endpoint
    .in("rest"/"site")
    .errorOut(stringBody)

  val teamForEmail: Endpoint[Unit, String, String, List[Team], Any] = base
    .post
    .in("team-for-email" / path[String]("email"))
    .out(jsonBody[List[Team]])

  val siteUserForEmail: Endpoint[Unit, String, String, Option[SiteUser], Any] = base
    .post
    .in("site-user-for-email" / path[String]("email"))
    .out(jsonBody[Option[SiteUser]])

  val saveSiteUser: Endpoint[Unit, SiteUser, String, SiteUser, Any] = base
    .post
    .in("save-site-user")
    .in(jsonBody[SiteUser])
    .out(jsonBody[SiteUser])


  val submitResults: Endpoint[Unit, ResultsSubmitCommand, String, List[String], Any] = base
    .post
    .in("result"/"submit")
    .in(jsonBody[ResultsSubmitCommand])
    .out(jsonBody[List[String]])

}

object SiteEndpointImplementations {

  import SiteEndpointDefinitions._

  private val getTeamForEmail = teamForEmail
    .serverLogic(email => {
      successful[Either[String, List[Team]]](Right(new SiteFunctions().teamForEmail(email)))
    })

  private val getSiteUserForEmail = siteUserForEmail
    .serverLogic(email => {
      successful[Either[String, Option[SiteUser]]](Right(new SiteFunctions().siteUserForEmail(email)))
    })

  private val postSaveSiteUser = saveSiteUser
    .serverLogic(in => {
      successful[Either[String, SiteUser]](Right(new SiteFunctions().saveSiteUser(in)))
    })

  private val postSubmitResults = submitResults
    .serverLogic(in => {
      successful[Either[String, List[String]]](Right(new SiteFunctions().resultSubmit(in)))
    })


  def siteEndpoints: List[ServerEndpoint[Any, Future]] = List(
    getTeamForEmail,
    getSiteUserForEmail,
    postSaveSiteUser,
    postSubmitResults)
}

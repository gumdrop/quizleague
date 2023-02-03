package quizleague.rest.endpoint

import quizleague.domain._
import quizleague.util.json.codecs.DomainCodecs._
import sttp.model._
import sttp.tapir.generic.auto._
import sttp.tapir.json.circe._
import sttp.tapir.server.ServerEndpoint
import sttp.tapir.{Endpoint, endpoint, stringBody, _}

import scala.concurrent.Future
import Future.successful

private object SiteEndpointDefinitions {

  val base = endpoint
    .in("site")
    .in(header(Header("Accept-Content", MediaType.ApplicationJson.toString())))

  val teamForEmail: Endpoint[Unit, String, String, List[Team], Any] = base
    .post
    .in("team-for-email" / path[String]("email"))
    .errorOut(stringBody)
    .out(jsonBody[List[Team]])

  val siteUserForEmail: Endpoint[Unit, String, String, Option[SiteUser], Any] = base
    .post
    .in("site-user-for-email" / path[String]("email"))
    .errorOut(stringBody)
    .out(jsonBody[Option[SiteUser]])

  val saveSiteUser: Endpoint[Unit, SiteUser, String, SiteUser, Any] = base
    .post
    .in("save-site-user")
    .in(jsonBody[SiteUser])
    .errorOut(stringBody)
    .out(jsonBody[SiteUser])

}

object SiteEndpointImplementations {
  private val getTeamForEmail = SiteEndpointDefinitions.teamForEmail
    .serverLogic(email => {
      successful[Either[String, List[Team]]](Right(new SiteEndpoint().teamForEmail(email)))
    })

  private val getSiteUserForEmail = SiteEndpointDefinitions.siteUserForEmail
    .serverLogic(email => {
      successful[Either[String, Option[SiteUser]]](Right(new SiteEndpoint().siteUserForEmail(email)))
    })

  private val postSaveSiteUser = SiteEndpointDefinitions.saveSiteUser
    .serverLogic(in => {
      successful[Either[String, SiteUser]](Right(new SiteEndpoint().saveSiteUser(in)))
    })

  def siteEndpoints: List[ServerEndpoint[Any, Future]] = List(getTeamForEmail, getSiteUserForEmail, postSaveSiteUser)
}

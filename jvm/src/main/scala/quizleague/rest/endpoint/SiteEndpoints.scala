package quizleague.rest.endpoint

import akka.actor.ActorSystem
import akka.http.javadsl.server.Route
import com.google.api.gax.core.ResourceCloseException

import scala.concurrent.Await
import scala.concurrent.duration.Duration
import akka.http.scaladsl.{Http, server}
import quizleague.domain.Team
import quizleague.rest.endpoint.SiteEndpoint
import sttp.model.MediaType
import sttp.tapir.stringBody
import sttp.tapir.endpoint
import sttp.tapir.Endpoint
import sttp.tapir._
import sttp.tapir.generic.auto._
import sttp.tapir.typelevel._
import sttp.model._
import sttp.tapir.static._
import sttp.tapir.server.akkahttp.AkkaHttpServerInterpreter
import sttp.tapir.server.netty.{NettyFutureServer, NettyFutureServerBinding}
import sttp.tapir.json.circe._
import quizleague.util.json.codecs.DomainCodecs._
import quizleague.conversions.RefConversions._
import quizleague.domain._
import sttp.tapir.server.ServerEndpoint

import java.net.InetSocketAddress
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.io.StdIn

object SiteEndpointDefinitions {

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
  val getTeamForEmail = SiteEndpointDefinitions.teamForEmail
    .serverLogic(email => {
      Future.successful[Either[String, List[Team]]](Right(new SiteEndpoint().teamForEmail(email)))
    })

  val getSiteUserForEmail = SiteEndpointDefinitions.siteUserForEmail
    .serverLogic(email => {
      Future.successful[Either[String, Option[SiteUser]]](Right(new SiteEndpoint().siteUserForEmail(email)))
    })

  val postSaveSiteUser = SiteEndpointDefinitions.saveSiteUser
    .serverLogic(in => {
      Future.successful[Either[String, SiteUser]](Right(new SiteEndpoint().saveSiteUser(in)))
    })

  def siteEndpoints: List[ServerEndpoint[Any, Future]] = List(getTeamForEmail, getSiteUserForEmail, postSaveSiteUser)
}

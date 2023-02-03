package quizleague

import akka.actor.ActorSystem
import akka.http.javadsl.server.Route
import com.google.api.gax.core.ResourceCloseException

import scala.concurrent.Await
import scala.concurrent.duration.Duration
import akka.http.scaladsl.{Http, server}
import quizleague.domain.Team
import quizleague.rest.endpoint.{SiteEndpoint, SiteEndpointDefinitions, SiteEndpointImplementations}
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


object Application extends App with BaseAkkaServer{

    val resources = resourcesGetServerEndpoint[Future](emptyInput)(this.getClass.getClassLoader,
      "webapp",
      ResourcesOptions.default.defaultResource(List("index.html")))

  val maintain = resourcesGetServerEndpoint[Future]("maintain")(this.getClass.getClassLoader,
    "webapp/maintain",
    ResourcesOptions.default.defaultResource(List("index.html")))

  val fileEndpoints = List(maintain, resources)


  private val interpreter: AkkaHttpServerInterpreter = AkkaHttpServerInterpreter()
  start((SiteEndpointImplementations.siteEndpoints ++ fileEndpoints).map(interpreter.toRoute _))

//  val binding: Future[NettyFutureServerBinding[InetSocketAddress]] =
//    NettyFutureServer().port(8080).addEndpoints(List(getKittens, resources)).start()

//  val port = 8080
//  val program = for {
//    binding <- NettyFutureServer().port(port).addEndpoints(List(getKittens, resources)).start()
//    _ <- Future {
//      println(s"Server started at http://localhost:${binding.port}. Press ENTER key to exit.")
//      StdIn.readLine()
//    }
//    stop <- binding.stop()
//  } yield stop

//  Await.result(program, Duration.Inf)
    //start(Seq(getKittens, resources))


}

trait BaseAkkaServer {

  import akka.http.scaladsl.server.Directives._

  val serverPort = 8080
  implicit val system: ActorSystem = ActorSystem("my-system")

  def start(routes: Iterable[server.Route]): Unit = {

    val server = Http()
      .newServerAt("localhost", serverPort)
      .bindFlow(
        routes.reduce((r1, r2) => r1 ~ r2)
      )

    println(s"Server now online.")
      println("Press RETURN to stop...")
      StdIn.readLine() // let it run until user presses return
    server
      .flatMap(_.unbind()) // trigger unbinding from the port
      .onComplete(_ => system.terminate()) // and shutdown when done
  }
}

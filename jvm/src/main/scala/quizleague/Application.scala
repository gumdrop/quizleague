package quizleague

import quizleague.rest.calendar.CalendarEndpoints.calendarEndpoints
import quizleague.rest.endpoint.EntityEndpointImplementations.entityEndpoints
import quizleague.rest.endpoint.ResourceEndpoints.resourceEndpoints
import quizleague.rest.endpoint.SiteEndpointImplementations.siteEndpoints
import sttp.tapir.server.netty.NettyFutureServer

import java.util.logging.Logger
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.io.StdIn


object Application extends App{

  private val LOG = Logger.getLogger(this.getClass.getName)

  val isLocal = Option(System.getenv("FIRESTORE_EMULATOR_HOST")).isDefined

  private val serverPort = Option(System.getenv("PORT")).map(_.toInt).getOrElse(8080)

  private val restEndpoints = siteEndpoints  ++
    entityEndpoints ++
    calendarEndpoints
//
//  val swaggerEndpoints = if(isLocal)
//    SwaggerInterpreter().fromEndpoints[Future](restEndpoints.map(_.endpoint), "Quizleague", "1.0")
//  else
//    List()

  val swaggerEndpoints = List()

  val endpoints = restEndpoints ++ resourceEndpoints

  val server = NettyFutureServer().port(serverPort).addEndpoints(swaggerEndpoints ++ endpoints).start()

  println("Server now online.")
  if(isLocal) {
    println("Press RETURN to stop... (and again)")
    StdIn.readLine() // let it run until user presses return
    server
      .flatMap(_.stop()) // trigger unbinding from the port
  }
}



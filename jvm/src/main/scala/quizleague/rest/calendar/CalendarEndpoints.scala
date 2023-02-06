package quizleague.rest.calendar

import sttp.model._
import sttp.tapir.server.ServerEndpoint
import sttp.tapir.{endpoint, stringBody, _}

import scala.concurrent.Future
import scala.concurrent.Future.successful
object CalendarEndpoints {

  private val calendar = endpoint
    .in("calendar"/ "team" / path[String]("teamId"))
    .in(emptyInput)

    .errorOut(stringBody)
    .out(stringBody)
    .out(header(Header.contentType(MediaType.TextCalendar)))
    .serverLogic(teamId => {
      successful[Either[String, String]](Right(CalendarHandler.teamCalendar(teamId)))
    })

  def calendarEndpoints: List[ServerEndpoint[Any, Future]] = List(calendar)
}

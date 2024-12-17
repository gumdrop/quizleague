package quizleague.endpoint

import io.scalajs.npm.express.{Application, Request, Response}
import io.scalajs.nodejs.http.ServerResponseExtensions

import quizleague.endpoint.SiteFunctions.teamForEmail
import scala.concurrent.ExecutionContext.Implicits.global

object CalendarEndpoints {


    private val root = "/calendar"
    def configure(app:Application):Application = {
        app.get(s"$root/team/:teamId", getTeamCalendar)
    }

    private def getTeamCalendar(req: Request, res: Response):Unit = param("teamId",req)
    .foreach(teamId => CalendarHandler.teamCalendar(teamId).foreach(ical => {
      res.setContentType("text/calendar")
      res.send(ical)
    }))

}

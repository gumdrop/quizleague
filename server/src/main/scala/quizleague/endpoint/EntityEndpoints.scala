package quizleague.endpoint

import io.scalajs.npm.express.*
import quizleague.domain.*
import quizleague.endpoint.EntityFunctions.*


object EntityEndpoints {

  private val root = "/rest/entity"
  def configure(app:Application):Application = {
    app
      .post(s"$root/regenerate-stats/:seasonId",  regenStats _)
      .post(s"$root/recalculate-table", recalcTable _)
  }

  private def regenStats(req: Request, res: Response):Unit = param("seasonId", req).foreach(seasonId => {regenerateStats(seasonId);res.json()})
  private def recalcTable(req: Request, res: Response):Unit = send(recalculateTable(parse[Key](req)),res)
}

package quizleague.endpoint

import io.scalajs.npm.express._
import quizleague.endpoint.EntityFunctions._
import quizleague.domain.Key
import quizleague.util.json.codecs.DomainCodecs._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js

object EntityEndpoints {

  private val root = "/rest/entity"
  def configure(app:Application) = {
    app
      .post(s"$root/regenerate-stats/:seasonId",  regenStats _)
      .post(s"$root/recalculate-table", recalcTable _)
  }

  private def regenStats(req: Request, res: Response) = req.params.get("seasonId").foreach(seasonId => {regenerateStats(seasonId);res.json()})
  private def recalcTable(req: Request, res: Response) = recalculateTable(parse[Key](req)).foreach(_ => res.json())
}

package quizleague.endpoint

import quizleague.domain.{Fixture, Fixtures, Key, LeagueTable}
import quizleague.task.TaskQueue.taskQueue
import quizleague.data.Storage._
import quizleague.domain.util.LeagueTableRecalculator

import scala.concurrent.ExecutionContext.Implicits.global
import quizleague.domain.*

import scala.concurrent.Future
import scala.concurrent.Future.sequence

object EntityFunctions {
  def regenerateStats(seasonId: String):Unit = {

    taskQueue.send(() => TaskFunctions.statsRegenerate(seasonId))
  }

  def recalculateTable(key: Key): Future[String] = {

    (for {
      table <- load[LeagueTable](key)
      fixtureSets <- list[Fixtures](key.parentKey.map(Key(_)))
      fixtureLists <- sequence(fixtureSets.map(fxs => list[Fixture](fxs.key)))
    } yield {
      val blankTable = table.copy(rows = table.rows.map(_.copy(won = 0, lost = 0, drawn = 0, leaguePoints = 0, matchPointsFor = 0, matchPointsAgainst = 0, played = 0))).withKey(key)
      val fixtures = fixtureLists.flatten
      val recalcTable = LeagueTableRecalculator.recalculate(List(blankTable), fixtures)
      saveAll(recalcTable)
    }).flatten.map(t => "")

  }
}

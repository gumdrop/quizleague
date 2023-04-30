package quizleague.domain.stats

import io.circe.Codec
import quizleague.domain.*

case class CompetitionStatistics(
  id: String,
  competitionName: String,
  results: List[ResultEntry] = List(),
  retired: Boolean = false
)  extends Entity  derives Codec.AsObject

case class ResultEntry(
  seasonText: Option[String],
  season: Option[Ref[Season]],
  competition:Option[Ref[Competition]],
  teamText: Option[String],
  team: Option[Ref[Team]],
  position: Int = 1
)  derives Codec.AsObject
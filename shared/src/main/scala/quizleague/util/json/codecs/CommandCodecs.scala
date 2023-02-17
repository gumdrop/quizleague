package quizleague.util.json.codecs

import quizleague.domain.SiteUser
import quizleague.domain.command._

object CommandCodecs {
  import io.circe._, io.circe.generic.semiauto._,io.circe.generic.auto._
  
    implicit val resultsSubmitEncoder:Encoder[ResultsSubmitCommand] = deriveEncoder
    implicit val resultsSubmitDecoder:Decoder[ResultsSubmitCommand] = deriveDecoder
    implicit val teamEmailEncoder:Encoder[TeamEmailCommand] = deriveEncoder
    implicit val teamEmailDecoder:Decoder[TeamEmailCommand] = deriveDecoder
    implicit val emailEncoder:Encoder[AliasEmailCommand]  = deriveEncoder
    implicit val emailDecoder: Decoder[AliasEmailCommand] = deriveDecoder

}
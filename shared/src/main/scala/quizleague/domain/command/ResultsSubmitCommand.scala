package quizleague.domain.command

import quizleague.domain.Key
import io.circe._
import io.circe.generic.semiauto.*
import io.circe.syntax.*
import io.circe.{Codec, Decoder, Encoder, Json}

case class ResultsSubmitCommand(fixtures:List[ResultValues], reportText:Option[String], userID:String)
case class ResultValues(fixtureKey:Key, homeScore:Int, awayScore:Int)
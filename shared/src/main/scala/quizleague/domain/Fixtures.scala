package quizleague.domain

import io.circe.Codec

import java.time.{Duration, LocalDate, LocalDateTime, LocalTime}
import quizleague.util.json.codecs.ScalaTimeCodecs._

case class Fixtures(
    id:String, 
    description:String,
    date:LocalDate,
    start:LocalTime,
    questionsUrl:Option[String] = None,
    retired:Boolean = false) extends Entity derives Codec.AsObject
    
case class Fixture(
  id:String,
  venue: Option[Ref[Venue]],
  home: Ref[Team],
  away:Ref[Team],
  result : Option[Result],
  retired:Boolean = false
) extends  Entity derives Codec.AsObject


case class Result(
    homeScore:Int,
    awayScore:Int,
    submitter:Option[Ref[User]],
    note:Option[String]
   ) derives Codec.AsObject


case class Report(
    team:Ref[Team],
    text:Ref[Text],
    ) extends Entity derives Codec.AsObject {
   val id = ""
   val retired = false
}


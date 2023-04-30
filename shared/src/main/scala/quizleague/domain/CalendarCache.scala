package quizleague.domain

import io.circe.Codec

import java.time.LocalDateTime
import quizleague.util.json.codecs.ScalaTimeCodecs._

case class CalendarCache(id:String,
                         updated:LocalDateTime,
                         ical:String,
                         retired:Boolean = false) extends Entity derives Codec.AsObject

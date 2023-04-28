package quizleague.domain

import io.circe.Codec

import java.time.LocalDateTime

case class CalendarCache(id:String,
                         updated:LocalDateTime,
                         ical:String,
                         retired:Boolean = false) extends Entity derives Codec.AsObject

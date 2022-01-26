package quizleague.domain

import java.time.LocalDateTime

case class CalendarCache(id:String,
                         updated:LocalDateTime,
                         ical:String,
                         retired:Boolean = false) extends Entity

package quizleague.web.util

import java.time._
import scalajs.js
import java.time.temporal.TemporalUnit
import java.time.temporal.ChronoUnit

object DateTimeConverters{
  import scala.language.implicitConversions
  
  given Conversion[Year,Int] = (year:Year) => year.getValue
  given Conversion[Int, Year] = (int:Int) => Year of int
  given stringToLocalDate:Conversion[String, LocalDate] = (date:String) => LocalDate parse date
  given localDateToString:Conversion[LocalDate,String] = (date:LocalDate) => date.toString
  given dateToLocalDate:Conversion[js.Date, LocalDate] = (date:js.Date) => LocalDate of(date.getFullYear().toInt,date.getMonth().toInt + 1,date.getDate().toInt)
  given localDateToDate:Conversion[LocalDate, js.Date] = (date:LocalDate) => new js.Date(js.Date parse date.toString)
  given dateToLocalTime:Conversion[String, LocalTime] = (date:String) => LocalTime parse date
  given localTimeToDate:Conversion[LocalTime, String] = (date:LocalTime) => f"${date.getHour}%02d:${date.getMinute}%02d"
  given intToDuration:Conversion[Float, Duration] = (duration:Float) => Duration.ofSeconds((3600 * duration).toLong)
  given durationToInt:Conversion[Duration, Float] = (duration:Duration) => duration.getSeconds.toFloat / 3600

}
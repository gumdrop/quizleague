package org.chilternquizleague.util

import java.time.Year
import java.util.Date

object DateTimeConverters{
  import scala.language.implicitConversions
  
  implicit def yearToInt(year:Year):Int = year.toString.toInt
  implicit def intToYear(int:Int):Year = if(int == null) null else Year parse int.toString

 
}
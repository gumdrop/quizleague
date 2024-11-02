package quizleague.util

import scala.language.implicitConversions

object StringUtils {
  val suffixes = List("th","st", "nd", "rd", "th", "th", "th", "th", "th", "th")
   implicit class StringImprovements(val s: String) {
       import scala.util.control.Exception._
       def toIntOpt = catching(classOf[NumberFormatException]) opt s.toInt
       def toLongOpt = catching(classOf[NumberFormatException]) opt s.toLong
   }
  def toOrdinal(number :Int) = number match {
    case tenTo20 if 10 to 20 contains tenTo20 => s"${number}th"
    case rest => s"$rest${suffixes(number % 10)}"
  }
}


package quizleague.util

import scala.language.implicitConversions
import scala.util.control.Exception.*

object StringUtils {
  val suffixes = List("th","st", "nd", "rd", "th", "th", "th", "th", "th", "th")

  extension (s:String){
    def toIntOpt = catching(classOf[NumberFormatException]) opt s.toInt
    def toLongOpt = catching(classOf[NumberFormatException]) opt s.toLong
  }

  def toOrdinal(number :Int) = number match {
    case tenTo20 if 10 to 20 contains tenTo20 => s"${number}th"
    case rest => s"$rest${suffixes(number % 10)}"
  }
}


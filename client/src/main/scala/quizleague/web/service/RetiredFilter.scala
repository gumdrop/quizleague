package quizleague.web.service

import quizleague.web.model.*
import quizleague.web.names.ComponentNames

trait RetiredFilter[T <: Model] extends ComponentNames
 {
  this:GetService[T] =>
  override def filterList(u:U) = !u.retired
}
package quizleague.web.service

import quizleague.web.util.Logging.*
import quizleague.web.model.Model
import quizleague.web.names.ComponentNames

trait CachingService[T <: Model] extends ComponentNames {
   this: GetService[T] =>
   
   override protected[service] def postProcess(item: T): T = {items += ((item.id, item));item}
}
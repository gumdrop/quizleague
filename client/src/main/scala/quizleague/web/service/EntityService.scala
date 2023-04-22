package quizleague.web.service


import quizleague.web.model.Model
import quizleague.web.names.ComponentNames

trait EntityService[T <: Model] extends GetService[T] with PutService[T]{
    this:ComponentNames =>
}

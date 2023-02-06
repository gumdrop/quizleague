package quizleague.rest.task

import castor.SimpleActor

class TaskQueue(implicit ac: castor.Context) extends SimpleActor[()=>Unit]{

  def run(command:()=>Unit) = {
    command()
  }

}

object TaskQueue {
  implicit private val context = castor.Context.Simple.global
  val taskQueue: TaskQueue = new TaskQueue()
}

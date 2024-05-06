package quizleague.task

import castor.SimpleActor

class TaskQueue(using ac: castor.Context) extends SimpleActor[()=>Unit]{

  def run(command:()=>Unit) = {
    command()
  }

}

object TaskQueue {
  import castor.Context.Simple.global
  val taskQueue: TaskQueue = new TaskQueue()
}

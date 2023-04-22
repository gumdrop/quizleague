package quizleague.mail

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@js.native
trait SendGrid extends js.Object {
  def send(msg:Message):SendGrid = js.native
  def `then`(callback:js.Function1[js.Array[Response],Unit]):SendGrid = js.native
  def `catch`(handler:js.Function1[js.Any,Unit]):Unit = js.native
  def setApiKey(apiKey:String):Unit = js.native
}

@js.native
@JSImport("@sendgrid/mail", JSImport.Namespace)
object SendGrid extends SendGrid 

class Message(val to: js.Array[String],
              val from: String,
              val replyTo: String,
              val subject: String,
              val text: String,
              val html: String = "") extends js.Object


@js.native
trait Response extends js.Object{
  val statusCode:String = js.native
  val headers:js.Array[String] = js.native
}
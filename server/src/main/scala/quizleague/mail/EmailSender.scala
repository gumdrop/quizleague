package quizleague.mail

import io.scalajs.nodejs.process.Process
import quizleague.domain.{ApplicationContext, Team}
import quizleague.data._
import quizleague.data.Storage._
import quizleague.mail.EmailSender.alias

import scala.concurrent.ExecutionContext.Implicits.global
import quizleague.util.json.codecs.DomainCodecs._

import scalajs.js.JSConverters._
import cps.monads.{*, given}
import cps._

object EmailSender{
  
  def team(sender: String, team: Team, text: String) = new EmailSender().sendTeamMail(sender, team, text)
 
  def alias(sender: String, recipientName: String, text: String) = new EmailSender().sendAliasMail(sender, recipientName, text)
}

private class EmailSender {

  def sendTeamMail(sender: String, team: Team, text: String) = async {

    val appContext = await(applicationContext())
    val users = await(loadAll(team.users))

    if (users.nonEmpty)
      sendMail(sender, text, appContext, users.map(_.email))
    else
      Console.err.println("No matching addressees for any recipients")

  }

  def sendAliasMail(sender: String, recipientName: String, text: String) = async {

    val g = await(applicationContext())
    val aliases = g.emailAliases.filter(_.alias == recipientName)

    if(aliases.isEmpty)
      Console.err.println(s"No alias found for '$recipientName'")

    val it = aliases.iterator

    while (it.hasNext) {
      val alias = it.next()
      val user = await(load(alias.user))
      sendMail(sender, text, g, List(user.email))
    }
  }

  def sendMail(sender: String, text: String, g: ApplicationContext, addresses: List[String], subject: String = "") = {

    try {
      val from = g.senderEmail
      val sub = if (subject.isEmpty()) s"Sent via ${g.leagueName} : From $sender " else s"${g.leagueName} : $subject"
      val message = new Message(
        addresses.toJSArray,
        from,
        sender,
        sub,
        text,
        s"<p>$text</p>"
      )

      val sg = SendGrid
      sg.setApiKey(Process.env("SENDGRID_API_KEY").get)
      sg.send(message)
        .`then`(response => {})
        .`catch`(error => Console.err.println(error.toString))
    }
    catch {
      case e: Exception => {Console.err.println(e.getMessage); throw e}
    }
  }
}
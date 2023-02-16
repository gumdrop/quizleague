package quizleague.rest.mail

import com.sendgrid._
import com.sendgrid.helpers.mail.Mail
import com.sendgrid.helpers.mail.objects._
import quizleague.conversions.RefConversions.{StorageContext, _}
import quizleague.data._
import quizleague.domain._
import quizleague.util.json.codecs.DomainCodecs._

import java.util.logging.{Level, Logger}

object EmailSender{
  
  def apply(sender: String, team: Team, text: String) = new EmailSender().sendTeamMail(sender, team, text)
 
  def apply(sender: String, recipientName: String, text: String) = new EmailSender().sendAliasMail(sender, recipientName, text)
  
  def apply(sender: String, text: String, addressees:List[String], subject:String = "") = new EmailSender().sendMail(sender, text, applicationContext(),addressees,subject)
  

}

private class EmailSender {

  val LOG: Logger = Logger.getLogger(classOf[EmailSender].getName);
  implicit val context = StorageContext

  def sendTeamMail(sender: String, team: Team, text: String): Unit = {

    try {

      sendMail(sender, text, applicationContext(), team.users.map(_.email))
      return

    } catch {
      case e:Exception => LOG.log(Level.SEVERE, "Failure sending mail", e);
    }
    LOG.fine("No matching addressees for any recipients")
  }
  
  def sendAliasMail(sender: String, recipientName: String, text: String): Unit = {

    try {

      val g = applicationContext()

        g.emailAliases.filter(_.alias == recipientName).foreach {
          alias =>
            {
              sendMail(sender, text, g,
                List(alias.user.email));
              return
            }

        }

      LOG.fine("No matching addressees for any recipients")

    } catch {
      case e: Exception => LOG.log(Level.SEVERE, "Failure sending mail", e);
    }
  }

  def sendMail(sender: String, text: String, g: ApplicationContext = applicationContext(), addresses: List[String], subject: String = "") = {

    val from = new Email(g.senderEmail)
    val sub = if (subject.isEmpty()) s"Sent via ${g.leagueName} : From $sender " else s"${g.leagueName} : $subject"
    val replyTo = new Email(sender)
    val content = new Content("text/plain", text)
    val recipients = new Personalization
    addresses.foreach(to => recipients.addTo(new Email(to)))
    val mail = new Mail()
    mail.setFrom(from)
    mail.setSubject(sub)
    mail.addContent(content)
    mail.setReplyTo(replyTo)
    mail.addPersonalization(recipients)

    val sg = new SendGrid(System.getenv("SENDGRID_API_KEY"))
    val request = new Request
    try {
      request.setMethod(Method.POST)
      request.setEndpoint("mail/send")
      request.setBody(mail.build)
      val response = sg.api(request)
      System.out.println(response.getStatusCode)
      System.out.println(response.getBody)
      System.out.println(response.getHeaders)
    } catch {
      case e: Exception => LOG.log(Level.SEVERE, "Failure sending mail", e);
    }
  }
}
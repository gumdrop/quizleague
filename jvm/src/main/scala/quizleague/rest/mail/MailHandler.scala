package quizleague.rest.mail

import quizleague.data._

import java.util.logging.{Level, Logger}
import org.apache.james.mime4j
import org.apache.james.mime4j.parser._



class MailHandler {

  val LOG: Logger = Logger.getLogger(classOf[MailHandler].getName());
  def handleEmail(message:String, recipient:String): Unit = {

//     val contentHandler = new CustomContentHandler();
//
//    MimeConfig mime4jParserConfig = new MimeConfig();
//    BodyDescriptorBuilder bodyDescriptorBuilder = new DefaultBodyDescriptorBuilder();
//    MimeStreamParser mime4jParser = new MimeStreamParser(mime4jParserConfig, DecodeMonitor.SILENT, bodyDescriptorBuilder);
//    mime4jParser.setContentDecoding(true);
//    mime4jParser.setContentHandler(contentHandler);
//
//    val props: Properties = new Properties;
//    val session: Session = Session.getDefaultInstance(props, null);
//
//    try {
//
//      val message = new MimeMessage(session,
//        req.getInputStream());
//
//      val globaldata = applicationContext()
//
//      val recipientParts = recipient.replaceFirst("/", "").split("@")
//
//      val recipientName = recipientParts(0);
//
//      EmailSender(globaldata.senderEmail,recipientName, message)
//
//    } catch {
//      case e: Exception => LOG.log(Level.SEVERE, "Failure receiving mail", e);
//    }

  }
}



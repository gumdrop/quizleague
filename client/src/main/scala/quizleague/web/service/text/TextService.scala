package quizleague.web.service.text

import scalajs.js
import quizleague.web.service._
import quizleague.web.model.Text
import quizleague.domain.{Key, Text => Dom}
import quizleague.web.names.TextNames
import io.circe._
import io.circe.parser._
import io.circe.syntax._
import io.circe.scalajs.convertJsToJson


trait TextGetService extends GetService[Text] with TextNames {
  override type U = Dom
  override protected def mapOutSparse(text: Dom): Text = Text(text.id, text.text, text.mimeType)
  protected def dec(json:js.Any) = decodeJson[U](json)
}

trait TextPutService extends PutService[Text] with TextGetService with DirtyListService[Text]{

  def instance(mimeType: String = "text/html") = make(mimeType)

  override protected def mapIn(text: Text) = Dom(text.id, text.text, text.mimeType)

  override protected def make(): Dom = {val id = newId;Dom(id, "", "text/html").withKey(Key(None, uriRoot, id))}

  protected def make(mimeType:String): Dom = {val id = newId;Dom(id, "", mimeType).withKey(Key(None, uriRoot, id))}

  override def enc(item: Dom) = item.asJson

}
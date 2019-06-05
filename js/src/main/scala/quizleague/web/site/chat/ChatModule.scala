package quizleague.web.site.chat

import quizleague.web.core.{@@, Module}
import quizleague.web.service.chat.{ChatGetService, ChatMessageGetService, ChatMessagePutService, ChatPutService}
import quizleague.web.service.user.SiteUserGetService
import quizleague.web.site.user.SiteUserService
import rxscalajs.{Observable, Subject}
import quizleague.web.model._
import quizleague.web.site.fixtures.{AllFixturesComponent, SimpleFixturesComponent}
import rxscalajs.subjects.ReplaySubject
import scalajs.js
import quizleague.util.collection._

object ChatModule extends Module {

  override val components = @@(ChatComponent, LoginButton)
}

object ChatMessageService extends ChatMessageGetService with ChatMessagePutService {

  val userService = SiteUserService
  val chatService = ChatService

  def list(parentKey:String, chatID:String):Observable[js.Array[ChatMessage]] =
    list(s"$parentKey/${chatService.key(chatID)}").map(_.sortBy(_.date)(Desc))

}


object ChatService extends ChatGetService with ChatPutService {

  val chatMessageService = ChatMessageService

  def add(parentKey:String):Observable[String] = {
    val chat = make()

    save(chat,parentKey).map(x => chat.id)

  }


}


package quizleague.web.site

import com.felstar.scalajs.vue.VueRxComponent
import quizleague.util.londonTime
import quizleague.web.core.*

import java.time.{LocalDateTime, ZoneId, ZoneOffset, ZonedDateTime}
import scala.scalajs.js

@js.native
trait ChatNotificationsComponent extends VueRxComponent {
  var now: LocalDateTime
  var messages: Boolean
}

object ChatNotificationsComponent extends Component {

  type facade = ChatNotificationsComponent
  
  val name = "chat-notifications"

  val template = """
   <v-snackbar
      :bottom="true"
      :right="true"
      v-model="messages"
      color="info"
      v-if="notifications"
    >
      <v-layout column>
        <v-flex align-self-end><v-btn icon text dark @click.native="messages = false"><v-icon right small>mdi-close</v-icon></v-btn></v-flex>
        <v-flex v-for="notification in notifications" :key="notification.chatMessage.id">
        You have been mentioned in a message by {{async(async(notification.chatMessage).user).handle}}
        </v-flex>
      </v-layout>

   </v-snackbar>
"""

  private def utcDateTime = londonTime

  data("now", utcDateTime)
  data("messages", false)
  subscription("notifications", "now")(c => NotificationService.chatNotificationMessages(c.now).map(m => { c.messages = true; m }))
  watch("messages")((c: facade, value: js.Any) => if (!c.messages) { c.now = utcDateTime })
}
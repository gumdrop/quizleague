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
      timeout="-1"
      bottom
      right
      v-model="messages"
      color="success"
      outlined
      elevation="6"
      v-if="notifications"
    >
     <v-layout column>
        <v-flex v-for="notification in notifications" :key="notification.chatMessage.id">You have been mentioned in a message by @{{async(async(notification.chatMessage).user).handle}}</v-flex>
      </v-layout>
      <template v-slot:action="{ attrs }">
         <v-btn icon text @click.native="messages = false"><v-icon small>mdi-close</v-icon></v-btn>
       </template>
   </v-snackbar>
"""
  data("now", londonTime)
  data("messages", false)
  subscription("notifications", "now")(c => NotificationService.chatNotificationMessages(c.now).map(m => { c.messages = true; m }))
  watch("messages")((c: facade, value: js.Any) => if (!c.messages) { c.now = londonTime })
}
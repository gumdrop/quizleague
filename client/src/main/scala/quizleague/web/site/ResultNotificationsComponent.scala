package quizleague.web.site

import com.felstar.scalajs.vue.VueRxComponent
import quizleague.util.*
import quizleague.web.core.*

import java.time.{LocalDateTime, ZoneId, ZoneOffset, ZonedDateTime}
import scala.scalajs.js

@js.native
trait ResultNotificationsComponent extends VueRxComponent {
  var now: LocalDateTime
  var messages: Boolean
}

object ResultNotificationsComponent extends Component {

  type facade = ResultNotificationsComponent
  
  val name = "notifications"

  val template = """
   <v-snackbar
      timeout="10000"
      :bottom="true"
      :right="true"
      v-model="messages"
      color="info"
      v-if="fixtures"
    >
      <ql-fixtures-simple :fixtures="fixtures"></ql-fixtures-simple>
      <template v-slot:action="{ attrs }">
        <v-btn icon text @click.native="messages = false"><v-icon small>mdi-close</v-icon></v-btn>
      </template>
   </v-snackbar>
"""

  data("now", londonTime)
  data("fixtures", null)
  data("messages", false)
  subscription("fixtures", "now")(c => NotificationService.resultMessages(c.now).map(m => { c.messages = true; m }))
  watch("messages")((c: facade, value: js.Any) => if (!c.messages) { c.now = londonTime })
}
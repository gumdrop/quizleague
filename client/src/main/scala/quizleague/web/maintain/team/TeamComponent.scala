package quizleague.web.maintain.team

import quizleague.web.core.*
import quizleague.web.maintain.component.TemplateElements.*
import com.felstar.scalajs.vue.VueRxComponent
import quizleague.web.maintain.component.ItemComponentConfig
import quizleague.web.model.*
import quizleague.web.maintain.venue.*
import quizleague.web.maintain.user.UserService
import quizleague.web.util.component.SelectUtils
import quizleague.web.util.rx.RefObservable

import scala.scalajs.js.UndefOr

object TeamComponent extends ItemComponentConfig[Team] with RouteComponent {

  val service = TeamService
  def parentKey(c:facade) = null
  val venueService = VenueService
  def venues() = SelectUtils.model[Venue](venueService)(_.name)
  def users() = SelectUtils.model[User](UserService)(_.name)

  val template = s"""
  <v-container v-if="item">
    <v-form v-model="valid" ref="fm">
      <v-layout column>
        <v-text-field
          label="Name"
          v-model="item.name"
          :rules=${valRequired("Name")}
          required
        ></v-text-field>
        <v-text-field
          label="Short Name"
          v-model="item.shortName"
          :rules=${valRequired("Short Name")}
          required
        ></v-text-field>
        <v-text-field
          label="Handle"
          v-model="item.handle"
          :rules=${valRequired("Handle")}
          required
        ></v-text-field>
        <v-select
          label="Venue"
          :items="venues"
          v-model="item.venue"
          >
        </v-select>
        <v-select
          label="Users"
          :items="users"
          v-model="item.users"
          multiple
          chips
          :value-comparator="(a,b) => a && b && a.id && b.id && (a.id == b.id)"
          >
        </v-select>
        <div><v-btn v-on:click ="editText(item.text.id)" text><v-icon>mdi-card-text-outline</v-icon>Text</v-btn></div>
        $chbxRetired 
     </v-layout>
     $formButtons
    </v-form>
  </v-container>"""

  subscription("venues"){(c:facade) => venues()}
  subscription("users"){(c:facade) => users()}

}

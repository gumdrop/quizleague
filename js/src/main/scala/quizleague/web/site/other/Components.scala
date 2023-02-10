package quizleague.web.site.other

import com.felstar.scalajs.vue.{VueComponent, VueRxComponent, VuetifyComponent}
import quizleague.web.core._
import quizleague.web.site._

import scala.scalajs.js

object LinksComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
    <v-layout>
    <v-flex><ql-text-box><ql-named-text name="links-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""  
}

object LinksTitleComponent extends RouteComponent{
  val template = """<v-toolbar      
      color="green lighten-3"
      dense
      class="subtitle-background"
      >
      <ql-title>Links</ql-title>
      <v-toolbar-title>
        Links
      </v-toolbar-title>
    </v-toolbar>"""
}

object RulesComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
  <ql-title>Rules</ql-title>
    <v-layout>
    <v-flex><ql-text-box><ql-named-text name="rules-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""
}

@js.native
trait ContactUsComponent extends VueRxComponent with VuetifyComponent{
  var contact:Boolean
}
object ContactUsComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  type facade = ContactUsComponent
  val template = """
  <v-container v-bind="gridSize" fluid>
  <ql-title>Contact Us</ql-title>
     <v-layout column>
       <v-tooltip top><template v-slot:activator="{ on }"><v-btn icon v-on="on" v-on:click="contact=true"><v-icon>mdi-email</v-icon></v-btn></template><span>Contact Us</span></v-tooltip>
      <ql-league-contact-dialog :show="contact" :contact="'webmaster'" v-on:show="handleShow"></ql-league-contact-dialog>
      <v-flex><ql-text-box><ql-named-text name="contact-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""
  components(LeagueContactDialog)
  data("contact",false)
  method("handleShow")({(c:facade,show:Boolean) => c.contact = show}:js.ThisFunction)
}

@js.native
trait LeagueContactDialog extends DialogComponent{
  var email:String
  var text:String
  val contact:String
  var show:Boolean
}
object LeagueContactDialog extends Component with DialogComponentConfig{

  import quizleague.web.util.validation.Functions._

  type facade = LeagueContactDialog
  val name = "ql-league-contact-dialog"
  val template = """
          <v-dialog v-model="show" max-width="60%" v-bind="dialogSize" persistent>
            <v-card>
              <v-card-title>Contact {{contact}}</v-card-title>
              <v-card-text>
                <v-form v-model="valid">
                <v-container>
                  <v-layout column>
                    <v-text-field required label="Your email address" v-model="email" type="email" :rules="[required('Your email address'), isEmail('Your email address')]"></v-text-field>
                    <v-textarea label="Message" v-model="text" outline auto-grow :rules="[required('Message')]" required></v-textarea>
                  </v-layout>
                </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions><v-spacer></v-spacer><v-btn text v-on:click="close"><v-icon left>mdi-cancel</v-icon>Cancel</v-btn><v-btn text color="primary" :disabled="!valid" v-on:click="submit">Send<v-icon right>mdi-send</v-icon></v-btn></v-card-actions>
            </v-card>
         </v-dialog>"""

  def submit(c:facade){
    //TeamService.sendEmailToTeam(c.email, c.text, c.team)
    c.show = false
    c.text=""
  }


  props("contact")
  data("email","")
  data("text","")
  data("valid",false)
  method("submit")({submit _}:js.ThisFunction)
  method("required")(required _)
  method("isEmail")(isEmail _)

}


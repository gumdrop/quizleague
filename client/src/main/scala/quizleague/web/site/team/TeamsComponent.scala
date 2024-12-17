package quizleague.web.site.team

import scalajs.js
import quizleague.web.core.RouteComponent
import quizleague.web.core.GridSizeComponentConfig
import quizleague.web.site.SideMenu
import quizleague.web.site.login.LoginService

object TeamsComponent extends RouteComponent with GridSizeComponentConfig {
    val template="""
      <v-container v-bind="gridSize" fluid>
        <v-layout column>
          <v-flex><ql-text-box><ql-named-text textName="teams-header"></ql-named-text></ql-text-box></v-flex>
          <v-flex v-if="$vuetify.breakpoint.smAndDown">
            <v-list-item v-if="teams" v-for="team in teams" :key="team.id" :to="'/team/' + team.id">
              <v-list-item-content><v-list-item-title v-text="team.name"></v-list-item-title></v-list-item-content>
           </v-list-item>
          </v-flex>
        </v-layout>
       </v-container>"""
    override val mounted = ({(c:facade) => {
    //super.mounted.call(c)
    LoginService.userProfile.filter(_ != null).subscribe(u => c.$router.push(s"/team/${u.team.id}"))

  }}:js.ThisFunction)

    subscription("teams")(c => TeamService.list().map(_.sortBy(_.shortName)))

}
object TeamsTitleComponent extends RouteComponent{
   val  template="""
    <v-toolbar      
      color="amber lighten-3"
      dense
      class="subtitle-background"
      >
      <ql-title>Teams</ql-title>
      <v-toolbar-title>
        Teams 
      </v-toolbar-title>
    </v-toolbar>"""

}

object StartTeamPage extends RouteComponent with GridSizeComponentConfig{
    val template="""
      <v-container v-bind="gridSize" fluid>
        <v-layout>
          <v-flex><ql-text-box><ql-named-text textName="start-team"></ql-named-text></ql-text-box></v-flex>
        </v-layout>
       </v-container>"""

}

object StartTeamTitleComponent extends RouteComponent{
   val  template="""
    <v-toolbar      
      color="amber lighten-3"
      dense
      class="subtitle-background"
      >
      <ql-title>Starting a Team</ql-title>
      <v-toolbar-title>
        Starting a Team 
      </v-toolbar-title>
    </v-toolbar>"""
 }


package quizleague.web.site.home



import quizleague.web.core.*
import quizleague.web.site.ApplicationContextService
import quizleague.web.site.fixtures.FixturesService
import com.felstar.scalajs.vue.VueComponent
import quizleague.web.model.{Key, Season}

import scalajs.js
import js.timers.*
import com.felstar.scalajs.vue.VueRxComponent
import quizleague.web.site.season.SeasonService
import quizleague.web.site.leaguetable.LeagueTableService
import com.felstar.scalajs.vue.VuetifyComponent
import quizleague.web.site.*
import quizleague.web.core.GridSizeComponentConfig
import quizleague.web.site.calendar.CalendarViewService
import quizleague.web.site.home.HomeComponent.{components, data}

@js.native
trait HomeComponent extends VueRxComponent with VuetifyComponent{
  var sponsorMessage:Boolean
}

object HomeComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{

  type facade = HomeComponent

  override val name = "site-home"

  override val template="""
   <v-container v-bind="gridSize" v-if="appData">
     <ql-title>Home</ql-title>
     <v-row>
      <v-col xs12 smAndUp5>
        <home-page-tabs></home-page-tabs>
      </v-col>
      <v-col offset-xs0 offset-md1 xs12>
        <ql-text-box>
          <ql-named-text textName="front-page"></ql-named-text>
          <ql-text v-if="async(appData.currentSeason).id" :id="async(appData.currentSeason).text.id"></ql-text>
        </ql-text-box>
        <ql-text-box style="margin-top:1em;">
          <ql-chat name="homepagechat" displayName="Chat"></ql-chat>
        </ql-text-box>
      </v-col>
     </v-row>
     <v-snackbar
      timeout="3000"
      :multi-line="true"
      v-model="sponsorMessage">
      <ql-named-text textName="sponsor-message"></ql-named-text>
     </v-snackbar>
  </v-container>
"""

  components(HomePageTabsComponent)
  data("sponsorMessage", false)

  subscription("appData")(c => ApplicationContextService.get())
}

@js.native
trait HomePageTabsComponent extends VueRxComponent with VuetifyComponent{
  var activeTab:Int
  var tabsHandle:SetIntervalHandle
}
object HomePageTabsComponent extends Component {
  type facade = HomePageTabsComponent

  private val tabs = js.Array("league","results","fixtures","events")
  val name = "home-page-tabs"
  override val template = """
     <v-card>
        <v-tabs ripple :value="activeTab" slider-color="yellow" centered @click.native="haltTabs()">
            <v-tab key="1">Tables</v-tab>
            <v-tab key="2">Results</v-tab>
            <v-tab key="3">Fixtures</v-tab>
            <v-tab key="4">Events</v-tab>
            <v-tab-item key="1">
             <ql-home-page-table style="min-width:300px" :seasonId="appData.currentSeason.id"></ql-home-page-table>
            </v-tab-item>
            <v-tab-item key="2">
              <ql-latest-results style="min-width:300px" :seasonId="appData.currentSeason.id"></ql-latest-results>
            </v-tab-item>
            <v-tab-item key="3">
              <ql-next-fixtures style="min-width:300px" :seasonId="appData.currentSeason.id"></ql-next-fixtures></v-carousel-item>
            </v-tab-item>
            <v-tab-item key="4">
              <ql-home-page-events :seasonId="appData.currentSeason.id"></ql-home-page-events>
            </v-tab-item>
        </v-tabs>
      </v-card>
      """
    components(HomePageLeagueTable, NextFixturesComponent, LatestResultsComponent, EventsComponent)
    data("activeTab", 0)
    data("tabsHandle", null)
    method("haltTabs")({haltTabs _}:js.ThisFunction)

    subscription("appData")(_ => ApplicationContextService.get())

    def nextTab(c: facade) = c.activeTab = (c.activeTab + 1) % tabs.length

    def haltTabs(c: facade) = clearInterval(c.tabsHandle)

    override val beforeDestroy = {haltTabs _}:js.ThisFunction

    override val mounted = {(c:facade) => {
      c.tabsHandle = setInterval(5000)(nextTab(c))
    }}:js.ThisFunction
}

@js.native
trait NextFixturesComponent extends VueRxComponent{
  val seasonId:String
}


object NextFixturesComponent extends Component{
  type facade = NextFixturesComponent
  
  val name = "ql-next-fixtures"
  val template = 
    
    """
   <v-card text>
     <v-card-title primary-title><h3 class="headline mb-0">Next Fixtures</h3></v-card-title>
     <v-card-text v-if="fixtures">
        <div v-for="f in fixtures" :key="f.id" style="margin-bottom:1em;">
        <h4>{{async(f.parent).name}} {{f.description}} {{f.date | date("d MMM yyyy")}}</h4>
        <ql-fixtures-simple :fixtures="f.fixture"></ql-fixtures-simple>
        </div>
     </v-card-text>
   </v-card>

"""
  props("seasonId")
  subscription("fixtures", "seasonId")(c => FixturesService.nextFixtures(c.seasonId))
}

object LatestResultsComponent extends Component{
  type facade = NextFixturesComponent
  
  val name = "ql-latest-results"
  val template = 
    
    """
   <v-card text>
     <v-card-title primary-title><h3 class="headline mb-0">Latest Results</h3></v-card-title>
     <v-card-text v-if="fixtures">
        <div v-for="f in fixtures" :key="f.id" style="margin-bottom:1em;">
          <h4>{{async(f.parent).name}} {{f.description}} {{f.date | date("d MMM yyyy")}}</h4>
          <ql-fixtures-simple :fixtures="f.fixture"></ql-fixtures-simple>
        </div>
     </v-card-text>
   </v-card>

"""
  
  props("seasonId")
  subscription("fixtures", "seasonId")(c => FixturesService.latestResults(c.seasonId))
}

object EventsComponent extends Component{
  type facade = NextFixturesComponent

  val name = "ql-home-page-events"
  val template =

    """
   <v-card text>
     <v-card-title primary-title><h3 class="headline mb-0">Upcoming Events</h3></v-card-title>
     <v-card-text v-if="events">
        <div v-for="event in events" :key="event.date" style="margin-bottom:1em;">
          <fragment v-if="event.eventType=='calendar'">
            <v-layout column align-start>
              <v-flex><b>{{event.event.description}}  : {{event.date | date("d MMMM yyyy")}} {{event.event.time}}</b></v-flex>
              <v-flex v-if="event.event.venue">Venue : <router-link router-link :to="'/venue/' + event.event.venue.id">{{async(event.event.venue).name}}</router-link></v-flex>
             </v-layout>
          </fragment>
          <fragment v-else>
            <v-layout column align-start >
              <v-flex><b><router-link :to="'/competition/' + event.competition.key.encode + '/' + event.competition.typeName"><v-icon>{{event.competition.icon}}</v-icon>&nbsp;{{event.competition.name}}</router-link>  : {{event.date | date("d MMMM yyyy")}} {{event.event.time}}</b></v-flex>
              <v-flex v-if="event.event.venue">Venue : <router-link router-link :to="'/venue/' + event.event.venue.id">{{async(event.event.venue).name}}</router-link></v-flex>
            </v-layout>
          </fragment>
        </div>
     </v-card-text>
   </v-card>

"""
  props("seasonId")
  subscription("events", "seasonId")(c => CalendarViewService.standaloneEvents(c.seasonId))
}



@js.native
trait HomePageLeagueTable extends VueRxComponent with VuetifyComponent{
  val seasonId:String
}


object HomePageLeagueTable extends Component{
  
  type facade = HomePageLeagueTable
  
  override val name = "ql-home-page-table"
  
  override val template =s"""
            <v-card text v-if="tables">
              <v-card-title primary-title><h3 class="headline mb-0">League Table</h3></v-card-title>
              <v-card-text >
              <v-container fluid>
                <v-layout column v-bind:class="justify">
                  <v-layout row v-for="table in tables"  :key="table.id">
                   <ql-league-table  :keyval="table" class="mb-3"></ql-league-table>
                  </v-layout>
                </v-layout>
              </v-container>
              </v-card-text>
            </v-card>"""
  
  props("seasonId")
  subscription("tables", "seasonId")(c => LeagueTableService.leagueTables(c.seasonId).map(_.map(_.key)))
  
  def justify(c: facade) = $("justify-space-around" -> "$vuetify.breakpoint.smAndUp")
  computed("justify")({ justify _ }: js.ThisFunction)
}

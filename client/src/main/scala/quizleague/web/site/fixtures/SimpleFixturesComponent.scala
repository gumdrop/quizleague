package quizleague.web.site.fixtures

import com.felstar.scalajs.vue._
import quizleague.web.core.KeyComponent._
import quizleague.web.core._
import quizleague.web.model.{Fixture, Fixtures}
import quizleague.web.site.results.TableUtils
import rxscalajs.Observable

import java.time.LocalDate.now
import scala.scalajs.js


@js.native
trait SimpleFixturesComponent extends VueRxComponent {
  def fixtures: Observable[js.Array[Fixture]] = js.native
}

object SimpleFixturesComponent extends Component {

  type facade = SimpleFixturesComponent

  val name = "ql-fixtures-simple"

  val template = """
      <div>
        <v-lazy>
          <v-slide-y-transition hide-on-leave>
            <v-skeleton-loader
                v-if="!list"
                :types="loaderTypes"
                type="fixture-table"
                max-width="40vh">
            </v-skeleton-loader>
            <div v-else class="ql-fixtures-simple">
              <table>
                <ql-fixture-line v-for="fixture in list" :key="fixture.id" :fixture="fixture" :inlineDetails="inlineDetails"></ql-fixture-line>
              </table>
           </div>
          </v-slide-y-transition>
        </v-lazy>
      </div>
"""

  prop("fixtures")
  prop("inlineDetails")
  data("active",false)

  data("loaderTypes", $("fixture-row" -> "list-item, divider", "fixture-table" -> "fixture-row@3") )
  subscription("list","fixtures")(_.fixtures)
  components(FixtureLineComponent)
}

@js.native
trait FixtureLineComponent extends VueRxComponent {
  def fixture: Fixture = js.native
}

object FixtureLineComponent extends Component with TableUtils with DialogComponentConfig{
  type facade = FixtureLineComponent with VuetifyComponent with DialogComponent
  val name = "ql-fixture-line"
  val template = """
        <fragment>
          <tr v-if="inlineDetails && $vuetify.breakpoint.smAndDown">
           <td class="inline-details" colspan="6">
              <v-skeleton-loader v-if="!parent" type="text" width="15em"></v-skeleton-loader>
              <span v-if="parent">
                <span v-if="!short">{{parent.date| date("d MMM yyyy")}}</span><span v-else>{{parent.date| date("d-MM-yy")}}</span> : {{async(parent.parent).name}} {{parent.description}}
              </span>
            </td>
          </tr>
          <tr>
            <td v-if="inlineDetails && !$vuetify.breakpoint.smAndDown" class="inline-details" >
              <v-skeleton-loader v-if="!parent" type="text" width="15em"></v-skeleton-loader>
              <span v-if="parent">
                <span v-if="!short">{{parent.date| date("d MMM yyyy")}}</span><span v-else>{{parent.date| date("d-MM-yy")}}</span> : {{async(parent.parent).name}} {{parent.description}}
              </span>
            </td>
            <td v-if="!fixture.result" class="home" style="min-width:5em;"><ql-r-team-name :id="fixture.home.id" :short="short"></ql-r-team-name></td><td v-else class="home" :class="nameClass(fixture.result.homeScore, fixture.result.awayScore)" style="min-width:5em;"><ql-r-team-name :short="short" :id="fixture.home.id"></ql-r-team-name></td>
            <td v-if="!fixture.result"></td><td v-else class="score">{{fixture.result.homeScore}}</td>
            <td> - </td>
            <td v-if="!fixture.result"></td><td v-else class="score">{{fixture.result.awayScore}}</td>
            <td v-if="!fixture.result" class="away"><ql-r-team-name :id="fixture.away.id" :short="short"></ql-r-team-name></td><td v-else class="away" :class="nameClass(fixture.result.awayScore, fixture.result.homeScore)"><ql-r-team-name :short="short" :id="fixture.away.id"></ql-r-team-name></td>
            <td v-if="!fixture.result"></td>
            <td v-else>
            <div v-if="reports && reports.length > 0">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn icon @click.stop="showReports=true"  v-on="on" >
                    <v-icon style="transform:scale(0.75)">mdi-file-document-outline</v-icon>
                  </v-btn>
                </template>
                <span>Match Reports</span>
               </v-tooltip>
              </div>
              <v-dialog v-model="showReports" max-width="60%" v-bind="dialogSize" v-if="reports">
                <v-card>
                  <v-card-title>Reports ::&nbsp;
                    <ql-r-team-name :short="short" :id="fixture.home.id"></ql-r-team-name>
                    &nbsp;{{fixture.result.homeScore}} - {{fixture.result.awayScore}}&nbsp;
                    <ql-r-team-name :short="short" :id="fixture.away.id"></ql-r-team-name>
                    <v-spacer></v-spacer>
                     <v-tooltip top>
                      <template v-slot:activator="{ on }">
                       <v-btn icon v-on:click="showReports=false"  v-on="on" >
                         <v-icon>mdi-close</v-icon>
                       </v-btn>
                       </template>
                       <span>Close</span>
                     </v-tooltip>
                   </v-card-title>
                  <ql-reports :keyval="fixture.key" ></ql-reports>
                  <v-card-text v-if="parent">
                    <ql-chat :parentKey="fixture.key" :name="async(parent.parent).name + ' ' +  parent.description + ' ' + async(fixture.parent).date + ' : ' + async(fixture.home).shortName + ' vs ' + async(fixture.away).shortName"></ql-chat>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <ql-login-button label="Login for chat" ></ql-login-button>

                   </v-card-actions>
                </v-card>
             </v-dialog>
            </td>
          </tr>
        </fragment>"""
  components(ReportsComponent)
  data("showReports", false)
  data("short")(c => c.$vuetify.breakpoint.smAndDown)
  prop("fixture")
  prop("inlineDetails")
  subscription("parent")(_.fixture.parent)
  subscription("reports")(c => if(c.fixture.result != null) c.fixture.result.report else Observable.just(js.Array()))
  method("nameClass")(nameClass _ )
 }


object ReportsComponent extends Component{
  type facade = KeyComponent
  val name = "ql-reports"
  val template = """
    <v-container grid-list-sm v-if="reports">
      <v-layout column>
      <v-flex v-for="report in reports" :key="report.id">
        <v-card >
        <v-card-title><h5>{{async(report.team).name}}</h5></v-card-title>
        <v-card-text v-if="report.text">
          <ql-text :id="report.text.id"></ql-text>
        </v-card-text>
      </v-card> 
      </v-flex>
    </v-layout>
    </v-container>"""
  
  prop("keyval")
  subscription("reports", "id")(c => ReportService.list(key(c)))
}


@js.native
trait QuestionsLinkComponent extends VueRxComponent {
  def fixtures: Fixtures = js.native
}
object QuestionsLinkComponent extends Component{
  type facade = QuestionsLinkComponent
  val name = "ql-questions-link"
  val template = """<a :href="fixtures.questionsUrl" v-if="visible(fixtures)" target="_blank"><slot></slot></a>"""

  prop("fixtures")
  method("visible")((fixtures:Fixtures) => fixtures.questionsUrl != null && fixtures.date < now().minusWeeks(3).toString)
}

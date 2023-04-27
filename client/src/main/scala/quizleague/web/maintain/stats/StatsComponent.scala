package quizleague.web.maintain.stats

import com.felstar.scalajs.vue.VueRxComponent
import quizleague.web.core._
import quizleague.web.maintain.season.SeasonService
import quizleague.web.model._
import quizleague.web.util._
import quizleague.web.util.component.SelectUtils
import quizleague.web.util.rx.RefObservable

import scala.scalajs.js

@js.native
trait StatsComponent extends VueRxComponent{
  var complete:Boolean
  var resultText:String
  var season:RefObservable[Season]
}

object StatsComponent extends RouteComponent{
  
  type facade = StatsComponent
  
  val template = """
    <v-container grid-list-lg>
      <v-layout column fluid>
       <div>        
       <v-select
          label="Select Season"
          :items="seasons"
          v-model="season"
          required
          >
        </v-select>
       <v-btn text color="primary" :disabled="!season" v-on:click="regenerate" ><v-icon left>mdi-refresh</v-icon>Regenerate</v-btn>
       </div>
        <v-dialog v-model="complete" max-width="400px">
          <v-card>
            <v-card-text>{{resultText}}</v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
    """
  
    def seasons() = SelectUtils.model[Season](SeasonService)(s => s"${s.startYear}/${s.endYear}")
  
    def regenerate(c:facade){
      
      StatsService.rebuild(c.season.id).subscribe(unit)
  
    }
  
  data("complete",false)
  data("resultText","Not yet uploaded")
  data("season", null)
  method("regenerate")({regenerate _}:js.ThisFunction)
  subscription("seasons")(c => seasons())
  
}
package quizleague.web.maintain.stats

import scalajs.js
import quizleague.web.core._
import org.scalajs.dom
import org.scalajs.dom.raw.HTMLInputElement
import quizleague.web.util.Logging._
import com.felstar.scalajs.vue.VueRxComponent
import quizleague.web.maintain.component.SelectUtils
import quizleague.web.maintain.season.SeasonService
import quizleague.web.model._
import quizleague.web.util.rx.RefObservable


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
       <v-btn flat color="primary" :disabled="!season" v-on:click="regenerate" ><v-icon left>refresh</v-icon>Regenerate</v-btn> 
       </div>
       {{resultText}}
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
      
      StatsService.rebuild(c.season.id).subscribe(x => {c.resultText = "Completed";c.complete = true}, e => {c.resultText = e.toString;c.complete = true}, () => c.complete = true)
  
    }
  
  data("complete",false)
  data("resultText","Not yet uploaded")
  data("season", null)
  method("regenerate")({regenerate _}:js.ThisFunction)
  subscription("seasons")(c => seasons())
  
}
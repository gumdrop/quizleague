package quizleague.web.site.season

import quizleague.web.core._
import quizleague.web.model.Season

import scalajs.js
import quizleague.util.collection._
import com.felstar.scalajs.vue.VueRxComponent
import rxscalajs.Subject

@js.native
trait SeasonSelectComponent extends VueRxComponent{
  val season:Subject[Season]
  val seasonId:String
  val inline:Boolean = js.native
}

object SeasonSelectComponent extends Component with SeasonFormatComponent{
  type facade = SeasonSelectComponent
  val name = "ql-season-select"
  val template = s"""
   <h2 v-if="seasons && seasonId"     :style="topOffset()">
  
    <v-select style="top:5px;"
    :items="wrap(sort(seasons))"
    v-model="seasonId"
    :label="label"
    :disabled="disabled"
    :solo-inverted="inline"
    :flat="inline"
    background-color="transparent"


    >
    </v-select>
  </h2>
"""
  
  props("season","label", "disabled", "inline")
  subscription("seasons")(c => SeasonService.list()) 
  subscription("seasonId")(_.season.map(_.id))
  
  method("sort")((seasons:js.Array[Season]) => seasons.sortBy(_.startYear)(Desc))
  method("wrap")((seasons:js.Array[Season]) => seasons.map(s => new SelectWrapper(formatSeason(s), s.id )))
  method("topOffset")({(c:facade) => if(c.inline) "position:relative;top:-4px;" else ""}:js.ThisFunction)
  
  watch("seasonId")((c:facade, newValue:js.Any) => {
    val x:js.UndefOr[js.Any] = newValue
    if(x.isDefined) SeasonService.get(c.seasonId).subscribe(s => c.season.next(s))})
  data("seasonId","")
  
  
}

class SelectWrapper(val text:String, val value:js.Any) extends js.Object
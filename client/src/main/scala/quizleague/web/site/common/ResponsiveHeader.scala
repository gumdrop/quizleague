package quizleague.web.site.common

import quizleague.web.core.Component
import quizleague.web.site.team.ResponsiveTeamNameComponent.{props, subscription}
import quizleague.web.site.team.{ResponsiveTeamNameComponent, TeamService}
import rxscalajs.Observable


object ResponsiveHeaderComponent extends Component{
  val name = "ql-responsive-header"
  val template = """<h6 v-if="$vuetify.breakpoint.smAndDown" :class="classes"><slot></slot></h6><h3 class="headline mb-0" :class="classes" v-else><slot></slot></h3>"""
  prop("classes")
}

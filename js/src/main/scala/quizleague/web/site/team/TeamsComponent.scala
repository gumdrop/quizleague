package quizleague.web.site.team

import angulate2.ext.classModeScala
import angulate2.std.Component
import quizleague.web.site.common.SideMenuService
import quizleague.web.site.common.MenuComponent
import quizleague.web.site.common.SectionComponent
import quizleague.web.site.common.TitleService
import quizleague.web.site.common.TitledComponent

@Component(
  template = s"""
  <div>
    <h2>Teams Home</h2>
  </div>
  """    
)
@classModeScala
class TeamsComponent(
    override val sideMenuService:SideMenuService,
    override val titleService:TitleService
    ) extends SectionComponent with MenuComponent with TitledComponent{
  
  setTitle("Teams")
}
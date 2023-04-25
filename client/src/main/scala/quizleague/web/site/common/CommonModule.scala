package quizleague.web.site.common
import quizleague.web.core._
import org.scalajs.dom

object CommonModule extends Module{
  override val components = @@(TitleComponent,SideMenu, TextBox, ResponsiveHeaderComponent)
}

object TitleService {
  def title = dom.document.title
  def title_=(text:String):Unit = {dom.document.title = text}
}
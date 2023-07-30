package quizleague.web.shared

import quizleague.web.core.Component

object MarkdownComponent extends Component {

  val name = "ql-markdown"

  val template = """
    <vue-showdown
    :markdown="text"
    :options="settings.options"
    :flavor="settings.flavor"
    :vue-template="settings.vueTemplate"
    :vue-template-data="{clicked:() => alert('clicked')}"
    :extensions="settings.extensions">
    </vue-showdown>
  """
  data("settings", showdown.defaultOptions)
  prop("text")
}

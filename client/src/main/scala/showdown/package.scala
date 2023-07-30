package showdown

import quizleague.web.core.*

import java.util.regex.Pattern
import scalajs.js

private val hashtagRegex = Pattern.compile("(#[a-zA-Z0-9]+)")
private val handleRegex = Pattern.compile("(@[a-zA-Z0-9]+)")

val hashtagExtension = $(
  `type` = "output",
  filter = (text:String) => {
    val matcher = hashtagRegex.matcher(text);
    matcher.replaceAll("""<a>$1</a>""")
  }
)

val handleExtension = $(
  `type` = "lang",
  filter = (text: String) => {
    val matcher = handleRegex.matcher(text);
    matcher.replaceAll("""<a>$1</a>""")
  }
)

val defaultOptions = $(flavor = "github", vueTemplate = true,  extensions = @@(hashtagExtension, handleExtension), options = $(emoji = true, table = true))




package quizleague.web.core

import scala.annotation.targetName
import scalajs.js.JSConverters.*
import scalajs.js.Dynamic.literal


@targetName("arr")
def @@[T](items: T*) = items.toJSArray

val $ = literal


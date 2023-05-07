package quill

import com.felstar.scalajs.vue.VueComponent

import scalajs.js
import scala.scalajs.js.annotation.{JSGlobal, JSImport}

@JSImport("vue-quill-editor", JSImport.Default)
@js.native
object VueQuillEditor extends js.Object

@JSImport("vue-quill-editor", "quillEditor")
@js.native
object VueQuillEditorComponent extends VueComponent

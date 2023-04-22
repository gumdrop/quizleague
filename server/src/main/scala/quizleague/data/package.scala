import quizleague.domain.ApplicationContext
import quizleague.util.json.codecs.DomainCodecs._
import quizleague.domain._
import scalajs.js

package quizleague {

  import io.circe.{Decoder, Encoder}
  import io.circe.scalajs.{convertJsToJson, convertJsonToJs}

  import scala.reflect.ClassTag
  import scala.scalajs.js.JSON

  package object data {
    def applicationContext() = Storage.load[ApplicationContext](ApplicationContext.singletonId)

    def parse[T](payload: String)(implicit decoder: Decoder[T]): T = {
      decoder.decodeJson(convertJsToJson(JSON.parse(payload)).fold(fa => throw fa, fb => fb)).fold(fa => throw fa, fb => fb)
    }
  }
}
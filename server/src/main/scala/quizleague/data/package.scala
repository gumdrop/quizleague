package quizleague.data

import quizleague.domain.ApplicationContext
import quizleague.domain._
import scalajs.js
import io.circe.{Decoder, Encoder}
import io.circe.scalajs.{convertJsToJson, convertJsonToJs}

import scala.reflect.ClassTag
import scala.scalajs.js.JSON


def applicationContext() = Storage.load[ApplicationContext](ApplicationContext.singletonId)

def parse[T](payload: String)(implicit decoder: Decoder[T]): T = {
  decoder.decodeJson(convertJsToJson(JSON.parse(payload)).fold(fa => throw fa, fb => fb)).fold(fa => throw fa, fb => fb)
}


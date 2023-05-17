package quizleague.data

import cps.*
import cps.monads.{*, given}
import io.circe.scalajs.{convertJsToJson, convertJsonToJs}
import io.circe.{Decoder, Encoder}
import quizleague.data.Storage.*
import quizleague.domain.*
import quizleague.endpoint.SiteFunctions
import quizleague.util.UUID.*

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.reflect.ClassTag
import scala.scalajs.js
import scala.scalajs.js.{JSON, native}


def applicationContext() = load[ApplicationContext](ApplicationContext.singletonId)

def parse[T](payload: String)(implicit decoder: Decoder[T]): T = {
  decoder.decodeJson(convertJsToJson(JSON.parse(payload)).fold(fa => throw fa, fb => fb)).fold(fa => throw fa, fb => fb)
}

def systemUser:Future[SiteUser] = async[Future]{
  val siteUsers = await(runQuery[SiteUser](collection[SiteUser]().where("handle", "==", "system")))

  if(siteUsers.isEmpty){
    val siteUser = SiteUser(uuid,"system", SiteFunctions.defaultAvatar, None, None, None)
    await{save(siteUser)}
    siteUser
  }else{
    siteUsers.head
  }
}


package quizleague.web.site.user

import org.scalajs.dom
import quizleague.domain.Key
import quizleague.web.core.*
import quizleague.web.model
import quizleague.web.model.SiteUser
import quizleague.web.service.PostService
import quizleague.web.service.user.*
import quizleague.web.store.Storage
import quizleague.web.store.Storage.*
import rxscalajs.subjects.ReplaySubject
import rxscalajs.{Observable, Subject}

import java.time.temporal.{Temporal, TemporalAmount}
import java.time.{Period, ZonedDateTime}
import scala.concurrent.duration.*
import scala.scalajs.js
import scala.scalajs.js.JSConverters.*

object UserService extends UserGetService with UserPutService{
  
  def userForEmail(email:String) = {
    val lc = email.toLowerCase
    list().map(_.filter(_.email.toLowerCase == lc).headOption)
  }
  
}

object SiteUserService extends SiteUserGetService with SiteUserPutService with PostService{
  val userService = UserService

  def siteUserForEmail(email:String):Observable[Option[SiteUser]] = {
    command[Option[U],String](List("site","site-user-for-email",email),None).map(_.map(u => {
      mapOutSparse(u.withKey(Key(None, typeName, u.id)))}))
  }

  def siteUserForUid(uid:String):Observable[Option[SiteUser]] = {
    runQuery(query(collection(uriRoot), where("uid","==", uid))).map(_.headOption)
  }

  def saveUser(user:SiteUser):Unit = {
    command[U,Unit](List("site","save-site-user"),Option(user)).subscribe(x => ())
  }

  def setUid(user:SiteUser, uid:String): Unit ={
    import model.Key
    val nu = new SiteUser(user.id, user.handle, user.avatar, user.user, Option(uid), null)
    nu.key = new Key(null, typeName, user.id)
    save(nu)
  }

  def heartbeat(su: SiteUser): Unit = {
    val siteUser = new SiteUser(su.id, su.handle, su.avatar, su.user, su.uid, ZonedDateTime.now())
    siteUser.key = su.key
    save(siteUser)
  }

  def resetHeartbeat(su: SiteUser) = {
    val siteUser = new SiteUser(su.id, su.handle, su.avatar, su.user, su.uid, ZonedDateTime.now().minus(Period.ofDays(1)))
    siteUser.key = su.key
    save(siteUser)
  }

  lazy val heartbeat = Observable.interval(30 seconds span)

  def isHandleTaken(handle:String):Observable[Boolean] = {
    listFromQuery(query(collection(uriRoot), where("handle","==",handle))).map(!_.isEmpty)
  }
}




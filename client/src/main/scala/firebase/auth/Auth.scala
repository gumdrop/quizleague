package firebase.auth

import scala.scalajs.js
import js.annotation._
import js.|
import js.Promise
import firebase.User


@js.native
trait ActionCodeInfo extends js.Object

@js.native
trait Auth extends js.Object {
  var app: firebase.app.App = js.native
}

@js.native
trait AuthCredential extends js.Object {
  val provider: String = js.native
  val signInMethod: String = js.native
}

@js.native
trait UserCredential extends js.Object {
  val additionalUserInfo: js.UndefOr[AdditionalUserInfo] = js.native
  val credential: AuthCredential = js.native
  val operationType: js.UndefOr[String] = js.native
  val user: User
}

@js.native
trait AdditionalUserInfo extends js.Object {
  val isNewUser: Boolean = js.native
  val profile: js.Dynamic = js.native
  val providerId: String = js.native
  val username: js.UndefOr[String] = js.native
}

@js.native
trait AuthProvider extends js.Object

@js.native
trait ActionCodeSettings extends js.Object {
  var url: String = js.native
  var iOS: js.Object = js.native
  var android: js.Object = js.native
  var handleCodeInApp: Boolean = js.native
}

@js.native
@JSGlobal("firebase.auth.EmailAuthProvider")
class EmailAuthProvider extends EmailAuthProvider_Instance {
}

@js.native
@JSGlobal("firebase.auth.EmailAuthProvider")
object EmailAuthProvider extends js.Object {
  var PROVIDER_ID: String = js.native

  def credential(email: String, password: String): firebase.auth.AuthCredential = js.native
}

@js.native
@JSGlobal("firebase.auth.EmailAuthProvider_Instance")
class EmailAuthProvider_Instance extends firebase.auth.AuthProvider {
}

@js.native
trait Error extends js.Object {
  var code: String = js.native
  var message: String = js.native
}

@js.native
@JSGlobal("firebase.auth.FacebookAuthProvider")
class FacebookAuthProvider extends FacebookAuthProvider_Instance {
}

@js.native
@JSGlobal("firebase.auth.FacebookAuthProvider")
object FacebookAuthProvider extends js.Object {
  var PROVIDER_ID: String = js.native

  def credential(token: String): firebase.auth.AuthCredential = js.native
}

@js.native
@JSGlobal("firebase.auth.FacebookAuthProvider_Instance")
class FacebookAuthProvider_Instance extends firebase.auth.AuthProvider {
  def addScope(scope: String): js.Dynamic = js.native


  def setCustomParameters(customOAuthParameters: Object): js.Dynamic = js.native
}

@js.native
@JSGlobal("firebase.auth.GithubAuthProvider")
class GithubAuthProvider extends GithubAuthProvider_Instance {
}

@js.native
@JSGlobal("firebase.auth.GithubAuthProvider")
object GithubAuthProvider extends js.Object {
  var PROVIDER_ID: String = js.native

  def credential(token: String): firebase.auth.AuthCredential = js.native
}

@js.native
@JSGlobal("firebase.auth.GithubAuthProvider_Instance")
class GithubAuthProvider_Instance extends firebase.auth.AuthProvider {
  def addScope(scope: String): js.Dynamic = js.native


  def setCustomParameters(customOAuthParameters: Object): js.Dynamic = js.native
}

@js.native
@JSImport("firebase/auth")
class GoogleAuthProvider extends GoogleAuthProvider_Instance {
}

@js.native
@JSImport("firebase/auth")
object GoogleAuthProvider extends js.Object {
  var PROVIDER_ID: String = js.native

  def credential(idToken: String | Null = ???, accessToken: String | Null = ???): firebase.auth.AuthCredential = js.native
}

@js.native
@JSGlobal("firebase.auth.GoogleAuthProvider_Instance")
class GoogleAuthProvider_Instance extends firebase.auth.AuthProvider {
  def addScope(scope: String): js.Dynamic = js.native


  def setCustomParameters(customOAuthParameters: Object): js.Dynamic = js.native
}

@js.native
@JSGlobal("firebase.auth.TwitterAuthProvider")
class TwitterAuthProvider extends TwitterAuthProvider_Instance {
}

@js.native
@JSGlobal("firebase.auth.TwitterAuthProvider")
object TwitterAuthProvider extends js.Object {
  var PROVIDER_ID: String = js.native

  def credential(token: String, secret: String): firebase.auth.AuthCredential = js.native
}

@js.native
@JSGlobal("firebase.auth.TwitterAuthProvider_Instance")
class TwitterAuthProvider_Instance extends firebase.auth.AuthProvider {

  def setCustomParameters(customOAuthParameters: Object): js.Dynamic = js.native
}

@JSGlobal("firebase.auth")
@js.native
object Auth extends js.Object {
  type UserCredential = js.Any
}


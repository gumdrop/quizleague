package quizleague.web.store

import firebase.firestore.*
import firebase.auth.{ActionCodeSettings, Auth, GoogleAuthProvider, UserCredential}
import firebase.User
import org.scalajs.dom.window
import quizleague.web.core.*

import scala.scalajs.js.Dynamic.literal
import quizleague.firestore.Connection as conn

import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js
import scala.scalajs.js.Promise


object Storage {
  val config = $(
    apiKey = conn.apiKey,
    authDomain = conn.authDomain,
    databaseURL = conn.databaseURL,
    projectId = conn.projectId,
    storageBucket = conn.storageBucket,
    messagingSenderId = conn.messagingSenderId)


  @JSImport("firebase/app")
  @js.native
  private def initializeApp(config:js.Any):firebase.app.App = js.native

  @JSImport("firebase/firestore")
  @js.native
  private def getFirestore(app: firebase.app.App):Firestore = js.native

  @JSImport("firebase/firestore")
  @js.native
  private def connectFirestoreEmulator(db: Firestore, host:String, port:Int): Unit = js.native

  @JSImport("firebase/firestore")
  @js.native
  private def enableMultiTabIndexedDbPersistence(firestore:Firestore):js.Promise[js.Any] = js.native

  @JSImport("firebase/auth")
  @js.native
  private def getAuth(app:firebase.app.App):Auth = js.native

  private lazy val app: firebase.app.App = initializeApp(config)

  private lazy val db = {
    val firestore = getFirestore(app)

    if (window.location.hostname == "localhost") {
      connectFirestoreEmulator(firestore, "localhost", 8082)
    }
    //enableMultiTabIndexedDbPersistence(firestore).`then`(x => {})
    firestore
  }

  private lazy val auth:Auth = getAuth(app)

  def setAuthContext(): Unit = {
    onAuthStateChanged(auth, (user: User) =>
      if (user == null) {
        val provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
      }
    )
  }

  @JSImport("firebase/firestore")
  @js.native
  private def doc(db:Firestore, path:String):DocumentReference = js.native

  def doc(path: String): DocumentReference = doc(db, path)

  @JSImport("firebase/firestore")
  @js.native
  def onSnapshot(ref:DocumentReference, handler:js.Any):Unit = js.native

  @JSImport("firebase/firestore")
  @js.native
  def onSnapshot(query: Query, onNext: DocumentSnapshot => Unit): Unit = js.native

  @JSImport("firebase/firestore")
  @js.native
  def onSnapshot(query: Query, handler:js.Any): Unit = js.native

  @JSImport("firebase/firestore")
  @js.native
  private def collection(db:Firestore, path:String):CollectionReference = js.native

  def collection(path: String): CollectionReference = collection(db, path)

  @JSImport("firebase/firestore")
  @js.native
  private def collectionGroup(db: Firestore, name: String): Query = js.native

  def collectionGroup(name:String):Query = collectionGroup(db, name)

  @JSImport("firebase/firestore")
  @js.native
  def where(fieldPath:String, op:String, value:js.Any):QueryFieldFilterConstraint = js.native

  @JSImport("firebase/firestore")
  @js.native
  def query(query:Query, constraints:QueryFieldFilterConstraint*):Query = js.native

  @JSImport("firebase/firestore")
  @js.native
  def setDoc(doc:DocumentReference, data:js.Any):js.Promise[Unit] = js.native

  @JSImport("firebase/firestore")
  @js.native
  def deleteDoc(doc:DocumentReference):js.Promise[Unit] = js.native

  @JSImport("firebase/firestore")
  @js.native
  def orderBy(field:String, ordering:String): Ordering = js.native

  @JSImport("firebase/firestore")
  @js.native
  def limit(limit:Int): Limit = js.native

  @JSImport("firebase/auth")
  @js.native
  private def isSignInWithEmailLink(auth: Auth, emailLink: String):Boolean = js.native

  def isSignInWithEmailLink(emailLink:String):Boolean = isSignInWithEmailLink(auth, emailLink)

  @JSImport("firebase/auth")
  @js.native
  private def sendSignInLinkToEmail(auth:Auth, email:String, actionCodeSettings:ActionCodeSettings): Promise[js.Any] = js.native

  def sendSignInLinkToEmail(email:String, actionCodeSettings:ActionCodeSettings): Promise[js.Any] = sendSignInLinkToEmail(auth, email, actionCodeSettings)

  @JSImport("firebase/auth")
  @js.native
  private def signInWithEmailLink(auth:Auth,email:String, href:String):Promise[UserCredential] = js.native

  def signInWithEmailLink(email:String, href:String):Promise[UserCredential] = signInWithEmailLink(auth, email, href)

  @JSImport("firebase/auth")
  @js.native
  private def signInWithEmailAndPassword(auth:Auth, email: String, password: String): Promise[UserCredential] = js.native
  def signInWithEmailAndPassword(email: String, password: String): Promise[UserCredential] = signInWithEmailAndPassword(auth,email,password)

  @JSImport("firebase/auth")
  @js.native
  private def createUserWithEmailAndPassword(auth:Auth, email: String, password: String): Promise[UserCredential] = js.native

  def createUserWithEmailAndPassword(email: String, password: String): Promise[UserCredential] = createUserWithEmailAndPassword(auth, email, password)

  @JSImport("firebase/auth")
  @js.native
  private def onAuthStateChanged(auth:Auth, nextOrObserver: js.Function1[User,Any], error: js.Function1[firebase.auth.Error, Any] = ???, completed: js.Function0[Any] = ???): js.Function0[Any] = js.native

  def onAuthStateChanged(nextOrObserver: js.Function1[User,Any]): js.Function0[Any] = onAuthStateChanged(auth, nextOrObserver)

  @JSImport("firebase/auth")
  @js.native
  def signInWithRedirect(auth:Auth, provider: firebase.auth.AuthProvider): Promise[js.Any] = js.native

  @JSImport("firebase/auth")
  @js.native
  private def signOut(auth:Auth): Promise[js.Any] = js.native

  def signOut(): Promise[js.Any] = signOut(auth)
}

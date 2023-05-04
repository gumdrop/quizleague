package quizleague.web.store

import _root_.firebase.firestore.Settings
import firebase.*
import _root_.firebase.auth.Auth
import org.scalajs.dom.window
import quizleague.web.core.*

import scala.scalajs.js.Dynamic.literal
import quizleague.firestore.Connection as conn

import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js


object Storage {
  val config = $(
    apiKey = conn.apiKey,
    authDomain = conn.authDomain,
    databaseURL = conn.databaseURL,
    projectId = conn.projectId,
    storageBucket = conn.storageBucket,
    messagingSenderId = conn.messagingSenderId)

  @JSImport("/firebase-bootstrap.js")
  @js.native
  val firebase:Firebase = js.native

  val app = firebase.initializeApp(config)

  private val firestore = app.firestore()
  if (window.location.hostname == "localhost") {
    firestore.settings(literal(host = "localhost:8082", ssl = false).asInstanceOf[Settings])
  }
  firestore.enablePersistence($(synchronizeTabs = true)).`then`(x => {})

  val db = firestore

  def setAuthContext(): Unit = {

    firebase.auth().onAuthStateChanged((user: User) =>

      if (user == null) {
        val provider = new auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
      }

    )
  }
}

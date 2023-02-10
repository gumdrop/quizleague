package quizleague.web.store

import _root_.firebase.firestore.Settings
import firebase._
import org.scalajs.dom.window
import quizleague.firestore.{Connection => conn}
import quizleague.web.core._

import scala.scalajs.js
import scala.scalajs.js.Dynamic.literal


object Firestore {
    val config = $(
      apiKey= conn.apiKey,
      authDomain= conn.authDomain,
      databaseURL=  conn.databaseURL,
      projectId = conn.projectId,
      storageBucket= conn.storageBucket,
      messagingSenderId= conn.messagingSenderId)

  
   Firebase.initializeApp(config)
      
   private val firestore = Firebase.firestore()
  if (window.location.hostname == "localhost") {
    firestore.settings(literal(host = "localhost:8082",ssl = false).asInstanceOf[Settings])
  }
   firestore.enablePersistence($(synchronizeTabs=true)).`then`(x => {})
   
   val db = firestore
   
   def setAuthContext(){

    Firebase.auth().onAuthStateChanged( (user: User) =>

      if (user == null) {
        val provider = new auth.GoogleAuthProvider()
        Firebase.auth().signInWithRedirect(provider)
      }

    )
  }
}

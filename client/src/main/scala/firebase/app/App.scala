package firebase.app
import scala.scalajs.js
import js.annotation.*
import js.|
import firebase.Promise
import firebase.firestore.Firestore


   @js.native
    trait App extends js.Object {
      def auth(): firebase.auth.Auth = js.native

      def database(): firebase.database.Database = js.native

      def delete(): Promise[js.Any] = js.native

      var name: String = js.native
      var options: Object = js.native

      def storage(): firebase.storage.Storage = js.native

     def firestore(): Firestore = js.native
    }
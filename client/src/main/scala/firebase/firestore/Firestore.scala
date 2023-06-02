package firebase.firestore

import scala.scalajs.js


@js.native
trait Firestore extends js.Object

@js.native
trait DocumentReference extends js.Object {
  def path: String = js.native
}

@js.native
trait DocumentSnapshot extends js.Object {
  def exists(): Boolean = js.native
  def ref: DocumentReference = js.native
  def id: String = js.native
  def data(): js.Any = js.native
}

@js.native
trait Query extends js.Object

@js.native
trait QuerySnapshot extends js.Object {
  def docs: js.Array[DocumentSnapshot] = js.native
  def size: Double = js.native
  def empty(): Boolean = js.native
}

@js.native
trait Ordering extends QueryFieldFilterConstraint

@js.native
trait Limit extends QueryFieldFilterConstraint

@js.native
trait QueryFieldFilterConstraint extends js.Object

@js.native
trait CollectionReference extends Query


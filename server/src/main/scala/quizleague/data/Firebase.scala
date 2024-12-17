package quizleague.data


import _root_.firebase.firestore.{DocumentSnapshot, Firestore, Query, Settings}
import firebase.{Promise => FBPromise}
import io.circe._
import io.circe.scalajs._
import io.circe.syntax._
import quizleague.domain.{Entity, Key, Ref}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{Future, Promise}
import Future._
import scala.reflect._
import scala.scalajs.js
import js.JSConverters._
import scala.scalajs.js.Dynamic.literal
import quizleague.App


object Storage extends StorageUtils {


  private def makedataStore = {
    val firestore = new Firestore()
    if(App.isLocal) {
      firestore.settings(literal(host = App.emulatorAddr, ssl = false).asInstanceOf[Settings])
    }
    firestore
  }

  lazy val datastore = makedataStore

  def delete[T <: Entity](entity: T)(implicit tag: ClassTag[T])={
    promiseToFuture(datastore.doc(key(entity).key).delete())
  }

  def save[T <: Entity](entity: T)(implicit tag: ClassTag[T], encoder: Encoder[T]):Future[Unit] = {
    save(key(entity), encoder(entity))
  }

  def save[T <: Entity](parentKey:Option[Key], entity: T)(implicit tag: ClassTag[T], encoder: Encoder[T]): Future[Unit] = {
    save(key(parentKey,entity), encoder(entity))
  }

  def saveAll[T <: Entity](entities: List[T])(implicit tag: ClassTag[T], encoder: Encoder[T]) = {
    val objrefs = entities.map(e => (datastore.doc(key(e).key),convertJsonToJs(e.asJson).asInstanceOf[js.Dictionary[js.Any]]))

     val batchSets = objrefs.grouped(400)

     Future.sequence(batchSets.map( l => {

       //println(s"saving batch : \n${js.JSON.stringify(l.toJSArray)}" )

       val batch = datastore.batch()

       l.foreach({case (r,o) => batch.set(r,o)})

       promiseToFuture(batch.commit())
     }))
  }

  def deleteAll[T <: Entity](entities: List[T])(implicit tag: ClassTag[T]) = {

     val objrefs = entities.map(e => (datastore.doc(key(e).key)))

     val batchSets = objrefs.grouped(400)

     Future.sequence(batchSets.map( l => {

       val batch = datastore.batch()

       l.foreach(d => batch.delete(d))

       promiseToFuture(batch.commit())
     }))
  }

  def load[T <: Entity](key:Key)(implicit tag: ClassTag[T], decoder: Decoder[T]): Future[T] = load(key, decoder)

  def load[T <: Entity](ref:Ref[T])(implicit tag: ClassTag[T], decoder: Decoder[T]): Future[T] = load(ref.getKey(), decoder)

  def load[T <: Entity](id: String, parent:Option[Key] = None)(implicit tag: ClassTag[T], decoder: Codec[T]): Future[T] = load(Key(s"${makeKind(parent)}/$id"), decoder)

  def loadAll[T <: Entity](refs:List[Ref[T]])(implicit tag: ClassTag[T], decoder: Decoder[T]): Future[List[T]] = loadAllByKey(refs.map(_.getKey()))

  def loadAll[T <: Entity](keys:Key*)(implicit tag: ClassTag[T], decoder: Decoder[T]): Future[List[T]] = loadAllByKey(keys.toList)

  def loadAllByKey[T <: Entity](keys:List[Key])(implicit tag: ClassTag[T], decoder: Decoder[T]): Future[List[T]] = sequence(keys.map(key => load(key, decoder)))

  def list[T <: Entity](implicit tag: ClassTag[T], decoder: Decoder[T]): Future[List[T]] = list(None)

  def list[T <: Entity](parent:Option[Key] = None)(implicit tag: ClassTag[T], decoder: Decoder[T]): Future[List[T]] = {
    runQuery(collection(parent))
  }

  def collection[T <: Entity](parent:Option[Key] = None)(implicit tag: ClassTag[T]) = {
    val key = makeKind(parent)
    datastore.collection(key)
  }

  def runQuery[T <: Entity](query:Query)(implicit tag: ClassTag[T], decoder: Decoder[T]) = {
    val list = promiseToFuture(query.get()).map(docs => docs.docs.map(doc => decode(doc, decoder).withKey(Key(doc.ref.path))).toList)
    //if(log.isLoggable(FINEST)) log.finest(s"query : $query \nquery results:$list")
    list
  }

  def group[T <: Entity](implicit tag: ClassTag[T], decoder: Decoder[T]): Future[List[T]] = {
    runQuery(collectionGroup[T])
  }

  def collectionGroup[T <: Entity](implicit tag: ClassTag[T]) = {
    val key = makeKind(None)
    datastore.collectionGroup(key)
  }

  private def save(key:Key, json: Json) = {
      if(App.isLocal) println(s"Saving : \nkey: ${key.key} \njson:${json.toString()}")

      val ent = convertJsonToJs(json)
      val ref = datastore.doc(key.key)
      promiseToFuture(ref.set(ent.asInstanceOf[js.Dictionary[js.Any]]))
  }

  private def decode[T <: Entity](ds: DocumentSnapshot, decoder: Decoder[T]): T = {
    decoder.decodeJson(convertJsToJson(ds.data()).fold(fa => throw fa, fb => fb)).fold(fa => throw fa, fb => fb)
  }

  private def load[T <: Entity](key:Key, decoder: Decoder[T]): Future[T] = {
    toEntity(datastore.doc(key.key).get(), decoder).map(_.withKey(key))
  }

  private def toEntity[T <: Entity](fbPromise:FBPromise[DocumentSnapshot], decoder: Decoder[T]): Future[T] = {
    promiseToFuture(fbPromise).map(ds => decode(ds, decoder))
  }

  private def promiseToFuture[T](fbPromise:FBPromise[T]) = {
    val promise = Promise[T]()
    fbPromise.`then`(promise.success)
    promise.future
 }
  
}

trait StorageUtils{
  def ref[T <: Entity](entity: T)(implicit tag: ClassTag[T]):Ref[T] = entity.key.fold(Ref[T](makeKind(None),entity.id,None))(x => Ref[T](x.entityName,x.id,entity.key))

  def key[T <: Entity](entity:T)(implicit tag: ClassTag[T]):Key = entity.key.getOrElse(Key(None,makeKind(None), entity.id))

  def key[T <: Entity](id:String)(implicit tag: ClassTag[T]):Key = Key(None,makeKind(None), id)
  
  def key[T <: Entity](parentKey:Option[Key], entity:T)(implicit tag: ClassTag[T]):Key = entity.key.getOrElse(Key(None,makeKind(parentKey), entity.id))

  private[data] def makeKind[T](parent:Option[Key])(implicit tag: ClassTag[T]) = s"${parent.fold("")(x =>s"${x.key}/")}${tag.runtimeClass.getSimpleName.toLowerCase}"


}
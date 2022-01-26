package quizleague.data


import java.util
import com.google.auth.oauth2.GoogleCredentials
import quizleague.domain.{Entity, Key, Ref}
import io.circe._

import reflect._
import scala.collection.JavaConverters._
import com.google.cloud.firestore.{CollectionGroup, FirestoreOptions, Query}
import com.google.auth.Credentials

import java.util.logging.{Level, Logger}
import Level._
import com.google.cloud.TransportOptions
import com.google.cloud.grpc.GrpcTransportOptions
import quizleague.firestore.Connection

object Storage extends StorageUtils {

  val log = Logger.getLogger(this.getClass.toString())

  val options = FirestoreOptions.getDefaultInstance.toBuilder()
  .setProjectId(Connection.projectId)
//    .setHost("localhost:8082")
//    .setChannelProvider(FirestoreOptions.getDefaultTransportChannelProviderBuilder.setEndpoint("http://localhost:8082").build())
    .build()

  lazy val datastore = options.getService

  def delete[T <: Entity](entity: T)(implicit tag: ClassTag[T]): Unit ={
    datastore.document(key(entity).key).delete()
  }

  def save[T <: Entity](entity: T)(implicit tag: ClassTag[T], encoder: Encoder[T]): Unit = {
    save(key(entity), encoder(entity))
  }

  def saveAll[T <: Entity](entities: List[T])(implicit tag: ClassTag[T], encoder: Encoder[T]):Unit = {
    val objrefs = entities.map(e => (datastore.document(key(e).key),asMap(encoder(e).asObject.get)))

     val batchSets = objrefs.grouped(400)

     batchSets.foreach( l => {

       log.finest(s"saving batch : $l" )

       val batch = datastore.batch()

       l.foreach({case (r,o) => batch.set(r,o)})

       batch.commit()
     })
  }

    def deleteAll[T <: Entity](entities: List[T])(implicit tag: ClassTag[T]):Unit = {

     val objrefs = entities.map(e => (datastore.document(key(e).key)))

     val batchSets = objrefs.grouped(400)

     batchSets.foreach( l => {

       val batch = datastore.batch()

       l.foreach(d => batch.delete(d))

       batch.commit()
     })
  }

  def load[T <: Entity](key:Key)(implicit tag: ClassTag[T], decoder: Decoder[T]): T = load(key, decoder)

  def load[T <: Entity](id: String, parent:Option[Key] = None)(implicit tag: ClassTag[T], decoder: Decoder[T]): T = load(Key(s"${makeKind(parent)}/$id"), decoder)

  def list[T <: Entity](implicit tag: ClassTag[T], decoder: Decoder[T]): List[T] = list(None)

  def list[T <: Entity](parent:Option[Key] = None)(implicit tag: ClassTag[T], decoder: Decoder[T]): List[T] = {
    runQuery(collection(parent))
  }

  def collection[T <: Entity](parent:Option[Key] = None)(implicit tag: ClassTag[T]) = {
    val key = makeKind(parent)
    datastore.collection(key)
  }

  def runQuery[T <: Entity](query:Query)(implicit tag: ClassTag[T], decoder: Decoder[T]) = {
    val list = query.get().get().getDocuments.asScala.map(d => entityToObj(d.getData.asInstanceOf[java.util.Map[String, Any]], decoder).withKey(Key(d.getReference.getPath))).toList
    if(log.isLoggable(FINEST)) log.finest(s"query : $query \nquery results:$list")
    list
  }

  def group[T <: Entity](implicit tag: ClassTag[T], decoder: Decoder[T]): List[T] = {
    runQuery(collectionGroup[T])
  }

  def collectionGroup[T <: Entity](implicit tag: ClassTag[T]): CollectionGroup = {
    val key = makeKind(None)
    datastore.collectionGroup(key)
  }


  private def save(key:Key, json: Json):Unit = {

    log.info(s"key: ${key.key} \njson:${json.toString()}")

    val res = json.asObject.map(obj => {
      val ent = asMap(obj)
      val ref = datastore.document(key.key)
      ref.set(ent).get
    })

  }

  private def asMap(obj: JsonObject) = {

    def handleField(name: String, json: Json) =  ((name, convertObject(json)))

    def convertObject(json: Json): Any = {
      val value: Option[Any] = if (json.isNumber) json.asNumber.map(_.toDouble)
      else if (json.isString) json.asString.map(_.toString())
      else if (json.isBoolean) json.asBoolean
      else if (json.isObject) json.asObject.map(doit _)
      else if (json.isArray) json.asArray.map(v => asArrayList(v.map(o => convertObject(o))))
      else if (json.isNull) None
      else None

      value.getOrElse(null)
    }

    def asArrayList[T](v: Vector[T]) = v.toList.asJava

    def doit(obj: JsonObject) = {

      val res = Map() ++ obj.toVector.map((handleField _).tupled)

      res.asInstanceOf[Map[String,Object]].asJava
    }

    doit(obj)

  }

  private def props(p: java.util.Map[String,Any]):Iterable[(String,Json)] = {
    p
      .asScala
      .toList.map({
      case (name: String, o) =>
        (name,
          convertToJson(o)) })
  }

  private def convertToJson(obj: Any): Json = {

    obj match {
      case null => Json.Null
      case d: java.lang.Double => Json.fromDoubleOrNull(d)
      case l: java.lang.Long => Json.fromLong(l)
      case s: String => Json.fromString(s)
      case b: Boolean => Json.fromBoolean(b)
      case ee: java.util.Map[String,Any] => Json.fromFields(props(ee))
      case l: java.util.List[_] => Json.fromValues(l.asScala.filter(_ != null).map(convertToJson(_)))
      case _ => throw new RuntimeException(s"no match found for ${obj.getClass.getName}")
    }

  }

  private def load[T <: Entity](key:Key, decoder: Decoder[T])(implicit tag: ClassTag[T]): T = {

    val map = datastore.document(key.key).get.get.getData.asInstanceOf[util.Map[String, Any]]

    if(log.isLoggable(FINEST)) log.finest(s"key: $key\nmap: $map")
    entityToObj(map, decoder).withKey(key)

  }

  private def entityToObj[T](entity: java.util.Map[String,Any], decoder: Decoder[T]) = {

    val json: Json = Json.fromFields(props(entity))

    val r = decoder.decodeJson(json)

    r.fold(fa => throw fa, fb => fb)
  }
  
}

trait StorageUtils{
  def ref[T <: Entity](entity: T)(implicit tag: ClassTag[T]):Ref[T] = entity.key.fold(Ref[T](makeKind(None),entity.id,None))(x => Ref[T](x.entityName,x.id,entity.key))

  def key[T <: Entity](entity:T)(implicit tag: ClassTag[T]):Key = entity.key.getOrElse(Key(None,makeKind(None), entity.id))

  private[data] def makeKind(parent:Option[Key])(implicit tag: ClassTag[_]) = s"${parent.fold("")(x =>s"${x.key}/")}${tag.runtimeClass.getSimpleName.toLowerCase}"


}
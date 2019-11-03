package quizleague.web.service

import scala.collection.mutable._
import scala.scalajs.js
import scala.scalajs.js.JSConverters._

import firebase.firestore._
import io.circe._
import io.circe.scalajs.convertJsToJson
import quizleague.domain.{ Entity, Ref, Key }
import quizleague.web.model.Model
import quizleague.web.model.{Key => ModKey}
import quizleague.web.names.ComponentNames
import quizleague.web.store.Firestore
import quizleague.web.util.rx.RefObservable
import rxscalajs._
import rxscalajs.subjects._

trait GetService[T <: Model] {
  this: ComponentNames =>
  type U <: Entity

  lazy val uriRoot = typeName

  protected val db = Firestore.db
  private[service] val items: Map[String, T] = Map()
  private val observables = Map[String, Observable[U]]()
  private val refObsCache = Map[String, RefObservable[T]]()
  private var listObservables: Map[String, Observable[js.Array[U]]] = Map()

  def get(id: String): Observable[T] = items.get(id).fold(getFromStorage(id).map(mapOutWithKey _).map(postProcess _))(Observable.just(_))
  def getRO(id: String): RefObservable[T] =  getRefObs(id)
  def key(id:String) = s"$uriRoot/$id"

  def list(parentKey:String=""): Observable[js.Array[T]] = listFromStorage(parentKey).map(c => c.map(u => mapOutWithKey(u)))
  
  protected def query(query:Query):Observable[js.Array[T]] = listFromQuery(query).map(_.map(mapOutWithKey _))

  def flush() = items.clear()

  protected def filterList(u:U) = true
  
  protected final def listFromStorage(parentKey:String = ""): Observable[js.Array[U]] = {
    
    listObservables.getOrElseUpdate(parentKey,{listFromQuery(db.collection(s"${if(parentKey.isEmpty)""else s"$parentKey/"}$uriRoot"))})
  }
  
  protected final def listFromQuery(query:Query): Observable[js.Array[U]] = {

      val subject = ReplaySubject[QuerySnapshot]()

      query.onSnapshot(subject.inner)

      subject.map(q => q.docs.map(d => dec(d.data()).fold(e => {throw e}, u => u.withKey(Key(d.ref.path))))).map(_.filter(filterList _))
   
  }


  protected final def add(item: T) = { items += ((item.id, item)); item }
  protected final def getFromStorage(id: String): Observable[U] = {

    observables.getOrElseUpdate(id, {
      val subject = ReplaySubject[DocumentSnapshot]()

      db.doc(s"$uriRoot/$id").onSnapshot(subject.inner)

      subject
        .map(a => if(a.exists) dec(a.data())
          .fold(e => {throw e}, u => u
            .withKey(Key(a.ref.path))
          )
        else {throw new Exception(s"db load failed : $uriRoot/$id not found")})
    })

  }

  protected[service] def postProcess(t: T): T = t

  protected def dec(json: js.Any): Either[Error, U]

  private[service] def getDom(id: String) = items(id)

  protected def decodeJson[X](obj: js.Any)(implicit dec: Decoder[X]) = convertJsToJson(obj).fold(t => null, dec.decodeJson(_))

  protected[service] def getRefObs(id:String):RefObservable[T] = refObsCache.getOrElseUpdate(id, RefObservable(id, () => get(id)))
  final def refObs(id: String): RefObservable[T] = getRefObs(id)
  final def refObs(opt: Option[Ref[U]]): RefObservable[T] = opt.fold[RefObservable[T]](null)(ref => refObs(ref.id))
  protected final def refObs[A <: Entity, B <: Model](ref: Ref[A], service: GetService[B]): RefObservable[B] = if(ref == null) null else service.getRefObs(ref.id)
  protected final def refObsList[A <: Entity, B <: Model](refs: List[Ref[A]], service: GetService[B]): js.Array[RefObservable[B]] = refs.map(refObs(_, service)).toJSArray

  def ref(id: String): Ref[U] = Ref(typeName, id)
  def ref(list: js.Array[RefObservable[T]]): List[Ref[U]] = list.map(ref _).toList
  def ref(ro: RefObservable[T]): Ref[U] = if (ro == null) null else Ref(typeName, ro.id)
  def refOption(ro: RefObservable[T]): Option[Ref[U]] = if (ro == null) None else Some(Ref(typeName, ro.id))
  def ref(dom: U): Ref[U] = ref(dom.id)

  protected final def mapOut(domain: U): Observable[T] = Observable.of(mapOutWithKey(domain))
  protected def mapOutSparse(domain: U): T
  protected final def mapOutWithKey(domain:U) = {
    val t = mapOutSparse(domain)
    t.key = ModKey(domain.key.getOrElse(throw new RuntimeException("no domain key")))
    t
  }

}



package quizleague.web.service

import scalajs.js
import quizleague.web.util.UUID
import quizleague.domain.{Entity, Key, Ref}
import quizleague.web.names.ComponentNames
import quizleague.web.util.rx.RefObservable
import io.circe.Json
import io.circe.scalajs.*
import quizleague.web.util.Logging.*
import quizleague.web.model.{Model, Key as ModelKey}
import rxscalajs.Observable
import rxscalajs.subjects.ReplaySubject
import quizleague.web.store.Storage.*

trait PutService[T <: Model] {
  this: GetService[T] & ComponentNames=>

  type U <: Entity
 
  def cache(item: T) = add(item)
  
  protected def add(entity:U):T = add(mapOutWithKey(entity))

  def save(item: T):Observable[Unit] = save(mapInWithKey(item))

  def save(obs:RefObservable[T]):Unit = obs.subscribe(save(_))

  protected def save(item:U):Observable[Unit] = saveDom(item)
  protected def save(item:U, parentKey:Key = null):Observable[Unit] = {
    saveDom(item.withKey(Key(parentKey,uriRoot,item.id)))
  }

  private[service] def saveDom(i:U):Observable[Unit] = {
    val path = i.key.getOrElse(throw new RuntimeException("no key")).key
    val json = enc(i.withKey(None))
    val promise = setDoc(doc(path), convertJsonToJs(json).asInstanceOf[js.Dictionary[js.Any]])
    //log(json.toString,s"saved $path to firestore", false)
    deCache(i)
    promiseToObs(promise)
  }

  private[service] def promiseToObs[X](promise:js.Promise[X]):Observable[X]=  {
    val obs = ReplaySubject[X]()
    promise.`then`(x => obs.next(x), e => obs.error(e.asInstanceOf[js.Any]))
    obs
  }

  def copy(item:T, parentKey:ModelKey = null):T = mapOutWithKey(mapIn(item).withKey(Key(Option(parentKey).map(_.key),uriRoot,newId)))
  def getRef(item:T):Ref[U] = Ref(key(item.key).getOrElse(null))
  def delete(item:T):Observable[Unit] = doDelete(item.key)
  def delete(id:String):Observable[Unit] = doDelete(new ModelKey(null,uriRoot,id))
  private[service] def doDelete(key:ModelKey) = {
    items -= key.id
    promiseToObs(deleteDoc(doc(key.key)))
  }
  def instance() = add(mapOutWithKey(make()))
  def instance(parentKey:ModelKey) = add(mapOutWithKey(make(Key(parentKey.key))))
  def getId(item:T) = if (item != null ) item.id else null
  def getKey(item:T):ModelKey = Option(item).map(_.key).getOrElse(key(item.id))
  protected final def newId = UUID.randomUUID().toString()
  private[service] def deCache(item:U) = items -= item.id
  protected final def mapInWithKey(model:T) = {
    val dom = mapIn(model)
    dom.withKey(Some(Key(model.key.key)))
  }
  
  protected def mapIn(model:T):U
  protected def make():U
  protected def make(parentKey:Key):U = {
    val u = make()
    u.withKey(Key(parentKey,uriRoot,u.id))
  }
  protected def withKey(item:U, parentKey:String):U = {
    item.withKey(new Key(Option(parentKey), uriRoot, item.id))
  }
  protected def enc(item:U):Json
  def asJSon(item:T) = enc(mapIn(item)).toString()

}
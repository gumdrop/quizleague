package quizleague.web.util.rx


  import scala.language.implicitConversions
  import scalajs.js
  import rxscalajs.Observable
  import rxscalajs.Observable._
  import scalajs.js.JSConverters._

  given refObsToObs[T]:Conversion[RefObservable[T], Observable[T]] = (refObs: RefObservable[T]) => refObs.obs

  def combineLatest[A](list:Observable[A]*) = if(list.isEmpty) just(js.Array[A]()) else Observable.combineLatest(list.toSeq).map(_.toJSArray)
  
  def zip[A](list: js.Array[RefObservable[A]]):Observable[js.Array[A]] = if(list.isEmpty) just(js.Array[A]()) else Observable.combineLatest(list.map(_.obs).toSeq).map(_.toJSArray)

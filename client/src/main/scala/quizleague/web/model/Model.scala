package quizleague.web.model

import scalajs.js
import quizleague.domain.Key as DomKey

import scala.scalajs.js.URIUtils
import scala.scalajs.js.annotation.JSName

abstract class Model extends js.Object {
  val id:String
  var key:Key = null
}


class Key(val parentKey:String, val entityName:String, val id:String) extends js.Object {
  def key = s"${Option(parentKey).fold("")(x => s"$x/")}$entityName/$id"

  def encode = key.replace('/', '|')
  
  @JSName("add")
  def /(segment:String) = Key(s"$key/$segment")
}


object Key{
  def apply(domKey:DomKey):Key = new Key(domKey.parentKey.getOrElse(null), domKey.entityName, domKey.id)
  def apply(key:String):Key = {
    val parts = key.split('/')
    val length = parts.length
    val end = parts.takeRight(2)
    new Key(parts.take(length -2).mkString("/"),end(0),end(1))
  }
  def apply(key:Option[DomKey]):Key = key.map(Key(_)).getOrElse(null)
  def decode(key:String) = Key(key.replace('|','/'))
}
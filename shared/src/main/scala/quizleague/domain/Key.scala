package quizleague.domain

import io.circe.Codec

import javax.swing.text.html.parser.Entity

case class Key(parentKey:Option[String], entityName:String, id:String) derives Codec.AsObject {
  def key = s"${parentKey.fold("")(x => s"${x}/")}$entityName/$id"

  def /(key:Key)  = copy(Some(this.key), key.entityName, key.id)
}

object Key{
  def parse(key:String):Key = {
    val parts = key.split('/')
    val length = parts.length
    val end = parts.takeRight(2)
    val parentKey = if(length <=2) None else Some(parts.take(length -2).mkString("/"))
    new Key(parentKey,end(0),end(1))
  }

  def apply(key:String):Key = parse(key)

  def apply(parentKey:Key, entityName:String, id:String):Key = Key(Option(parentKey).map(_.key), entityName,id)
  def of(parentKey:Key, entityName:String, id:String):Key = of(Option(parentKey), entityName,id)
  def of(parentKey:Option[Key], entityName:String, id:String):Key = Key(parentKey.map(_.key), entityName,id)



}

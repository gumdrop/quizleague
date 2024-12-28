package quizleague.util.json.codecs

import io.circe.*
import cats.syntax.either.*
import io.circe.Decoder.{decodeInt, decodeString}
import io.circe.Encoder.{encodeInt, encodeString}

import java.time.*
import scala.util.Try

object ScalaTimeCodecs {

  implicit val encodeLocalDate: Encoder[LocalDate] = encodeString.contramap[LocalDate](_.toString)

  implicit val decodeLocalDate: Decoder[LocalDate] = decodeString.emapTry { str => Try(LocalDate.parse(str))}

  implicit val encodeYear: Encoder[Year] = encodeInt.contramap[Year](_.getValue)

  implicit val decodeYear:Decoder[Year] = decodeInt.emapTry { i => Try(Year.of(i))}
  
  implicit val encodeLocalTime: Encoder[LocalTime] = encodeString.contramap[LocalTime](_.toString)

  implicit val decodeLocalTime: Decoder[LocalTime] = decodeString.emapTry { str => Try(LocalTime.parse(str))}
  
  implicit val encodeDuration: Encoder[Duration] = Encoder.encodeLong.contramap[Duration](_.getSeconds)

  implicit val decodeDuration: Decoder[Duration] = Decoder.decodeLong.emapTry { str => Try(Duration.ofSeconds(str))}
    
  implicit val encodeLocalDateTime: Encoder[LocalDateTime] = encodeString.contramap[LocalDateTime](_.toString)

  implicit val decodeLocalDateTime: Decoder[LocalDateTime] = decodeString.emapTry { str => Try(LocalDateTime.parse(str))}


}
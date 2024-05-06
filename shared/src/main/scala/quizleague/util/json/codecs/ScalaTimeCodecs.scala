package quizleague.util.json.codecs

import io.circe._
import cats.syntax.either._
import java.time._

object ScalaTimeCodecs {

  given Encoder[LocalDate] = Encoder.encodeString.contramap[LocalDate](_.toString)

  given Decoder[LocalDate] = Decoder.decodeString.emap { str =>
    Either.catchNonFatal(LocalDate.parse(str)).leftMap(t => "LocalDate")
  }

  given Encoder[Year] = Encoder.encodeInt.contramap[Year](_.getValue)

  given Decoder[Year] = Decoder.decodeInt.emap { str =>
    Either.catchNonFatal(Year.of(str)).leftMap(t => "Year")
  }
  
  given Encoder[LocalTime] = Encoder.encodeString.contramap[LocalTime](_.toString)

  given Decoder[LocalTime] = Decoder.decodeString.emap { str =>
    Either.catchNonFatal(LocalTime.parse(str)).leftMap(t => "LocalTime")
  }
  
  given Encoder[Duration] = Encoder.encodeLong.contramap[Duration](_.getSeconds)

  given Decoder[Duration] = Decoder.decodeLong.emap { str =>
    Either.catchNonFatal(Duration.ofSeconds(str)).leftMap(t => "Duration")
  }
    
  given Encoder[LocalDateTime] = Encoder.encodeString.contramap[LocalDateTime](_.toString)

  given Decoder[LocalDateTime] = Decoder.decodeString.emap { str =>
    Either.catchNonFatal(LocalDateTime.parse(str)).leftMap(t => "LocalDateTime")
  }


}
package quizleague.endpoint

import io.circe.{Decoder, Encoder}
import io.circe.scalajs.{convertJsToJson, convertJsonToJs}
import io.scalajs.npm.express.{Request, Response}

import java.time.{ZoneId, ZonedDateTime}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.scalajs.js
import scala.scalajs.js.JSON


def parse[T](req: Request)(implicit decoder: Decoder[T]): T = {
  decoder.decodeJson(convertJsToJson(JSON.parse(req.body.toString)).fold(fa => throw fa, fb => fb)).fold(fa => throw fa, fb => fb)
}

def asJs[T](payload: T)(implicit encoder: Encoder[T]): js.Any = {
  convertJsonToJs(encoder(payload))
}

def send[T](result: Future[T], res: Response)(implicit encoder: Encoder[T]): Unit = {
  def failure(t: Throwable) = {
    res.status(500)
    res.statusMessage = "Internal server error"
    res.send(t.getMessage)
  }

  def success(value: T) = res.json(asJs(value))

  result.onComplete(t => t.fold(failure _, success _))
}

def send[T](result: T, res: Response)(implicit encoder: Encoder[T]): Unit = {
  res.json(asJs(result))
}

def param(name: String, req: Request): Option[String] = req.params.get(name)

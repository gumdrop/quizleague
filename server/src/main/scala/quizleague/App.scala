package quizleague

import io.scalajs.npm.express._
import io.scalajs.nodejs.process.Process
import quizleague.endpoint.EntityEndpoints
import quizleague.endpoint.SiteEndpoints
import quizleague.endpoint.CalendarEndpoints

import scala.scalajs.js
import io.scalajs.nodejs.path.Path


object App {

  val isLocal = Process.env("FIRESTORE_EMULATOR_HOST").isDefined
  val emulatorAddr = Process.env("FIRESTORE_EMULATOR_HOST").getOrElse("")

  def main(args: Array[String]): Unit = {
    // create the Express application instance
    val app = Express()
    app.use(Express.static("built"))
    app.use(bodyParser);

    // define a port
    val port = Process.env("PORT").getOrElse("8080")

    // setup the server with routes
    EntityEndpoints.configure(app)
    SiteEndpoints.configure(app)
    CalendarEndpoints.configure(app)
    val server = app
      .use("/", indexMapping)
      .listen(port)

    println(s"Server started on port $port")
    Process.env("FIRESTORE_EMULATOR_HOST").foreach(port => println(s"emulator port : $port"))
  }

  val indexMapping:js.Any = (req: Request, res: Response) => {
    if (req.originalUrl.contains("/maintain/"))
      res.sendFile(Path.join(js.Dynamic.global.__dirname.toString + "/built/maintain/index.html"))
    else
      res.sendFile(Path.join(js.Dynamic.global.__dirname.toString + "/built/index.html"))
  }

  val bodyParser:js.Any = {(req:js.Dynamic, res:Request, next:js.Function0[Unit]) =>{
      var data = ""
      req.setEncoding("utf8")
      req.on("data", (chunk:js.Any) => {
        data += chunk;
      }
      );
      req.on("end", () => {
        req.body = data;
        next()
      }
      );
    }}:js.Function

}



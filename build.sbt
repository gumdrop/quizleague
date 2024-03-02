import scala.sys.process._
import org.scalajs.linker.interface.ModuleInitializer
import org.scalajs.linker.interface.ModuleSplitStyle

name := "Quiz League"

val circeVersion = "0.14.5"

lazy val commonSettings = Seq(
    organization := "quizleague",
    version := "0.0.1",
    scalaVersion := "3.3.3",
    scalacOptions ++= Seq("-deprecation","-unchecked"),
    resolvers ++= Resolver.sonatypeOssRepos("snapshots"),
    libraryDependencies ++= Seq(
        "io.circe" %%% "circe-core",
        "io.circe" %%% "circe-generic",
        "io.circe" %%% "circe-parser"
    ).map(_ % circeVersion)

)

lazy val shared = (project in file("shared"))
  .enablePlugins(ScalaJSPlugin)
  .settings(commonSettings: _*)
  .settings(
    libraryDependencies += "org.scalatest" %%% "scalatest" % "3.2.9" % "test"
)


lazy val server = (project in file("server"))
  .dependsOn(shared)
  .enablePlugins(ScalaJSPlugin)
  .settings(commonSettings: _*)
  .settings(
    publish := {},
    publishLocal := {},
    scalaJSUseMainModuleInitializer := true,
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) },
    libraryDependencies += "io.scalajs" %%% "express" % "0.4.3",
    libraryDependencies += "com.lihaoyi" %%% "castor" % "0.2.1",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
    libraryDependencies += "com.github.rssh" %%% "dotty-cps-async" % "0.9.16"
  )

  lazy val client = (project in file("client"))
    .dependsOn(shared)
    .enablePlugins(ScalaJSPlugin)
    .settings(commonSettings: _*)
    .settings(
      scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule).withModuleSplitStyle(
        ModuleSplitStyle.SmallModulesFor(List("quizleague.web"))) },
      Compile / scalaJSModuleInitializers += {
        ModuleInitializer.mainMethod("quizleague.web.site.SiteApp", "main").withModuleID("main")
      },
      Compile / scalaJSModuleInitializers += {
        ModuleInitializer.mainMethod("quizleague.web.maintain.MaintainApp", "main").withModuleID("maintain")
      },
      scalaJSUseMainModuleInitializer := false,

      libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.4.0",
      libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
      libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
      libraryDependencies += "com.github.lukajcb" %%% "rxscala-js" % "0.15.6",
)

lazy val devServer = taskKey[Unit]("copy test JS")
lazy val prodServer = taskKey[Unit]("copy test JS")
lazy val release = taskKey[Unit]("release to prod")
lazy val releaseTest = taskKey[Unit]("release to test")
lazy val prodClient = taskKey[Unit]("copy release JS")
lazy val copyTestConnection = taskKey[Unit]("copy test connection file")
lazy val copyConnection = taskKey[Unit]("copy connection file")
lazy val devClient = taskKey[Unit]("copy dev JS")
lazy val buildAppFile = taskKey[Unit]("build app.yaml")
lazy val releaseToProd = taskKey[Unit]("Execute the shell script")
lazy val releaseToTest = taskKey[Unit]("Execute the shell script")
lazy val localClient= taskKey[Unit]("Build the dev client")
lazy val buildClient= taskKey[Unit]("Build the prod client")

buildAppFile := {
    val content = IO.read(file("./app.yaml"))
    val out = file("./server/app.yaml")
    IO.write(out, content.replace("{SENDGRID_API_KEY}", System.getenv("SENDGRID_API_KEY")))
}

devServer := {
  val jsrelease = (server / Compile / fastLinkJSOutput).value
  IO.copyDirectory(jsrelease, file("./server"))
}

devClient := Def.sequential(
  copyConnection,
  client / Compile / fastLinkJSOutput
).value

prodServer := {
  val jsrelease = (server / Compile / fullLinkJSOutput).value
  IO.copyDirectory(jsrelease, file("./server"))
}

def copyConnectionFiles(gcpProject:String) = {
  val connection = file(s"./client/connections/Connection_$gcpProject.scala")
  val out = file("client/src/main/scala/quizleague/firestore/Connection.scala")
  IO.delete(out)
  IO.copyFile(connection, out)
}

copyTestConnection := {
  copyConnectionFiles("ql-firestore-gb2")
}

copyConnection := {
  copyConnectionFiles("chiltern-ql-firestore")
}

prodClient := {
  buildClient.value
  val built = file("./server/built")
  IO.delete(built.listFiles())
  IO.copyDirectory(file("./client/dist"), built)
}

localClient := {
  copyConnection.value
  prodClient.value
}


buildClient := {
  "bash -c ./buildClient.sh"!
}

releaseToTest := {
  "gcloud app deploy server/app.yaml --quiet --project=ql-firestore-gb2"!
}

releaseToProd := {
  "gcloud app deploy server/app.yaml --quiet --project=chiltern-ql-firestore"!
}

releaseTest := Def.sequential(
  copyTestConnection,
  Compile / prodServer,
  Compile / prodClient,
  Compile / buildAppFile,
  releaseToTest
).value

release := Def.sequential(
  copyConnection,
  Compile / prodServer,
  Compile / prodClient,
  Compile / buildAppFile,
  releaseToProd
).value

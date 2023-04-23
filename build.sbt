import scala.sys.process._
import org.scalajs.linker.interface.ModuleInitializer

name := "Quiz League"

val circeVersion = "0.13.0"
val macroParadiseVersion = "2.1.1"

addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full)

lazy val commonSettings = Seq(
    organization := "quizleague",
    version := "0.0.1",
    scalaVersion := "2.12.16",
    scalacOptions ++= Seq("-deprecation","-unchecked","-feature","-Ypartial-unification"),
    scalacOptions += "-Xasync",
    resolvers += Resolver.sonatypeRepo("snapshots"),
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
    idePackagePrefix := Some("quizleague"),
    publish := {},
    publishLocal := {},
    scalaJSUseMainModuleInitializer := true,
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) },
    libraryDependencies += "io.scalajs" %%% "express" % "0.4.2",
    libraryDependencies += "com.lihaoyi" %%% "castor" % "0.2.1",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
    libraryDependencies += "org.scala-lang.modules" %%% "scala-async" % "1.0.1",
    libraryDependencies += "org.scala-lang" % "scala-reflect" % scalaVersion.value % Provided
  )

  lazy val client = (project in file("client"))
    .dependsOn(shared)
    .enablePlugins(ScalaJSPlugin)
    .settings(commonSettings: _*)
    .settings(
      scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
      scalaJSModuleInitializers in Compile += {
        ModuleInitializer.mainMethod("quizleague.web.site.SiteApp", "main").withModuleID("main")
      },
      scalaJSModuleInitializers in Compile += {
        ModuleInitializer.mainMethod("quizleague.web.maintain.MaintainApp", "main").withModuleID("maintain")
      },
      scalaJSUseMainModuleInitializer := false,
      addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full),

      libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.2.0",
      libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
      libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
      libraryDependencies += "com.github.lukajcb" %%% "rxscala-js" % "0.15.3"
    )

lazy val copyDevServer = taskKey[Unit]("copy test JS")
lazy val copyServer = taskKey[Unit]("copy test JS")
lazy val release = taskKey[Unit]("release to prod")
lazy val releaseTest = taskKey[Unit]("release to test")
lazy val buildLocal = taskKey[Unit]("build for local run")
lazy val copyClient = taskKey[Unit]("copy release JS")
lazy val copyTestClient = taskKey[Unit]("copy test JS")
lazy val copyTestConnection = taskKey[Unit]("copy test connection file")
lazy val copyConnection = taskKey[Unit]("copy connection file")
lazy val copyDevClient = taskKey[Unit]("copy dev JS")
lazy val buildAppFile = taskKey[Unit]("build app.yaml")
lazy val releaseToProd = taskKey[Unit]("Execute the shell script")
lazy val releaseToTest = taskKey[Unit]("Execute the shell script")
lazy val buildDevClient= taskKey[Unit]("Build the dev client")


buildAppFile := {
    val content = IO.read(new File(file("."), ("app.yaml")))
    val out = new File(file("."), "server/app.yaml")
    IO.write(out, content.replace("{SENDGRID_API_KEY}", System.getenv("SENDGRID_API_KEY")))
}

copyDevServer := {
  val jsrelease = (fastLinkJSOutput in (server, Compile)).value
  jsrelease.listFiles().map(f => f.renameTo(new File(file("."),s"server/${f.getName}")))
}

copyDevClient := {
  val built = new File(file("."),s"server/built")
  built.listFiles((dir,name) => name.endsWith(".js.map") || name.endsWith(".js")).map(f => f.delete())
  copyConnection.value
  val jsrelease = (fastLinkJSOutput in (client, Compile)).value
  jsrelease.listFiles().map(f => f.renameTo(new File(file("."),s"server/built/${f.getName}")))
  revertConnection
}

copyServer := {
  val jsrelease = (fullLinkJSOutput in (server, Compile)).value
  jsrelease.listFiles().map(f => f.renameTo(new File(file("."),s"server/${f.getName}")))
}

def copyConnectionFiles(gcpProject:String) = {
  val connection = new File(file("."), s"server/connections/Connection_$gcpProject.scala")
  val out = new File(file("."), "shared/src/main/scala/quizleague/firestore/Connection.scala")
  out.delete()
  IO.copyFile(connection, out)
}

def revertConnection = {
  val connection = new File(file("."), s"server/connections/Connection.scala")
  val out = new File(file("."), "shared/src/main/scala/quizleague/firestore/Connection.scala")
  out.delete()
  IO.copyFile(connection, out)
}

copyTestConnection := {
  copyConnectionFiles("ql-firestore-gb2")
}

copyConnection := {
  copyConnectionFiles("chiltern-ql-firestore")
}

copyClient := {
  val built = new File(file("."),s"server/built")
  built.listFiles((dir,name) => name.endsWith(".js.map") || name.endsWith(".js")).map(f => f.delete())
  val jsrelease = (fullLinkJSOutput in (client, Compile)).value
  jsrelease.listFiles((dir,name)=> name.endsWith(".js")).map(f => f.renameTo(new File(file("."),s"server/built/${f.getName}")))
  revertConnection
}

releaseToTest := {
  "gcloud app deploy server/app.yaml --quiet --project=ql-firestore-gb2"!
}

releaseToProd := {
  "gcloud app deploy server/app.yaml --quiet --project=chiltern-ql-firestore"!
}

releaseTest := Def.sequential(
  copyTestConnection,
  copyServer in Compile,
  copyClient in Compile,
  buildAppFile in Compile,
  releaseToTest
).value

release := Def.sequential(
  copyConnection,
  copyServer in Compile,
  copyClient in Compile,
  buildAppFile in Compile,
  releaseToProd
).value

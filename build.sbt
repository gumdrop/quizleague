import scala.sys.process._
import org.scalajs.linker.interface.ModuleInitializer

name := "Quiz League"

val circeVersion = "0.14.5"
val macroParadiseVersion = "2.1.1"

//addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full)

lazy val commonSettings = Seq(
    organization := "quizleague",
    version := "0.0.1",
    scalaVersion := "3.2.2",
    scalacOptions ++= Seq("-deprecation","-unchecked","-feature","-Xmax-inlines:32"/*,"-Ymacro-annotations","-Xsource:3"*/),
    resolvers ++= Resolver.sonatypeOssRepos("snapshots"),
    libraryDependencies ++= Seq(
        "io.circe" %%% "circe-core",
        "io.circe" %%% "circe-generic",
        "io.circe" %%% "circe-parser"
    ).map(x =>(x % circeVersion))

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
    libraryDependencies += ("io.scalajs" %%% "express" % "0.4.3"),
    libraryDependencies += "com.lihaoyi" %%% "castor" % "0.2.1",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
    //libraryDependencies += "org.scala-lang.modules" %%% "scala-async" % "1.0.1",
    libraryDependencies += "com.github.rssh" %%% "dotty-cps-async" % "0.9.16"
    //libraryDependencies += "org.scala-lang" % "scala-reflect" % scalaVersion.value % Provided
  )

  lazy val client = (project in file("client"))
    .dependsOn(shared)
    .enablePlugins(ScalaJSPlugin)
    .settings(commonSettings: _*)
    .settings(
      scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
      Compile / scalaJSModuleInitializers += {
        ModuleInitializer.mainMethod("quizleague.web.site.SiteApp", "main").withModuleID("main")
      },
      Compile / scalaJSModuleInitializers += {
        ModuleInitializer.mainMethod("quizleague.web.maintain.MaintainApp", "main").withModuleID("maintain")
      },
      scalaJSUseMainModuleInitializer := false,
      //addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full),

      libraryDependencies += ("org.scala-js" %%% "scalajs-dom" % "2.2.0"),
      libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
      libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
      libraryDependencies += ("com.github.lukajcb" %%% "rxscala-js" % "0.15.4"),
      libraryDependencies += "dev.optics" %% "monocle-core" % "3.1.0",
      libraryDependencies += "dev.optics" %% "monocle-macro" % "3.1.0"
 )

lazy val devServer = taskKey[Unit]("copy test JS")
lazy val prodServer = taskKey[Unit]("copy test JS")
lazy val release = taskKey[Unit]("release to prod")
lazy val releaseTest = taskKey[Unit]("release to test")
lazy val prodClient = taskKey[Unit]("copy release JS")
lazy val copyTestClient = taskKey[Unit]("copy test JS")
lazy val copyTestConnection = taskKey[Unit]("copy test connection file")
lazy val copyConnection = taskKey[Unit]("copy connection file")
lazy val devClient = taskKey[Unit]("copy dev JS")
lazy val buildAppFile = taskKey[Unit]("build app.yaml")
lazy val releaseToProd = taskKey[Unit]("Execute the shell script")
lazy val releaseToTest = taskKey[Unit]("Execute the shell script")
lazy val buildDevClient= taskKey[Unit]("Build the dev client")


buildAppFile := {
    val content = IO.read(new File(file("."), ("app.yaml")))
    val out = new File(file("."), "server/app.yaml")
    IO.write(out, content.replace("{SENDGRID_API_KEY}", System.getenv("SENDGRID_API_KEY")))
}

devServer := {
  val jsrelease = (server / Compile / fastLinkJSOutput).value
  IO.copy(jsrelease.listFiles().map(f => (f, new File(file("."),s"server/${f.getName}"))))
}

devClient := {
  val built = new File(file("."),s"server/built")
  built.listFiles((dir,name) => name.endsWith(".js.map") || name.endsWith(".js")).foreach(f => f.delete())
  copyConnection.value
  val jsrelease = (client / Compile / fastLinkJSOutput).value
  IO.copy(jsrelease.listFiles().map(f => (f, new File(file("."),s"server/built/${f.getName}"))))
}

prodServer := {
  val jsrelease = (server / Compile / fullLinkJSOutput).value
  IO.copy(jsrelease.listFiles().map(f => (f, new File(file("."),s"server/${f.getName}"))))
}

def copyConnectionFiles(gcpProject:String) = {
  val connection = new File(file("."), s"client/connections/Connection_$gcpProject.scala")
  val out = new File(file("."), "client/src/main/scala/quizleague/firestore/Connection.scala")
  out.delete()
  IO.copyFile(connection, out)
}

copyTestConnection := {
  copyConnectionFiles("ql-firestore-gb2")
}

copyConnection := {
  copyConnectionFiles("chiltern-ql-firestore")
}

prodClient := {
  val built = new File(file("."),s"server/built")
  built.listFiles((dir,name) => name.contains(".js")).foreach(f => f.delete())
  val jsrelease =  (client / Compile / fullLinkJSOutput).value
  IO.copy(jsrelease.listFiles((dir,name)=> name.endsWith(".js")).map(f => (f, new File(file("."),s"server/built/${f.getName}"))))
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

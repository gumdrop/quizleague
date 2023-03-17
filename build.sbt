name := "Quiz League"

import scala.sys.process._

val circeVersion = "0.13.0"
val macroParadiseVersion = "2.1.1"
addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full)

Global / onChangedBuildSource := ReloadOnSourceChanges

lazy val commonSettings = Seq(
  organization := "quizleague",
  version := "0.0.1",
  scalaVersion := "2.12.16",
  scalacOptions ++= Seq("-deprecation","-unchecked","-feature","-Ypartial-unification"),
  resolvers += Resolver.sonatypeRepo("snapshots")
  
)

lazy val root = project.in(file(".")).
  aggregate(quizleague.js, quizleague.jvm).settings(commonSettings: _*).
  settings(
    publish := {},
    publishLocal := {},
    resolvers += Resolver.sonatypeRepo("releases"),
    addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full)
  )

lazy val quizleague = crossProject(JSPlatform, JVMPlatform).in(file(".")).
  settings(commonSettings: _*).
  settings( 
    name := "quizleague",
    libraryDependencies ++= Seq(
	  "io.circe" %%% "circe-core",
	  "io.circe" %%% "circe-generic",
	  "io.circe" %%% "circe-parser"
	).map(_ % circeVersion),
		libraryDependencies += "org.scalatest" %%% "scalatest" % "3.2.9" % "test"
  ).
  jvmSettings(

    addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full),

    assemblyOutputPath in assembly := new File(file("."), "deploy/quizleague.jar"),

    libraryDependencies += "com.google.cloud" % "google-cloud-firestore" % "3.8.1",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-core" % "1.2.6",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-netty-server" % "1.2.8",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-json-circe" % "1.2.8",
    libraryDependencies += "com.google.firebase" % "firebase-admin" % "9.1.1",
    libraryDependencies += "com.lihaoyi" %% "castor" % "0.2.1",
    //libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-swagger-ui-bundle" % "1.2.7",
    libraryDependencies += "com.sendgrid" % "sendgrid-java" % "4.9.3",
    libraryDependencies += "org.apache.james" % "apache-mime4j" % "0.8.9"
  ).
  jsSettings(
    scalaJSUseMainModuleInitializer := false,
    addCompilerPlugin("org.scalamacros" % "paradise" % macroParadiseVersion cross CrossVersion.full),

    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.2.0",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.5.0",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.5.0",
    libraryDependencies += "com.github.lukajcb" %%% "rxscala-js" % "0.15.2"

  )

quizleague.jvm / assembly / assemblyMergeStrategy := {
  case x if x.endsWith("/io.netty.versions.properties") => MergeStrategy.first
  case x if x.contains("/services") => MergeStrategy.first
  case PathList("META-INF", xs @ _*) => MergeStrategy.discard
  case PathList("module-info.class") => MergeStrategy.discard
  case x if x.endsWith("/module-info.class") => MergeStrategy.discard
  case x => {
    val oldStrategy = (quizleague.jvm / assembly / assemblyMergeStrategy).value
    oldStrategy(x)
  }
}

lazy val release = taskKey[Unit]("release to prod")
lazy val releaseTest = taskKey[Unit]("release to test")
lazy val buildLocal = taskKey[Unit]("build for local run")
lazy val runLocal = taskKey[Unit]("run local server")
lazy val copyFullOpt = taskKey[Unit]("copy release JS")
lazy val copyFastOpt = taskKey[Unit]("copy test JS")
lazy val buildAppFile = taskKey[Unit]("build app.yaml")

val baseJSFilename = "quizleague.js"

copyFullOpt := {
  val jsrelease = (fullOptJS in (quizleague.js, Compile)).value
  jsrelease.data.renameTo(new File(file("."), s"jvm/src/main/resources/webapp/$baseJSFilename"))
  
}

copyFastOpt := {
  val jsrelease = (fastOptJS in (quizleague.js, Compile)).value

  val mapFile = new File(file(""), s"${jsrelease.data.getParentFile.getPath}/${jsrelease.data.getName}.map" )
  mapFile.renameTo(new File(file("."),s"jvm/src/main/resources/webapp/${mapFile.getName}"))
  jsrelease.data.renameTo(new File(file("."), s"jvm/src/main/resources/webapp/$baseJSFilename"))
  (copyResources in (quizleague.jvm, Compile)).value

}

lazy val releaseToProd = taskKey[Unit]("Execute the shell script")

lazy val releaseToTest = taskKey[Unit]("Execute the shell script")

releaseToProd := {
  "gcloud app deploy deploy/app.yaml --quiet --project=chiltern-ql-firestore"!
}

releaseToTest := {
  "gcloud app deploy deploy/app.yaml --quiet --project=ql-firestore-gb2"!
}

buildLocal := Def.sequential(
  copyFastOpt in Compile
).value

buildAppFile := {
  val content = IO.read(new File(file("."), ("app.yaml")))
  val out = new File(file("."), "deploy/app.yaml")
  IO.write(out, content.replace("{SENDGRID_API_KEY}", System.getenv("SENDGRID_API_KEY")))
}

releaseTest := Def.sequential(
  copyFullOpt in Compile,
  buildAppFile in Compile,
  assembly in (quizleague.jvm, Compile),
  releaseToTest
).value

release := Def.sequential(
  copyFullOpt in Compile,
  buildAppFile in Compile,
  assembly in (quizleague.jvm, Compile),
  releaseToProd
).value




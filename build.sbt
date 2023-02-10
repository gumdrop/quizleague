name := "Quiz League"

import scala.sys.process._

val circeVersion = "0.13.0"
addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full)

lazy val commonSettings = Seq(
  organization := "quizleague",
  version := "0.0.1",
  scalaVersion := "2.12.3",
  scalacOptions ++= Seq("-deprecation","-unchecked","-feature","-Ypartial-unification"),
  resolvers += Resolver.sonatypeRepo("snapshots")
  
)

lazy val root = project.in(file(".")).
  aggregate(quizleague.js, quizleague.jvm).settings(commonSettings: _*).
  settings(
    publish := {},
    publishLocal := {},
    resolvers += Resolver.sonatypeRepo("releases"),
    addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full)
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

    addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full),

    assemblyJarName in assembly := "quizleague.jar",

	  libraryDependencies += "org.apache.directory.studio" % "org.apache.commons.io" % "2.4",
    libraryDependencies += "com.google.cloud" % "google-cloud-firestore" % "3.7.9",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-core" % "1.2.6",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-netty-server" % "1.2.6",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-json-circe" % "1.2.7",
    libraryDependencies += "com.google.firebase" % "firebase-admin" % "9.1.1",
    libraryDependencies += "com.lihaoyi" %% "castor" % "0.1.7",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-swagger-ui-bundle" % "1.2.7"
  ).
  jsSettings(
    scalaJSUseMainModuleInitializer := false,
    addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full),

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
lazy val copyFullOpt = taskKey[Unit]("copy release JS")
lazy val copyFastOpt = taskKey[Unit]("copy test JS")

copyFullOpt := {
  val jsrelease = (fullOptJS in (quizleague.js, Compile)).value
  jsrelease.data.renameTo(new File(file("."), "jvm/src/main/resources/webapp/quizleague.js"))
  
}

copyFastOpt := {
  val jsrelease = (fastOptJS in (quizleague.js, Compile)).value
  jsrelease.data.renameTo(new File(file("."), "jvm/src/main/resources/webapp/quizleague.js"))

}

lazy val releaseToProd = taskKey[Unit]("Execute the shell script")

lazy val releaseToTest = taskKey[Unit]("Execute the shell script")

releaseToProd := {
  "gcloud app deploy jvm/target/scala-2.12/quizleague.jar --quiet"!
}

releaseToTest := {
  "gcloud app deploy jvm/target/scala-2.12/quizleague.jar --quiet --project=ql-firestore-gb2"!
}

buildLocal := Def.sequential(
  copyFastOpt in Compile
).value

releaseTest := Def.sequential(
  copyFullOpt in Compile,
  assembly in (quizleague.jvm, Compile),
  releaseToTest
).value

release := Def.sequential(
  copyFullOpt in Compile,
  assembly in (quizleague.jvm, Compile),
  releaseToProd
).value




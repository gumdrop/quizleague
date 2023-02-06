name := "Quiz League"

import scala.sys.process._

EclipseKeys.skipParents in ThisBuild := false
EclipseKeys.withSource := true

val circeVersion = "0.8.0"
val appengineVersion = "1.9.59"
addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full)

lazy val commonSettings = Seq(
  organization := "quizleague",
  version := "0.0.1",
  scalaVersion := "2.12.3",
  scalacOptions ++= Seq("-deprecation","-unchecked","-feature","-Ypartial-unification"),
  resolvers += Resolver.sonatypeRepo("snapshots")
  
)

lazy val root = project.in(file(".")).
  aggregate(web, server).settings(commonSettings: _*).
  settings(
    publish := {},
    publishLocal := {},
    resolvers += Resolver.sonatypeRepo("releases"),
    addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full)
  )

lazy val quizleague = crossProject.in(file(".")).
  settings(commonSettings: _*).
  settings( 
    name := "quizleague",
    libraryDependencies ++= Seq(
	  "io.circe" %%% "circe-core",
	  "io.circe" %%% "circe-generic",
	  "io.circe" %%% "circe-parser"
	).map(_ % circeVersion),
	
	libraryDependencies += "org.scalatest" %%% "scalatest" % "3.0.1" % "test").
  jvmSettings(
     name := "quizleague-jvm",

         
	libraryDependencies += "com.google.appengine" % "appengine-testing" % appengineVersion % "test",
	libraryDependencies += "com.google.appengine" % "appengine-api-stubs" % appengineVersion % "test",
	libraryDependencies += "com.google.cloud" % "google-cloud-storage" % "1.76.0",
	libraryDependencies += "com.google.appengine.tools" % "appengine-gcs-client" % "0.8",
	libraryDependencies += "org.apache.directory.studio" % "org.apache.commons.io" % "2.4",
    libraryDependencies += "org.glassfish.jersey.containers" % "jersey-container-servlet-core" % "2.25.1",
    libraryDependencies += "org.eclipse.jetty" % "jetty-server" % "9.4.24.v20191120",
    libraryDependencies += "com.google.cloud" % "google-cloud-firestore" % "3.7.9",
    libraryDependencies += "org.apache.tomcat.embed" % "tomcat-embed-core" % "10.0.27",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-core" % "1.2.6",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-akka-http-server" % "1.0.3",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-netty-server" % "1.2.6",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-json-circe" % "1.2.7",
    libraryDependencies += "com.google.firebase" % "firebase-admin" % "9.1.1",
    libraryDependencies += "com.lihaoyi" %% "castor" % "0.1.7",
    libraryDependencies += "com.softwaremill.sttp.tapir" %% "tapir-swagger-ui-bundle" % "1.2.7"
).
  jsSettings(
    name := "quizleague-js",
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.7",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time" % "2.0.0-RC2",
    libraryDependencies += "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.0.0-RC2_2019a",
    libraryDependencies += "com.github.lukajcb" %%% "rxscala-js" % "0.15.0"

  )

lazy val server = quizleague.jvm.settings(
  addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full),
).enablePlugins(AppenginePlugin)

lazy val web = quizleague.js.settings(
	scalaJSUseMainModuleInitializer := false,
	scalacOptions += "-P:scalajs:sjsDefinedByDefault",
    addCompilerPlugin("org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full)
).enablePlugins(ScalaJSPlugin)

lazy val release = taskKey[Unit]("release to prod")
lazy val copyFullOpt = taskKey[Unit]("copy release JS")

copyFullOpt := {
  val jsrelease = (fullOptJS in (quizleague.js, Compile)).value
  jsrelease.data.renameTo(new File(file("."), "jvm/src/main/resources/webapp/quizleague-js-opt.js"))
  
}

lazy val execScript = taskKey[Unit]("Execute the shell script")

execScript := {
  "gcloud app deploy jvm/target/webapp/WEB-INF/appengine-web.xml --quiet "!
}


release := Def.sequential(
  copyFullOpt in Compile,
  webappPrepare in (quizleague.jvm,Compile),
  execScript
  
).value




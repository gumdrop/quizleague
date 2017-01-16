
lazy val commonSettings = Seq(
  organization := "org.chilternquizleague",
  version := "0.0.1",
  scalaVersion := "2.11.8",
  scalacOptions ++= Seq("-deprecation","-unchecked","-feature","-Xlint"),
  resolvers += Resolver.sonatypeRepo("snapshots"),
  libraryDependencies ++= Seq(
  	"io.circe" %%% "circe-core" % "0.6.1", "io.circe" %%% "circe-parser" % "0.6.1", "io.circe" %%% "circe-generic" % "0.6.1"
  ),
  scalacOptions ++= (if (isSnapshot.value) Seq.empty else Seq({
        val a = baseDirectory.value.toURI.toString.replaceFirst("[^/]+/?$", "")
        val g = "https://raw.githubusercontent.com/gumdrop/quizleague-maintain"
        s"-P:scalajs:mapSourceURI:$a->$g/v${version.value}/"
      }))
)


lazy val root = project.in(file(".")).
  enablePlugins(Angulate2Plugin).
  settings(commonSettings: _*).
  settings( 
    name := "chilternquizleague-maintain",
    ngBootstrap := Some("org.chilternquizleague.maintain.AppModule")
    //resolvers += Resolver.sonatypeRepo("releases")
  )



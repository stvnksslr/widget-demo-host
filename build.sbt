name := """widget-demo-host"""

version := "1.0"

scalaVersion := "2.11.6"

val akkaVersion = "2.3.9"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

// front end dependencies 
libraryDependencies ++= Seq(
  filters,ws,
  cache,
  // WebJars (i.e. client-side) dependencies
  "org.webjars" % "requirejs" % "2.1.17",
  "org.webjars" % "underscorejs" % "1.8.3",
  "org.webjars" % "bootstrap" % "3.3.4",
  "org.webjars.bower" % "bootswatch" % "3.3.4",
  "org.webjars.bower" % "angular" % "1.3.15",
  "org.webjars" % "angular-ui-router" % "0.2.13",
  "org.webjars" % "angular-ui-bootstrap" % "0.12.1-1",
  "org.webjars" % "ng-table" % "0.3.3" exclude("org.webjars", "angularjs"),
  "org.scala-lang.modules" %% "scala-async" % "0.9.1",
  "joda-time" % "joda-time" % "2.3",
  // Database
  "com.typesafe.play" %% "play-slick" % "0.8.1",
  "mysql" % "mysql-connector-java" % "5.1.31",
  // test
  "org.scalatest" %% "scalatest" % "2.2.0" % "test",
  "com.h2database" % "h2" % "1.4.179" % "test"
)

scalacOptions ++= Seq(
  "-target:jvm-1.8",
  "-encoding", "UTF-8",
  "-deprecation", // warning and location for usages of deprecated APIs
  "-feature", // warning and location for usages of features that should be imported explicitly
  "-unchecked", // additional warnings where generated code depends on assumptions
  "-Xlint", // recommended additional warnings
  "-Ywarn-adapted-args", // Warn if an argument list is modified to match the receiver
  "-Ywarn-inaccessible",
  "-Ywarn-dead-code"
)

pipelineStages := Seq(rjs, digest, gzip)

// RequireJS with sbt-rjs (https://github.com/sbt/sbt-rjs#sbt-rjs)
RjsKeys.paths += ("jsRoutes" -> ("/jsroutes" -> "empty:"))

includeFilter in (Assets, LessKeys.less) := "*.less"

excludeFilter in (Assets, LessKeys.less) := "_*.less"
import com.typesafe.sbt.SbtScalariform._
import play.PlayScala

import scalariform.formatter.preferences._

name := "widget-demo-host"

version := "1.0"

scalaVersion := "2.11.6"

val akkaVersion = "2.3.9"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

resolvers += "Typesafe repository" at "https://repo.typesafe.com/typesafe/releases/"

resolvers += "Sonatype Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"

resolvers := ("Atlassian Releases" at "https://maven.atlassian.com/public/") +: resolvers.value

resolvers += Resolver.sonatypeRepo("snapshots")

// front end dependencies 
libraryDependencies ++= Seq(
  filters,ws,
  cache,
  // WebJars (i.e. client-side) dependencies
  "com.mohiva" %% "play-silhouette" % "2.0",
  "net.codingwell" %% "scala-guice" % "4.0.0-beta5",
  "com.google.inject" % "guice" % "3.0",
  "javax.inject" % "javax.inject" % "1",
  "org.webjars" % "requirejs" % "2.1.17",
  "org.webjars" % "bootstrap" % "3.3.4",
  "org.webjars.bower" % "bootswatch" % "3.3.4",
  "org.webjars.bower" % "angular" % "1.3.15",
  "org.webjars" % "angular-ui-router" % "0.2.13",
  "org.webjars" % "angular-ui-bootstrap" % "0.12.1-1",
  "org.scala-lang.modules" %% "scala-async" % "0.9.1",
  "joda-time" % "joda-time" % "2.3",
  // Database
  "org.reactivemongo" %% "play2-reactivemongo" % "0.10.5.0.akka23",
  // test
  "org.scalatest" %% "scalatest" % "2.2.0" % "test",
  "org.mockito" % "mockito-core" % "1.10.17" % "test"
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

//********************************************************
// Scalariform settings
//********************************************************

defaultScalariformSettings

ScalariformKeys.preferences := ScalariformKeys.preferences.value
  .setPreference(FormatXml, false)
  .setPreference(DoubleIndentClassDeclaration, false)
  .setPreference(PreserveDanglingCloseParenthesis, true)
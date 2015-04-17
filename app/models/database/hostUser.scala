package models.database

import play.api.libs.json.Json

case class HostUser( email: String,
                 password: String,
                 age: String,
                 firstName: String,
                 lastName: String,
                 enrolled: Boolean)

object JsonFormats {
  implicit val userFormat = Json.format[HostUser]
}
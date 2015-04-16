package models

import play.api.libs.json.Json

case class User( email: String,
                 password: String,
                 age: String,
                 firstName: String,
                 lastName: String,
                 enrolled: Boolean)

object JsonFormats {
  implicit val userFormat = Json.format[User]
}
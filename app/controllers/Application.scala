package controllers

import play.api.mvc.{Action, Controller}

object Application extends Controller {

  def index(any: String) = Action {
    Ok(views.html.index())
  }
}
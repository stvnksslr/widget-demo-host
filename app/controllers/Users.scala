package controllers

import play.api.Routes
import play.api.mvc._
import play.api.mvc.Action

object Users extends Controller {
  def index = Action(Ok(views.html.index()))

  def jsRoutes(varName: String = "jsRoutes") = Action { implicit request =>
    Ok(Routes.javascriptRouter(varName)(

    )).as(JAVASCRIPT)
  }
}

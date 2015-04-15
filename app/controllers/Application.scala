package controllers

import javax.inject.{Inject, Singleton}
import org.slf4j.{LoggerFactory, Logger}
import play.api.mvc.{Action, Controller}
import services.UUIDGenerator


object Application extends Controller {

  def index(any: String) = Action {
    Ok(views.html.index())
  }
}

@Singleton
class Application @Inject() (uuidGenerator: UUIDGenerator) extends Controller {

  private final val logger: Logger = LoggerFactory.getLogger(classOf[Application])

  def randomUUID = Action {
    logger.info("calling UUIDGenerator...")
    Ok(uuidGenerator.generate.toString)
  }

}
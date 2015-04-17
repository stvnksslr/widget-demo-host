package app

import com.mohiva.play.silhouette.api.{ Logger, SecuredSettings }
import utils.di.SilhouetteModule
import com.google.inject.{Guice, AbstractModule}
import play.api.GlobalSettings
import services.{SimpleUUIDGenerator, UUIDGenerator}

/**
 * The global configuration.
 */
object Global extends GlobalSettings with SecuredSettings with Logger {

  /**
   * The Guice dependencies injector.
   */
 // val injector = Guice.createInjector(new SilhouetteModule)

  val injector = Guice.createInjector(new AbstractModule {
    protected def configure() {
      bind(classOf[UUIDGenerator]).to(classOf[SimpleUUIDGenerator])
    }
  })

  /**
   * Loads the controller classes with the Guice injector,
   * in order to be able to inject dependencies directly into the controller.
   *
   * @param controllerClass The controller class to instantiate.
   * @return The instance of the controller class.
   * @throws Exception if the controller couldn't be instantiated.
   */
  override def getControllerInstance[A](controllerClass: Class[A]) = injector.getInstance(controllerClass)
}

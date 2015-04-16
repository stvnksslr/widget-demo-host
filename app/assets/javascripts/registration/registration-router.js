(function() {
    'use strict';

    var moduleName = 'widgitDemo.registration-router',

        angularDependencies = ['ui.router','widgitDemo.registration'];

    define([
        'require',
        'angular',
        'ui.router',
        './registration'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');
            $stateProvider

                .state('registration', {
                    url: '/registration',
                    templateUrl: require.toUrl('./_registration.scala.html'),
                    controller: 'registrationController',
                    controllerAs: 'RegCtrl'
                });
        });
        return module;
    });
})();
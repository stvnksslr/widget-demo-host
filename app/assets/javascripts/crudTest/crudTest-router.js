(function() {
    'use strict';

    var moduleName = 'widgitDemo.crudTest-router',

        angularDependencies = ['ui.router','widgitDemo.crudTest'];

    define([
        'require',
        'angular',
        'ui.router',
        './crudTest'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('crudTest', {
                    url: '/crudtest',
                    templateUrl: require.toUrl('./_crudTest.scala.html')
                });
        });
        return module;
    });
})();
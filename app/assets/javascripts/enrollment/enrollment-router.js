(function() {
    'use strict';

    var moduleName = 'widgitDemo.enrollment-router',

        angularDependencies = ['ui.router','widgitDemo.enrollment'];

    define([
        'require',
        'angular',
        'ui.router',
        './enrollment'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');
            $stateProvider

                .state('enrollment', {
                    url: '/enrollment',
                    templateUrl: require.toUrl('./_enrollment.scala.html')
                });
        });
        return module;
    });
})();
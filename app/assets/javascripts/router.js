(function() {
    'use strict';

    var moduleName = 'widgitDemo.router',

        angularDependencies = ['ui.router','widgitDemo.enrollment-router','widgetDemo.home-router'];

    define([
        'require',
        'angular',
        'ui.router',
        './enrollment/enrollment-router',
        './home/home-router'
    ], function(require, angular) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                // HOME STATES AND NESTED VIEWS ========================================
                .state('home', {
                    url: '/home',
                    templateUrl: require.toUrl('./home/_home.scala.html')
                });
        });
        return module;
    });
})();
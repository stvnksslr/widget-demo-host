(function() {
    'use strict';

    var moduleName = 'widgetDemo.home-router',

        angularDependencies = ['ui.router', 'widgetDemo.home'];

    define([
        'require',
        'angular',
        'ui.router',
        './home'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        return module;
    });
})();
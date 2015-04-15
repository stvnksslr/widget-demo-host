(function() {
    'use strict';

    var moduleName = 'widgetDemo.home-router',

        angularDependencies = ['ui.router'];

    define([
        'require',
        'angular',
        'ui.router'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        return module;
    });
})();
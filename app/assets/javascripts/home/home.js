(function() {
    'use strict';
    var moduleName = 'widgetDemo.home',
        angularDependencies = ['ui.router'];
    define([
        'require',
        'angular'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);

        return module;
    });
})();

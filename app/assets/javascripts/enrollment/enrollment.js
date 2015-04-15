(function() {
    'use strict';

    var moduleName = 'widgitDemo.enrollment',
        angularDependencies = ['ui.router', 'widgitDemo.enrollment-router'];

    define([
        'require',
        'angular',
        'ui.router',
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        module.controller('MyController', ['$scope']);
        console.log('hello');
        return module;
    });
})();

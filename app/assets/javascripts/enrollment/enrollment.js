(function() {
    'use strict';

    var moduleName = 'widgitDemo.enrollment',
        angularDependencies = ['ui.router','ui.bootstrap', 'widgitDemo.enrollment-router'];

    define([
        'require',
        'angular',
        'ui.router',
        'ui.bootstrap'
    ], function(require, angular,$scope, $modal) {
        var module = angular.module(moduleName, angularDependencies);
        return module;
    });
})();

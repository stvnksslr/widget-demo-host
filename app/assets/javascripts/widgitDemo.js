(function() {
    'use strict';

    var moduleName = 'widgitDemo',
        angularDependencies = ['widgitDemo.router'];

    define([
        'require',
        'angular',
        './router'

    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        return module;
    });
})();
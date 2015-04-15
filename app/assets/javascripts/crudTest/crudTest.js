(function() {
    'use strict';

    var moduleName = 'widgitDemo.crudTest',
        angularDependencies = ['ui.router', 'widgitDemo.crudTest-router'];

    define([
        'require',
        'angular',
        'ui.router'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        module.factory('UserService', ['$http',
            function ($http) {

                function UserService() {

                }

                UserService.createUser = function (userData) {
                    var createUserPromise = $http.post('/user', userData);
                    return createUserPromise;
                };

                UserService.findUsers = function () {
                    var findUsersPromise = $http.get('/users');
                    console.log('Steve Debug: ' + findUsersPromise);
                    return findUsersPromise;
                };

                return UserService;

            }

        ]);

// and in some contoller

        module.controller('MyController', ['UserService']);
    });
})();
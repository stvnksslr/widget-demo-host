(function() {
    'use strict';
    var moduleName = 'widgetDemo.home',
        angularDependencies = ['ui.router'];
    define([
        'require',
        'angular'
    ], function(require, angular) {
        var module = angular.module(moduleName, angularDependencies);
        module.factory('UserService', ['$http',
            function($http) {
                function UserService() {}
                UserService.createUser = function(userData) {
                    var createUserPromise = $http.post('/user', userData).then(function(response) {
                        console.log("Steve debug: " + response.data, response.status, response.statusText);
                        return response;
                    });
                    return createUserPromise;
                };
                UserService.findUsers = function() {
                    var findUsersPromise = $http.get('/users');
                    return findUsersPromise;
                };
                return UserService;
            }
        ]);

        function MyController(UserService) {
            UserService.findUsers().then(function(response) {
                var users = response.data;
                this.users = users;
            }.bind(this));
            this.createNewUser = function() {
                var newUser = {
                    email: 'skessler@gmail.com',
                    password: '212133',
                    age: "25",
                    firstName: 'steven',
                    lastName: 'kessler',
                    enrolled: false
                };
                UserService.createUser(newUser).then(function(response) {
                    var createNewUser = response.data;
                    console.log('created newUser', newUser);
                    this.createNewUser = createNewUser;
                });
            };
        }
        module.controller('MyController', ['UserService', MyController]);
        return module;
    });
})();


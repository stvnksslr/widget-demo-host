(function() {
    'use strict';

    var moduleName = 'widgitDemo.registration',
        angularDependencies = ['ui.router', 'ui.bootstrap', 'widgitDemo.registration-router'];

    define([
        'require',
        'angular',
        'ui.router',
        'ui.bootstrap'
    ], function(require, angular, $scope, $modal) {
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

        function registrationController(UserService) {
            UserService.findUsers().then(function(response) {
                var users = response.data;
                this.users = users;
            }.bind(this));
            this.newUser = {enrolled: false};
            this.registerNewUser = function() {
                UserService.createUser(this.newUser).then(function(response) {
                    var findUserData = response.data;
                    console.log('created newUser', this.newUser);
                    this.registerNewUser = findUserData;
                });
            };
        }
        module.controller('registrationController', ['UserService', registrationController]);
        return module;
    });
})();

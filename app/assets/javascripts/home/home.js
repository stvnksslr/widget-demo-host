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

            // load all users when this controller loads
            // then you can do shit with them in code or hmtl
            // eg: <li ng-repeat="user in users">{{user.firstName}} {{user.lastName}}</li>
            UserService.findUsers().then(function(response) {
                var users = response.data; // this assumes that response.data is the array of objects, cant tell from what you have shown me
                this.users = users;
            }.bind(this));

            // if you call this from html or elsewhere, it will create new user
            // eg <button ng-click="new user()"></button>
            this.createNewUser = function() {

                var newUser = {
                    firstName: 'Steven',
                    lastName: 'Kessler'
                };

                UserService.createUser(newUser).then(function(response) {
                    var createNewUser = response.data;
                    console.log('created newUser', newUser);
                    this.createNewUser = createNewUser;
                }.bind(this));

            };
        }
        module.controller('MyController', ['UserService', MyController]);
        return module;
    });
})();


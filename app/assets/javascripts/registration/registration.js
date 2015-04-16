(function() {
    'use strict';

    var moduleName = 'widgitDemo.registration',
        angularDependencies = ['ui.router','ui.bootstrap', 'widgitDemo.registration-router'];

    define([
        'require',
        'angular',
        'ui.router',
        'ui.bootstrap'
    ], function(require, angular,$scope, $modal) {
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

            // load all users when this controller loads
            // then you can do stuff with them in code or hmtl
            // eg: <li ng-repeat="user in users">{{user.firstName}} {{user.lastName}}</li>
            UserService.findUsers().then(function(response) {
                var users = response.data; // this assumes that response.data is the array of objects
                this.users = users;
            }.bind(this));

            // if you call this from html or elsewhere, it will create new user
            // eg <button ng-click="new user()"></button>

            this.registerNewUser = function() {

                var newUser = {
                    email: 'skessler@gmail.com',
                    password: '212133',
                    age: 25,
                    firstName: 'steven',
                    lastName: 'kessler',
                    active: false
                };

                UserService.createUser(newUser).then(function(response) {
                    var createNewUser = response.data;
                    console.log('created newUser', newUser);
                    this.registerNewUser = createNewUser;
                });

            };

            this.createNewUser = function() {

                var newUser = {
                    email: 'skessler@gmail.com',
                    password: '212133',
                    age: 25,
                    firstName: 'steven',
                    lastName: 'kessler',
                    active: false
                };

                UserService.createUser(newUser).then(function(response) {
                    var createNewUser = response.data;
                    console.log('created newUser', newUser);
                    this.createNewUser = createNewUser;
                });

            };
        }
        module.controller('registrationController', ['UserService', registrationController]);
        return module;
    });
})();

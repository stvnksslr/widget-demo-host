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
            function($http) {

                function UserService() {}

                UserService.createUser = function(userData) {
                    var createUserPromise = $http.post('/user', userData);
                    return createUserPromise;
                };
                UserService.findUsers = function() {
                    var findUsersPromise = $http.get('/users');
                    console.log('Steve Debug: ' + findUsersPromise);
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
                });

            };
            module.controller('MyController', ['UserService', MyController]);
        }
        return module;
    });
})();

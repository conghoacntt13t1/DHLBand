'use strict';
var app = angular.module('MyGame', ['ngRoute']);
var socket = io.connect("localhost:16969");

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'
            })
        .when('/game/:roomID',
            {
                controller: 'GameController',
                templateUrl: '/app/views/game.html'
            })
        .when('/ranking/:roomID',
            {
                controller: 'RankingController',
                templateUrl: 'app/views/ranking.html'
            })
        .when('/room',
            {
                controller: 'RoomController',
                templateUrl: 'app/views/room.html'
            })
        .when('/login',
            {
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'
            })
        .otherwise({ redirectTo: '/login' });
});
    // .factory('socket', function($rootScope) {
    //
    //     var socket = io.connect("localhost:16969");
    //
    //     return {
    //         on: function(eventName, callback) {
    //             socket.on(eventName, function() {
    //                 var args = arguments;
    //                 //console.log(args);
    //                 $rootScope.$apply(function() {
    //
    //
    //                     callback.apply(socket, args);
    //                 });
    //             });
    //         },
    //         emit: function(eventName, data, callback) {
    //             socket.emit(eventName, data, function() {
    //                 var args = arguments;
    //                 $rootScope.$apply(function() {
    //                     if (callback) {
    //                         callback.apply(socket, args);
    //                     }
    //                 });
    //             });
    //         }
    //     };
    // });
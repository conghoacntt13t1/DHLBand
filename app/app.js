var app = angular.module('MyGame', ['ngRoute']);

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

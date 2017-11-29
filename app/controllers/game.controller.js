app.controller('GameController', function ($scope,$http,gameService) {

    $scope.initGame = initGame;

    //used to create game Table
    $scope.gameTable=[];
    //used to create game expressions
    var gameExpressions = [];
    //current expression
    $scope.currentExpression = {};

    function initGame() {
        // initGameExpressions();
        initGameTable();
    }


    //Read JSON file and store it to gameExpressions
    function initGameExpressions() {
        getExpressions(function () {
            // console.log(gameExpressions);
        });
    }

    var getExpressions = function (callback) {
        gameExpressions = gameService.getExpressions();
        // console.log(gameExpressions);
        callback && callback (gameExpressions);
    };


    // function initGameTable() {
    //     for (var i=0;i<5;i++){
    //         $scope.gameTable[i]=[];
    //         for (var j=0;j<5;j++){
    //             var spot={};
    //             spot.data='-';
    //             // spot.col=j;
    //             $scope.gameTable[i][j]=spot;
    //         }
    //     }
    //     return getTable();
    // }

    function initGameTable() {
        getGameTable(function () {
            // console.log($scope.gameTable);
        });
    }

    var getGameTable = function (callback) {
        // gameExpressions = gameService.getExpressions();
        // console.log(gameExpressions);
        $scope.gameTable=gameService.getGameTable();
        callback && callback ($scope.gameTable);
    };

    function getTable () {
        return $scope.gameTable;
    }

    //handle the event when click a spot
    $scope.spotOnClick=function (spot) {

        
    }
});
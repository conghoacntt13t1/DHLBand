app.controller('GameController', function ($scope,$http,gameService) {

    $scope.initGame = initGame;

    //used to create game Table
    $scope.gameTable=[];
    //used to create game expressions
    var gameExpressions = [];
    //current expression
    $scope.currentExpression = {};
    //Current number of filled spots
    $scope.count = 0;
    //Total number of spots in game table
    $scope.totalCount = 0;

    function initGame() {
        // initGameExpressions();
        initGameTable();
    }

    function initGameTable() {
        getGameTable(function () {
        //    Do nothing here!
        });
    }

    var getGameTable = function (callback) {
        // gameExpressions = gameService.getExpressions();
        // console.log(gameExpressions);
        $scope.gameTable=gameService.getGameTable();
        $scope.currentExpression=gameService.getCurrentExpression();
        $scope.count = gameService.getCount();
        $scope.totalCount = $scope.gameTable.length * $scope.gameTable[0].length;
        callback && callback ($scope.gameTable);
    };

    function getTable () {
        return $scope.gameTable;
    }

    //handle the event when click a spot
    $scope.spotOnClick=function (spot) {

        
    }
});
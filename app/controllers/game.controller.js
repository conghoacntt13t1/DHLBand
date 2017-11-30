app.controller('GameController', function ($scope,$http,gameService,playerService) {

    $scope.initGame = initGame;

    //used to create game Table
    $scope.gameTable=[];
    //current expression
    $scope.currentExpression = {};
    //Current number of filled spots
    $scope.count = 0;
    //Total number of spots in game table
    $scope.totalCount = 0

    var gametable = [];

    function initGame() {
        // initGameExpressions();
        initGameTable();
    }

    function initGameTable() {
        getGameTable(function () {
            for (var i = 0;i < gametable.length;i++){
                $scope.gameTable[i] = [];
                for (var j=0;j< gametable[i].length;j++){
                    $scope.gameTable[i][j]={};
                    $scope.gameTable[i][j].data = gametable[i][j];
                    $scope.gameTable[i][j].row=i;
                    $scope.gameTable[i][j].col=j;
                }
            }
            console.log("gametable of scope");
            console.log($scope.gameTable);
            $scope.currentExpression=gameService.getCurrentExpression();
            $scope.count = gameService.getCount();
            $scope.totalCount = $scope.gameTable.length * $scope.gameTable[0].length;
        });
    }

    var getGameTable = function (callback) {
        gametable=gameService.getGameTable();
        console.log(gametable);
        callback && callback (gametable);
    };

    // function getTable () {
    //     return $scope.gameTable;
    // }

    //handle the event when click a spot
    $scope.spotOnClick=function (spot) {
        socket.emit('spotClick',{
            'col':spot.col,
            'row':spot.row
        });
    }
});
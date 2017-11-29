app.controller('GameController', function ($scope,$http,gameService) {

    $scope.initGame = initGame;

    //used to create game Table
    $scope.gameTable=[];
    //used to create game expressions
    var gameExpressions=[];
    //current expression
    $scope.currentExpression = {};
    //current answer
    var currentGameValue;

    var gameValue=[];

    var tableIndex = [];

    function initGame() {
        initGameExpressions();
    }


    //Read JSON file and store it to gameExpressions
    function initGameExpressions() {
        getExpressions(function () {
            $scope.currentExpression = randomAnExpression(function () {
                $scope.currentExpression = gameExpressions[index];
                console.log($scope.currentExpression);
            });
        });
    }

    var getExpressions = function (callback) {
        gameExpressions = gameService.getExpressions();
        console.log(gameExpressions);
        callback && callback (gameExpressions);
    };
    
    function makeGameValue() {
        // for (var i=0; i)
    }
    
    var randomAnExpression = function (index, callback) {
        index = randomAnInt(0,gameExpressions.length-1);
        // $scope.currentExpression = gameExpressions[index];
        callback && callback(index);
    };


    function initGameTable() {

        for (var i=0;i<5;i++){
            $scope.gameTable[i]=[];
            for (var j=0;j<5;j++){
                var spot={};
                spot.data='-';
                // spot.col=j;
                $scope.gameTable[i][j]=spot;
            }
        }

        console.log($scope.gameTable);
        return getTable();
    }


    //Utils Functions
    function randomAValue() {
        var row,col;
        do{
            row=randomAnInt(0,4);
            col=randomAnInt(0,4);
            console.log(row+"\t"+col+"\t"+isExist(row,col));
        }while(isExist(row,col));

        do{
            var value=randomAnInt(1,99);
            console.log(value);
        }while (!checkSameValue(value));

        $scope.gameTable[row][col].data=value;
        pushAValue(value);
    }
    
    // return the game table
    function getTable () {
        return $scope.gameTable;
    }
    //used to random an integer in a distance from min to max
    function randomAnInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //return true if data of a cell is not null
    function isExist (row,col) {
        if ($scope.gameTable[row][col].data==='-') return false;
        return true;
    }
    //return true if there is a number in gameValue has the same value of the input value
    //otherwise return false
    function checkSameValue (value) {
        for(var i=0;i<gameValue.length;i++){
            if(gameValue[i]===value){
                return false;
            }
        }
        return true;
    }


    //push a value to gameValue
    function pushAValue (value) {
        gameValue.push(value);
    }


    //handle the event when click a spot
    $scope.spotOnClick=function (spot) {
        // console.log(spot.data);
        
        
    }
});
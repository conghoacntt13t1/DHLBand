app.controller('GameController', function ($scope,$http,gameService) {

    $scope.initGame = initGame;


    //used to create game Table
    $scope.gameTable=[];
    //used to create game expressions
    $scope.gameExpressions=[];


    var gameValue=[];

    function initGame() {
        initGameTable();
        initGameExpressions();
    }
    
    function initGameExpressions() {
        $scope.gameExpressions = gameService.getExpressions();
        console.log($scope.gameExpressions);
    }


    function initGameTable() {

        for (var i=0;i<9;i++){
            $scope.gameTable[i]=[];
            for (var j=0;j<9;j++){
                var spot={};
                spot.data='-';
                // spot.col=j;
                $scope.gameTable[i][j]=spot;
            }
        }

        for(var count = 0; count < 3; count++){
            // console.log(count+"\n");
            randomAValue();
        }

        console.log($scope.gameTable);
        return getTable();
    }

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

    function getTable () {
        return $scope.gameTable;
    }

    function randomAnInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function isExist (row,col) {
        if ($scope.gameTable[row][col].data==='-') return false;
        return true;
    }

    function checkSameValue (value) {
        for(var i=0;i<gameValue.length;i++){
            if(gameValue[i]===value){
                return false;
            }
        }
        return true;
    }

    function pushAValue (value) {
        gameValue.push(value);
    }


    $scope.spotOnClick=function (spot) {
        // console.log(spot.data);
        
        
    }
    



});
app.service('gameService',function () {

    var gameTable=new Array(10,10);
    var gameValue=[];

    this.getTable=function () {
        return gameTable;
    }
    
    this.pushANumber=function (number,row,col) {
        gameTable[row][col]=number;
    };

    this.randomAnInt=function (min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.isExist=function (row,col) {
        // if(gameTable[row][col]==='-'){
        //     return false;
        // }
        // return true;

        return gameTable[row][col]==='-';

    };

    this.checkSameValue=function (value) {
        for(var i=0;i<gameValue.length;i++){
            if(gameValue[i]===value){
                return false;
            }
        }
        return true;
    };

    this.pushAValue=function (value) {
        gameValue.push(value);
    }

    this.initGameTable=function () {
        for(var i=0;i<5;i++){
            for(var j=0;j<5;j++){
                gameTable[i][j]='-';
            }
        }

        for(var count = 0; count < 3; count++){
            // var row,col;
            // do{
            //     row=randomAnInt(0,4);
            //     col=randomAnInt(0,4);
            // }while(isExist(row,col));
            //
            // do{
            //     var value=randomAnInt(1,99);
            // }while (checkSameValue(value));
            //
            // pushAValue(value);

            randomAValue();
        }

        return getTable();
    };

    this.randomAValue=function () {
        var row,col;
        do{
            row=randomAnInt(0,4);
            col=randomAnInt(0,4);
        }while(isExist(row,col));

        do{
            var value=randomAnInt(1,99);
        }while (checkSameValue(value));

        pushAValue(value);
    };

    this.changeANumber=function (row,col,value) {
        for(var i=0;i<gameValue.length;i++){
            if(gameValue[i]===gameTable[row][col]){
                gameValue[i]=value;
            }
        }
        gameTable[row][col]=value;
    };

    this.clickProcess=function (row,col) {

    };



    var mathExpression = [
        {
            expression: "3+4",
            answer: 7
        }
    ]

});
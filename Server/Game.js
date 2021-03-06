// var router = require('express').Router();
var utils = require('./utils');
var expressionsList = [];
var arrTable = [];
var arrOneDim = [];



var setNullValue = function(arrTable){
    for(var i =0; i<4; ++i){
        for(var j=0; j<4; ++j){
            arrTable[i][j] = '-';
        }
    }
};

var swapArrayElements = function(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
};

var initArray = function(){

    arrTable = [];
    for(var i =0; i<4; ++i){
        arrTable[i] = [];
        for(var j=0; j<4; ++j){
            arrTable[i][j] = '-';
        }
    }

};

var initFunction = function(){

    initArray();
    console.log(arrTable);
    arrOneDim = [];

    for(var i =0; i<arrTable.length*arrTable[0].length; ++i){
        arrOneDim[i] = i;
    }
};


var gameSession;
gameSession = function (sessionNum) {
    initFunction();
    expressionsList = utils.getExpressionList();
    var count = 0;
    // console.log("----GAME"+game+"------");
    var index;
    setNullValue(arrTable);
    while (count < sessionNum) {
        index = utils.randomAnInteger(0, arrOneDim.length - count - 1);
        console.log("Value: " + expressionsList[arrOneDim[index]].value);
        arrTable[Math.floor(arrOneDim[index] / (arrTable.length))][arrOneDim[index] % (arrTable[0].length)] = expressionsList[arrOneDim[index]].value.toString();
        swapArrayElements(arrOneDim, index, arrOneDim.length - 1 - count);
        count++;
    }
    var gameSet = [];
    gameSet[0] = arrTable;
    gameSet[1] = expressionsList[index].math;
    gameSet[2] = sessionNum;
    return gameSet;
};


var checkValueOfExpression = function(valueClick, expressionsList, expressionMath){
    var id;
    for (var i = 0; i < expressionsList.length; i++) {
        // console.log(expressionsList[i].value);

        if(expressionsList[i].value === valueClick){
            id = i;
            break;
        }
    }
    return expressionsList[id].math === expressionMath;
};



module.exports = {

    initGameTable: function () {
        var gameSet = gameSession(3,arrTable,arrOneDim);
        return gameSet;
    },

    playGame: function (session, arrTable, arrOneDim) {
        gameSession(session,arrTable,arrOneDim);
    }


};



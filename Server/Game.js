var router = require('express').Router();
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
    //Create a 2d Array with '-' character
    arrTable = [];
    for(var i =0; i<4; ++i){
        arrTable[i] = [];
        for(var j=0; j<4; ++j){
            arrTable[i][j] = '-';
        }
    }
    // console.log(arrTable);
    // return arrTable;
};

var initFunction = function(){
    //Create a 2d Array with '-' character

    initArray();
    console.log(arrTable);
    arrOneDim = [];
    //Create a 1d array with index correspond index 2d Array

    for(var i =0; i<arrTable.length*arrTable[0].length; ++i){
        arrOneDim[i] = i;
    }
};


var gameSession = function(sessionNum){
    initFunction();
    expressionsList = utils.getExpressionList();
    var count = 0;
    // console.log("----GAME"+game+"------");
    var index;
    setNullValue(arrTable);
    while(count<sessionNum){
        index = utils.randomAnInteger(0, arrOneDim.length-count-1);
        console.log("Value: "+expressionsList[arrOneDim[index]].value);
        arrTable[Math.floor(arrOneDim[index]/(arrTable.length))][arrOneDim[index]%(arrTable[0].length)] = expressionsList[arrOneDim[index]].value.toString();
        swapArrayElements(arrOneDim, index, arrOneDim.length-1-count);
        count++;
    }
};


module.exports = {

    initGameTable: function () {
        gameSession(1,arrTable,arrOneDim);
        return arrTable;
    },

    playGame: function (session, arrTable, arrOneDim) {
        gameSession(session,arrTable,arrOneDim);
    }
    //
    // // initFunction(arrTable, arrOneDim);
    //
    // expressionsList = utils.getExpressionList();
    // var game = 0;
    //
    // while(game < arrOneDim.length){
    //     var count = 0;
    //     game++;
    //     console.log("----GAME"+game+"------");
    //     var index;
    //     setNullValue(arrTable);
    //     while(count<game){
    //         index = utils.randomAnInteger(0, arrOneDim.length-count-1);
    //         console.log("Value: "+expressionsList[arrOneDim[index]].value);
    //         arrTable[Math.floor(arrOneDim[index]/(arrTable.length))][arrOneDim[index]%(arrTable[0].length)] = expressionsList[arrOneDim[index]].value.toString();
    //         swapArrayElements(arrOneDim, index, arrOneDim.length-1-count);
    //         count++;
    //     }
    //     console.log("Expression: "+expressionsList[arrOneDim[index]].math);
    // }


};



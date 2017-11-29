app.service('gameService',function () {

    var gameExpressions = [];
    var currentExpression = "";
    var gameTable;
    var gameCount;

    var getExpressions  = function (){
        return gameExpressions;
    };
    
    // var addAnExpression=function (expression) {
    //     gameExpressions.push(expression);
    // };
    //
    // var setExpressions=function (expressions){
    //     gameExpressions=expressions;
    // };

    var setGameTable=function (gameTable) {
        this.gameTable = gameTable;
    };

    var getGameTable=function () {
        return this.gameTable;
    };
    var setCurrentExpression = function (expression) {
        currentExpression = expression;
    };

    var getCurrentExpression = function () {
        return currentExpression;
    };

    var setCount = function (count) {
        gameCount = count;
    };

    var getCount = function () {
        return gameCount;
    };

    return {
        getExpressions:getExpressions,
        // addAnExpression:addAnExpression,
        // setExpressions:setExpressions,
        setGameTable:setGameTable,
        getGameTable:getGameTable,
        setCurrentExpression:setCurrentExpression,
        getCurrentExpression:getCurrentExpression,
        setCount:setCount,
        getCount:getCount
    }

});
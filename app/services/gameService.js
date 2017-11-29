app.service('gameService',function () {

    var gameExpressions = [];
    var gameTable;

    var getExpressions  = function (){
        return gameExpressions;
    };
    
    var addAnExpression=function (expression) {
        gameExpressions.push(expression);
    };

    var setExpressions=function (expressions){
        gameExpressions=expressions;
    };

    var setGameTable=function (gameTable) {
        this.gameTable = gameTable;
    };

    var getGameTable=function () {
        return this.gameTable;
    };

    return {
        getExpressions:getExpressions,
        addAnExpression:addAnExpression,
        setExpressions:setExpressions,
        setGameTable:setGameTable,
        getGameTable:getGameTable
    }

});
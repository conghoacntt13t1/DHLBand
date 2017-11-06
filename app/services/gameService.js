app.service('gameService',function () {

    var gameExpressions = [];

    var getExpressions  = function (){
        return gameExpressions;
    };
    
    var addAnExpression=function (expression) {
        gameExpressions.push(expression);
    };

    var setExpressions=function (expressions){
        gameExpressions=expressions;
    };

    return {
        getExpressions:getExpressions,
        addAnExpression:addAnExpression,
        setExpressions:setExpressions
    }

});
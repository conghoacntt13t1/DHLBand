//Global variables
var JSONFile = require('jsonfile');
var fileName = "./data.json";
var expressionsList = [];

module.exports = {

    getExpressionList: function () {
        JSONFile.readFile(fileName, function (err, JSONData) {
            if(err) throw err;
            var expressions = [];
            var expression = {};

            // console.log(JSONData);

            for(var i = 0;i<JSONData.length;i++){
                expression.math=JSONData[i].math;
                expression.value=JSONData[i].value;
                expressions[i]=expression;
                // console.log(expression);
            }
            expressionsList=expressions;
            // console.log(expressionsList);
        });
        return expressionsList;
    }
};
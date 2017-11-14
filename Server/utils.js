//Global variables
var JSONFile = require('jsonfile');
var fileName = "./data.json";
var expressionsList = [];

module.exports = {

    getExpressionList: function () {
        //  var expressions = [];
        // var expression = {};
        // JSONFile.readFile(fileName, function (err, JSONData) {
        //     if(err) throw err;
        //     expressions = JSON.stringify(JSONData);
        //     console.log(expressions);
        //
        //     for(var i = 0;i<JSONData.length;i++){
        //         expression.math=JSONData[i].math;
        //         expression.value=JSONData[i].value;
        //         expressions[i]=expression;
        //         // console.log(expression);
        //     }
        //     expressionsList=expressions;
        //     console.log(expressionsList);
        // });
        // console.log(expressions);
        // return expressions;
        var json = JSON.parse(require('fs').readFileSync(fileName, 'utf8'));
        return json;
    }
};
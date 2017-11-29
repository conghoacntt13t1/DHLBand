//Global variables
var JSONFile = require('jsonfile');
var fileName = "./data.json";
var expressionsList = [];

module.exports = {

    getExpressionList: function () {
        var json = JSON.parse(require('fs').readFileSync(fileName, 'utf8'));
        return json;
    },

    randomAnInteger:function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


};
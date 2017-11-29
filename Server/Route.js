var router = require("express").Router();
var utils = require('./utils');
var game = require('./Game');

router.get('/game',function (req,res) {
    // var ArrTable =[], ArrOneDim=[];
    var ArrTable = game.initGameTable();
    console.log(ArrTable);
    res.send(ArrTable);
});


module.exports=router;
//
// router.get('/room',function () {
//
// });
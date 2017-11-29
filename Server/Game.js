var router = require('express').Router();
var utils = require('./utils');

router.get('/game',function (req,res) {
    var data = utils.getExpressionList();

});

router.get('')
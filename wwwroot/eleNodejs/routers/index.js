/**
 * Created by Administrator on 2018/3/20 0020.
 */
var express = require('express');
var router = express.Router();
var async = require('async');
var db = require('../module/db.js');

router.get('/', function(req, res) {

    res.render('index')

})

module.exports = router;
/**
 * Created by Administrator on 2018/3/20 0020.
 */
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient
var ObjectId = mongodb.ObjectId
var DB = require('../module/db.js');
var multiparty = require('multiparty')
var app = express()
app.set('view engine', 'ejs')
    //const dbUrl = 'mongodb://localhost:27017';
    //const dbName=''


app.use(express.static('static'))
app.use('/static', express.static('static'))

var user = require('./admin/user.js');
var order = require('./admin/order.js');
var shop = require('./admin/shop.js');
var coustors = require('./admin/coustors.js');


router.get('/', function(req, res) {
    // res.send('admin')
    res.render('index') //这里是ejs后台首页()

})



router.use('/user', user);
router.use('/order', order);
router.use('/shop', shop);
router.use('/coustors', coustors);


module.exports = router;
/**
 * Created by Administrator on 2018/3/20 0020.
 */
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var ObjectId = mongodb.ObjectId
var DB = require('../../module/db.js');
var multiparty = require('multiparty')
var app = express()
app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use('/static', express.static('static'))
    //显示页面
router.get('/', function(req, res) {
    DB.find('order', {}, function(data) {
        // console.log(data);
        res.render('order/index', {
            list: data
        });
    })

});

//删除
router.get('/del', function(req, res) {


    DB.find('order', {}, function(data) {
        var id=req.query.id;
        DB.del("order",{"_id":new DB.ObjectId(id)},function (ree) {
            if(!ree){
                res.redirect('/admin/order')
            }

        })
    })
})

//增加
router.get('/add', function(req, res) {
    res.render('order/add', {
        list: "11"
    });
})

router.post('/doAdd',function(req,res){

    console.log(req.body);

    DB.insert('order',req.body,function(err){

        if(!err){

            res.redirect('/admin/order')
        }
    })


})




module.exports = router;
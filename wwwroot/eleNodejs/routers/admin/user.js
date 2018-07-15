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
    DB.find('user', {}, function(data) {

        res.render('user/index', {
            list: data
        });
    })

})

router.get('/add',function(req,res){

    res.render('user/add');
})

router.post('/doAdd',function(req,res){
    var form=new multiparty.Form()
    form.uploadDir='static/upload'

    form.parse(req,function (err,fields,files) {
        var username=fields.username[0]
        var password=fields.password[0]
        var tel=fields.tel[0]
        var add_time=fields.add_time[0]
        var status=fields.status[0]
        DB.insert('user',{username,password,status,tel,add_time},function (err) {
            if(err){
                console.log(err);
                return
            }
            res.redirect('/admin/user')
        })
    })
})



router.get('/edit',function(req,res){
    var id=req.query.id;
    DB.find('user',{'_id':new ObjectId(id)},function (data) {

        res.render('user/edit',{
            zz:data[0]
        });
    })
})

router.post('/doEdit',function (req,res) {
    var form = new multiparty.Form();
    form.uploadDir='static/upload'
    form.parse(req,function (err,fields,files) {
        var id=fields.id[0]
        var username=fields.username[0]
        var password=fields.password[0]
        var tel=fields.tel[0]
        var add_time=fields.add_time[0]
        var status=fields.status[0]
        DB.update('user',{'_id':new ObjectId(id)},{username,password,status,tel,add_time},function (err) {
            if(err){
                console.log(err);
            }
            res.redirect('/admin/user')
        })


    })
})
router.get('/userdel',function (req,res) {
    var id=req.query.id
    DB.find('user',{"_id":new ObjectId(id)},function (data) {
        DB.del('user',data[0],function (err) {
            if(err){
                console.log(err);
            }
        })
        res.redirect('/admin/user')
    })
})





module.exports = router;
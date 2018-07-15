/**
 * Created by Administrator on 2018/3/20 0020.
 */
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient
var ObjectId = mongodb.ObjectId
var DB = require('../../module/db.js');
var multiparty = require('multiparty')
var app = express()
app.set('view engine', 'ejs')
    //const dbUrl = 'mongodb://localhost:27017';
    //const dbName=''


app.use(express.static('static'))
app.use('/static', express.static('static'))




router.get('/', function(req, res) {
    
    DB.find('admin', {}, function(data) {

        res.render('coustors/index', {
            list: data
        });
    })
  

})

router.get('/add',function(req,res){

    res.render('coustors/add');
})

router.post('/doAdd',function(req,res){
    var form=new multiparty.Form()
    form.uploadDir='static/upload'

    form.parse(req,function (err,fields,files) {
        var username=fields.username[0]
        var password=fields.password[0]
        var status=fields.status[0]
        DB.insert('admin',{username,password,status},function (err) {
            if(err){
                console.log(err);
                return
            }
            res.redirect('/admin/coustors')
        })
    })
})



router.get('/edit',function(req,res){
    var id=req.query.id;
    DB.find('admin',{'_id':new ObjectId(id)},function (data) {

        res.render('coustors/edit',{
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
        var status=fields.status[0]
        DB.update('admin',{'_id':new ObjectId(id)},{username,password,status},function (err) {
            if(err){
                console.log(err);
            }
            res.redirect('/admin/coustors')
        })


    })
})
router.get('/coustorsdel',function (req,res) {
    var id=req.query.id
    DB.find('admin',{"_id":new ObjectId(id)},function (data) {
        DB.del('admin',data[0],function (err) {
            if(err){
                console.log(err);
            }
        })
        res.redirect('/admin/coustors')
    })
})





module.exports = router;
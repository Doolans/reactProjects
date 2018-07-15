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
    DB.find('shop', {}, function(data) {
        console.log(data);
        res.render('shop/index', {
            list: data
        });
    })
})

router.get('/add', function(req, res) {
    //res.send('增加用户')
    res.render('shop/add');
})



router.post('/doAdd', function(req, res) {
    var form = new multiparty.Form()
    form.uploadDir = 'static/upload'

    form.parse(req, function(err, fields, files) {
        var name= fields.name[0]
        var pic= files.pic[0].path
        var description= fields.description[0]
        var address= fields.address[0]
        var tel= fields.tel[0]
        var status= fields.status[0]
        DB.insert('shop', { name, pic, description, address, tel, status }, function(err) {
            if (err) {
                console.log(err);
                return
            }
            res.redirect('/admin/shop')
        })
    })
})


router.get('/edit', function(req, res) {
    var id = req.query.id;
    DB.find('shop', { '_id': new ObjectId(id) }, function(data) {

        res.render('shop/edit', {
            ss: data[0]
        });
    })
})

router.post('/doEdit', function(req, res) {
    var form = new multiparty.Form();
    form.uploadDir = 'static/upload'
    form.parse(req, function(err, fields, files) {
         console.log(fields)
        // console.log(files.pic[0].path)
        var id = fields.id[0]
        var name = fields.name[0]
        var pic = files.pic[0].path;
        var description = fields.description[0];
        var address = fields.address[0];
        var tel = fields.tel[0];
        var add_time = fields.add_time[0];
        var status = fields.status[0]
        var originalFilename = files.pic[0].originalFilename;
        if (originalFilename) {
            var json = {
                name,
                description,
                address,
                pic,
                tel,
                add_time,
                status
            }
        } else {
            var json = {
                name,
                description,
                address,
                tel,
                add_time,
                status
            }
        }

        DB.update('shop', { '_id': new ObjectId(id) }, json, function(err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/admin/shop')
        })


    })
})



router.get('/userdel', function(req, res) {
    var id = req.query.id
    DB.find('shop', { "_id": new ObjectId(id) }, function(data) {
        DB.del('shop', data[0], function(err) {
            if (err) {
                console.log(err);
            }
        })
        res.redirect('/admin/shop')
    })
})


module.exports = router
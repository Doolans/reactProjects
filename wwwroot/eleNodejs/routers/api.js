

/**
 * Created by Administrator on 2018/3/20 0020.
 */
var express = require('express');
var router = express.Router();
var DB = require('../module/db.js');
var mongodb = require('mongodb')
var multiparty=require('multiparty');
var ObjectId = mongodb.ObjectId
var bodyParser = require('body-parser')
var async=require('async'); 


router.get('/', function(req, res) {

    res.send('这里是api')

})


router.get('/shop/:id?', function(req, res) {
    //cid
    var id = req.params.id;
    // console.log(id);
    if(id){
        DB.find('shop', { _id: new ObjectId(id) }, function(data) {
            res.jsonp({ /*支持ajax 和jsonp*/
                result: data
            })
        })
    }else{
        console.log(req.body)
        DB.find('shop', {}, function(data) {
            res.jsonp({ /*支持ajax 和jsonp*/
                result: data
            })
        })
    }
    
})

router.get('/searchshop',function(req,res){

    // console.log('555555');
    // console.log(req.query.userinfo)
    var info=req.query.userinfo 

     DB.find('shop',{"name": { $regex:new RegExp(info)}},function(data){
        console.log(data);

        res.jsonp({ /*支持ajax 和jsonp*/
            result: data
        })

         
      });  
})

router.post('/dologinnum', function(req, res) {

// console.log(req.body.usernum);

var code='';
var last='';
var codelength=4;
var random = new Array(2,3,4,5,6,7,8,9,'A','B','C','D');
for(var i = 0; i < codelength; i++){
    //设置随机数范围
     var index = Math.floor(Math.random()*12);
     //字符串拼接 将每次随机的字符 进行拼接
     code += random[index]; 
}
//将拼接好的字符串赋值给展示的Value
last = code;

res.jsonp({
    randomNum:last
})



})

router.post('/doLoginss', function(req, res){

    // insert
    console.log(req.body.username)
    DB.find('user', {"username":req.body.username}, function(data) {
        // console.log('用户增加成功')
        // console.log(data);

        if(data.length<1){

            DB.insert('user', req.body, function(data) {
              // console.log(data);
                res.jsonp({ /*支持ajax 和jsonp*/
                    result: data,
                    status:0
                })
            })
            console.log('用户增加成功');

        }else{

            res.jsonp({ /*支持ajax 和jsonp*/
                result: '此用户已注册',
                status:1
            })

            console.log('用户增加失败');
        }

       
    })

   
   
})

router.post('/doBooklist', function(req, res){
// console.log(55555);
// console.log(req.body);
    // insert
    
    DB.insert('order', req.body, function(data) {

        // console.log(data);
        res.jsonp({ /*支持ajax 和jsonp*/
            result: data
        })
    })
    console.log('增加订单成功')
})



router.get('/order', function(req, res) {
   
    console.log(req.query.username)

    DB.find('order', {"name":req.query.username}, function(data) {
        res.jsonp({ /*支持ajax 和jsonp*/
            result: data
        })
    })

})




module.exports = router;
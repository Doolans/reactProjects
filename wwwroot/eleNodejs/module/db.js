/**
 * Created by Administrator on 2018/3/20 0020.
 *//**
 * Created by Administrator on 2018/3/6 0006.
 */
var mongodb = require('mongodb');
var MongoClient=require('mongodb').MongoClient
var ObjectId = mongodb.ObjectId;
var dbUrl='mongodb://10.36.139.163:27017/'
var dbName='Elereact'


//建立连接
function __connect(cb) {
    MongoClient.connect(dbUrl, function (err, client) {
        if (err) {
            console.log(err);
            return false
        }
        cb(err, client)
    })
}


exports.ObjectId=ObjectId;

//查找数据
exports.find=function(collectionName,json1,json2,json3,cb){
    //条件
    if(arguments.length==3){
        var slipNum=0;       /*跳过的条数据*/
        var pageSize=0;
        var attr={};  /*要查询的字段*/
        cb=json2;
    }else if(arguments.length==4){
        var slipNum=0;
        var pageSize=0;
        var attr=json2;  /*要查询的制度*/
        cb=json3;
    }else if(arguments.length==5){
        var attr=json2;  /*要查询的字段*/
        var slipNum=(json3.page-1)*json3.pageSize;
        var pageSize=json3.pageSize;
    } else{
        console.log('参数错误');
    }
    __connect(function(err,client){
        var db=client.db(dbName);
        //条件

        //console.log(JSON.stringify());

        var result=db.collection(collectionName).find(json1,attr).skip(slipNum).limit(pageSize);
        result.toArray(function(err,docs){
            //docs  查询到的数据
            // console.log(docs);
            if(err){
                console.log(err);
                return;
            }
            cb(docs);
            client.close();  /*关闭数据库*/
        })
    })

}

//增加数据
exports.insert=function(collectionName,json,cb){

    __connect(function(err,client){
        //��������
        var db=client.db(dbName);

        db.collection(collectionName).insertOne(json,function(err){
            cb(err);
        })

    })
}
//修改数据
exports.update=function (collectionName,json1,json2,cb) {
    __connect(function (err,client) {
        var db=client.db(dbName)
        db.collection(collectionName).updateMany(json1,{
            $set:json2
        },function (err) {
            cb(err)
        })

    })
}


exports.del=function (collectionName,json,cb) {
    __connect(function (err,client) {
        var db=client.db(dbName)
        db.collection(collectionName).deleteOne(json,function (err) {
            cb(err)
        })
    })
}


exports.count=function(collectionName,json,cb){

    __connect(function(err,client){
        //增加数据
        var db=client.db(dbName);
        //注意  新版本mongodb 返回的是一个promise
        var result=  db.collection(collectionName).count(json);

        result.then(function(count){
            cb(count);
        })
    })
}


//官网：https://caolan.github.io/async/docs.html#series

//1.安装es7的 async模块      cnpm install async --save

//2.引入var async=require('async');


//series 串行   、 parallel并行


var async=require('async');

//console.log(async);


// console.log(async);

//串行 ： 一个执行完成再去执行另一个
//
//console.time('series');
//async.series([
//    function one(callback){
//        //异步方法
//        setTimeout(function(){
//            //张三
//            callback(null,'张三')
//
//        },2000)
//    },
//    function two(callback){        //异步方法
//        setTimeout(function(){
//            //张三
//            callback(null,'李四')
//
//        },3000)
//    }
//
//],function(err,data){
//
//    console.log(data);
//
//    console.timeEnd('series');
//})
//




//串行的另一种写法

//console.time('timename');
//async.series({
//    newsList:function(callback){
//
//        setTimeout(function(){
//            callback(null,'新闻列表数据')
//
//        },1000)
//    },
//    newsCate:function(callback){
//        setTimeout(function(){
//            callback(null,'新闻分类数据');
//        },2000)
//    }
//
//},function(err,data){
//    console.log(data);
//
//    console.timeEnd('timename');
//})



//并行
console.time('timename');
async.parallel({
    newsList:function(callback){
        setTimeout(function(){
            callback(null,'新闻列表数据')

        },1000)
    },
    newsCate:function(callback){
        setTimeout(function(){
            callback(null,'新闻分类数据');
        },2000)
    }

},function(err,data){
    console.log(data);
    console.timeEnd('timename');
})



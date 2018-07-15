/**
 * Created by Administrator on 2018/3/20 0020.
 */
var express=require('express');
var bodyParser = require('body-parser');

var session = require('express-session');


var app=express();

//session的中间件
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

app.set('view engine','ejs');

//允许后台跨域   

app.all('*', function(req, res, next) {
    //设置全局访问
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //告诉客户端可以在HTTP请求中带上Cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    //告诉客户端可以接受请求的方式
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("X-Powered-By",' 3.2.1')
    next();

});

//静态web服务\

app.use(express.static('static'))
app.use('/static',express.static('static'))
//  static/upload/PBOqEnzwYYdiACMzdJwhA8jY.jpg
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var admin=require('./routers/admin.js');

var api=require('./routers/api.js');

var index=require('./routers/index.js');



app.use('/admin', admin);
app.use('/api', api);
app.listen(2010);
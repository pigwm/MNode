var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apwRouter = require("./routes/apw");
var adminRouter = require("./routes/admin");
var session = require("express-session")
var MongoStore = require("connect-mongo")
require("./config/connect")

var app = express();
app.use(session({
	// 服务器生成session签名
	secret:"this is sessin",
	resave:true,
	saveUninitialized:true,
	cookie:{
		maxAge:1000*60*60,
		secure:false
	},
	rolling:true
	// store:MongoStore.create({
	// 	mongoUrl:'mongodb://localhost:27017/session',
	// 	ttl:1000*60*60
	// })
}))
// // 重定向生成
app.use((req,res,next)=>{
	if (req.url.includes("/apw")||req.url.includes("/admin")) {
	   next();
	} else {

		if (req.url != "/") {
			if (req.session.flag) {
				next();
			} else {
				res.redirect("/");
			}
		} else {
			next();
		}
	}
   })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 处理跨域中间件
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With,Content-Type")
	res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS")
	// res.header("Content-Type", "multipart/form-data")
	
	next();
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 设置文件上传时存放文件的静态文件目录
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apw', apwRouter);
app.use('/admin', adminRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

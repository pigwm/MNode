var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Films");
// 数据库连接成功的事件：
mongoose.connection.once("open",function(){
	console.log("数据库Film连接成功");
})
// // 数据库断开连接：（一般不需要）
// mongoose.connection.once("close",funnction(){

// })
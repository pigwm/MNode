var mongoose = require("mongoose");
const {Film,User,Cinema,Classic,Com,City} = require("../demo/schema")
// 创建模型 模型名字对应集合名字
// const FilmSchema = new mongoose.Schema({
  
// })
const SwipeSchema = new mongoose.Schema({
    comingTitle:String,
    img:String,
    id: Number,
    nm:String,
    rt:String,
    sc:String,
    wish:String
})
const ComSwSchema = new mongoose.Schema({
    id: Number,
    img: String,
    wish: Number,
    wishst: Number,
    nm: String,
    comingTitle: String
})
const FilteSchema = new mongoose.Schema({
    
    // data:Object,
    // headers: Object,
    // config: Object,
    // request: Object,
    // brand:Object,
    // district:Object,
    // hallType:Object,
    // service:Object,
    // subway:Object,
    // timeRanges:Object
})


  // 创建Swipe模块 
var Swipe = mongoose.model("swipe",SwipeSchema); 


var Conswiper = mongoose.model("wish",ComSwSchema);

var Filter = mongoose.model("filterCinema",FilteSchema);

let flimserver={
    HotServer:()=>{
        return Film.find();
    },
    LikeServer:()=>{
        return Swipe.find();
    },
   WishServer:()=>{
        return Conswiper.find();
    },
    ComServer:()=>{
        return Com.find();
    },
    ClassicServer:()=>{
        return Classic.find();
    },
    FilterServer:()=>{
        return Filter.find();
    },
    redisterServer:(user,psd)=>{

       return User.create({
            username:user,
            password:psd,
        })
    },
    LoginServer:(user,psd)=>{
        return User.find({username:user, password:psd})
    },
    VedioServer:()=>{
        return Filter.find();
    },
    CinemasServer:(id)=>{
       return Cinema.find({id:id})
    },
    EditUserServer:async (username,age,hobby,id)=>{
        User.update({_id:{$in:id}},{username,age,hobby}).then(res=>{
            return res;
         })
    },
    CityServer:()=>{
        return City.find()
     },
}


module.exports = flimserver;
var mongoose = require("mongoose");

let schema = {
    FilmSchema:{
        boxInfo: String,
        cat: String,
        comingTitle:String,
        desc:String,
        img:String,
        dur: Number,
        id: Number,
        nm:String,
        pubDesc:String,
        rt:String,
        sc:String,
        src:String,
        showInfo: String,
        ver: String,
        star:String,
        vnum:String,
        wish:String
    },
    UserSchema:{
        username: String,
        password: String,
        age:String,
        sex:String,
        hobby:String,
        logo:String,
        id:String
    },
    CinemaSchema:{
        id: Number,
        cinemas: Object,
        resId:String,
    },
    CitySchema:{
        id: Number,
        nm: String,
        py:String
    }

}

let Film = mongoose.model("hotfilm",schema.FilmSchema);
let User = mongoose.model("user",schema.UserSchema);
let Cinema = mongoose.model("cinema",schema.CinemaSchema);
let Classic = mongoose.model("classic",schema.FilmSchema);
let Com = mongoose.model("morecom",schema.FilmSchema);
let City = mongoose.model("city",schema.CitySchema);

module.exports = {Film,User,Cinema,Classic,Com,City};
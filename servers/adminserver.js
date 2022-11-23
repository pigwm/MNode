var mongoose = require("mongoose");
const {Film,User,Cinema,Classic,Com,City} = require("../demo/schema")
let adminserver = {
    HotServer:()=>{
        return Film.find();
    },
    delhotrServer:(id)=>{
        Film.deleteOne({_id:{$in:id}}).then(res=>{
            console.log(res);
        })
    },
    searchServer:(text)=>{
        console.log(text)
        if (text != " ") {
            return Film.find({nm:new RegExp(text)});
        }
    },
    addHotServer:(nm,rt,star,sc)=>{
        return Film.create({
            nm,rt,star,sc
        })
    },
    ComServer:()=>{
        return Com.find();
    },
    ComsearchServer:(text)=>{
        return Com.find({nm:new RegExp(text)});
    },
    delComServer:(id)=>{
        Com.deleteOne({_id:{$in:id}}).then(res=>{
            console.log(res);
        })
    },
    addComServer:(nm,rt,star,wish)=>{
        return Com.create({
            nm,rt,star,wish
        })
    },
    ClassciServer:()=>{
        return Classic.find();
    },
    ClassicsearchServer:(text)=>{
        return Classic.find({cat:new RegExp(text)});
    },
    delClassicServer:(id)=>{
        Classic.deleteOne({_id:{$in:id}}).then(res=>{
            // console.log(res);
        })
    },
    addClassicServer:(nm,cat,src,wish)=>{
        return Classic.create({
            nm,cat,src,wish
        })
    },
    UserServer:()=>{
        return User.find();
    },
    delUserServer:(id)=>{
        User.deleteOne({_id:{$in:id}}).then(res=>{
            // console.log(res);
        })
    },
    searchUserServer:(text)=>{
        console.log(text)
        if (text != " ") {
            return User.find({username:new RegExp(text)});
        }
    },
    addUserServer:(username,password,sex,age)=>{
        return User.create({
            username,password,sex,age
        })
    },
    editUserServer:(username,sex,age,hobby,id)=>{
        User.update({_id:{$in:id}},{username,sex,age,hobby}).then(res=>{
           return res;
        })
    },
    CityServer:async (pageNum,num)=>{
        let data = {};
        await City.find().sort({id:1}).skip((pageNum-1)*num).limit(num).then(res=>{
            data.list = res;
        })
        await City.find({}).count().then(res=>{
            data.total = res;
        })
       data.num = num;
        return data;
    },
    delCityServer:(id)=>{
        City.deleteOne({_id:{$in:id}}).then(res=>{
            // console.log(res);
        })
    },
}

module.exports = adminserver;
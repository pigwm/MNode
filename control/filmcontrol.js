var flimserver = require('../servers/flimserver')


var flimcontrol={
    HotControl:async(req,res)=>{
      const data = await flimserver.HotServer();
      // console.log();
      res.send(data);
    },
    LikeControl:async(req,res)=>{
      const data = await flimserver.LikeServer();
      res.send(data);
    },
    WishControl:async(req,res)=>{
      const data = await flimserver.WishServer();
      res.send(data);
    },
    ComControl:async(req,res)=>{
      const data = await flimserver.ComServer();
      res.send(data);
    },
    ClassicControl:async(req,res)=>{
      const data = await flimserver.ClassicServer();
      res.send(data);
    },
    FilterCinemaControl:async(req,res)=>{
      const data = await flimserver.FilterServer();
      res.send(data);
    },
    redisterControl:async(req,res)=>{
        const {username,password,age} = req.body;
        console.log(req.body);
        const data = await flimserver.redisterServer(username,password,age);
        if(data.username == username){
          res.send({ok:true});
        }else{
          res.send({ok:false});
        }
  },
  LoginControl:async(req,res)=>{
    console.log(req.body);
    var {username,password} = req.body;
    var data = await flimserver.LoginServer(username,password);
    if (data.length==0) {
        res.send({ok:false});
    } else {
        req.session.flag = true;
        res.send({ok:true,data:data});
    }
  },
  VedioControl:async(req,res)=>{
    const data = await flimserver.VedioServer();
    console.log(data);
    res.send(data);
  },
  CinemasControl:async(req,res)=>{
    var id = req.query.id;
    const data = await flimserver.CinemasServer(id);
    console.log(data);

    res.send(data)
  },
  EditControl:async(req,res)=>{
    var {username,age,hobby,id} = req.body;
    console.log(req.body)
    await flimserver.EditUserServer(username,age,hobby,id);
    res.send({ok:true});
  },
  CityControl:async(req,res)=>{
    var id = req.query.id;
    const data = await flimserver.CityServer(id);
    res.send(data)
  },
}

module.exports = flimcontrol;
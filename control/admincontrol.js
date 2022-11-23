var adminserver = require('../servers/adminserver')

var admincontrol = {
    HotControl:async(req,res)=>{
        const data = await adminserver.HotServer();
        res.send(data);
      },
    delHotControl:async (req,res)=>{
      let id = req.query.id;
      // console.log(req.query.id);
      await adminserver.delhotrServer(id);
      res.send({ok:1})
    },
    searchControl:async (req,res)=>{
      // console.log(req.query.text)
      var text = req.query.text;
      const data = await adminserver.searchServer(text);
      res.send(data)
    },
    addHotControl:async(req,res)=>{
      console.log(req.body);
        const {nm,rt,star,sc} = req.body;
        const data = await adminserver.addHotServer(nm,rt,star,sc);
        if(data.nm == nm){
          res.send({ok:true});
        }else{
          res.send({ok:false});
        }
  },
  ComControl:async(req,res)=>{
    const data = await adminserver.ComServer();
    res.send(data);
  },
  addComControl:async(req,res)=>{
    console.log(req.body);
      const {nm,rt,star,wish} = req.body;
      const data = await adminserver.addComServer(nm,rt,star,wish);
      if(data.nm == nm){
        res.send({ok:true});
      }else{
        res.send({ok:false});
      }
  },
  searchComControl:async (req,res)=>{
    var text = req.query.text;
    const data = await adminserver.ComsearchServer(text);
    res.send(data)
  },
  delComControl:async (req,res)=>{
    let id = req.query.id;
    await adminserver.delComServer(id);
    res.send({ok:true})
  },
  ClassicControl:async(req,res)=>{
    const data = await adminserver.ClassciServer();
    res.send(data);
  },
  searchClassicControl:async (req,res)=>{
    var text = req.query.text;
    const data = await adminserver.ClassicsearchServer(text);
    res.send(data)
  },
  addClassicControl:async(req,res)=>{
    console.log(req.body);
      const {nm,cat,src,wish} = req.body;
      const data = await adminserver.addClassicServer(nm,cat,src,wish);
      if(data.nm == nm){
        res.send({ok:true});
      }else{
        res.send({ok:false});
      }
  },
  delClassicControl:async (req,res)=>{
    let id = req.query.id;
    await adminserver.delClassicServer(id);
    res.send({ok:true})
  },
  UserControl:async(req,res)=>{
    const data = await adminserver.UserServer();
    res.send(data);
  },
  delUserControl:async (req,res)=>{
    let id = req.query.id;
    await adminserver.delUserServer(id);
    res.send({ok:true})
  },
  searchUserControl:async (req,res)=>{
    var text = req.query.text;
    const data = await adminserver.searchUserServer(text);
    res.send(data)
  },
  addUserControl:async(req,res)=>{
    console.log(req.body);
      const {username,password,sex,age} = req.body;
      const data = await adminserver.addUserServer(username,password,sex,age);
      if(data.username == username){
        res.send({ok:true});
      }else{
        res.send({ok:false});
      }
  },
  editUserControl:async(req,res)=>{
    console.log(req.body,req.query.id)

    var {username,sex,age,hobby} = req.body;
    var id = req.query.id;
    await adminserver.editUserServer(username,sex,age,hobby,id);
    res.send({ok:true});
  },
  CityControl:async(req,res)=>{
    var {pageNum,num} = req.query;
    var data = await adminserver.CityServer(pageNum,num);
    res.send(data)
  },
  delCityControl:async (req,res)=>{
    let id = req.query.id;
    await adminserver.delCityServer(id);
    res.send({ok:true})
  },
}

module.exports = admincontrol;

var express = require('express');
var router = express.Router();
const admincontrol = require('../control/admincontrol')
var multer = require("multer");
// 配置文件存放目录
var upload = multer({dest:'uploads/'})


// 获取正在热映
router.get('/getHot', admincontrol.HotControl);
// 删除正在热映
router.get('/delHot', admincontrol.delHotControl);
// 搜索
router.get('/searchHot', admincontrol.searchControl);
// 新增
router.post('/addHot', admincontrol.addHotControl);

// 获取即将
router.get('/getCom', admincontrol.ComControl)
router.get('/searchCom', admincontrol.searchComControl);
router.get('/delCom', admincontrol.delComControl);
router.post('/addCom', admincontrol.addComControl);


// 获取经典
router.get('/getClassic', admincontrol.ClassicControl)
router.get('/searchClassic', admincontrol.searchClassicControl);
router.get('/delClassic', admincontrol.delClassicControl);
router.post('/addClassic', admincontrol.addClassicControl);


//获取用户
router.get('/getUser', admincontrol.UserControl)
router.get('/searchUser', admincontrol.searchUserControl);
router.get('/delUser', admincontrol.delUserControl);
router.post('/addUser', admincontrol.addUserControl);
router.post('/editUser', admincontrol.editUserControl);

router.get('/getCity', admincontrol.CityControl);
router.get('/delCity', admincontrol.delCityControl);






module.exports = router;
var express = require('express');
var router = express.Router();
const flimcontrol = require('../control/filmcontrol')
var multer = require("multer");
// 配置文件存放目录
var upload = multer({dest:'uploads/'})


// 获取正在热映
router.get('/getHot', flimcontrol.HotControl);

// 获取正在热映的swiper
router.get('/getLike', flimcontrol.LikeControl);

// 获取即将上映的swiper
router.get('/getwish', flimcontrol.WishControl);

// 获取即将上映
router.get('/getcom', flimcontrol.ComControl);
// 获取经典
router.get('/getclassic', flimcontrol.ClassicControl);
// 获取城市和影城品牌
router.get('/getfilter', flimcontrol.FilterCinemaControl);
router.get('/cities', flimcontrol.CityControl);
// 注册
router.post('/redister', flimcontrol.redisterControl);
// 登录
router.post('/login', flimcontrol.LoginControl);
// vedio
router.get('/vedio', flimcontrol.VedioControl);

router.get('/cinemas',flimcontrol.CinemasControl);

router.post('/edit',flimcontrol.EditControl);

module.exports = router;
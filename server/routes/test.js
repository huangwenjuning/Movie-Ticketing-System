var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Test = require('../models/test');

// 连接数据库
mongoose.connect('mongodb://localhost:3000/test', { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success.');
});

mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail.');
});

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected.');
});

router.get('/test', function (req, res, next) {
  res.render('成功啦~');
});

module.exports = router;

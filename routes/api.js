/**
 * Created by syzx9801@163.com on 2017/9/19.
 */

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/DB.Config');
var userSQL = require('../db/usedb');

var pool = mysql.createPool( dbConfig.mysql );  //连接池

router.use(function(req,res,next){
    //中间件
    next();
})

router.get('/getallarticlelist', function(req, res, next) {
    pool.getConnection(function(err,conn){
        conn.query(userSQL.queryAll,function(err,result){
            if(err){
                console.log('读取错误！'+err);
            }
            if(result){
                console.log(result);
                res.json({mes:'success',data:result})
            }
        })
    })
});


module.exports = router;


/*
router.get('/addUser', function(req, res, next){
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
// 获取前台页面传过来的参数
        var param = req.query || req.params;
// 建立连接 增加一个用户信息
        connection.query(userSQL.insert, [param.uid,param.name], function(err, result) {
            if(result) {
                result = {
                    code: 200,
                    msg:'增加成功'
                };
            }

            // 以json形式，把操作结果返回给前台页面
            responseJSON(res, result);

            // 释放连接
            connection.release();

        });
    });
});*/

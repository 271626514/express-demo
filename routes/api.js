/**
 * Created by syzx9801@163.com on 2017/9/19.
 */

var express = require('express');
var router = express.Router();
var connection = require('../mysql');
/* GET sql data. */
/*router.use(function(req, res, next) {
    //res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
    console.log(req);
    return next();
});*/
router.get('/getcountry', function(req, res, next) {

});
router.get('/getuser',function(req,res,next){
    res.json({msg:'success',data:{name:'qiankun',sex:'man',age:'32'}});
});

module.exports = router;



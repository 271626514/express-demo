/**
 * Created by syzx9801@163.com on 2017/9/18.
 */
var mysql = require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"world"
});
connection.connect();
var query = 'select * from country';
connection.query(query,function(err,res){    //    执行sql语句
    if(err){
        console.log(err.message);    //    输出数据库错误信息
    }
    else{
        console.log(res);
    }
});
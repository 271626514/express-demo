/**
 * Created by syzx9801@163.com on 2017/9/20.
 */
//数据库操作
module.exports = {
    insert: 'INSERT INTO User(uid,userName) VALUES(?,?)',
    queryAll: 'SELECT * FROM User'
}
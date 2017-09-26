/**
 * Created by syzx9801@163.com on 2017/9/20.
 */
//数据库操作
module.exports = {
    insert: 'INSERT INTO blog_articles(id,article_name,article_body,create_time,last_update_time,article_tag,article_visit) VALUES(?,?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM blog_articles',
    getArticleByTag:'SELECT * FROM blog_articles WHERE article_tag = ? '
}
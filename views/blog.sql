/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-27 17:39:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog_articles
-- ----------------------------
DROP TABLE IF EXISTS `blog_articles`;
CREATE TABLE `blog_articles` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `article_name` varchar(255) NOT NULL,
  `article_body` varchar(5000) DEFAULT NULL,
  `create_time` char(19) DEFAULT NULL,
  `last_update_time` char(19) DEFAULT NULL,
  `article_tag` varchar(255) DEFAULT NULL,
  `article_visit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_articles
-- ----------------------------
INSERT INTO `blog_articles` VALUES ('1', '测试标题', '测试正文', '1505972012700', '1505972032700', '测试文章标签', '33');

-- ----------------------------
-- Table structure for blog_comment
-- ----------------------------
DROP TABLE IF EXISTS `blog_comment`;
CREATE TABLE `blog_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_comment
-- ----------------------------

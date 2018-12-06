/*
 Navicat Premium Data Transfer

 Source Server         : Ben
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : yixinger

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 06/12/2018 17:21:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for photo_distinguish
-- ----------------------------
DROP TABLE IF EXISTS `photo_distinguish`;
CREATE TABLE `photo_distinguish`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片路径',
  `result` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '识别结果',
  `date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '识别时间',
  `type` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图像识别类型（1.通用图像识别2.植物识别3.动物识别4.菜品识别）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for place
-- ----------------------------
DROP TABLE IF EXISTS `place`;
CREATE TABLE `place`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地址',
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `uid` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `showtag` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '景点级别（如5A） 餐馆类型（如中餐馆）',
  `tags1` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列表图片',
  `word_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '文字推荐菜',
  `img_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '有图推荐菜',
  `shop_hours` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '营业时间',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '印象标签',
  `comment_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '部分评论',
  `comment_number` int(10) NULL DEFAULT NULL COMMENT '评论数量',
  `photo_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '列表图片',
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '介绍',
  `latitude` double(11, 11) NULL DEFAULT NULL COMMENT '维度',
  `longitude` double(11, 11) NULL DEFAULT NULL COMMENT '经度',
  `price` double(10, 2) NULL DEFAULT NULL COMMENT '餐馆平均价格',
  `overall_rating` double(10, 2) NOT NULL COMMENT '评分',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for place_comment
-- ----------------------------
DROP TABLE IF EXISTS `place_comment`;
CREATE TABLE `place_comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL COMMENT '地点id',
  `comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '评论',
  `image_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '评论图片',
  `likes` int(255) NOT NULL DEFAULT 0 COMMENT '点赞数',
  `date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论时间',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `user_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户头像',
  `overall_rating` double(10, 2) NOT NULL COMMENT '评分',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for place_photo
-- ----------------------------
DROP TABLE IF EXISTS `place_photo`;
CREATE TABLE `place_photo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL COMMENT '地点id',
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片列表（主要用于景点）',
  `image_source` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片来源',
  `read_times` int(10) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000000 COMMENT '流量次数',
  `upload_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '上传时间',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for text_distinguish
-- ----------------------------
DROP TABLE IF EXISTS `text_distinguish`;
CREATE TABLE `text_distinguish`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `words` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文字识别结果',
  `date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文字识别时间',
  `user_id` int(11) NOT NULL COMMENT '调用者id',
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tk_mybatis_test
-- ----------------------------
DROP TABLE IF EXISTS `tk_mybatis_test`;
CREATE TABLE `tk_mybatis_test`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `real_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tk_mybatis_test
-- ----------------------------
INSERT INTO `tk_mybatis_test` VALUES (1, '陈奔', 'ben', 18);
INSERT INTO `tk_mybatis_test` VALUES (3, 'ben', '陈奔', 20);
INSERT INTO `tk_mybatis_test` VALUES (4, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (5, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (6, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (7, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (8, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (9, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (10, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (11, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (12, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (13, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (14, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (15, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (16, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (17, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (18, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (19, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (20, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (21, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (22, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (23, 'ben', '陈奔', 21);
INSERT INTO `tk_mybatis_test` VALUES (24, 'ben', '陈奔', 21);

-- ----------------------------
-- Table structure for translator
-- ----------------------------
DROP TABLE IF EXISTS `translator`;
CREATE TABLE `translator`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `text_id` int(11) NOT NULL COMMENT '文本来源表中的id',
  `from` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '原文语种',
  `to` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '译文语种',
  `original_text` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '原文',
  `translated_text` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '译文',
  `date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '翻译时间',
  `type` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '来源文本表的类型（1.文字识别表2.图像识别表）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `openid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户openid',
  `nick_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户昵称',
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户头像url',
  `city` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所属城市',
  `province` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所属省份',
  `country` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所属国家',
  `gender` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户性别（1.男2.女）',
  `language` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所选语言',
  `create_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '创建时间',
  `update_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户数据更新时间',
  `location` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所在国家',
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('oE9el5Hx6LplsHe2roGhrkxkEUsk', '😜  Ben', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaZauBTKp2NtvFsAtrJOpURw/132', 'Hangzhou', 'Zhejiang', 'China', '1', 'de', '2018-11-30 16:17:02', '2018-11-30 16:38:14', 'China');

-- ----------------------------
-- Table structure for user_history
-- ----------------------------
DROP TABLE IF EXISTS `user_history`;
CREATE TABLE `user_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `place_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '餐馆、景点id',
  `read_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户浏览时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户浏览记录表' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

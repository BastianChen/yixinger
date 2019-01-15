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

 Date: 15/01/2019 13:14:04
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
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地址',
  `phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `uid` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `showtag` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '景点级别（如5A） 餐馆类型（如中餐馆）',
  `tags1` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列表图片',
  `word_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '文字推荐菜',
  `img_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '有图推荐菜',
  `shop_hours` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '营业时间',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '印象标签',
  `comment_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '部分评论',
  `comment_number` int(10) NULL DEFAULT NULL COMMENT '评论数量',
  `photo_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '列表图片(相册)',
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '介绍',
  `latitude` double(23, 20) NULL DEFAULT NULL COMMENT '维度（前端传值）',
  `longitude` double(23, 20) NULL DEFAULT NULL COMMENT '经度（前端传值）',
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '餐馆平均价格',
  `overall_rating` double(10, 2) NOT NULL COMMENT '评分',
  `sug_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建议游玩时间（景点）',
  `best_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最佳游玩季节（景点）',
  `weather` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '天气（景点）',
  `count` int(11) NULL DEFAULT NULL COMMENT '餐馆推荐菜数',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of place
-- ----------------------------
INSERT INTO `place` VALUES (4, '绿茶餐厅(城西银泰店)', '浙江省杭州市拱墅区萍水街丰潭路380号城西银泰城A座F3', '(0571)89777277', '96d38a845c08e6492902e13b', '中餐馆', '古色古香;干净卫生;菜品精致;大排不错;回头客;份量足;停车方便;价格实惠;味道不错;人气旺;位置偏僻;', 'http://hiphotos.baidu.com/lbsugc/pic/item/63d0f703918fa0ecdac000ce2a9759ee3c6ddbea.jpg', '石锅茄子煲,南乳仔排,岭南豆豉娃娃菜,芝士焗时菌,绿茶鱼排,勾煮豆腐,手抓合合菜,俺家的冬瓜,我爱炖萝卜,赛螃蟹,绿茶烤肉烤鸡双拼,果蔬大拌菜,干炒茶树菇,招牌石锅沸腾饭,古法醋烧鸡', '[{\"name\":\"面包诱惑\",\"price\":\"28\",\"rec_num\":\"381\",\"imgs\":\"http://d.hiphotos.baidu.com/map/pic/item/a8014c086e061d9551b6bbf177f40ad163d9ca03.jpg\"},{\"name\":\"鱼头诱惑\",\"price\":\"48\",\"rec_num\":\"310\",\"imgs\":\"http://c.hiphotos.baidu.com/map/pic/item/aa64034f78f0f7369d27c0c80655b319eac41319.jpg\"},{\"name\":\"绿茶烤肉合拼\",\"price\":\"28\",\"rec_num\":\"237\",\"imgs\":\"http://d.hiphotos.baidu.com/map/pic/item/024f78f0f736afc34ad5b3acbf19ebc4b6451219.jpg\"},{\"name\":\"绿茶烤鱼\",\"price\":\"28\",\"rec_num\":\"108\",\"imgs\":\"http://c.hiphotos.baidu.com/map/pic/item/a044ad345982b2b77adfb50d3dadcbef77099bb3.jpg\"},{\"name\":\"火焰虾\",\"price\":\"35\",\"rec_num\":\"91\",\"imgs\":\"http://f.hiphotos.baidu.com/map/pic/item/f636afc379310a5586fd523dbb4543a983261019.jpg\"},{\"name\":\"拿破仑\",\"price\":\"38\",\"rec_num\":\"80\",\"imgs\":\"http://g.hiphotos.baidu.com/map/pic/item/1c950a7b02087bf4541cdb20fed3572c10dfcf03.jpg\"},{\"name\":\"菠萝油条虾\",\"price\":\"35\",\"rec_num\":\"74\",\"imgs\":\"http://a.hiphotos.baidu.com/map/pic/item/0b55b319ebc4b7457b4d3bdfc3fc1e178b821519.jpg\"},{\"name\":\"干锅有机花菜\",\"price\":\"16\",\"rec_num\":\"68\",\"imgs\":\"http://b.hiphotos.baidu.com/map/pic/item/7af40ad162d9f2d336e1a826a5ec8a136227cc03.jpg\"},{\"name\":\"椒麻鸡\",\"price\":\"58\",\"rec_num\":\"62\",\"imgs\":\"http://e.hiphotos.baidu.com/map/pic/item/ac6eddc451da81cb2d490f045e66d0160824314f.jpg\"},{\"name\":\"糖醋里脊\",\"price\":\"15\",\"rec_num\":\"58\",\"imgs\":\"http://d.hiphotos.baidu.com/map/pic/item/63d9f2d3572c11dfca2133ea6f2762d0f603c203.jpg\"}]', '周一至周六10:30-21:30 周日10:30-21:00', '[[{\"count\":9,\"label_id\":\"cater_02_sub02\",\"label_name\":\"份量较小\"}],[{\"count\":19,\"label_id\":\"cater_04_sub06\",\"label_name\":\"人气旺\"},{\"count\":15,\"label_id\":\"cater_04_sub03\",\"label_name\":\"环境不错\"}],[{\"count\":69,\"label_id\":\"cater_02_sub03\",\"label_name\":\"味道不错\"}],[{\"count\":20,\"label_id\":\"cater_02_sub11\",\"label_name\":\"价格实惠\"}],[{\"count\":10,\"label_id\":\"cater_01_obj02\",\"label_name\":\"回头客\"}]]', '[{\"overall_rating\":4,\"one_url\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"taste_rating\":null,\"user_name\":\"阿双双君\",\"environment_rating\":null,\"cmt_icons\":{\"comment_icon\":[]},\"one_url_mobile\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"service_rating\":null,\"pics\":[{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100o0h0000008zn3aDAE7.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100t0h0000008zmrw73B5.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10020h0000008znerCF54.jpg\",\"pic_pv\":1},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100p0h0000008zmum548C.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100s0h0000008zn5328D3.jpg\",\"pic_pv\":0}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"user_url_mobile\":null,\"date\":\"2017-06-21 19:13\",\"user_url\":\"\",\"poi_id\":\"2467154723091309114\",\"user_logo\":\"https://images4.c-ctrip.com/target/Z80t0e00000075wli058F_C_180_180.jpg\",\"time_stamp\":1498043637,\"price\":null,\"content\":\"服务态度很好&#x20;上菜及时&#x20;蛋蒸肉特别腥简直没法吃&#x20;鱼还不错&#x20;凉菜不错&#x20;汤还可以&#x20;赛螃蟹很一般&#x20;店内环境不错&#x20;仿古风格而且沙发座挺舒服&#x20;价格不贵&#x20;分量还行\",\"quality\":null,\"uniqkey\":\"0de987f6e15ea839042ebef3a307d118\",\"src\":\"meishilin\",\"former_source\":\"meishilin\",\"cn_name\":\"携程美食林\",\"from\":\"ctrip.com\",\"comment_url\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"comment_url_mobile\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"uid\":\"2467154723091309114:meishilin\",\"mark_source\":40,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":30,\"mark_userscore\":10,\"mark_total\":145,\"comment_num\":5,\"cmt_id\":\"0de987f6e15ea839042ebef3a307d118\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":3,\"one_url\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"taste_rating\":null,\"user_name\":\"伊翎\",\"environment_rating\":null,\"cmt_icons\":{\"comment_icon\":[]},\"one_url_mobile\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"service_rating\":null,\"pics\":[{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10080i0000009ly3b2D78.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100p0i0000009m2sb364D.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10070i0000009m0awD56F.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100o0i0000009m00k8EFC.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10090i0000009nf3nCB65.jpg\",\"pic_pv\":1},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100a0i0000009lyo46368.jpg\",\"pic_pv\":0}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"user_url_mobile\":null,\"date\":\"2017-07-27 22:38\",\"user_url\":\"\",\"poi_id\":\"2467154723091309114\",\"user_logo\":\"https://images4.c-ctrip.com/target/Z80c0f0000007ksrgB1C3_C_180_180.jpg\",\"time_stamp\":1501166323,\"price\":null,\"content\":\"来杭州第一天吃的饭，只能说太差了！人多排队就算了，节假日可以理解。进去后坐下，没有服务员搭理，点个菜就跟要求着他们一样，重点是餐具很不干净！上面还有米粒！要求换了之后，回来还是脏的！已拍照！上面黑黑的！上来的菜也有失水准，连摆盘都不利索，绿茶烤肉上来都凉了！不太好的一次体验…印象差\",\"quality\":null,\"uniqkey\":\"9b9634df55cf2e8701f2b003a5f2e316\",\"src\":\"meishilin\",\"former_source\":\"meishilin\",\"cn_name\":\"携程美食林\",\"from\":\"ctrip.com\",\"comment_url\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"comment_url_mobile\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"uid\":\"2467154723091309114:meishilin\",\"mark_source\":40,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":35,\"mark_userscore\":5,\"mark_total\":145,\"comment_num\":5,\"cmt_id\":\"9b9634df55cf2e8701f2b003a5f2e316\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"one_url\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"taste_rating\":null,\"user_name\":\"汽车之家任大人\",\"environment_rating\":null,\"cmt_icons\":{\"comment_icon\":[]},\"one_url_mobile\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"service_rating\":null,\"pics\":[{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10080q000000g31oo88CB.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100f0q000000g2a3t665B.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10070q000000gjarm8962.jpg\",\"pic_pv\":1},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/100g0q000000g3jsiF22C.jpg\",\"pic_pv\":0},{\"pic_url\":\"https://youimg1.c-ctrip.com/target/10070q000000gjarl7943.jpg\",\"pic_pv\":0}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"user_url_mobile\":null,\"date\":\"2018-03-03 07:57\",\"user_url\":\"\",\"poi_id\":\"2467154723091309114\",\"user_logo\":\"https://images4.c-ctrip.com/target/fd/headphoto/g1/M08/F6/5B/CghzflVKwQiALkYYAADu0gAoM7I836_C_180_180.jpg\",\"time_stamp\":1520035040,\"price\":null,\"content\":\"一直很喜欢绿茶这种暖暖的淡淡的装修风格，比外婆家要舒服多了。每次到杭州绿茶必吃。典型的杭帮菜，什么东西都是甜甜的，我喜欢～不过不推荐他们家的干菜仔排，都甜的发苦了\",\"quality\":null,\"uniqkey\":\"9a10501ecf35d6a380b47c7019e7a89f\",\"src\":\"meishilin\",\"former_source\":\"meishilin\",\"cn_name\":\"携程美食林\",\"from\":\"ctrip.com\",\"comment_url\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"comment_url_mobile\":\"http://m.ctrip.com/webapp/you/comment/0/5154148-food.html?fromType=external&popup=close&sourcefrom=bdmap&autoawaken=close\",\"uid\":\"2467154723091309114:meishilin\",\"mark_source\":40,\"mark_duration\":10,\"mark_multimedia\":60,\"mark_content\":20,\"mark_userscore\":10,\"mark_total\":140,\"comment_num\":5,\"cmt_id\":\"9a10501ecf35d6a380b47c7019e7a89f\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]', 3, NULL, NULL, 30.22108071251000000000, 120.11136539319000000000, '62.0', 4.00, NULL, NULL, NULL, 25);
INSERT INTO `place` VALUES (5, '西湖风景区', '杭州市西湖区龙井路1号', '(0571)87179539,13073693434', 'df95f91c9c62cbb438221c0e', '风景区', '1.1万人访问', 'http://easyread.ph.126.net/FBQN-2tVmi-FU4dIQ2kAhA==/7916848757849448552.jpg', NULL, NULL, '00:00-24:00', '[[{\"count\":86,\"label_id\":\"scope_5_02\",\"label_name\":\"免费项目\"}],[{\"count\":31,\"label_id\":\"scope_1_09\",\"label_name\":\"水很清澈\"}],[{\"count\":318,\"label_id\":\"scope_1_03\",\"label_name\":\"人气旺\"},{\"count\":293,\"label_id\":\"scope_1_02\",\"label_name\":\"景色优美\"},{\"count\":76,\"label_id\":\"scope_1_01\",\"label_name\":\"环境很好\"}],[{\"count\":53,\"label_id\":\"scope_5_01\",\"label_name\":\"收费合理\"}]]', '[{\"overall_rating\":5,\"date\":\"2018-03-22 22:00\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/6df44601?r=1545882107\",\"user_name\":\"00499998\",\"uniqkey\":\"381dc71c1bb4865d4f429af83f2ed9e8\",\"cmt_icons\":{\"comment_icon\":[]},\"time_stamp\":1521727254,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"非常好，杭州标志之一，景色秀美，最重要的是免费游玩，如果登雷峰塔逛断桥，走到脚疼，建议租个自行车吧，3月春暖花开，柳树青青，风还是挺大的。另外最重要的是充电宝，别忘了！！\",\"pics\":[{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/7e3e6709c93d70cf22700505f4dcd100baa12b2b.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":4186},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/730e0cf3d7ca7bcb914c6927b2096b63f624a887.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":4140},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/34fae6cd7b899e513004951c4ea7d933c8950d2b.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":3972},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/6159252dd42a28349891980357b5c9ea15cebf87.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":2147},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/cc11728b4710b912e9dd58f6cffdfc039245229d.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":1529}],\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"poi_id\":\"135603198540224511\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":null,\"comment_url_mobile\":null,\"uid\":\"135603198540224511:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":90,\"mark_content\":20,\"mark_userscore\":10,\"mark_total\":140,\"comment_num\":499,\"cmt_id\":\"304605604\",\"reply\":null,\"favorNum\":20,\"isAgree\":false},{\"overall_rating\":5,\"date\":\"2018-08-17 02:05\",\"one_url\":null,\"service_rating\":null,\"user_url\":null,\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"183******68\",\"uniqkey\":\"e5c168806f1b9f997f2f2c40227bd1b3\",\"user_logo\":null,\"time_stamp\":1534442746,\"one_url_mobile\":null,\"price\":0,\"content\":\"天气燥热，游人络绎未绝，信步西湖湖畔，垂柳随风飘荡，仿若美人长发般柔美；远眺西湖全貌尽收眼前，湖里🐟儿尽欢颜，水上游船来回穿梭；登雷峰塔叹古人之智慧，过“断桥”不知为何故称之；绕湖一周也未能一一品味这西湖全景，流连忘返吧，今日一别，何时重游……\",\"pics\":[{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://g.hiphotos.baidu.com/lbsugc/pic/item/c995d143ad4bd113cdaca00757afa40f4bfb05a5.jpg\",\"pic_type\":\"0\",\"pic_pv\":1052},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://e.hiphotos.baidu.com/lbsugc/pic/item/b812c8fcc3cec3fd6073b040db88d43f879427b1.jpg\",\"pic_type\":\"0\",\"pic_pv\":1125},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://b.hiphotos.baidu.com/lbsugc/pic/item/d1160924ab18972b657717ffebcd7b899e510ab1.jpg\",\"pic_type\":\"0\",\"pic_pv\":1149},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://d.hiphotos.baidu.com/lbsugc/pic/item/ca1349540923dd5425dab05ddc09b3de9c82485d.jpg\",\"pic_type\":\"0\",\"pic_pv\":852},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://f.hiphotos.baidu.com/lbsugc/pic/item/9e3df8dcd100baa15885508e4a10b912c8fc2e5d.jpg\",\"pic_type\":\"0\",\"pic_pv\":740},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://g.hiphotos.baidu.com/lbsugc/pic/item/f9dcd100baa1cd11e41f6515b412c8fcc3ce2d5d.jpg\",\"pic_type\":\"0\",\"pic_pv\":644},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://c.hiphotos.baidu.com/lbsugc/pic/item/ac6eddc451da81cb937194f85f66d0160924316b.jpg\",\"pic_type\":\"0\",\"pic_pv\":613},{\"pic_name\":\"\\\"null\\\"\",\"pic_url\":\"http://f.hiphotos.baidu.com/lbsugc/pic/item/a50f4bfbfbedab64c6e55af5fa36afc379311e6b.jpg\",\"pic_type\":\"0\",\"pic_pv\":377}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"135603198540224511\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":null,\"comment_url_mobile\":null,\"uid\":\"135603198540224511:ugc\",\"mark_source\":10,\"mark_duration\":15,\"mark_multimedia\":60,\"mark_content\":30,\"mark_userscore\":10,\"mark_total\":125,\"comment_num\":499,\"cmt_id\":\"326083000\",\"reply\":null,\"favorNum\":4,\"isAgree\":false},{\"overall_rating\":5,\"date\":\"2017-04-21 13:03\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"\",\"user_name\":\"双鱼骨头\",\"uniqkey\":\"d344d9f8f7d71e4500b084ff639ea771\",\"cmt_icons\":{\"comment_icon\":[]},\"time_stamp\":1492751025,\"one_url_mobile\":\"\",\"price\":null,\"content\":\"........第一次和大保镖出游，选择了西湖。因为无论是阴云密布、细雨绵绵，还是晴空万里、夜色迷蒙，西湖都有她无法替代的美。大保镖总是戏说，如果我跑了，他就跳西湖，那我说，好啊，带你去西湖，看你跳不跳~ \\n........周六最早一班动车从上海出发，转地铁后出来租了一辆自行车，由于双人自行车不允许在景区出现了，所以只能租后座载人的，30块貌似，押金100块，这是第一次大保镖载我，踩向西湖的一路，穿着超短裙趴开坐在自行车后着实赚了不少回头率~ 微凉的早晨，他踩着踩着出了汗，我却被风吹得双手冰冷，他一路踩，一路帮我暖手~ 这一幕将成为最浪漫的回忆之一 ~ \\n........4月中旬，春已深，那么好的周末自然是人挤人。泛舟是必须的，可以网上预约，可以现场谈价。为了等闺蜜和她朋友会合，我和大保镖在西湖旁的星巴克等了足足2个多小时，奇怪的是竟然一点都不觉得时间过得慢，因为二楼露台正对着西湖，我们去得早，从寥寥数人看到人潮涌动，而湖色依然静谧。 \\n........对西湖水的印象，是孩提来时，船夫介绍的“冬暖夏凉”，一伸手触摸到的温润感，仿佛穿越了当时的自己。只是如今船夫生意匆匆，为了赶下一个班次，三潭印月是不给划去了，苏堤白堤也就指指，给我们拍个照而已。如果有时间的话，还是自己泛舟吧，三五人共力，划上它大半天！记得带着干粮~ \\n........泛舟后，沿湖边走走，任凭柳絮抚摸脸颊，痒了鼻头。黄刺玫、海棠、杜鹃、紫藤，在湖水粼粼下，错落有致的色彩映衬地特别好看~ \\n........晚上回上海前，又经过西湖边，堵得要命的自驾车上，有幸欣赏到了西湖夜景。遗憾的是必须得回去了，不然在夜色中的湖畔走走，私语窃窃，龙井品品，简直不能再好。\\n........“谁在船上 写我从前\\n........一说人间 再说江山”\\n\\n2015.04.11 9-20点\",\"pics\":[{\"pic_url\":\"https://file105.mafengwo.net/s8/M00/06/32/wKgBpVYFrVmABpTvAAxlP8sIoiQ67.jpeg?imageMogr2%2Fthumbnail%2F%21640x440r%2Fgravity%2FCenter%2Fcrop%2F%21640x440%2Fquality%2F100\",\"pic_type\":\"\",\"pic_name\":\"\",\"pic_pv\":2714},{\"pic_url\":\"https://file108.mafengwo.net/s8/M00/06/7C/wKgBpVYFsGuAQ_t8AHANws9VbUI81.jpeg?imageMogr2%2Fthumbnail%2F%21640x440r%2Fgravity%2FCenter%2Fcrop%2F%21640x440%2Fquality%2F100\",\"pic_type\":\"\",\"pic_name\":\"\",\"pic_pv\":2515},{\"pic_url\":\"https://file112.mafengwo.net/s8/M00/06/80/wKgBpVYFsJeAdn4ZADQY5dY7ryk11.jpeg?imageMogr2%2Fthumbnail%2F%21640x440r%2Fgravity%2FCenter%2Fcrop%2F%21640x440%2Fquality%2F100\",\"pic_type\":\"\",\"pic_name\":\"\",\"pic_pv\":2701},{\"pic_url\":\"https://file106.mafengwo.net/s8/M00/A8/1B/wKgBpVXymhiAUNK0AEMAAFbYW0Y80.jpeg?imageMogr2%2Fthumbnail%2F%21640x440r%2Fgravity%2FCenter%2Fcrop%2F%21640x440%2Fquality%2F100\",\"pic_type\":\"\",\"pic_name\":\"\",\"pic_pv\":2018},{\"pic_url\":\"https://file105.mafengwo.net/s8/M00/A8/07/wKgBpVXymgqAYQp4AD-AAFX2JC829.jpeg?imageMogr2%2Fthumbnail%2F%21640x440r%2Fgravity%2FCenter%2Fcrop%2F%21640x440%2Fquality%2F100\",\"pic_type\":\"\",\"pic_name\":\"\",\"pic_pv\":1472},{\"pic_url\":\"https://file106.mafengwo.net/s8/M00/A7/F8/wKgBpVXymfyAcrEsAEQAAKbSj7s96.jpeg?imageMogr2%2Fthumbnail%2F%21640x440r%2Fgravity%2FCenter%2Fcrop%2F%21640x440%2Fquality%2F100\",\"pic_type\":\"\",\"pic_name\":\"\",\"pic_pv\":1162}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"135603198540224511\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"14426734347927615367:ugc\",\"mark_source\":10,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":120,\"comment_num\":499,\"cmt_id\":\"d344d9f8f7d71e4500b084ff639ea771\",\"reply\":null,\"favorNum\":24,\"isAgree\":false}]', 3, 'https://mapsv0.bdimg.com/?qt=pr3d&panoid=0902520001161118195307120IN&width=720&height=360&heading=292pitch=0fovy=75&quality=80;http://hiphotos.baidu.com/map/pic/item/6f061d950a7b020824feb71964d9f2d3572cc817.jpg;http://a.hiphotos.baidu.com/lbsugc/pic/item/0823dd54564e925859aebcb79182d158cdbf4ed4.jpg;https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=df95f91c9c62cbb438221c0e&width=720&height=360&quality=80&fovx=120', '西湖古称“钱塘湖”，又名“西子湖”，古代诗人苏轼就对它评价道：“欲把西湖比西子，淡妆浓抹总相宜。”西湖形态为近于等轴的多边形，湖面被孤山及苏堤、白堤两条人工堤分割为5个子湖区，子湖区间由桥孔连通，各部分的湖水不能充分掺混，造成各湖区水质差异，大部分径流补给先进入西侧3个子湖区，再进入外西湖；湖水总面积5.593平方公里;总容积1．10亿立方米，平均水深1．97 米；西湖底质是一种有机质含量特别高的湖沼相沉积，属于粉砂质粘土或粉砂质亚粘土（黑色有机质粘土），中层泥炭层或沼泽土；入湖河流部是短小的溪涧，主要补水河流为金沙涧、龙泓涧和长桥溪泄流。西湖，是一首诗，一幅天然图画，一个美丽动人的故事，不论是多年居住在这里的人还是匆匆而过的旅人，无不为这天下无双的美景所倾倒。', 30.22108071251000000000, 120.11136539319000000000, 'false', 4.20, '0.5-1天', '3月-5月;9月-11月', '{\"title\":\"当前天气\",\"air\":\"空气质量优\",\"kind\":\"阴\",\"temperature\":\"6℃\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYzVjM2ZkMC1hZDhkLTRiYzMtOTc1OS1mOTY5ZTZkYjZhMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkI4QTk4MUVBNDFGMTFFNjhBRDhENUU4MkQxMTdBOTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkI4QTk4MURBNDFGMTFFNjhBRDhENUU4MkQxMTdBOTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmM1YzNmZDAtYWQ4ZC00YmMzLTk3NTktZjk2OWU2ZGI2YTAxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmJjNWMzZmQwLWFkOGQtNGJjMy05NzU5LWY5NjllNmRiNmEwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu4wwI8AAAOESURBVHjavJZLaBNBGMe/md1sUps+jLZWixp8YJGCpQcRfIAPUMEngooXL0IvKoqiFkEPggriQfHWixcvBYutHnooiNpiUVAKitTHoYWWYmuS5tG8dnf8T7o2sc1utlgc+GVms9/Ofx7f980wIQQVLR8YuSwnwV3QAFKljDn9e9kEVoNaN8alBJeCM8DnYBMBBogvhOAp0AaegTIbmwegCYRs3gdBK6hwI/gY9IG94LrNgOVAPtt8fxh8BLfBNjeCUbAf3AfPC0ROg1cgbc1M1j3gBCj0toegHFwB3fIP1jsZcu0dW78HqlB1gF0OZi+kcP8qMbVlmDWinUV7UL7Ac3FBZmobSShn0dxueaAfw0579HGqTvX6VkZuktf4FqaKoCC1qpL0cIxiw5xMqrK66ITIkdn9zhFkQqkh0/MIrYMOTkJcGKKW+tga0WY5KIpA/bMrhEgMWGbHINoxW5AXzKoJYu/QOu4kJovJFDbGdtAnfoMEea0OFETioQB6jFpm52zDAmJBErwLreB8Ij5K6+krP5/3PSnqX2FarzcPIDIL+eM0nBk+eBjbOd8Uk0VWzJj4yY5RxhBUzsNUn+kx14avcT6dMSst00tW8vjB+kJT2Fz2dD5pTgpFdUG6lYZNwWgilU9GGmWoUW/PKvqor3nqqkwK763+RyCY7LYC21VJwDfixtyEP5nxUtr4e8x+hYaXeKhh3yhT8ShJSsFRNJa7EUthdyb14qdLIqtSQvfM+b9aFYMRncmThFpC01662I2YlIkZwj4p25xmENtQp9HlQjvVjWDSlHvlPCD7b8WFgrBgMVeO4qSGopv2B3bSYHV5QcG/uBE0Hd8ySpuK/WAEKfklNdV2RqWvE04WSV0hIewtFJYfr1zSJ2SqiVKCqk1/MgbjurMbaJx+zQgaWngCSfseZur4UVkRN5RiMv6cZieLj4vO2VeMO0yob5jpsV06LAuVKYVOxCmS9qJmJQZKab/CLuYemsW0IGaZQXUUM33NDC+OKZWK7WulIgOX52YVhpheYmYaIxHw0IGhVP6CNZOLICrXeQ/29C6WNy2FucTU8hg+qlW8VMFLO1m5QokajXaPpHNXj+K3NohmQat108KlifUjbHRAOSxvrfcyalhEVOMRcslyy23NyKhQaGiZJm6tK6NqiL2c4+1vx0XJ0Q7EaUFKS1DeKoSg/1l+CzAANT9CboxTATUAAAAASUVORK5CYII=\",\"link\":\"https://zt.baidu.com/weather/v2?c=179&city_id=179\"}', NULL);

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
  `overall_rating` double(10, 2) NOT NULL COMMENT '对该游玩地点的评分',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for place_photo
-- ----------------------------
DROP TABLE IF EXISTS `place_photo`;
CREATE TABLE `place_photo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL COMMENT '地点id',
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片url（主要用于景点）',
  `image_source` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片来源',
  `read_times` int(10) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000000 COMMENT '浏览次数',
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
  `country` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户国籍',
  `gender` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户性别（1.男2.女）',
  `language` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所选语言',
  `create_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '创建时间',
  `update_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户数据更新时间',
  `location` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户所在国家（前端定位获取）',
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

require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(199);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8962503e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(202);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8962503e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8962503e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\placedetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8962503e", Component.options)
  } else {
    hotAPI.reload("data-v-8962503e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: '西湖风景区',
      overallRating: 4.3,
      distance: '11.4km',
      address: '杭州市西湖区龙井路1号',
      showtag: '5A景区',
      sugTime: '0.5-1天',
      bestTime: '3月-5月;9月-11月',
      telephone1: '15868143385',
      telephone2: '13575419350',
      isOneTelephone: true, // 判断是否有两个电话
      tags1: ['世界文化遗产', '适合散步', '夜景赞'],
      tag1OfContent: ['人气旺(323)', '景色优美(299)', '免费项目(94)'],
      tag2OfContent: ['环境很好(79)', '收费合理(59)', '水很清澈(35)'],
      commentNumber: 900,
      imgList: ['http://hiphotos.baidu.com/map/pic/item/b3fb43166d224f4a23eb6f7404f790529822d162.jpg', 'http://hiphotos.baidu.com/map/pic/item/738b4710b912c8fc4a42f05af1039245d78821f7.jpg', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132'],
      hour: '周五至周日11:00-13:30;16:30-20:30周一至周四11:00-13:00;16:30-20:30非营;周五至周日11:00-13:30',
      introduce: '西湖古称“钱塘湖”，又名“西子湖”，古代诗人苏轼就对它评价道：“欲把西湖比西子，淡妆西湖古称“钱塘湖”，又名“名名名名名子，淡妆浓抹总...',
      banner: [{
        "id": 381,
        "name": "海底捞火锅(天虹商场店)",
        "address": "杭州市江干区新塘路天虹商场A座5层",
        "phone": "(0571)86088932,(0571)86088932",
        "uid": "813f4ba4ad2bf7694107c1d9",
        "showtag": "火锅",
        "image": "http://hiphotos.baidu.com/map/pic/item/b3fb43166d224f4a23eb6f7404f790529822d162.jpg",
        "shopHours": "09:00-00:00 00:00-07:00",
        "commentNumber": 1,
        "latitude": 30.264475835188,
        "longitude": 120.20888925074,
        "price": "127.0",
        "overallRating": 5,
        "tags1": null,
        "wordList": null,
        "imgList": null,
        "content": "[[{\"count\":2,\"label_id\":\"cater_02_sub07\",\"label_name\":\"菜品精致\"}],[{\"count\":2,\"label_id\":\"cater_03_sub03\",\"label_name\":\"服务很好\"},{\"count\":1,\"label_id\":\"cater_03_sub01\",\"label_name\":\"上菜很快\"}],[{\"count\":1,\"label_id\":\"cater_04_sub03\",\"label_name\":\"环境不错\"},{\"count\":1,\"label_id\":\"cater_04_sub06\",\"label_name\":\"人气旺\"}],[{\"count\":1,\"label_id\":\"cater_02_sub03\",\"label_name\":\"味道不错\"}]]",
        "commentList": "[{\"overall_rating\":5,\"one_url\":null,\"taste_rating\":null,\"user_name\":\"我的心痛以死了\",\"environment_rating\":null,\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/2bd17f5d?r=1551835828\",\"one_url_mobile\":null,\"service_rating\":null,\"poi_id\":\"17256439067194809041\",\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"user_url_mobile\":null,\"date\":\"2018-07-11 19:39\",\"user_url\":null,\"comment_num\":1,\"cmt_icons\":{\"comment_icon\":{\"type\":2,\"text\":\"首评\"}},\"time_stamp\":1531309174,\"price\":0,\"content\":\"服务特别好，值得推荐，交通方便\",\"quality\":null,\"uniqkey\":\"4be858711430e55a652db2d1c0711303\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":null,\"comment_url_mobile\":null,\"uid\":\"17256439067194809041:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":5,\"mark_userscore\":10,\"mark_total\":35,\"cmt_id\":\"311849874\",\"reply\":null,\"favorNum\":2,\"isAgree\":false}]",
        "photoList": null,
        "introduce": null,
        "count": 0,
        "sugTime": null,
        "bestTime": null,
        "weather": null,
        "type": 2,
        "distance": null
      }, {
        "id": 376,
        "name": "采荷公园",
        "address": "五安路与采菱东路交叉口西北100米",
        "phone": "null",
        "uid": "07f3c8b51f4d5b626240a902",
        "showtag": "公园",
        "image": "http://hiphotos.baidu.com/map/pic/item/738b4710b912c8fc4a42f05af1039245d78821f7.jpg",
        "shopHours": "暂无",
        "commentNumber": 3,
        "latitude": 30.255372071061,
        "longitude": 120.19782741611,
        "price": "false",
        "overallRating": 4.8,
        "tags1": null,
        "wordList": null,
        "imgList": null,
        "content": "[]",
        "commentList": "[{\"overall_rating\":5,\"date\":\"2017-09-05 00:00\",\"one_url\":\"http://m.dianping.com/review/368090601\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"tongkekehz\",\"uniqkey\":\"2e5cc4cd1c07e587b759cd37ccce0afd\",\"user_logo\":\"http://store.is.autonavi.com/showpic/bedbd48edcad2d956b507c50eed81114\",\"time_stamp\":1504540800,\"one_url_mobile\":\"http://m.dianping.com/review/368090601\",\"price\":null,\"content\":\"总有这样一种心情 特别适合此情此景\",\"pics\":[{\"pic_url\":\"http://store.is.autonavi.com/showpic/7e72076211cc99e2168469772b7df2cb\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/087d26fe739d994cf72eee093cb0fe72\",\"pic_pv\":12},{\"pic_url\":\"http://store.is.autonavi.com/showpic/e83bfeaddfb6ad1344b5716fd5a8c080\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/bb512433a08e38ca32c79b082bbbfb0f\",\"pic_pv\":4},{\"pic_url\":\"http://store.is.autonavi.com/showpic/b23c83b8ac3e0cd993385eb871d058ae\",\"pic_pv\":2}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"17992255917256605695\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/56611913/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/56611913/review_all\",\"uid\":\"17992255917256605695:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":5,\"mark_userscore\":10,\"mark_total\":100,\"comment_num\":2,\"cmt_id\":\"2e5cc4cd1c07e587b759cd37ccce0afd\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-07-02 21:43\",\"one_url\":\"http://www.dianping.com/shop/56611913/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/48493911\",\"user_url_mobile\":null,\"poi_id\":\"17992255917256605695\",\"user_name\":\"琦琦treasure\",\"uniqkey\":\"7684ba8ac8eb39f0bb4c521be4f8aea8\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/98e470a7b39a0a279910627f02faf4632285.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1530538980,\"one_url_mobile\":\"http://www.dianping.com/shop/56611913/review_all\",\"price\":null,\"content\":\"采荷公园，位于庆春东路五安路采荷街道对面，公园很小，走一圈最多10-15分钟，有个小池塘，里面有荷花，鱼🐟，虾🦐等，有时边上家居养的鸭子🦆也会在这里放养。白天，晚上来公园锻炼的人比较多，广场舞，气功，跑步🏃‍♀️走路🚶‍♀️跳舞💃都有，下午有人来钓鱼🎣虾或者打牌，看书，聊天，给小区带来一个不错的娱乐环境😊\",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":2,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/56611913/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/56611913/review_all\",\"uid\":\"17992255917256605695:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"7684ba8ac8eb39f0bb4c521be4f8aea8\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-11-23 00:05\",\"one_url\":null,\"service_rating\":null,\"user_url\":null,\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":{\"type\":2,\"text\":\"首评\"}},\"user_name\":\"在野法曹lawyer\",\"uniqkey\":\"760e98fe9af5904d6bf67a5e227bde1a\",\"user_logo\":null,\"time_stamp\":1542902712,\"one_url_mobile\":null,\"price\":0,\"content\":\"环境不错\",\"poi_id\":\"17992255917256605695\",\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":1,\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":null,\"comment_url_mobile\":null,\"uid\":\"17992255917256605695:ugc\",\"mark_source\":10,\"mark_duration\":15,\"mark_multimedia\":0,\"mark_content\":0,\"mark_userscore\":10,\"mark_total\":35,\"cmt_id\":\"777786455\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
        "photoList": "https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=07f3c8b51f4d5b626240a902&width=720&height=360&quality=80&fovx=120;http://hiphotos.baidu.com/map/pic/item/6a600c338744ebf8b600c560d2f9d72a6059a778.jpg;http://hiphotos.baidu.com/map/pic/item/2934349b033b5bb598f9efb33dd3d539b600bc55.jpg;http://hiphotos.baidu.com/map/pic/item/00e93901213fb80e9674d1bd3ad12f2eb9389437.jpg",
        "introduce": "暂无",
        "count": null,
        "sugTime": "暂无",
        "bestTime": "暂无",
        "weather": null,
        "type": 1,
        "distance": null
      }, {
        "id": 350,
        "name": "夏衍旧居",
        "address": "浙江省杭州市江干区严家路50号",
        "phone": "null",
        "uid": "b3aa435d9248560a1576433d",
        "showtag": "文物古迹",
        "image": "http://hiphotos.baidu.com/lbsugc/pic/item/8644ebf81a4c510fd2bbe1076c59252dd42aa5ab.jpg",
        "shopHours": "暂无",
        "commentNumber": 3,
        "latitude": 30.273301448474,
        "longitude": 120.20214178904,
        "price": "false",
        "overallRating": 4.7,
        "tags1": null,
        "wordList": null,
        "imgList": null,
        "content": "[[{\"count\":1,\"label_id\":\"scope_3_01\",\"label_name\":\"设施新全\"}],[{\"count\":1,\"label_id\":\"scope_2_15\",\"label_name\":\"位置较偏\"}]]",
        "commentList": "[{\"overall_rating\":5,\"date\":\"2018-03-15 12:19\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/949fbe56?r=1551835681\",\"user_name\":\"157******27\",\"uniqkey\":\"9c7a0c2bb4c52ec4c06361f229c72cf8\",\"poi_id\":\"17992255822767325183\",\"time_stamp\":1521087588,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"旁边拆迁，13年9月就闭馆了。\\n专程去的，还好有一位工作人员在，大爷人很好，让我进去了。陈设的物品都收起来了，电子设备一律停用，只有宣传展示板，但是环境安静幽雅，还是值得一看的。\",\"pics\":[{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/8644ebf81a4c510fd2bbe1076c59252dd42aa5ab.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":165},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/0e2442a7d933c895793f9b66dd1373f08202006d.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":154},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/d01373f082025aaf0a737dd6f7edab64034f1a6d.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":237},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/5ab5c9ea15ce36d3c27b802d36f33a87e950b1ab.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":148},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/b151f8198618367a113a7cc022738bd4b31ce578.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":121},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/b219ebc4b74543a93e0bf9d112178a82b901149e.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":107}],\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"cmt_icons\":{\"comment_icon\":{\"type\":2,\"text\":\"首评\"}},\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"17992255822767325183:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":90,\"mark_content\":20,\"mark_userscore\":10,\"mark_total\":140,\"comment_num\":2,\"cmt_id\":\"304439544\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":3,\"date\":\"2017-06-25 00:00\",\"one_url\":\"http://m.dianping.com/review/354824907\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"晓明的小名是小明\",\"uniqkey\":\"09b857ac5abf0523846581f318ee8088\",\"user_logo\":\"http://store.is.autonavi.com/showpic/ad0f8515931efeb7193786103042460c\",\"time_stamp\":1498320000,\"one_url_mobile\":\"http://m.dianping.com/review/354824907\",\"price\":null,\"content\":\"夏衍故居建于清末民初，属中式平房，位于杭州庆春门外严家弄。著名作家夏衍曾居住于此。现为陈列室，是杭州市文物保护单位。故居原名八咏堂，为五开间七进深院落，为夏衍诞生至青少年时代的活动地，现经扩建，占地一千两百平方米，建筑面积为六百平方米，采用院落式和江南民居式样。陈列室展示了夏衍一生从事电影活动的生平事迹，以及夏衍生前用过眼镜、衣物，还有名家字画等。大理想家（DreamInn）客栈云游至此不禁对现如今正在整改的面貌心痛，附近拆迁建设破烂不堪，看门的大爷态度很差，一问三不知，但模糊的说明可能要搞个几年，目前不对外，照片是工地状态下拍摄的，小伙伴们自己联想吧。\",\"pics\":[{\"pic_url\":\"http://store.is.autonavi.com/showpic/725535630d64ad28b5cc2f35e9e9efe9\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/ab4abc5e8234009039fca7fec1f824bb\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/bd2124d16761a6b7d456b2f7a6ee9cb4\",\"pic_pv\":14},{\"pic_url\":\"http://store.is.autonavi.com/showpic/db4fc6fc5fcaab68745ed1c60273d573\",\"pic_pv\":8},{\"pic_url\":\"http://store.is.autonavi.com/showpic/9e39ab66545c620914981af5288f89de\",\"pic_pv\":5}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"17992255822767325183\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/1624672/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/1624672/review_all\",\"uid\":\"17992255822767325183:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":35,\"mark_userscore\":5,\"mark_total\":125,\"comment_num\":4,\"cmt_id\":\"09b857ac5abf0523846581f318ee8088\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-03-15 12:19\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/949fbe56?r=1551835681\",\"user_name\":\"157******27\",\"uniqkey\":\"e4873fc8ebb42f8e0e0f38d21821306a\",\"poi_id\":\"17992255822767325183\",\"time_stamp\":1521087588,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"\",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"comment_num\":2,\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"17992255822767325183:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":30,\"mark_content\":-20,\"mark_userscore\":10,\"mark_total\":40,\"cmt_id\":\"304439546\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
        "photoList": "http://hiphotos.baidu.com/lbsugc/pic/item/8644ebf81a4c510fd2bbe1076c59252dd42aa5ab.jpg;http://hiphotos.baidu.com/lbsugc/pic/item/0e2442a7d933c895793f9b66dd1373f08202006d.jpg;http://hiphotos.baidu.com/lbsugc/pic/item/d01373f082025aaf0a737dd6f7edab64034f1a6d.jpg;http://hiphotos.baidu.com/lbsugc/pic/item/5ab5c9ea15ce36d3c27b802d36f33a87e950b1ab.jpg",
        "introduce": "暂无",
        "count": null,
        "sugTime": "暂无",
        "bestTime": "暂无",
        "weather": null,
        "type": 1,
        "distance": null
      }, {
        "id": 370,
        "name": "杭州基督教会崇一堂",
        "address": "杭州市江干区新塘路26号",
        "phone": "(0571)86961163",
        "uid": "2089583e646dc5ba14b54b58",
        "showtag": "教堂",
        "image": "http://hiphotos.baidu.com/map/pic/item/37d12f2eb9389b507d4990c08835e5dde6116ee9.jpg",
        "shopHours": "09:00-18:00",
        "commentNumber": 3,
        "latitude": 30.259386365918,
        "longitude": 120.20873161583,
        "price": "false",
        "overallRating": 4.5,
        "tags1": null,
        "wordList": null,
        "imgList": null,
        "content": "[[{\"count\":2,\"label_id\":\"scope_3_01\",\"label_name\":\"设施新全\"}],[{\"count\":6,\"label_id\":\"scope_1_01\",\"label_name\":\"环境很好\"},{\"count\":5,\"label_id\":\"scope_1_03\",\"label_name\":\"人气旺\"},{\"count\":1,\"label_id\":\"scope_1_02\",\"label_name\":\"景色优美\"},{\"count\":1,\"label_id\":\"scope_1_10\",\"label_name\":\"卫生干净\"}],[{\"count\":2,\"label_id\":\"scope_2_04\",\"label_name\":\"位置好找\"}]]",
        "commentList": "[{\"overall_rating\":5,\"date\":\"2018-02-23 00:00\",\"one_url\":\"http://m.dianping.com/review/401373589\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"TRISTABOA\",\"uniqkey\":\"095521c9d61ae1e8f9e9c3abbf45f6be\",\"user_logo\":\"http://store.is.autonavi.com/showpic/9c6a462eada0f273833e5a6ac8a15641?type=pic\",\"time_stamp\":1519315200,\"one_url_mobile\":\"http://m.dianping.com/review/401373589\",\"price\":null,\"content\":\"20180218礼拜天，下雨。事先了解到，主日早上有两堂，家里人也有安排，所以想赶第一堂，六点多出门，只是没想到杭州的公交车班次不多，等车的时间比车开的时间要多许多。到达要将近八点了。但似乎礼拜刚开始程序，直到第二堂开始，才明白，原来这里的礼拜前半个小时是类似我们青年聚会的敬拜赞美，然后才是唱诗，读经，讲道，祝福等。两堂的信息内容不同。每个月出一期报告单上有教会聚会的时间安排，主日第一次信息分享讲章，每个月讲员的安排。硬件设施很好，聚会也比较兴旺。值得一去。\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/7uyOZ7mngA1v0NiswKHNUe2kNkLfUT3tkg__BOi0REa02gP6n_pP8IiNC4YjV8AhTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":99},{\"pic_url\":\"http://qcloud.dpfile.com/pc/CrVadRPDE4sI6JwORwmyuVG-KryHMVsf6yidMZyBviC7i7vV9ObJPOsO43b14yI-TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":96},{\"pic_url\":\"http://qcloud.dpfile.com/pc/xoyxhKMFcnoEXcdLn8R14W7IUHUy9zPCcyKidkcGYjxg6j9t0CW1LrTJzdCeGhEmTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":102},{\"pic_url\":\"http://qcloud.dpfile.com/pc/Ca9mfVnzu2KKR39ITLiOE77Cgf85N-EK-ElSUin_MBM0GUjvJzQzFwFs1fXpEp90TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":83},{\"pic_url\":\"http://qcloud.dpfile.com/pc/vmAPR2ZdRyAXWVWz8wfciTkraqKBEnk7V3pW6MbePpjjnhhjdeoakUCXE8V2yzfATYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":75},{\"pic_url\":\"http://qcloud.dpfile.com/pc/bVWpG5iBFxfH4UkLedoKtHEzPL6Phy04KTVgdFQi7rYXKNwzfgiuxdswZL2PI7n0TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":73},{\"pic_url\":\"http://qcloud.dpfile.com/pc/T74w6jeI6uukXGcv8chmNHAJmW94naW7LxopdbmbpdD0kAawvhDXOXBa2ZnI1FIWTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":67},{\"pic_url\":\"http://qcloud.dpfile.com/pc/AoNUW9beO2lZDLgjxajzs_ebweGgCYfMJbC0afpGCQ39FiMxfamhzOpBpUB36ZKETYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":80},{\"pic_url\":\"http://qcloud.dpfile.com/pc/evktjPm63CefrNzkSWOs0ThPrpv2POdLIJw02PRHSbwkNVqbowOSz6WrD4VBGHSxTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":55},{\"pic_url\":\"http://qcloud.dpfile.com/pc/cX-p39d-RhWiQSN4NQ5iN7enKhuTS1qTBQ19lnJ-BwX0kAawvhDXOXBa2ZnI1FIWTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":41},{\"pic_url\":\"http://qcloud.dpfile.com/pc/2TWMJeN7uQzS4Prz6SExtHt9GOj8heBRmbrAupy1EU0iwrBb5QDLn8whC_rzgH4hTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":3},{\"pic_url\":\"http://qcloud.dpfile.com/pc/Zja0U0VPWj4WerJ1_Fgc784kPrlvVr8DEDg5YxYoj5g-qWei53Gil9abJGGAXOm_TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":0}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"3266827264757833760\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/4691436/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/4691436/review_all\",\"uid\":\"3266827264757833760:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":130,\"comment_num\":22,\"cmt_id\":\"095521c9d61ae1e8f9e9c3abbf45f6be\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-04-02 00:00\",\"one_url\":\"http://m.dianping.com/review/409116449\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"吃掉一只鞋\",\"uniqkey\":\"956ab75a350e82944e5ae33fff27b964\",\"user_logo\":\"http://store.is.autonavi.com/showpic/9c6a462eada0f273833e5a6ac8a15641?type=pic\",\"time_stamp\":1522598400,\"one_url_mobile\":\"http://m.dianping.com/review/409116449\",\"price\":null,\"content\":\"非常漂亮的教堂 是我去过的最漂亮的一个 拍的照片也是好多同学夸了 本人非基督教徒 只是慕名而来 和同学一起 果然是杭州最大的教堂 礼堂很大 人也很多 不过我是复活节去的 基本座无虚席 那天圣乐也很欢快 感受到了不一样的文化氛围\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/uxlkq1c8NRyDDO6Io78p2QllxqPIBATk64Vnla0YmgG5Pv7t-93aTa-KZ8SNGZEoTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":136},{\"pic_url\":\"http://qcloud.dpfile.com/pc/MDsPzvd7uJ39xGJiVyfdts8jsH4FcAaa8rfvyNoGa72uNpWMbCKzOc3N4RcAeSVCTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":8},{\"pic_url\":\"http://qcloud.dpfile.com/pc/7DVdnyMCuwasc5Apzyyx5rjgEPzw7JrmAMxpbrlcE5RxhwTPxxcbal6SR_KLdMFeTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":16}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"3266827264757833760\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/4691436/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/4691436/review_all\",\"uid\":\"3266827264757833760:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":40,\"mark_content\":30,\"mark_userscore\":10,\"mark_total\":110,\"comment_num\":22,\"cmt_id\":\"956ab75a350e82944e5ae33fff27b964\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2017-12-25 14:31\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/5e1c7426?r=1551835825\",\"user_name\":\"阿甘517\",\"uniqkey\":\"8c41c246518a7ebeb0cd291ec09049c8\",\"cmt_icons\":{\"comment_icon\":[]},\"time_stamp\":1514183460,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"\",\"pics\":[{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/f9dcd100baa1cd11118210d9b212c8fcc3ce2d16.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":217},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/d62a6059252dd42ad9916252083b5bb5c8eab8ab.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":189},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/bba1cd11728b4710dc1b9f35c8cec3fdfc032316.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":188}],\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"poi_id\":\"3266827264757833760\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"3266827264757833760:ugc\",\"mark_source\":10,\"mark_duration\":5,\"mark_multimedia\":70,\"mark_content\":-20,\"mark_userscore\":10,\"mark_total\":75,\"comment_num\":18,\"cmt_id\":\"244871706\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
        "photoList": "https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=2089583e646dc5ba14b54b58&width=720&height=360&quality=80&fovx=120;http://hiphotos.baidu.com/map/pic/item/472309f7905298220141b2a6daca7bcb0a46d461.jpg;http://hiphotos.baidu.com/map/pic/item/dc54564e9258d109cac6bcd6dd58ccbf6c814da8.jpg;http://hiphotos.baidu.com/map/pic/item/b21bb051f8198618da20cfdd41ed2e738bd4e600.jpg",
        "introduce": "暂无",
        "count": null,
        "sugTime": "暂无",
        "bestTime": "暂无",
        "weather": null,
        "type": 1,
        "distance": null
      }, {
        "id": 375,
        "name": "古庆春门",
        "address": "环城东路132号",
        "phone": "null",
        "uid": "2e64ef686ee2feae5b10936d",
        "showtag": "风景区",
        "image": "http://att2.citysbs.com/hangzhou/image/day_080226/middle_20080226_74c7f390e3ba09652e698DQmhRLfbje0.jpg",
        "shopHours": "暂无",
        "commentNumber": 2,
        "latitude": 30.25813816449,
        "longitude": 120.18781032115,
        "price": "false",
        "overallRating": 4.5,
        "tags1": null,
        "wordList": null,
        "imgList": null,
        "content": "[]",
        "commentList": "[{\"overall_rating\":5,\"date\":\"2018-04-20 00:00\",\"one_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/23507836\",\"user_url_mobile\":null,\"poi_id\":\"470119242343676612\",\"user_name\":\"张小凡09\",\"uniqkey\":\"6f802674869b05947facbd6ed0bf7d3c\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/863554f9c35bb4cd729e1b22b4469d2b428011.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1524153600,\"one_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"price\":null,\"content\":\"古庆春门是杭州城里古十大城门之一，始建于隋唐时期，据说，明初朱元璋部将常遇春率部由此入城，为祝大捷，改称庆春门<br>位置在环城东路与庆春路交叉口,原来的城门早在1959年建环城东路时拆除了，1994年在门址上筑庆春立交桥，现在看到的是2006年原址上仿古建造了一个城门,以杭州清代古城墙为原型，城墙全长66米、宽5.4米、高6.65米，两端为残墙，城墙中间建有城门，城墙里面还有个古城墙陈列馆，不过也早就大门紧闭不开放了<br>下午烈日当头，好多大伯们在城墙拱门洞里打着牌下着棋，热热闹闹的很不错。  \",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":2,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"uid\":\"470119242343676612:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"6f802674869b05947facbd6ed0bf7d3c\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":4,\"date\":\"2018-04-03 00:00\",\"one_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/54575141\",\"user_url_mobile\":null,\"poi_id\":\"470119242343676612\",\"user_name\":\"能美酱好吃\",\"uniqkey\":\"33149a180d0dbab008352f29a8a0dcf9\",\"user_logo\":\"https://p0.meituan.net/userheadpicbackend/2c08a2e1489fa4be6d7154d1d3c27f9a243100.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1522684800,\"one_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"price\":null,\"content\":\"始建于南宋高宗绍兴年间。它有着好几个名字，诸如“东青门”、“菜市门”和“太平门”。 “东青门”是庆春门始建时的名字。“菜市门”的由来是因为门外有菜市。而“太平门”则是元末张士诚改筑杭城之后的俗称，庆春门之称始于明朝。由于杭州东面城垣几次扩大、故地址亦多有变迁。庆春门内的庆春街，历来为繁华街道之一。惠济桥位于庆春门的西面，俗称 “盐桥”，是宋时盐船待榷（卖）处”。东面则有菜市桥，因宋时的蔬菜集市而得名。北面有潮鸣寺，是始建于五代后梁的古刹。寺北有回龙桥，据说是因为高宗赵构曾路过这里题诗而致。庆春门一带，历来就是文人的寓居之地。如唐朝的著名的书法家褚遂良，以《长生殿》留名于世的清代剧作家洪升，都曾在此一带居住。旧时，庆春街的西端，还留存有纪念岳飞的“忠烈祠”。现在古庆春门只剩下城门遗址，也均有铁门拦住不能攀爬，城门脚下，多得是贩卖古玩的商人。  \",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":2,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"uid\":\"470119242343676612:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"33149a180d0dbab008352f29a8a0dcf9\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
        "photoList": "https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=2e64ef686ee2feae5b10936d&width=720&height=360&quality=80&fovx=120;http://att2.citysbs.com/hangzhou/image/day_080228/middle_20080228_8fd66e52cafb2198d5aaMMl1MF0miY0h.jpg;http://t11.baidu.com/it/u=3201882226,140008280&fm=22",
        "introduce": "暂无",
        "count": null,
        "sugTime": "暂无",
        "bestTime": "暂无",
        "weather": null,
        "type": 1,
        "distance": null
      }, {
        "id": 523,
        "name": "中国围棋博物馆",
        "address": "杭州市江干区钱潮路2号天元大厦1层",
        "phone": "null",
        "uid": "21cdd62450b565f4b64f54b5",
        "showtag": "博物馆",
        "image": "http://t10.baidu.com/it/u=2242376274,3337817292&fm=22",
        "shopHours": "暂无",
        "commentNumber": 3,
        "latitude": 30.254654193284,
        "longitude": 120.22412135153,
        "price": "false",
        "overallRating": 4.5,
        "tags1": null,
        "wordList": null,
        "imgList": null,
        "content": "[]",
        "commentList": "[{\"overall_rating\":5,\"date\":\"2017-05-11 11:00\",\"one_url\":\"http://www.dianping.com/shop/16706187/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/1108002291\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"最浪漫的事是吃遍美食\",\"uniqkey\":\"fd1a2299ccb7c9f0b005a08b750711ff\",\"user_logo\":\"https://p0.meituan.net/userheadpicbackend/94c064b77ba1ed23b7e90d7bd38d9c8741254.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1494471600,\"one_url_mobile\":\"http://www.dianping.com/shop/16706187/review_all\",\"price\":null,\"content\":\"在天元大厦一楼，整个一楼都是展厅和办公室，很有文化气息的棋文化博物馆。 展厅很大，室内安静且干净，里面有各类棋具的展示厅，以及人物雕塑，感受到中华文化的博大精深。 工作日基本没什么人，对于这种小众的文化，应该也不会有太多人，应该是办活动或者比赛的时候比较热闹吧。\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/_aB2BeyamaAYcuK9sjESgeHQbJW9Z8efRO-rIbLIf8CYHbSvEEy9ZAO7_JSsQRUETYGVDmosZWTLal1WbWRW3A.jpg\",\"big_photo\":\"http://qcloud.dpfile.com/pc/_aB2BeyamaAYcuK9sjESgeHQbJW9Z8efRO-rIbLIf8CYHbSvEEy9ZAO7_JSsQRUETYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":21}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"7484308829683361089\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"7484308829683361089:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":40,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":110,\"comment_num\":7,\"cmt_id\":\"fd1a2299ccb7c9f0b005a08b750711ff\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":4,\"date\":\"2017-03-21 19:03\",\"one_url\":\"http://www.dianping.com/shop/16706187/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/39329662\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"__当时我就懵逼了\",\"uniqkey\":\"7dc720419aa60ec6555d845476f823de\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/2fec984f5794a4245ddfb7571b70bef5443207.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1490094180,\"one_url_mobile\":\"http://www.dianping.com/shop/16706187/review_all\",\"price\":0,\"content\":\"下午去天元大厦开会，居然一年多没去，发生的悄无声息的变化，演变出一家中国围棋博物馆来，能把中国传统文化融入道企业文化里，天元是花了心思了。博物馆里对中国围棋的起源、传承、兴衰变革，都做了脉络的梳理和讲解，并对围棋发展过程中的特殊人物做了塑形展示,历朝历代的知名国手的生平、成就、著作做了简约的介绍，一圈参观下来，受益匪浅。\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/I7ueuIMcNg7LzAZltd5nBadVLQ3Z8NmrhG7TFmtAX5tiWRr1Oyx9E1Ltd1LLhGf7TYGVDmosZWTLal1WbWRW3A.jpg\",\"big_photo\":\"http://qcloud.dpfile.com/pc/I7ueuIMcNg7LzAZltd5nBadVLQ3Z8NmrhG7TFmtAX5tiWRr1Oyx9E1Ltd1LLhGf7TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":7}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"7484308829683361089\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"7484308829683361089:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":40,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":110,\"comment_num\":7,\"cmt_id\":\"7dc720419aa60ec6555d845476f823de\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-07-18 09:54\",\"one_url\":\"http://www.dianping.com/shop/16706187/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/183381\",\"user_url_mobile\":null,\"poi_id\":\"7484308829683361089\",\"user_name\":\"even66\",\"uniqkey\":\"02524819c1812d9390dcd8a7a8b21bc5\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/50d51762df0a7f043dd5295cb266cc4d33497.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1531878840,\"one_url_mobile\":\"http://www.dianping.com/shop/16706187/review_all\",\"price\":null,\"content\":\"在钱塘江边的天元大厦的一楼。大堂就很有围棋特色，墙面上是超大的棋盘。四处都是棋局和棋子道具。博物馆加图书馆，都是免费的。资料齐全，很多围棋相关的书。从古至今的棋手和棋局的演变都有。需要耐心潜下来细读。实际上天元大厦里每一层还有各地围棋发展详细的介绍。挺值得看的。\",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":7,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"7484308829683361089:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"02524819c1812d9390dcd8a7a8b21bc5\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
        "photoList": "http://t10.baidu.com/it/u=2242376274,3337817292&fm=22;http://hiphotos.baidu.com/map/pic/item/fd039245d688d43f52a45533741ed21b0ff43be6.jpg;http://hiphotos.baidu.com/map/pic/item/8b13632762d0f703a40c4f1d01fa513d2797c5b1.jpg;http://zgqyhzfy.com/web/images/top1.jpg",
        "introduce": "暂无",
        "count": null,
        "sugTime": "暂无",
        "bestTime": "暂无",
        "weather": null,
        "type": 1,
        "distance": null
      }] // 轮播数据数组
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    /**
     * 预览图片
     */
    seePhoto: function seePhoto(index) {
      wx.previewImage({
        current: index, // 当前显示图片的http链接
        urls: this.imgList // 需要预览的图片http链接列表
      });
    }
  }
});

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    staticClass: "swiper-container",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "3000",
      "circular": "true",
      "duration": "500"
    }
  }, _vm._l((_vm.banner), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "swiper-item",
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.image
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("\n        " + _vm._s(_vm.name) + "\n      ")])]), _vm._v(" "), _c('van-row', {
    staticClass: "distanceAndAddress",
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "4",
      "mpcomid": '2'
    }
  }, [_vm._v("\n        " + _vm._s(_vm.distance) + "|\n      ")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "19",
      "offset": "1",
      "mpcomid": '3'
    }
  }, [_vm._v("\n        " + _vm._s(_vm.address) + "\n      ")])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '10'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '6'
    }
  }, [_c('van-rate', {
    attrs: {
      "value": _vm.overallRating,
      "size": "13",
      "count": "5",
      "disabled-color": "#00BFFF",
      "disabled": "",
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "5",
      "mpcomid": '7'
    }
  }, [_c('div', {
    staticClass: "showTag"
  }, [_vm._v("\n          " + _vm._s(_vm.showtag) + "\n        ")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "12",
      "mpcomid": '9'
    }
  }, _vm._l((_vm.tags1), function(item, index) {
    return _c('van-tag', {
      key: index,
      staticClass: "tags1",
      attrs: {
        "color": "#FFF6EF",
        "text-color": "#C7A98B",
        "mpcomid": '8-' + index
      }
    }, [_vm._v("\n          " + _vm._s(item) + "\n        ")])
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "introduce"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '15'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        景区概况\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '14'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "22",
      "mpcomid": '11'
    }
  }, [_c('span', [_vm._v("\n          " + _vm._s(_vm.introduce) + "\n          ")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "2",
      "mpcomid": '13'
    }
  }, [_c('div', {
    staticClass: "right"
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '12'
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "sugTime"
  }, [_c('span', {
    staticClass: "firstSpan"
  }, [_vm._v("建议游玩")]), _c('span', {
    staticClass: "secondSpan"
  }, [_vm._v(_vm._s(_vm.sugTime))])]), _vm._v(" "), _c('div', {
    staticClass: "sugTime"
  }, [_c('span', {
    staticClass: "firstSpan"
  }, [_vm._v("最佳季节")]), _c('span', {
    staticClass: "secondSpan"
  }, [_vm._v(_vm._s(_vm.bestTime))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "telephone"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '16'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        电话\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "one"
  }, [_vm._v("\n        " + _vm._s(_vm.telephone1) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "two"
  }, [_c('span', {
    staticClass: "otherSpan"
  }, [_vm._v(_vm._s(_vm.telephone1))]), _vm._v(" "), _c('span', {
    staticClass: "centerSpan"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "otherSpan"
  }, [_vm._v(_vm._s(_vm.telephone2))])])])], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "shopHours"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '17'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n          营业时间\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "hour"
  }, [_vm._v("\n          " + _vm._s(_vm.hour) + "\n        ")])])], 1)]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '21'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("印象标签")]), _c('span', {
    staticClass: "more"
  }, [_vm._v("发现更多"), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '18'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tag"
  }, [_c('div', _vm._l((_vm.tag1OfContent), function(item, index) {
    return _c('van-tag', {
      key: index,
      staticClass: "vanTag",
      attrs: {
        "color": "#f2826a",
        "plain": "",
        "size": "large",
        "mpcomid": '19-' + index
      }
    }, [_vm._v(_vm._s(item) + "\n            ")])
  })), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, _vm._l((_vm.tag2OfContent), function(item, index) {
    return _c('van-tag', {
      key: index,
      staticClass: "vanTag",
      attrs: {
        "color": "#f2826a",
        "plain": "",
        "size": "large",
        "mpcomid": '20-' + index
      }
    }, [_vm._v(_vm._s(item) + "\n            ")])
  }))])])], 1)]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "comment"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '48'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("评论")]), _c('span', {
    staticClass: "commentNumber"
  }, [_vm._v("(" + _vm._s(_vm.commentNumber) + "条评论)")]), _vm._v(" "), _c('button', {
    staticClass: "addComment",
    attrs: {
      "type": "primary",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary"
    }
  }, [_c('van-icon', {
    staticStyle: {
      "padding-top": "5px"
    },
    attrs: {
      "name": "edit",
      "size": "15px",
      "mpcomid": '22'
    }
  }), _vm._v("\n            写评论\n          ")], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "commentDetails"
  }, [_c('div', {
    staticClass: "commentDetail"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '34'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "3",
      "mpcomid": '23'
    }
  }, [_c('img', {
    staticClass: "portrait",
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  })]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "19",
      "offset": "1",
      "mpcomid": '33'
    }
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '24'
    }
  }, [_c('span', {
    staticClass: "userName"
  }, [_vm._v("158****3385")])]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '29'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "8",
      "mpcomid": '26'
    }
  }, [_c('van-rate', {
    attrs: {
      "value": _vm.overallRating,
      "size": "13",
      "count": "5",
      "disabled-color": "#00BFFF",
      "disabled": "",
      "mpcomid": '25'
    }
  })], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "3",
      "mpcomid": '27'
    }
  }, [_c('span', {
    staticClass: "rate"
  }, [_vm._v(_vm._s(_vm.overallRating))])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "8",
      "offset": "5",
      "mpcomid": '28'
    }
  }, [_c('div', {
    staticClass: "time"
  }, [_c('span', [_vm._v("2019-04-04")])])])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '30'
    }
  }, [_c('div', {
    staticClass: "detail"
  }, [_c('span', [_vm._v("\n                    位置：地铁🚇一号线西湖文化广场C出口，周边交通便利环境：近武林广场，武林码头，杭州大厦，比较热闹博物馆：周一闭馆，平时...\n                  ")])])]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '31'
    }
  }, [_c('div', [_c('img', {
    staticStyle: {
      "height": "70px",
      "width": "70px",
      "margin-right": "15px"
    },
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  }), _vm._v(" "), _c('img', {
    staticStyle: {
      "height": "70px",
      "width": "70px",
      "margin-right": "15px"
    },
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  }), _vm._v(" "), _c('img', {
    staticStyle: {
      "height": "70px",
      "width": "70px",
      "margin-right": "15px"
    },
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "width": "25px",
      "height": "15px",
      "background": "#000000",
      "opacity": "0.6",
      "color": "#ffffff",
      "position": "absolute",
      "font-size": "12px",
      "text-align": "center",
      "right": "66px",
      "margin-top": "55px"
    }
  }, [_vm._v("9张")])])]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '32'
    }
  }, [_c('div', {
    staticClass: "bottom"
  }, [_c('span', {
    staticClass: "resource"
  }, [_vm._v("来自百度地图")]), _vm._v(" "), _c('img', {
    staticClass: "likeImg",
    attrs: {
      "src": "../../../static/images/like.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "likes"
  }, [_vm._v("5")])])])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "commentDetail"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '46'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "3",
      "mpcomid": '35'
    }
  }, [_c('img', {
    staticClass: "portrait",
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  })]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "19",
      "offset": "1",
      "mpcomid": '45'
    }
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '36'
    }
  }, [_c('span', {
    staticClass: "userName"
  }, [_vm._v("158****3385")])]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '41'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "8",
      "mpcomid": '38'
    }
  }, [_c('van-rate', {
    attrs: {
      "value": _vm.overallRating,
      "size": "13",
      "count": "5",
      "disabled-color": "#00BFFF",
      "disabled": "",
      "mpcomid": '37'
    }
  })], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "3",
      "mpcomid": '39'
    }
  }, [_c('span', {
    staticClass: "rate"
  }, [_vm._v(_vm._s(_vm.overallRating))])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "8",
      "offset": "5",
      "mpcomid": '40'
    }
  }, [_c('div', {
    staticClass: "time"
  }, [_c('span', [_vm._v("2019-04-04")])])])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '42'
    }
  }, [_c('div', {
    staticClass: "detail"
  }, [_c('span', [_vm._v("\n                    位置：地铁🚇一号线西湖文化广场C出口，周边交通便利环境：近武林广场，武林码头，杭州大厦，比较热闹博物馆：周一闭馆，平时...\n                  ")])])]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '43'
    }
  }, [_c('div', [_c('img', {
    staticStyle: {
      "height": "70px",
      "width": "70px",
      "margin-right": "15px"
    },
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  }), _vm._v(" "), _c('img', {
    staticStyle: {
      "height": "70px",
      "width": "70px",
      "margin-right": "15px"
    },
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  }), _vm._v(" "), _c('img', {
    staticStyle: {
      "height": "70px",
      "width": "70px",
      "margin-right": "15px"
    },
    attrs: {
      "src": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "width": "25px",
      "height": "15px",
      "background": "#000000",
      "opacity": "0.6",
      "color": "#ffffff",
      "position": "absolute",
      "font-size": "12px",
      "text-align": "center",
      "right": "66px",
      "margin-top": "55px"
    }
  }, [_vm._v("9张")])])]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '44'
    }
  }, [_c('div', {
    staticClass: "bottom"
  }, [_c('span', {
    staticClass: "resource"
  }, [_vm._v("来自百度地图")]), _vm._v(" "), _c('img', {
    staticClass: "likeImg",
    attrs: {
      "src": "../../../static/images/like.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "likes"
  }, [_vm._v("5")])])])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "seeAll"
  }, [_c('span', [_vm._v("查看全部")]), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '47'
    }
  })], 1)])], 1)]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "photograph"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '50'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("相册")]), _c('span', {
    staticClass: "more"
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '49'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "photos"
  }, _vm._l((_vm.imgList), function(item, index) {
    return (index <= 3) ? _c('img', {
      key: index,
      attrs: {
        "src": item,
        "data-src": item,
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(item)
        }
      }
    }) : _vm._e()
  }))])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8962503e", esExports)
  }
}

/***/ })

},[198]);
//# sourceMappingURL=main.js.map
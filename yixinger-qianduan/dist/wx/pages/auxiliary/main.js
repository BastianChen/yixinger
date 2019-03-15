require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(30);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      show: false,
      message: '请选择图像识别类型',
      actions: [{
        name: '通用图像识别'
      }, {
        name: '植物识别'
      }, {
        name: '动物识别'
      }, {
        name: '菜品识别'
      }],
      type: '', // 图像识别的类型
      typeName: '', // 图像识别的类型的名字
      userInfo: {},
      data: {},
      jsona: '{"state":0,"message":"图像识别成功","data":{"id":null,"userId":"oE9el5Hx6LplsHe2roGhrkxkEUsk","imageUrl":"/images/photo/155236695464693289269_src.jpg","date":"2019-03-12 13:02:36","type":"1","result":"{\\"result\\":[{\\"score\\":0.426083,\\"root\\":\\"植物-苏铁科\\",\\"keyword\\":\\"苏铁\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E8%8B%8F%E9%93%81\\\\/323399\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/32fa828ba61ea8d36fd15f93950a304e241f58b1.jpg\\",\\"description\\":\\"苏铁。俗称：铁树，别名：辟火蕉、凤尾蕉、凤尾松、凤尾草，拉丁文名：Cycas revoluta Thunb.苏铁科、苏铁属，一说是因其木质密度大，入水即沉，沉重如铁而得名；另一说因其生长需要大量铁元素，故而名之。又名凤尾蕉、避火蕉、凤尾松，多种植在南方，现广泛分布于中国、日本、菲律宾和印度尼西亚等国家。苏铁最为出名的是其开花，被称之为“铁树开花”。苏铁为优美的观赏树种，栽培极为普遍，茎内含淀粉，可供食用；种子含油和丰富的淀粉，微有毒，供食用和药用，有治痢疾、止咳和止血之效。\\"}},{\\"score\\":0.319034,\\"root\\":\\"植物-树\\",\\"keyword\\":\\"树\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E6%A0%91\\\\/2699484\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/e4dde71190ef76c6864ea9509e16fdfaaf516728.jpg\\",\\"description\\":\\"树状图是一种数据结构，它是由n(n>=1)个有限结点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。它具有以下的特点：每个结点有零个或多个子结点；没有父结点的结点称为根结点；每一个非根结点有且只有一个父结点；除了根结点外，每个子结点可以分为多个不相交的子树；\\"}},{\\"score\\":0.216707,\\"root\\":\\"植物-其它\\",\\"keyword\\":\\"盆栽植物\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E7%9B%86%E6%A0%BD%E6%A4%8D%E7%89%A9\\\\/5895507\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/2e6fa73892a0299bd46225ee.jpg\\",\\"description\\":\\"盆栽植物，表达山水景色的盆栽。盆栽的种类很多，普通按盆栽观赏加以剪定整姿，可依树型、树数、树高、树种、观赏及格调。风水师认为扭转乾坤、带来好运的盆栽植物不少，金钱竹、马拉巴栗、兰花等等都是大家爱用的前几名。 当这些象征吉祥的盆栽植物花谢了、枯了，一定要马上更换一盆，才能继续聚气。盆栽植物为我们在狭小的个人空间里营造一个室外自然的景色，让我们在紧张的生活工作中置身大自然的陶冶中。\\"}},{\\"score\\":0.111181,\\"root\\":\\"植物-其它\\",\\"keyword\\":\\"大铁树\\",\\"baike_info\\":{}},{\\"score\\":0.013349,\\"root\\":\\"商品-食品\\",\\"keyword\\":\\"玉米\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E7%8E%89%E7%B1%B3\\\\/18401\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/5243fbf2b2119313d5a23cff6f380cd790238d98.jpg\\",\\"description\\":\\"玉米(拉丁学名：Zea mays L.)是禾本科玉蜀黍属一年生草本植物。别名：玉蜀黍、棒子、包谷、包米、包粟、玉茭、苞米、珍珠米、苞芦、大芦粟，东北辽宁话称珍珠粒，潮州话称薏米仁，粤语称为粟米，闽南语称作番麦。玉米是一年生雌雄同株异花授粉植物， 植株高大， 茎强壮， 是重要的粮食作物和饲料作物， 也是全世界总产量最高的农作物， 其种植面积和总产量仅次于水稻和小麦。玉米一直都被誉为长寿食品， 含有丰富的蛋 白质、脂肪、维生素、微量元素、纤维素等， 具有开发高营养、高生物学功能食品的巨大潜力。但由于其遗传性较为复杂， 变异种类丰富， 在常规的育种过程中存在着周期过长、变异系数过大、影响子代生长发育的缺点， 而现代生物育种技术不但克服了上述缺点和不足， 同时也提高了育种速度和质量。玉米味道香甜，可做各式菜肴，如玉米烙、玉米汁等，它也是工业酒精和烧酒的主要原料。2018年8月，财政部、农业农村部、银保监会印发通知，将玉米作物制种纳入中央财政农业保险保险费补贴目录。\\"}}],\\"log_id\\":8844610026703883180,\\"result_num\\":5}"},"extra":null,"messageDetail":null}'
    };
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
  },

  methods: {
    photoDistinguish: function photoDistinguish() {
      this.show = true;
    },
    textDistinguish: function textDistinguish() {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // wx.showLoading({
          //   title: '识别中...',
          // })
          wx.showToast({
            title: '识别中...',
            icon: 'loading'
          });
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          //上传图片到服务器api
          wx.uploadFile({
            url: 'https://wzcb97.top/' + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].aipOcr, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'imageFile',
            formData: {
              userId: _this.userInfo.openid
            },
            success: function success(res) {
              if (JSON.parse(res.data).state == 0) {
                var data = JSON.parse(res.data);
                _this.$router.push({
                  path: '../textdistinguish/main',
                  query: { data: encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data)) }
                });
              } else {
                wx.showToast({
                  title: JSON.parse(res.data).message,
                  icon: 'none',
                  duration: 3000
                });
              }
            }
          });
          // _this.data = JSON.parse(_this.jsona);
          // _this.$router.push({
          //   path: `../distinguish/main`,
          //   query: {type: _this.type, data: encodeURIComponent(JSON.stringify(_this.data))}
          // });
          // console.log(_this.type);
        }
      });
    },
    onCancel: function onCancel() {
      this.show = false;
    },
    onSelect: function onSelect(index) {
      this.typeName = index.target.name;
      switch (this.typeName) {
        case '通用图像识别':
          this.type = 1;
          this.show = false;
          break;
        case '植物识别':
          this.type = 2;
          this.show = false;
          break;
        case '动物识别':
          this.type = 3;
          this.show = false;
          break;
        case '菜品识别':
          this.type = 4;
          this.show = false;
          break;
        default:
          break;
      }
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // wx.showLoading({
          //   title: '识别中...',
          // })
          wx.showToast({
            title: '识别中...',
            icon: 'loading'
          });
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          //上传图片到服务器api
          wx.uploadFile({
            url: 'https://wzcb97.top/' + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].imageClassify, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'imageFile',
            formData: {
              type: _this.type,
              userId: _this.userInfo.openid
            },
            success: function success(res) {
              if (JSON.parse(res.data).state == 0) {
                var data = JSON.parse(res.data);
                //console.log("data"+data)
                _this.$router.push({
                  path: '../distinguish/main',
                  query: { type: _this.type, data: encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data)) }
                });
              } else {
                wx.showToast({
                  title: JSON.parse(res.data).message,
                  icon: 'none',
                  duration: 3000
                });
              }
            }
          });
          // _this.data = JSON.parse(_this.jsona);
          // _this.$router.push({
          //   path: `../distinguish/main`,
          //   query: {type: _this.type, data: encodeURIComponent(JSON.stringify(_this.data))}
          // });
          // console.log(_this.type);
        }
      });
    }
  }
});

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', [_c('button', {
    staticStyle: {
      "background-color": "#1989FA",
      "border-color": "#1989FA",
      "color": "#ffffff",
      "width": "90%",
      "margin-top": "20px"
    },
    attrs: {
      "type": "primary",
      "size": "default",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.photoDistinguish()
      }
    }
  }, [_vm._v("\n      图像识别\n    ")])], 1), _vm._v(" "), _c('div', [_c('button', {
    staticStyle: {
      "width": "90%",
      "margin-top": "20px"
    },
    attrs: {
      "type": "primary",
      "size": "default",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.textDistinguish()
      }
    }
  }, [_vm._v("\n      文字识别\n    ")])], 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.show,
      "actions": _vm.actions,
      "cancel-text": "取消",
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "cancel": _vm.onCancel,
      "select": _vm.onSelect
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1babaa8f", esExports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(98);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1babaa8f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1babaa8f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1babaa8f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\auxiliary\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1babaa8f", Component.options)
  } else {
    hotAPI.reload("data-v-1babaa8f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[97]);
//# sourceMappingURL=main.js.map
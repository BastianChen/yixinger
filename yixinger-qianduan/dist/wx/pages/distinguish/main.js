require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_064d55ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(177);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-064d55ee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_064d55ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\distinguish\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-064d55ee", Component.options)
  } else {
    hotAPI.reload("data-v-064d55ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_wxparse__ = __webpack_require__(47);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_3_mpvue_wxparse__["a" /* default */]
  },
  data: function data() {
    return {
      fromType: 'auto',
      toType: 'zh',
      isTranslated: false,
      broadcastImgUrl: '/static/images/broadcast.png',
      userInfo: {},
      result: '', //'<span>富士山<br/>富士山</span>',
      translateResult: '', // '<span style="font-size: 15px;line-height: 20px;padding: 15px;">Fuji<br/>Fuji</span>',
      // columns: ['自动检测', '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语',
      //   '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语',
      //   '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
      // pickerShow: false,
      // language: '自动检测 -> 中文',
      type: '', // 图像识别的类型
      data: {}, // 图像识别的数据
      imageUrl: '',
      jsona: '{"state":0,"message":"图像识别成功","data":{"id":null,"userId":"oE9el5Hx6LplsHe2roGhrkxkEUsk","imageUrl":"/images/photo/15523727225176481725_src.jpg","date":"2019-03-12 14:38:43","type":"1","result":"{\\"result\\":[{\\"score\\":0.973327,\\"root\\":\\"公众人物\\",\\"keyword\\":\\"周杰伦\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E5%91%A8%E6%9D%B0%E4%BC%A6\\\\/129156\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/38dbb6fd5266d0167927ca029b2bd40735fa35d9.jpg\\",\\"description\\":\\"周杰伦(Jay Chou)，1979年1月18日出生于台湾省新北市，中国台湾流行乐男歌手、音乐人、演员、导演、编剧、监制、商人。2000年发行首张个人专辑《Jay》。2001年发行的专辑《范特西》奠定其融合中西方音乐的风格。2002年举行“The One”世界巡回演唱会。2003年成为美国《时代周刊》封面人物。2004年获得世界音乐大奖中国区最畅销艺人奖。2005年凭借动作片《头文字D》获得台湾电影金马奖、香港电影金像奖最佳新人奖。2006年起连续三年获得世界音乐大奖中国区最畅销艺人奖。2007年自编自导的文艺片《不能说的秘密》获得台湾电影金马奖年度台湾杰出电影奖。2008年凭借歌曲《青花瓷》获得第19届金曲奖最佳作曲人奖。2009年入选美国CNN评出的“25位亚洲最具影响力的人物”；同年凭借专辑《魔杰座》获得第20届金曲奖最佳国语男歌手奖。2010年入选美国《Fast Company》评出的“全球百大创意人物”。2011年凭借专辑《跨时代》再度获得金曲奖最佳国语男歌手奖，并且第4次获得金曲奖最佳国语专辑奖；同年主演好莱坞电影《青蜂侠》。2012年登福布斯中国名人榜榜首。2014年发行华语乐坛首张数字音乐专辑《哎呦，不错哦》。2018年举行“地表最强2世界巡回演唱会”。演艺事业外，他还涉足商业、设计等领域。2007年成立杰威尔有限公司。2011年担任华硕笔电设计师并入股香港文化传信集团。周杰伦热心公益慈善，多次向中国内地灾区捐款捐物。2008年捐款援建希望小学。2014年担任中国禁毒宣传形象大使。\\"}},{\\"score\\":0.657525,\\"root\\":\\"人物-人物特写\\",\\"keyword\\":\\"鬓发\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E9%AC%93%E5%8F%91\\\\/4057208\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/7af40ad162d9f2d38cab570bacec8a136227cc98.jpg\\",\\"description\\":\\"鬓发，是在耳朵前面的一绺头发或一簇卷发。也指男士上承头发，下接胡须的中场地带，作用不可小觑，不仅是男发造型中最考功力的地方，更是修饰脸型、决定气质的关键。\\"}},{\\"score\\":0.408127,\\"root\\":\\"人物-人物特写\\",\\"keyword\\":\\"人脸\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E4%BA%BA%E8%84%B8\\\\/9106961\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/4d086e061d950a7b1d387baf08d162d9f2d3c94f.jpg\\",\\"description\\":\\"《人脸》是贯犯四分之一写的网络小说连载于起点中文网。\\"}},{\\"score\\":0.207997,\\"root\\":\\"非自然图像-屏幕截图\\",\\"keyword\\":\\"屏幕截图\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE\\\\/3634161\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/aa18972bd40735fa016882639c510fb30e240854.jpg\\",\\"description\\":\\"所谓屏幕截图就是将电脑屏幕上的桌面、窗口、对话框、选项卡等屏幕元素保存为图片。在Windows下用户可以使用键盘上的“打印屏幕系统请求”(Print Screen)按键进行整个屏幕的截图和当前活动窗口的截图(按住Alt键的同时按下Print Screen键)，还可以借助专业的屏幕截图软件进行截图。\\"}},{\\"score\\":0.007881,\\"root\\":\\"非自然图像-书籍封面\\",\\"keyword\\":\\"书籍\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E4%B9%A6%E7%B1%8D\\\\/59503\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/0b46f21fbe096b63a940b6e806338744ebf8ac29.jpg\\",\\"description\\":\\"书籍，是指装订成册的图书和文字，在狭义上的理解是带有文字,图像的纸张的集合。广义的书则是一切传播信息的媒体。不过有些人认为图书一词是“河图”与“洛书”的简称。\\"}}],\\"log_id\\":6571215882954042508,\\"result_num\\":5}"},"extra":null,"messageDetail":null}',
      results: [],
      isFirst: false,
      imgHeight: '',
      imgWidth: '',
      isShow: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['disc'])),
  onLoad: function onLoad(opts) {
    this.type = opts.type;
    switch (this.type) {
      case '1':
        wx.setNavigationBarTitle({
          title: '通用图像识别',
          success: function success(res) {
            // success
          }
        });
        break;
      case '2':
        wx.setNavigationBarTitle({
          title: '植物识别',
          success: function success(res) {
            // success
          }
        });
        break;
      case '3':
        wx.setNavigationBarTitle({
          title: '动物识别',
          success: function success(res) {
            // success
          }
        });
        break;
      case '4':
        wx.setNavigationBarTitle({
          title: '菜品识别',
          success: function success(res) {
            // success
          }
        });
        break;
      default:
        break;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    if (!this.isFirst && !this.$route.query.isHistory) {
      wx.showToast({
        title: '识别成功',
        icon: 'success'
      });
    }
    this.isFirst = true;
    this.userInfo = this.$store.getters.disc;
    //console.log("dddddd" + this.$route.query.data)
    this.data = JSON.parse(decodeURIComponent(this.$route.query.data));
    //console.log("ccccccc" + this.data)
    if (this.data.data.imageUrl.indexOf("https://www.wzcb97.top") == -1) {
      this.imageUrl = 'https://wzcb97.top' + this.data.data.imageUrl;
    } else {
      var imageUrlArray = this.data.data.imageUrl.split("//");
      this.imageUrl = 'https://wzcb97.top/' + imageUrlArray[2];
    }
    // 调整图片为自适应
    var _this = this;
    wx.getImageInfo({
      src: this.imageUrl,
      success: function success(res) {
        //console.log("图片" + JSON.stringify(res))
        var winWidth = wx.getSystemInfoSync().windowWidth;
        if (res.width > winWidth) {
          _this.imgWidth = winWidth * 0.9 + 'px';
          var rate = winWidth * 0.9 / res.width;
          _this.imgHeight = res.height * rate + 'px';
        } else {
          _this.imgWidth = res.width + 'px';
          _this.imgHeight = res.height + 'px';
        }
        _this.isShow = true;
        //console.log("屏幕宽度" + winWidth);
      }
    });
    console.log(JSON.parse(this.data.data.result));
    this.results = JSON.parse(this.data.data.result).result;
    console.log("this.results      " + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.results));
    for (var i = 0; i < this.results.length; i++) {
      if (this.type == '4') {
        this.results[i].probability = (this.results[i].probability * 100).toFixed(2);
      } else {
        this.results[i].score = (this.results[i].score * 100).toFixed(2);
      }
      //console.log("score" + this.results[i].baike_info.image_url);
    }
  },

  methods: {}
});

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "firstDiv"
  }, [_c('div', {
    staticClass: "firstRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "offset": "3",
      "mpcomid": '0'
    }
  }, [_c('span', [_vm._v("\n          识别图片：\n        ")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "secondRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    style: ({
      width: _vm.imgWidth,
      height: _vm.imgHeight
    }),
    attrs: {
      "src": _vm.imageUrl
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "thirdRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "offset": "3",
      "mpcomid": '3'
    }
  }, [_c('span', [_vm._v("\n            识别结果：\n          ")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "forthRow"
  }, _vm._l((_vm.results), function(domain, index) {
    return _c('van-row', {
      key: domain.key,
      attrs: {
        "mpcomid": '9-' + index
      }
    }, [_c('div', {
      staticStyle: {
        "margin-top": "20px"
      }
    }, [_c('div', [_c('van-col', {
      attrs: {
        "span": "6",
        "offset": "1",
        "mpcomid": '5-' + index
      }
    }, [(_vm.type == 1) ? _c('span', [_vm._v(_vm._s(domain.keyword))]) : _vm._e(), _vm._v(" "), (_vm.type != 1) ? _c('span', [_vm._v(_vm._s(domain.name))]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding-top": "8px"
      }
    }, [_c('van-col', {
      attrs: {
        "span": "11",
        "offset": "2",
        "mpcomid": '8-' + index
      }
    }, [(_vm.type != 4) ? _c('van-progress', {
      attrs: {
        "percentage": domain.score,
        "color": "linear-gradient(to right, #87CEFF, #00BFFF)",
        "mpcomid": '6-' + index
      }
    }) : _vm._e(), _vm._v(" "), (_vm.type == 4) ? _c('van-progress', {
      attrs: {
        "percentage": domain.probability,
        "color": "linear-gradient(to right, #87CEFF, #00BFFF)",
        "mpcomid": '7-' + index
      }
    }) : _vm._e()], 1)], 1)])])
  }))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isTranslated),
      expression: "isTranslated"
    }],
    staticClass: "secondDiv"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "secondRow"
  }, [_c('div', [_c('wxParse', {
    attrs: {
      "content": _vm.translateResult,
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.broadcastImgUrl,
      "eventid": '0'
    },
    on: {
      "click": _vm.play
    }
  })], 1)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "firstRow"
  }, [_c('span', [_vm._v("\n          -- 翻译结果 --\n        ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-064d55ee", esExports)
  }
}

/***/ })

},[104]);
//# sourceMappingURL=main.js.map
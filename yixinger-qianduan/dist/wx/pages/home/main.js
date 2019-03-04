require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "my"
  }, [(_vm.isLogin) ? _c('div', {
    staticClass: "myinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "click": _vm.getUserInfo
    }
  }), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.userInfo.nickName))])], 1)]) : _vm._e(), _vm._v(" "), (!_vm.isLogin) ? _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "button"
  }, [_c('button', {
    staticStyle: {
      "background-color": "#1989FA",
      "border-color": "#1989FA",
      "color": "#ffffff"
    },
    attrs: {
      "type": "primary",
      "size": "default",
      "plain": "false",
      "bindtap": "primary",
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "click": _vm.getUserInfo
    }
  }, [_vm._v("\n          登录\n        ")])], 1)]) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40d83a4c", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(93);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40d83a4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(11)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40d83a4c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40d83a4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40d83a4c", Component.options)
  } else {
    hotAPI.reload("data-v-40d83a4c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(25);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['disc'])),
  created: function created() {
    this.getUserInfo();
    //this.userInfo = this.$store.getters.disc;
  },
  mounted: function mounted() {
    //this.userInfo = this.$store.getters.disc;
  },
  data: function data() {
    return {
      isLogin: false,

      avator: "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png",
      allcheck: false,
      listData: [],
      Listids: [],
      userInfo: {}
    };
  },

  components: {},
  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;

      // this.userInfo = this.$store.getters.disc;
      // console.log(this.$store.getters.disc)
      // 调用登录接口
      // wx.login({
      //   success: () => {
      //     wx.getUserInfo({
      //       success: (res) => {
      //         this.userInfo = res.userInfo
      //         console.log(res)
      //         console.log(this.userInfo)
      //       }
      //     })
      //   }
      // }),
      wx.login({
        //获取code
        success: function success(res) {
          _this.code = res.code;
          console.log(res.code); //返回code
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
              _this.isLogin = true;
              console.log("this.isLogin" + _this.isLogin);
              // localStorage.setItem("userInfo",JSON.stringify(this.userInfo));
              console.log(res);
              console.log(_this.userInfo);
              // wx.request({
              //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx52a9380821d85603&secret=353ae1409d24e026d2bdcb0b180953e8&js_code=' + this.code + '&grant_type=authorization_code',
              //   data: {},
              //   header: {
              //     'content-type': 'application/json'
              //   },
              //   success: (res) => {
              //     console.log("openid"+res)
              //     openid = res.data.openid //返回openid
              //   }
              //})
            }
          });
          // wx.getLocation({
          //   type: 'wgs84',
          //   success(res) {
          //     console.log(res)
          //     const latitude = res.latitude
          //     const longitude = res.longitude
          //     const speed = res.speed
          //     const accuracy = res.accuracy
          //     wx.request({ // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
          //       url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll',
          //       data: {},
          //       header: {
          //         'Content-Type': 'application/json'
          //       },
          //       success(res) {
          //         console.log(res.data.result);
          //         console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
          //         this.cityName = '杭州市';
          //       },
          //       fail: function () {
          //         // fail
          //         this.cityName = '杭州市';
          //       },
          //       complete: function () {
          //         // complete
          //       }
          //     })
          //   }
          // })
        }
      });
    },
    goTo: function goTo(url) {
      if (toLogin()) {
        wx.navigateTo({
          url: url
        });
      }
    },
    toLogin: function toLogin() {
      if (!this.userInfo.avatarUrl) {
        wx.navigateTo({
          url: "/pages/login/main"
        });
      }
    }
  }
});

/***/ })

},[92]);
//# sourceMappingURL=main.js.map
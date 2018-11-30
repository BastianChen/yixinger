require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(103);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_378baaca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_378baaca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-378baaca", Component.options)
  } else {
    hotAPI.reload("data-v-378baaca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(43);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      motto: 'Hello World',
      userInfo: {},
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      active: 0,
      code: ""
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    onChange: function onChange(event) {
      console.log(event.detail);
    },
    vuexPage: function vuexPage() {
      this.$router.push('../counter/main');
    },
    apiPage: function apiPage() {
      this.$router.push('../search/search');
    },
    suggestionPage: function suggestionPage() {
      this.$router.push('../suggestion/suggestion');
    },
    regeocodingPage: function regeocodingPage() {
      this.$router.push('../regeocoding/regeocoding');
    },
    weatherPage: function weatherPage() {
      this.$router.push('../weather/weather');
    },
    bindViewTap: function bindViewTap() {
      // const url = '../logs/main'
      // wx.navigateTo({url})
      this.$router.push('../logs/main');
    },
    photoPage: function photoPage() {
      this.$router.push('../photo/photo');
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

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
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    radioChange: function radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.target.value);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [(_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_c('card', {
    attrs: {
      "text": _vm.userInfo.nickName,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "usermotto"
  }, [_c('div', {
    staticClass: "user-motto"
  }, [_c('card', {
    attrs: {
      "text": _vm.motto,
      "mpcomid": '1'
    }
  })], 1)]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "primary",
      "size": "normal",
      "round": "",
      "open-type": "getUserInfo",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.getUserInfo
    }
  }, [_vm._v("获取个人信息")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "primary",
      "size": "normal",
      "round": "",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.photoPage
    }
  }, [_vm._v("打开相机")]), _vm._v(" "), _c('van-tabbar', {
    attrs: {
      "active": "0",
      "mpcomid": '8'
    }
  }, [_c('van-tabbar-item', {
    attrs: {
      "icon": "shop",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.apiPage
    }
  }, [_vm._v("POI")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "search",
      "dot": "",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.suggestionPage
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "records",
      "info": "5",
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.regeocodingPage
    }
  }, [_vm._v("逆地址")]), _vm._v(" "), _c('van-tabbar-item', {
    attrs: {
      "icon": "gold-coin",
      "info": "20",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.weatherPage
    }
  }, [_vm._v("天气")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-378baaca", esExports)
  }
}

/***/ })

},[102]);
//# sourceMappingURL=main.js.map
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(194);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40d83a4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(197);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 195:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_js__ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.isLogin = this.$store.getters.disc.isLogin ? true : false;
    this.getUserInfo();
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      isLogin: false,
      code: '',
      openid: '',
      userInfo: {}
    };
  },

  components: {},
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])({
    setDisc: 'set_disc'
  }), {
    seePhoto: function seePhoto(img) {
      var imgArray = [];
      imgArray.push(img);
      wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: imgArray // 需要预览的图片http链接列表
      });
    },
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      wx.login({
        //获取code
        success: function success(res) {
          _this2.code = res.code;
          console.log("code" + _this2.code);
          wx.getUserInfo({
            success: function success(res) {
              _this2.userInfo = res.userInfo;
              _this2.isLogin = true;
              _this2.$httpWX.post({
                url: __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].addUser + '?code=' + _this2.code,
                data: _this2.userInfo,
                header: {
                  'Content-type': 'application/json'
                }
              }).then(function (data) {
                var _this = _this2;
                wx.getLocation({
                  type: 'wgs84',
                  success: function success(res) {
                    _this.userInfo.latitude = res.latitude;
                    _this.userInfo.longitude = res.longitude;
                    _this.openid = data.data;
                    _this.userInfo.openid = _this.openid;
                    _this.userInfo.isComment = false;
                    _this.userInfo.isLogin = true;
                    _this.setDisc(_this.userInfo);
                    _this.$httpWX.get({
                      url: __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].getUser,
                      data: {
                        openid: _this.openid,
                        language: 'zh'
                      }
                    }).then(function (userInfo) {
                      _this.userInfo = userInfo.data;
                    });
                  }
                });
              });
            }
          });
        }
      });
    }
  })
});

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "my"
  }, [(_vm.isLogin) ? _c('div', {
    staticClass: "myinfo"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "data-src": _vm.userInfo.avatarUrl,
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.seePhoto(_vm.userInfo.avatarUrl)
      }
    }
  }), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.userInfo.nickName))])], 1)])]) : _vm._e(), _vm._v(" "), (_vm.isLogin) ? _c('div', [_c('div', {
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "性别",
      "value": _vm.userInfo.gender,
      "size": "large",
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.userInfo.city) ? _c('van-cell', {
    attrs: {
      "title": "地区",
      "value": _vm.userInfo.province + ' ' + _vm.userInfo.city,
      "size": "large",
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), ((!_vm.userInfo.city) && (_vm.userInfo.province)) ? _c('van-cell', {
    attrs: {
      "title": "地区",
      "value": _vm.userInfo.country + ' ' + _vm.userInfo.province,
      "size": "large",
      "mpcomid": '2'
    }
  }) : _vm._e(), _vm._v(" "), ((!_vm.userInfo.city) && (!_vm.userInfo.province) && (_vm.userInfo.country)) ? _c('van-cell', {
    attrs: {
      "title": "地区",
      "value": _vm.userInfo.country,
      "size": "large",
      "mpcomid": '3'
    }
  }) : _vm._e(), _vm._v(" "), ((!_vm.userInfo.city) && (!_vm.userInfo.province) && (!_vm.userInfo.country)) ? _c('van-cell', {
    attrs: {
      "title": "地区",
      "value": "暂无",
      "size": "large",
      "mpcomid": '4'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "浏览记录",
      "is-link": "",
      "url": "/pages/userhistory/main",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "操作记录",
      "is-link": "",
      "url": "/pages/operationhistory/main",
      "mpcomid": '6'
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (!_vm.isLogin) ? _c('div', {
    staticClass: "login"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
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
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "imgAndSpan"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/trip.png"
    }
  })]), _vm._v(" "), _c('div', [_c('span', [_vm._v("\n            登录用于获取用户的非隐私信息，并用于后续用户查看自己的行为记录\n          ")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40d83a4c", esExports)
  }
}

/***/ })

},[193]);
//# sourceMappingURL=main.js.map
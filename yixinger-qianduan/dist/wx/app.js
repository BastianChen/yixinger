require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],{

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_router_patch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wx_request__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index__ = __webpack_require__(89);




//引入store


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$httpWX = __WEBPACK_IMPORTED_MODULE_3__utils_wx_request__["a" /* default */];

//把store挂载到全局
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_mpvue_router_patch__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/logs/main', 'pages/counter/main', "pages/api/main", "pages/search/search", "pages/suggestion/suggestion", "pages/regeocoding/regeocoding", "pages/weather/weather", "pages/photo/photo"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ea5149',
      navigationBarTitleText: 'yixinger',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-061ab952", Component.options)
  } else {
    hotAPI.reload("data-v-061ab952", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

// const host = 'http://139.196.139.249:8080'
//const host = 'http://localhost:8080'
var host = 'https://wzcb97.top';

function request(url, method, data, header, title) {
  wx.showLoading({
    title: title == null ? '加载中...' : title // 数据请求前loading
  });
  if (header != null) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.request({
        url: host + url, // 仅为示例，并非真实的接口地址
        method: method,
        data: data,
        header: header,
        success: function success(res) {
          wx.hideLoading();
          resolve(res.data);
        },
        fail: function fail(res) {
          wx.hideLoading();
          // reject(false)
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    });
  } else {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.request({
        url: host + url, // 仅为示例，并非真实的接口地址
        method: method,
        data: data,
        header: method == 'POST' ? {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' // POST默认值
        } : {
          'Content-type': 'application/json' // GET默认值
        },
        success: function success(res) {
          wx.hideLoading();
          resolve(res.data);
        },
        fail: function fail(res) {
          wx.hideLoading();
          // reject(false)
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    });
  }
}

function get(obj) {
  return request(obj.url, 'GET', obj.data, obj.header, obj.title);
}

function post(obj) {
  return request(obj.url, 'POST', obj.data, obj.header, obj.title);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  request: request,
  get: get,
  post: post,
  host: host
});

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(92);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__
}));

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  disc: {}
};

/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var mutations = {
  set_disc: function set_disc(state, disc) {
    state.disc = disc;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disc", function() { return disc; });
var disc = function disc(state) {
  return state.disc;
};

/***/ })

},[49]);
//# sourceMappingURL=app.js.map
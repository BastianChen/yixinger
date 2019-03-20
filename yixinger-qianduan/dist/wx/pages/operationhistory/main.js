require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(189);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f610f38c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(192);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f610f38c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f610f38c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\operationhistory\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f610f38c", Component.options)
  } else {
    hotAPI.reload("data-v-f610f38c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(186);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      active: 0,
      imageUrl: 'https://www.wzcb97.top/images/photo/155306006312929788825_src.jpg'
    };
  },

  methods: {
    clickLong: function clickLong(index) {
      __WEBPACK_IMPORTED_MODULE_0__static_vant_weapp_dist_dialog_dialog_js__["a" /* default */].confirm({
        title: '温馨提示',
        message: '您确定要删除该条记录？'
      }).then(function () {
        console.log("确定");
      }).catch(function () {
        console.log("取消");
      });
    },
    onChange: function onChange(index) {
      // wx.showToast({
      //   title: `切换到标签 ${index.target.title}`,
      //   icon: 'none'
      // });
    }
  }
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "sticky": "",
      "animated": "",
      "swipeable": "",
      "color": "#00BFFF",
      "eventid": '1',
      "mpcomid": '20'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "图像识别",
      "mpcomid": '18'
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "10px 5px",
      "width": "100%",
      "font-weight": "bold",
      "font-size": "28px",
      "font-family": "KaiTi"
    }
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "8",
      "offset": "1",
      "mpcomid": '0'
    }
  }, [_vm._v("\n            2019年\n          ")])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "4",
      "offset": "1",
      "mpcomid": '2'
    }
  }, [_vm._v("\n            今天\n          ")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "18",
      "eventid": '0',
      "mpcomid": '4'
    },
    on: {
      "longpress": _vm.clickLong
    }
  }, [_c('van-card', {
    attrs: {
      "desc": "通用图像识别",
      "title": "香奈儿",
      "thumb": _vm.imageUrl,
      "centered": "",
      "lazy-load": "",
      "mpcomid": '3'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "10px 5px",
      "width": "100%",
      "font-weight": "bold",
      "font-size": "28px",
      "font-family": "KaiTi"
    }
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "8",
      "offset": "1",
      "mpcomid": '6'
    }
  }, [_vm._v("\n            2018年\n          ")])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "4",
      "offset": "1",
      "mpcomid": '8'
    }
  }, [_c('span', [_vm._v("\n              11\n            ")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "14px",
      "margin-left": "-7px"
    }
  }, [_vm._v("\n              3月\n            ")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "18",
      "mpcomid": '10'
    }
  }, [_c('van-card', {
    attrs: {
      "desc": "通用图像识别",
      "title": "香奈儿",
      "thumb": _vm.imageUrl,
      "centered": "",
      "lazy-load": "",
      "mpcomid": '9'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "10px 5px",
      "width": "100%",
      "font-weight": "bold",
      "font-size": "28px",
      "font-family": "KaiTi"
    }
  }, [(false) ? _c('van-row', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "8",
      "offset": "1",
      "mpcomid": '12'
    }
  }, [_vm._v("\n            2018年\n          ")])], 1) : _vm._e(), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '17'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "4",
      "offset": "1",
      "mpcomid": '14'
    }
  }, [_c('span', [_vm._v("\n              09\n            ")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "14px",
      "margin-left": "-7px"
    }
  }, [_vm._v("\n              3月\n            ")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "18",
      "mpcomid": '16'
    }
  }, [_c('van-card', {
    attrs: {
      "desc": "通用图像识别",
      "title": "香奈儿",
      "thumb": _vm.imageUrl,
      "centered": "",
      "lazy-load": "",
      "mpcomid": '15'
    }
  })], 1)], 1)], 1)]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "文字识别",
      "mpcomid": '19'
    }
  }, [_c('div', {
    staticStyle: {
      "text-align": "center",
      "margin-top": "200px"
    }
  }, [_c('div', [_c('img', {
    staticStyle: {
      "width": "80px",
      "height": "80px"
    },
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })]), _vm._v(" "), _c('div', [_c('span', [_vm._v("\n            暂无记录\n          ")])])])])], 1), _vm._v(" "), _c('van-dialog', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "id": "van-dialog",
      "mpcomid": '21'
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
     require("vue-hot-reload-api").rerender("data-v-f610f38c", esExports)
  }
}

/***/ })

},[188]);
//# sourceMappingURL=main.js.map
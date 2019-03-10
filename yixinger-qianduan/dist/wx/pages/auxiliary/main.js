require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInfo: {}
    };
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
  },

  methods: {
    photoDistinguish: function photoDistinguish() {
      this.show = true;
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
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          // _this.setData({
          //   tempFilePaths: res.tempFilePaths
          // })

          //上传图片到服务器api
          var tempFilePaths = res.tempFilePaths;
          console.log("res" + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res));
          console.log("apiurl" + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].imageClassify + "ss" + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getUser);
          wx.uploadFile({
            url: 'https://wzcb97.top/' + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].imageClassify, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'imageFile',
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData: {
              type: _this.type,
              userId: _this.userInfo.openid
            },
            success: function success(res) {
              var data = res.data;
              _this.$router.push({
                path: '../distinguish/main',
                query: { type: _this.type, data: data }
              });
              //do something
            }
          });
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
  }, [_c('div', {
    staticClass: "auxiliary"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', [_c('div', [_c('p', [_vm._v("图像识别")])], 1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "https://wzcb97.top/images/index/photo.jpg"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "auxiliary"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', [_c('div', [_c('p', [_vm._v("文字识别")])], 1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787214368&di=1603f11da101544e417a131ff1bb9ba5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F18%2F20140618110551_vL3iQ.jpeg"
    }
  })])])]), _vm._v(" "), _c('div', [_c('button', {
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
      "bindtap": "primary"
    }
  }, [_vm._v("\n      文字识别\n    ")])], 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.show,
      "actions": _vm.actions,
      "cancel-text": "取消",
      "eventid": '1',
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
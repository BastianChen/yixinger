require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(214);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f089b19_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(215)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f089b19"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f089b19_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\photolist\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f089b19", Component.options)
  } else {
    hotAPI.reload("data-v-4f089b19", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(8);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pageNo: 1,
      pageSize: 10,
      totalPage: 0,
      isComment: false,
      userInfo: {},
      firstPhotoList: [],
      secondPhotoList: [],
      totalPhotoList: [],
      baiduPhotoList: [],
      isShowLine: false,
      isPhotoListEmpty: false
    };
  },
  onUnload: function onUnload() {
    this.pageNo = 1;
    this.pageSize = 10;
    this.totalPage = 0;
    this.isShowLine = false;
    this.totalPhotoList = [];
    this.firstPhotoList = [];
    this.secondPhotoList = [];
    this.baiduPhotoList = [];
  },
  onShow: function onShow() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    if (this.isComment) {
      this.getPhotoList(true);
    }
  },
  onReachBottom: function onReachBottom() {
    if (this.pageNo + 1 <= this.totalPage) {
      this.pageNo = this.pageNo + 1;
      this.isShowLine = false;
      this.getPhotoList(false);
    } else {
      this.isShowLine = true;
    }
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    this.getPhotoList(false);
  },

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])({
    setDisc: 'set_disc'
  }), {
    /**
     * 预览图片
     */
    seePhoto: function seePhoto(index, imgList) {
      wx.previewImage({
        current: index, // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表
      });
    },
    commit: function commit() {
      this.userInfo.isComment = false;
      this.setDisc(this.userInfo);
      var _this = this;
      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          _this.$router.push({
            path: '../addphoto/main',
            query: {
              placeId: _this.$route.query.placeId,
              // placeId: '72aa2513e7472646077ce816',
              imgList: encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res))
            }
          });
        }
      });
    },
    getPhotoList: function getPhotoList(type) {
      var _this2 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].getPlacePhotoByUid,
        data: {
          uid: this.$route.query.placeId,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        isShowLoading: type ? true : false
      }).then(function (res) {
        if (res.state == 0) {
          _this2.isPhotoListEmpty = false;
          _this2.totalPage = res.data.totalPage;
          if (res.data.totalNum < 11) {
            _this2.isShowLine = true;
          }
          var imageList = res.data.items;
          var _this = _this2;
          imageList.forEach(function (imageObject, i) {
            var isRepated = false;
            if (imageObject.imageUrl.indexOf("/images/placephoto") != -1) {
              imageObject.imageUrl = 'https://wzcb97.top/' + imageObject.imageUrl;
              if (_this.totalPhotoList.length != 0) {
                for (var j = 0; j < _this.totalPhotoList.length; j++) {
                  if (_this.totalPhotoList[j] == imageObject.imageUrl) {
                    isRepated = true;
                    break;
                  }
                }
              }
              if (!isRepated) {
                wx.getImageInfo({
                  src: imageObject.imageUrl,
                  success: function success(res) {
                    if (i % 2 == 0) {
                      if (!type) {
                        _this.firstPhotoList.push(imageObject);
                      } else {
                        _this.firstPhotoList.unshift(imageObject);
                      }
                    } else {
                      if (!type) {
                        _this.secondPhotoList.push(imageObject);
                      } else {
                        _this.secondPhotoList.unshift(imageObject);
                      }
                    }
                    if (!type) {
                      _this.totalPhotoList.push(imageObject.imageUrl);
                    } else {
                      _this.totalPhotoList.unshift(imageObject.imageUrl);
                    }
                    var winWidth = wx.getSystemInfoSync().windowWidth;
                    imageObject.imgWidth = winWidth * 0.45 + 'px';
                    var rate = winWidth * 0.45 / res.width;
                    imageObject.imgHeight = res.height * rate + 'px';
                  }
                });
              }
            } else {
              if (_this.totalPhotoList.length != 0) {
                for (var _j = 0; _j < _this.totalPhotoList.length; _j++) {
                  if (_this.totalPhotoList[_j] == imageObject.imageUrl) {
                    isRepated = true;
                    break;
                  }
                }
              }
              if (!isRepated) {
                _this.baiduPhotoList.push(imageObject);
                _this.totalPhotoList.push(imageObject.imageUrl);
              }
            }
          });
        } else {
          _this2.isPhotoListEmpty = true;
        }
      });
    }
  })
});

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "firstDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "12",
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "imgCol1"
  }, _vm._l((_vm.firstPhotoList), function(img, imgIndex) {
    return _c('img', {
      key: imgIndex,
      style: ({
        width: img.imgWidth,
        height: img.imgHeight
      }),
      attrs: {
        "src": img.imageUrl,
        "data-src": img.imageUrl,
        "eventid": '0-' + imgIndex
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(img.imageUrl, _vm.totalPhotoList)
        }
      }
    })
  }))]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "12",
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "imgCol2"
  }, _vm._l((_vm.secondPhotoList), function(img, imgIndex) {
    return _c('img', {
      key: imgIndex,
      style: ({
        width: img.imgWidth,
        height: img.imgHeight
      }),
      attrs: {
        "src": img.imageUrl,
        "data-src": img.imageUrl,
        "eventid": '1-' + imgIndex
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(img.imageUrl, _vm.totalPhotoList)
        }
      }
    })
  }))])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('div', {
    staticClass: "imgCol1"
  }, _vm._l((_vm.baiduPhotoList), function(img, imgIndex) {
    return _c('img', {
      key: imgIndex,
      attrs: {
        "src": img.imageUrl,
        "data-src": img.imageUrl,
        "eventid": '2-' + imgIndex
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(img.imageUrl, _vm.totalPhotoList)
        }
      }
    })
  }))])], 1), _vm._v(" "), _c('div', {
    staticClass: "secondDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('button', {
    staticClass: "commit-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.commit()
      }
    }
  }, [_vm._v("\n        上传图片\n      ")])], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowLine),
      expression: "isShowLine"
    }],
    staticClass: "thirdDiv"
  }, [_c('img', {
    staticClass: "firstImg",
    attrs: {
      "src": "../../../static/images/line.png"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('img', {
    staticClass: "secondImg",
    attrs: {
      "src": "../../../static/images/line.png"
    }
  })]), _vm._v(" "), (_vm.isPhotoListEmpty) ? _c('div', {
    staticClass: "fifthDiv"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('span', [_vm._v("\n        我是有底线的\n      ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("\n        暂无图片\n      ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f089b19", esExports)
  }
}

/***/ })

},[213]);
//# sourceMappingURL=main.js.map
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75831fc4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
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
var __vue_scopeId__ = "data-v-75831fc4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75831fc4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addphoto\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75831fc4", Component.options)
  } else {
    hotAPI.reload("data-v-75831fc4", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(13);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isComment: false,
      imgList: [],
      imageList: '',
      userInfo: {},
      isFinished: false
    };
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    if (this.isFinished) {
      this.imgList = JSON.parse(decodeURIComponent(this.$route.query.imgList)).tempFilePaths;
    } else {
      var imageList = JSON.parse(decodeURIComponent(this.$route.query.imgList)).tempFilePaths;
      if (this.imgList.length + imageList.length < 10) {
        for (var i = 0; i < imageList.length; i++) {
          this.imgList.push(imageList[i]);
        }
      } else {
        wx.showToast({
          title: '最多只能上传9张图片哦!',
          icon: 'none'
        });
      }
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    setDisc: 'set_disc'
  }), {
    seePhoto: function seePhoto(index, imgList) {
      wx.previewImage({
        current: index, // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表
      });
    },
    addPhoto: function addPhoto() {
      if (this.imgList.length == 9) {
        wx.showToast({
          title: '最多只能上传9张图片哦!',
          icon: 'none'
        });
      } else {
        var _this = this;
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            if (_this.imgList.length + res.tempFilePaths.length < 10) {
              for (var i = 0; i < res.tempFilePaths.length; i++) {
                _this.imgList.push(res.tempFilePaths[i]);
              }
            } else {
              wx.showToast({
                title: '最多只能上传9张图片哦!',
                icon: 'none'
              });
            }
          }
        });
      }
    },
    clickLong: function clickLong(index, imgList) {
      __WEBPACK_IMPORTED_MODULE_3__static_vant_weapp_dist_dialog_dialog_js__["a" /* default */].confirm({
        title: '温馨提示',
        message: '您确定要删除该张照片？'
      }).then(function () {
        imgList.splice(index, 1);
      }).catch(function () {
        console.log("取消");
      });
    },
    initImgList: function initImgList() {
      this.imgList = this.$route.query.imgList;
    },
    commit: function commit() {
      var _this = this;
      var i = 0;
      if (_this.imgList.length != 0) {
        for (i = 0; i < _this.imgList.length; i++) {
          wx.uploadFile({
            url: 'https://wzcb97.top/' + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].uploadImage,
            filePath: _this.imgList[i],
            name: 'imageFile',
            formData: { type: 2 },
            success: function success(res) {
              if (JSON.parse(res.data).state == 0) {
                var imageUrl = JSON.parse(res.data);
                _this.imageList = _this.imageList + imageUrl.data + ";";
                var imgArray = _this.imageList.split(";");
                if (imgArray.length == _this.imgList.length + 1) {
                  _this.imageList = _this.imageList.substring(0, _this.imageList.length - 1);
                  _this.$httpWX.post({
                    url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].addPlacePhoto + '?imageList=' + _this.imageList,
                    data: {
                      userId: _this.userInfo.openid,
                      userName: _this.userInfo.nickName,
                      placeId: _this.$route.query.placeId
                    }
                  }).then(function (data) {
                    wx.showToast({
                      title: data.message,
                      icon: 'success',
                      duration: 3000
                    });
                    _this.userInfo.isComment = true;
                    _this.setDisc(_this.userInfo);
                    setTimeout(function () {
                      _this.isFinished = true;
                      _this.imageList = [];
                      _this.$router.go(-1);
                    }, 1500);
                  });
                }
              } else {
                wx.showToast({
                  title: JSON.parse(res.data).message,
                  icon: 'none',
                  duration: 3000
                });
              }
            }
          });
        }
      } else {
        wx.showToast({
          title: '请添加图片',
          icon: 'none'
        });
      }
    }
  })
});

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "firstDiv"
  }, [_vm._l((_vm.imgList), function(img, imgIndex) {
    return _c('img', {
      key: imgIndex,
      attrs: {
        "src": img,
        "data-src": img,
        "eventid": '0-' + imgIndex
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(img, _vm.imgList)
        },
        "longpress": function($event) {
          _vm.clickLong(_vm.index, _vm.imgList)
        }
      }
    })
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/images/add_photo.png",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.addPhoto()
      }
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "secondDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('button', {
    staticClass: "commit-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.commit()
      }
    }
  }, [_vm._v("\n        发表\n      ")])], 1)], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-75831fc4", esExports)
  }
}

/***/ })

},[104]);
//# sourceMappingURL=main.js.map
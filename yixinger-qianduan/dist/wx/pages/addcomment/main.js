require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "firstDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "5",
      "offset": "1",
      "mpcomid": '0'
    }
  }, [_c('span', {
    staticClass: "firstCol"
  }, [_vm._v("请您评分")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "10",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "secondCol"
  }, [_c('van-rate', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "value": _vm.rateValue,
      "size": "25",
      "color": "#00BFFF",
      "void-color": "#00BFFF",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange
    }
  })], 1)]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "2",
      "offset": "1",
      "mpcomid": '3'
    }
  }, [_c('span', {
    staticClass: "thirdCol"
  }, [_vm._v(_vm._s(_vm.value))])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "secondDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('textarea', {
    staticClass: "text",
    attrs: {
      "maxlength": "2000",
      "value": _vm.comment,
      "name": "content",
      "placeholder": "写下我的感受...",
      "eventid": '1'
    },
    on: {
      "input": _vm.insert
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "thirdDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/add_photo.png",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.addPhoto()
      }
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "forthDiv"
  }, _vm._l((_vm.imgList), function(item, index) {
    return _c('img', {
      key: index,
      attrs: {
        "src": item,
        "eventid": '3-' + index
      },
      on: {
        "longpress": function($event) {
          _vm.clickLong(index, _vm.imgList)
        },
        "click": function($event) {
          _vm.seePhoto(item, _vm.imgList)
        }
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "fifthDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('button', {
    staticClass: "commit-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.commit()
      }
    }
  }, [_vm._v("\n        发表\n      ")])], 1)], 1), _vm._v(" "), _c('van-dialog', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "id": "van-dialog",
      "mpcomid": '8'
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
     require("vue-hot-reload-api").rerender("data-v-446d7bcb", esExports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_446d7bcb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-446d7bcb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_446d7bcb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addcomment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-446d7bcb", Component.options)
  } else {
    hotAPI.reload("data-v-446d7bcb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(17);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['disc'])),
  data: function data() {
    return {
      title: '',
      rateValue: 0,
      value: '',
      comment: '',
      imgList: [],
      imageList: '',
      isFinished: false,
      userInfo: {}
    };
  },
  onLoad: function onLoad(opts) {
    this.title = opts.title;
    wx.setNavigationBarTitle({
      title: this.title,
      success: function success(res) {
        // success
      }
    });
  },
  onUnload: function onUnload() {
    if (this.isFinished) {
      this.rateValue = 0;
      this.value = '';
      this.comment = '';
      this.imgList = [];
      this.imageList = '';
      this.isFinished = false;
    } else {
      this.isFinished = false;
    }
  },
  mounted: function mounted() {},

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    setDisc: 'set_disc'
  }), {
    onChange: function onChange(event) {
      this.value = event.mp.detail + '.0';
      this.rateValue = event.mp.detail;
    },
    insert: function insert(event) {
      this.comment = event.mp.detail.value;
    },
    commit: function commit() {
      if (this.comment == '' || this.comment.match(/^[ ]*$/)) {
        wx.showToast({
          title: '请写下您的感受',
          icon: 'none'
        });
      } else {
        var placeComment = {};
        placeComment.placeId = this.$route.query.placeId;
        placeComment.likes = 0;
        placeComment.userId = this.$store.getters.disc.openid;
        placeComment.userName = this.$store.getters.disc.nickName;
        placeComment.userImage = this.$store.getters.disc.avatarUrl;
        placeComment.overallRating = this.rateValue;
        placeComment.comment = this.comment;
        this.uploadImage(this.imgList, placeComment);
      }
    },
    uploadImage: function uploadImage(data, placeComment) {
      var _this = this;
      var i = 0;
      if (data.length != 0) {
        for (i = 0; i < data.length; i++) {
          wx.uploadFile({
            url: 'https://wzcb97.top/' + __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].uploadImage, //仅为示例，非真实的接口地址
            filePath: data[i],
            name: 'imageFile',
            data: null,
            success: function success(res) {
              if (JSON.parse(res.data).state == 0) {
                var imageUrl = JSON.parse(res.data);
                _this.imageList = _this.imageList + imageUrl.data + ";";
                var imgArray = _this.imageList.split(";");
                if (imgArray.length == data.length + 1) {
                  _this.imageList = _this.imageList.substring(0, _this.imageList.length - 1);
                  _this.$httpWX.post({
                    url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].addPlaceComment + '?imageList=' + _this.imageList,
                    data: placeComment,
                    header: {
                      'Content-type': 'application/json'
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
        _this.$httpWX.post({
          url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].addPlaceComment,
          data: placeComment,
          header: {
            'Content-type': 'application/json'
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
            _this.$router.go(-1);
          }, 1500);
        });
      }
    },
    pageJump: function pageJump() {
      this.$router.push({
        path: '../placedetail/main',
        query: {
          uid: this.uid
        }
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

    /**
     * 预览图片
     */
    seePhoto: function seePhoto(index, imgList) {
      wx.previewImage({
        current: index, // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表
      });
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
    }
  })
});

/***/ })

},[93]);
//# sourceMappingURL=main.js.map
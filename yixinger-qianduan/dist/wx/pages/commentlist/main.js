require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(121);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e625b5f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e625b5f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e625b5f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\commentlist\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e625b5f4", Component.options)
  } else {
    hotAPI.reload("data-v-e625b5f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(8);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pageNo: 1,
      pageSize: 10,
      totalPage: 0,
      commentListInfo: [],
      likeImgUrl: '/static/images/like.png',
      likedHistory: {},
      isShowLine: false,
      isCommentListEmpty: false,
      totalNum: 0
    };
  },
  onShow: function onShow() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    if (this.isComment) {
      this.isShowLine = false;
      this.commentListInfo = [];
      this.getCommentList();
    }
  },
  onUnload: function onUnload() {
    this.isComment = false;
    this.pageNo = 1;
    this.pageSize = 10;
    this.totalPage = 0;
    this.commentListInfo = [];
    this.isShowLine = false;
    this.isCommentListEmpty = false;
    this.totalNum = 0;
  },
  onReachBottom: function onReachBottom() {
    // if (this.pageNo + 1 <= this.totalPage) {
    //   this.pageNo = this.pageNo + 1;
    //   this.isShowLine = false;
    //   this.getCommentList();
    // } else {
    //   this.isShowLine = true;
    // }
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    this.getLikedCommentByPlaceIdAndUserId();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    setDisc: 'set_disc'
  }), {
    /**
     * 预览图片
     */
    seePhoto: function seePhoto(index, imgList) {
      if (imgList instanceof Array) {
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgList // 需要预览的图片http链接列表
        });
      } else {
        var imgArray = [];
        imgArray.push(imgList);
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgArray // 需要预览的图片http链接列表
        });
      }
    },
    commit: function commit() {
      this.$router.push({
        path: '../addcomment/main',
        query: {
          title: this.$route.query.title,
          placeId: this.$route.query.placeId
        }
      });
    },
    getCommentList: function getCommentList() {
      var _this = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceCommentByUid,
        data: {
          uid: this.$route.query.placeId,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      }).then(function (res) {
        if (res.state != 0) {
          _this.isCommentListEmpty = true;
        } else {
          _this.totalNum = res.data.totalNum;
          _this.totalPage = res.data.totalPage;
          if (res.data.totalNum < 11) {
            _this.isShowLine = true;
          }
          if (_this.commentListInfo.length != 0 && _this.$route.query.placeId != _this.commentListInfo[0].placeId) {
            _this.commentListInfo = [];
          }
          var dataList = res.data.items;
          for (var i = 0; i < dataList.length; i++) {
            if (dataList[i].imageList) {
              var userImg = JSON.parse(dataList[i].imageList);
              var userImgArray = [];
              for (var j = 0; j < userImg.length; j++) {
                if (userImg[j].pic_url.indexOf("/images/comment") != -1) {
                  userImgArray.push('https://wzcb97.top' + userImg[j].pic_url);
                } else {
                  userImgArray.push(userImg[j].pic_url);
                }
              }
              _this.$set(dataList[i], 'userImg', userImgArray);
              if (userImgArray.length > 3) {
                _this.$set(dataList[i], 'moreThanThree', true);
              } else {
                _this.$set(dataList[i], 'moreThanThree', false);
              }
              _this.$set(dataList[i], 'imgLength', userImgArray.length);
            } else {
              _this.$set(dataList[i], 'userImg', null);
            }
            _this.$set(dataList[i], 'date', dataList[i].date.split(" ")[0]);
            if (_this.likedHistory) {
              // 有点赞记录
              for (var m = 0; m < _this.likedHistory.length; m++) {
                if (dataList[i].id == _this.likedHistory[m].placeCommentId) {
                  _this.$set(dataList[i], 'likeImgUrl', '/static/images/liked.png');
                  break;
                } else {
                  _this.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
                }
              }
            } else {
              // 无点赞记录
              _this.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
            }
            _this.commentListInfo.push(dataList[i]);
          }
        }
      });
    },
    getNewComment: function getNewComment() {
      var _this2 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceCommentByUid,
        data: {
          uid: this.$route.query.placeId,
          pageNo: 1,
          pageSize: 1
        },
        isShowLoading: true
      }).then(function (res) {
        if ((_this2.totalNum + 1) % 10 == 0) {
          _this2.totalPage = (_this2.totalNum + 1) / 10;
        } else {
          _this2.totalPage = (_this2.totalNum + 1) / 10 + 1;
        }
        if (_this2.totalNum + 1 < 11) {
          _this2.isShowLine = true;
        }
        if (res.data.items[0].id != _this2.commentListInfo[0].id) {
          var dataList = res.data.items;
          for (var i = 0; i < dataList.length; i++) {
            if (dataList[i].imageList) {
              var userImg = JSON.parse(dataList[i].imageList);
              var userImgArray = [];
              for (var j = 0; j < userImg.length; j++) {
                if (userImg[j].pic_url.indexOf("/images/comment") != -1) {
                  userImgArray.push('https://wzcb97.top' + userImg[j].pic_url);
                } else {
                  userImgArray.push(userImg[j].pic_url);
                }
              }
              _this2.$set(dataList[i], 'userImg', userImgArray);
              if (userImgArray.length > 3) {
                _this2.$set(dataList[i], 'moreThanThree', true);
              } else {
                _this2.$set(dataList[i], 'moreThanThree', false);
              }
              _this2.$set(dataList[i], 'imgLength', userImgArray.length);
            } else {
              _this2.$set(dataList[i], 'userImg', null);
            }
            _this2.$set(dataList[i], 'date', dataList[i].date.split(" ")[0]);
            if (_this2.likedHistory) {
              // 有点赞记录
              for (var m = 0; m < _this2.likedHistory.length; m++) {
                if (dataList[i].id == _this2.likedHistory[m].placeCommentId) {
                  _this2.$set(dataList[i], 'likeImgUrl', '/static/images/liked.png');
                  break;
                } else {
                  _this2.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
                }
              }
            } else {
              // 无点赞记录
              _this2.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
            }
            _this2.commentListInfo.unshift(dataList[i]);
          }
        }
      });
    },
    getLikedCommentByPlaceIdAndUserId: function getLikedCommentByPlaceIdAndUserId() {
      var _this3 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getLikedCommentByPlaceIdAndUserId,
        data: {
          placeId: this.$route.query.placeId,
          openid: this.userInfo.openid
        }
      }).then(function (res) {
        _this3.likedHistory = res.data;
        _this3.getCommentList();
      });
    },
    like: function like(commentId, likeImgUrl, index) {
      var _this4 = this;

      this.$httpWX.post({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].updateLikes,
        data: {
          userId: this.userInfo.openid,
          placeCommentId: commentId,
          placeId: this.$route.query.placeId
        }
      }).then(function (res) {
        if (res.state == 0) {
          if (likeImgUrl == '/static/images/like.png') {
            _this4.commentListInfo[index].likeImgUrl = '/static/images/liked.png';
            _this4.commentListInfo[index].likes = res.data.likes;
          } else {
            _this4.commentListInfo[index].likeImgUrl = '/static/images/like.png';
            _this4.commentListInfo[index].likes = res.data.likes;
          }
          _this4.userInfo.isComment = true;
          _this4.setDisc(_this4.userInfo);
        } else {
          wx.showToast({
            title: res.message,
            duration: 3000,
            icon: 'none'
          });
        }
      });
    }
  })
});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "firstDiv"
  }, _vm._l((_vm.commentListInfo), function(comment, commentListInfoIndex) {
    return _c('div', {
      key: commentListInfoIndex,
      staticClass: "commentDetail"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '11-' + commentListInfoIndex
      }
    }, [_c('van-col', {
      attrs: {
        "span": "3",
        "mpcomid": '0-' + commentListInfoIndex
      }
    }, [_c('img', {
      staticClass: "portrait",
      attrs: {
        "src": comment.userImage,
        "eventid": '0-' + commentListInfoIndex
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(comment.userImage, comment.userImage)
        }
      }
    })]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "19",
        "offset": "1",
        "mpcomid": '10-' + commentListInfoIndex
      }
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '1-' + commentListInfoIndex
      }
    }, [_c('span', {
      staticClass: "userName"
    }, [_vm._v(_vm._s(comment.userName))])]), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '6-' + commentListInfoIndex
      }
    }, [_c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '3-' + commentListInfoIndex
      }
    }, [_c('van-rate', {
      attrs: {
        "value": comment.overallRating,
        "size": "13",
        "count": "5",
        "disabled-color": "#00BFFF",
        "disabled": "",
        "mpcomid": '2-' + commentListInfoIndex
      }
    })], 1), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "3",
        "mpcomid": '4-' + commentListInfoIndex
      }
    }, [_c('span', {
      staticClass: "rate"
    }, [_vm._v(_vm._s(comment.overallRating) + "分")])]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "8",
        "offset": "5",
        "mpcomid": '5-' + commentListInfoIndex
      }
    }, [_c('div', {
      staticClass: "time"
    }, [_c('span', [_vm._v(_vm._s(comment.date))])])])], 1), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '7-' + commentListInfoIndex
      }
    }, [_c('div', {
      staticClass: "detail"
    }, [_c('span', [_vm._v("\n                " + _vm._s(comment.comment) + "\n              ")])])]), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '8-' + commentListInfoIndex
      }
    }, [_c('div', [_vm._l((comment.userImg), function(img, imgIndex) {
      return (imgIndex < 3 && img) ? _c('img', {
        key: imgIndex,
        staticClass: "userImg",
        attrs: {
          "src": img,
          "data-src": img,
          "eventid": '1-' + commentListInfoIndex + '-' + imgIndex
        },
        on: {
          "click": function($event) {
            _vm.seePhoto(img, comment.userImg)
          }
        }
      }) : _vm._e()
    }), _vm._v(" "), (comment.moreThanThree) ? _c('span', {
      staticStyle: {
        "width": "30px",
        "height": "15px",
        "background": "#000000",
        "opacity": "0.6",
        "color": "#ffffff",
        "position": "absolute",
        "font-size": "12px",
        "text-align": "center",
        "right": "137rpx",
        "margin-top": "112rpx"
      }
    }, [_vm._v(_vm._s(comment.imgLength) + "张")]) : _vm._e()], 2)]), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '9-' + commentListInfoIndex
      }
    }, [_c('div', {
      staticClass: "bottom"
    }, [_c('span', {
      staticClass: "resource"
    }, [_vm._v(_vm._s(comment.resource))]), _vm._v(" "), _c('img', {
      staticClass: "likeImg",
      attrs: {
        "src": comment.likeImgUrl,
        "eventid": '2-' + commentListInfoIndex
      },
      on: {
        "click": function($event) {
          _vm.like(comment.id, comment.likeImgUrl, commentListInfoIndex)
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "likes"
    }, [_vm._v(_vm._s(comment.likes))])])])], 1)], 1)], 1)
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowLine),
      expression: "isShowLine"
    }],
    staticClass: "secondDiv"
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "thirdDiv"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '12'
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
  }, [_vm._v("\n        发表评论\n      ")])], 1)], 1), _vm._v(" "), (_vm.isCommentListEmpty) ? _c('div', {
    staticClass: "fifthDiv"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('span', [_vm._v("\n            我是有底线的\n          ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("\n        暂无评论\n      ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e625b5f4", esExports)
  }
}

/***/ })

},[120]);
//# sourceMappingURL=main.js.map
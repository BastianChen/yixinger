require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(204);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8962503e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(207);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(205)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8962503e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8962503e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\placedetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8962503e", Component.options)
  } else {
    hotAPI.reload("data-v-8962503e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(22);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userId: '',
      uid: '',
      longitude: 0,
      latitude: 0,
      placeDetailData: {},
      name: '',
      overallRating: 0,
      distance: '',
      address: '',
      showtag: '',
      sugTime: '',
      bestTime: '',
      telephone1: '',
      telephone2: '',
      isOneTelephone: true, // 判断是否有两个电话
      tags1: [],
      tags1ShowIndex: 0,
      tag1OfContent: [],
      tag2OfContent: [],
      isTagShow: true,
      commentNumber: 0,
      commentListInfo: [],
      imgList: [],
      hour: '',
      introduce: '',
      isIntroduceShow: false,
      isSugTimeShow: false,
      isBestTimeShow: false,
      isSurveyOfScenery: false,
      isTelephoneShow: false,
      isTelephone1Show: false,
      isTelephone2Show: false,
      isHourShow: false,
      isTag2OfContentShow: false,
      isImgListShow: false,
      isSeeAllShow: false,
      banner: [],
      userInfo: {},
      likeImgUrl: '/static/images/like.png',
      likedHistory: {},
      totalPhotoNumber: 0,
      show: false,
      phoneNumber: '',
      price: 0,
      placeType: 1,
      actions: [{
        name: '',
        disabled: true
      }, {
        name: '呼叫'
      }]
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['disc'])),
  created: function created() {},
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    this.uid = this.$route.query.uid;
    this.getLikedCommentByPlaceIdAndUserId();
    this.addOrUpdateUserHistory();
  },
  onUnload: function onUnload() {
    this.banner = [];
    this.tag1OfContent = [];
    this.tag2OfContent = [];
    this.commentListInfo = [];
    this.tags1 = [];
    this.imgList = [];
    this.name = '';
    this.overallRating = 0;
    this.distance = '';
    this.address = '';
    this.showtag = '';
    this.sugTime = '';
    this.bestTime = '';
    this.telephone1 = '';
    this.telephone2 = '';
    this.commentNumber = 0;
    this.totalPhotoNumber = 0;
    this.hour = '';
    this.introduce = '';
    this.phoneNumber = '';
    this.price = 0;
  },

  methods: {
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
    getPlaceDetailData: function getPlaceDetailData() {
      var _this = this;

      this.longitude = this.$route.query.longitude;
      this.latitude = this.$route.query.latitude;
      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceByUid,
        data: {
          uid: this.uid,
          longitude: this.longitude,
          latitude: this.latitude
        }
      }).then(function (res) {
        _this.placeDetailData = res.data;
        _this.placeType = _this.placeDetailData.place.type;
        if (_this.placeDetailData.placePhotoList != null && _this.placeDetailData.placePhotoList.length > 0) {
          for (var i = 0; i < _this.placeDetailData.placePhotoList.length; i++) {
            _this.banner.push(_this.placeDetailData.placePhotoList[i].imageUrl);
            if (i == 4) {
              break;
            }
          }
        } else {
          _this.banner.push(_this.placeDetailData.place.image);
        }
        _this.name = _this.placeDetailData.place.name;
        if (_this.placeDetailData.place.distance / 1000 >= 10000) {
          _this.distance = '>10000km';
        } else {
          _this.distance = _this.placeDetailData.place.distance ? _this.placeDetailData.place.distance >= 1000 ? (_this.placeDetailData.place.distance / 1000).toFixed(1) + 'km' : parseInt(_this.placeDetailData.place.distance) + 'm' : 0 + 'm';
        }
        _this.address = _this.placeDetailData.place.address;
        _this.overallRating = _this.placeDetailData.place.overallRating;
        if (_this.placeDetailData.place.type == 2) {
          if (!_this.placeDetailData.place.price || _this.placeDetailData.place.price == '' || _this.placeDetailData.place.price == '暂无' || _this.placeDetailData.place.price == 'false') {
            _this.price = 0;
          } else {
            _this.price = parseInt(_this.placeDetailData.place.price);
          }
        }
        _this.showtag = _this.placeDetailData.place.showtag;
        if (_this.placeDetailData.place.tags1) {
          var tags1Array = _this.placeDetailData.place.tags1.split(';');
          var tags1Length = 0;
          for (var j = 0; j < tags1Array.length; j++) {
            tags1Length = tags1Length + tags1Array[j].length;
            if (tags1Length <= 10) {
              _this.tags1ShowIndex = j;
            } else {
              break;
            }
            _this.tags1.push(tags1Array[j]);
          }
        } else {
          _this.tags1 = [];
        }
        // 判断是否显示景点简介
        if (_this.placeDetailData.place.introduce && _this.placeDetailData.place.introduce != '暂无') {
          if (_this.placeDetailData.place.introduce.length > 65) {
            _this.introduce = _this.placeDetailData.place.introduce.substring(0, 65) + '...';
          } else {
            _this.introduce = _this.placeDetailData.place.introduce;
          }
          _this.isIntroduceShow = true;
        } else {
          _this.isIntroduceShow = false;
        }
        // 判断是否显示建议游玩时间
        if (_this.placeDetailData.place.sugTime && _this.placeDetailData.place.sugTime != '' && _this.placeDetailData.place.sugTime != '暂无') {
          _this.sugTime = _this.placeDetailData.place.sugTime;
          _this.isSugTimeShow = true;
        } else {
          _this.isSugTimeShow = false;
        }
        // 判断是否显示建议游玩季节
        if (_this.placeDetailData.place.bestTime && _this.placeDetailData.place.bestTime != '' && _this.placeDetailData.place.bestTime != '暂无') {
          _this.bestTime = _this.placeDetailData.place.bestTime;
          _this.isBestTimeShow = true;
        } else {
          _this.isBestTimeShow = false;
        }
        // 判断是否显示景点概况
        if (!_this.isIntroduceShow && !_this.isSugTimeShow && !_this.isBestTimeShow) {
          _this.isSurveyOfScenery = false;
        } else {
          _this.isSurveyOfScenery = true;
        }
        // 判断是否显示电话信息
        if (_this.placeDetailData.place.phone && _this.placeDetailData.place.phone != 'null') {
          _this.isTelephoneShow = true;
          var phoneArray = _this.placeDetailData.place.phone.split(',');
          _this.telephone1 = phoneArray[0];
          if (phoneArray.size > 1) {
            _this.isTelephone1Show = false;
            _this.isTelephone2Show = true;
            _this.telephone2 = phoneArray[1];
          } else {
            _this.isTelephone1Show = true;
            _this.isTelephone2Show = false;
          }
        } else {
          _this.isTelephoneShow = false;
          _this.isTelephone1Show = false;
          _this.isTelephone2Show = false;
        }
        // 判断是否显示营业时间
        if (_this.placeDetailData.place.shopHours != '暂无' && _this.placeDetailData.place.shopHours && _this.placeDetailData.place.shopHours != '') {
          _this.hour = _this.placeDetailData.place.shopHours;
          _this.isHourShow = true;
        } else {
          _this.isHourShow = false;
        }
        if (_this.placeDetailData.place.content != '暂无' && _this.placeDetailData.place.content && _this.placeDetailData.place.content != '') {
          _this.isTagShow = true;
          var contentArray = _this.placeDetailData.place.content.split(';');
          if (contentArray.length <= 3) {
            for (var _i = 0; _i < contentArray.length; _i++) {
              _this.tag1OfContent.push(contentArray[_i]);
            }
            _this.isTag2OfContentShow = false;
          } else if (contentArray.length > 3 && contentArray.length <= 6) {
            for (var _i2 = 0; _i2 < contentArray.length; _i2++) {
              if (_i2 < 3) {
                _this.tag1OfContent.push(contentArray[_i2]);
              } else {
                _this.tag2OfContent.push(contentArray[_i2]);
              }
            }
            _this.isTag2OfContentShow = true;
          } else {
            for (var _i3 = 3; _i3 < 6; _i3++) {
              if (_i3 < 3) {
                _this.tag1OfContent.push(contentArray[_i3]);
              } else {
                _this.tag2OfContent.push(contentArray[_i3]);
              }
            }
            _this.isTag2OfContentShow = true;
          }
        } else {
          _this.isTagShow = false;
        }
        _this.commentNumber = _this.placeDetailData.place.commentNumber;
        if (_this.commentNumber > 0) {
          _this.isSeeAllShow = true;
          // 处理评论
          _this.handleCommentList();
        } else {
          _this.isSeeAllShow = false;
        }
        // 处理图片列表
        if (res.data.placePhotoList.length > 0) {
          for (var _i4 = 0; _i4 < res.data.placePhotoList.length; _i4++) {
            _this.imgList.push(res.data.placePhotoList[_i4].imageUrl);
          }
          _this.totalPhotoNumber = _this.imgList.length;
          _this.isImgListShow = true;
        } else {
          _this.isImgListShow = false;
        }
      });
    },
    handleCommentList: function handleCommentList() {
      var _this2 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceCommentByUid,
        data: {
          uid: this.placeDetailData.place.uid,
          pageNo: 1,
          pageSize: 3
        }
      }).then(function (res) {
        _this2.commentListInfo = res.data.items;
        var userImgArray = [];
        for (var i = 0; i < _this2.commentListInfo.length; i++) {
          if (_this2.commentListInfo[i].comment.length > 58) {
            _this2.$set(_this2.commentListInfo[i], 'newComment', _this2.commentListInfo[i].comment.substring(0, 58) + '...');
          } else {
            _this2.$set(_this2.commentListInfo[i], 'newComment', _this2.commentListInfo[i].comment);
          }
          if (_this2.commentListInfo[i].imageList) {
            var userImg = JSON.parse(_this2.commentListInfo[i].imageList);
            userImgArray = [];
            for (var j = 0; j < userImg.length; j++) {
              userImgArray.push(userImg[j].pic_url);
            }
            _this2.$set(_this2.commentListInfo[i], 'userImg', userImgArray);
            if (userImgArray.length > 3) {
              _this2.$set(_this2.commentListInfo[i], 'moreThanThree', true);
            } else {
              _this2.$set(_this2.commentListInfo[i], 'moreThanThree', false);
            }
            _this2.$set(_this2.commentListInfo[i], 'imgLength', userImgArray.length);
          } else {
            _this2.$set(_this2.commentListInfo[i], 'userImg', null);
          }
          _this2.$set(_this2.commentListInfo[i], 'date', _this2.commentListInfo[i].date.split(" ")[0]);
          if (_this2.likedHistory) {
            // 有点赞记录
            for (var m = 0; m < _this2.likedHistory.length; m++) {
              if (_this2.commentListInfo[i].id == _this2.likedHistory[m].placeCommentId) {
                _this2.$set(_this2.commentListInfo[i], 'likeImgUrl', '/static/images/liked.png');
                break;
              } else {
                _this2.$set(_this2.commentListInfo[i], 'likeImgUrl', '/static/images/like.png');
              }
            }
          } else {
            // 无点赞记录
            _this2.$set(_this2.commentListInfo[i], 'likeImgUrl', '/static/images/like.png');
          }
        }
      });
    },
    like: function like(commentId, likeImgUrl, index) {
      var _this3 = this;

      this.$httpWX.post({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].updateLikes,
        data: {
          userId: this.userInfo.openid,
          placeCommentId: commentId,
          placeId: this.uid
        }
      }).then(function (res) {
        if (res.state == 0) {
          if (likeImgUrl == '/static/images/like.png') {
            _this3.commentListInfo[index].likeImgUrl = '/static/images/liked.png';
            _this3.commentListInfo[index].likes = res.data.likes;
          } else {
            _this3.commentListInfo[index].likeImgUrl = '/static/images/like.png';
            _this3.commentListInfo[index].likes = res.data.likes;
          }
        } else {
          wx.showToast({
            title: res.message,
            duration: 3000,
            icon: 'none'
          });
        }
      });
    },
    getLikedCommentByPlaceIdAndUserId: function getLikedCommentByPlaceIdAndUserId() {
      var _this4 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getLikedCommentByPlaceIdAndUserId,
        data: {
          placeId: this.uid,
          openid: this.userInfo.openid
        }
      }).then(function (res) {
        _this4.likedHistory = res.data;
        _this4.getPlaceDetailData();
      });
    },
    phoneCall: function phoneCall(number) {
      this.show = true;
      this.actions[0].name = number;
      this.phoneNumber = number;
    },
    onSelect: function onSelect(index) {
      if (index.target.name == '呼叫') {
        wx.makePhoneCall({
          phoneNumber: this.phoneNumber
        });
      }
    },
    onCancel: function onCancel() {
      this.show = false;
    },
    addOrUpdateUserHistory: function addOrUpdateUserHistory() {
      // 添加或更新用户浏览记录
      this.$httpWX.post({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].addOrUpdateUserHistory,
        data: {
          userId: this.userInfo.openid,
          placeId: this.uid
        }
      }).then(function (res) {});
    },
    seeIntroduce: function seeIntroduce() {
      __WEBPACK_IMPORTED_MODULE_3__static_vant_weapp_dist_dialog_dialog_js__["a" /* default */].alert({
        message: this.placeDetailData.place.introduce
      }).then(function () {});
    },
    navigation: function navigation() {
      wx.openLocation({
        latitude: parseFloat(this.placeDetailData.place.latitude),
        longitude: parseFloat(this.placeDetailData.place.longitude),
        name: this.name,
        address: this.address
      });
    },
    addComment: function addComment() {
      this.$router.push({
        path: '../addcomment/main',
        query: {
          title: this.name
        }
      });
    }
  }
});

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    staticClass: "swiper-container",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "3000",
      "circular": "true",
      "duration": "500"
    }
  }, _vm._l((_vm.banner), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "swiper-item",
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "data-src": item,
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(item, _vm.banner)
        }
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("\n        " + _vm._s(_vm.name) + "\n      ")]), _vm._v(" "), _c('img', {
    staticClass: "navigation",
    attrs: {
      "src": "../../../static/images/navigation.png",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.navigation()
      }
    }
  })]), _vm._v(" "), _c('van-row', {
    staticClass: "distanceAndAddress",
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "4",
      "mpcomid": '2'
    }
  }, [_vm._v("\n        " + _vm._s(_vm.distance) + "\n      ")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "1",
      "offset": "1",
      "mpcomid": '3'
    }
  }, [_vm._v("\n        |\n      ")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "17",
      "offset": "1",
      "mpcomid": '4'
    }
  }, [_vm._v("\n        " + _vm._s(_vm.address) + "\n      ")])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '7'
    }
  }, [_c('van-rate', {
    attrs: {
      "value": _vm.overallRating,
      "size": "13",
      "count": "5",
      "disabled-color": "#00BFFF",
      "disabled": "",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), (_vm.placeType == 2 && _vm.price != 0) ? _c('van-col', {
    attrs: {
      "span": "7",
      "mpcomid": '9'
    }
  }, [_c('div', {
    staticClass: "showTag"
  }, [_vm._v("\n          ¥" + _vm._s(_vm.price) + " " + _vm._s(_vm.showtag) + "\n        ")])]) : _c('van-col', {
    attrs: {
      "span": "5",
      "mpcomid": '8'
    }
  }, [_c('div', {
    staticClass: "showTag"
  }, [_vm._v("\n          " + _vm._s(_vm.showtag) + "\n        ")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "11",
      "mpcomid": '11'
    }
  }, _vm._l((_vm.tags1), function(item, tags1Index) {
    return (tags1Index <= _vm.tags1ShowIndex) ? _c('van-tag', {
      key: tags1Index,
      staticClass: "tags1",
      attrs: {
        "color": "#FFF6EF",
        "text-color": "#C7A98B",
        "mpcomid": '10-' + tags1Index
      }
    }, [_vm._v("\n          " + _vm._s(item) + "\n        ")]) : _vm._e()
  }))], 1)], 1), _vm._v(" "), (_vm.isSurveyOfScenery) ? _c('div', {
    staticClass: "introduce"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '17'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        景区概况\n      ")]), _vm._v(" "), (_vm.isIntroduceShow) ? _c('div', {
    staticClass: "content"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '16'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "22",
      "mpcomid": '13'
    }
  }, [_c('span', [_vm._v("\n          " + _vm._s(_vm.introduce) + "\n          ")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "2",
      "mpcomid": '15'
    }
  }, [_c('div', {
    staticClass: "right",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.seeIntroduce()
      }
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '14'
    }
  })], 1)])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.isSugTimeShow) ? _c('div', {
    staticClass: "sugTime"
  }, [_c('span', {
    staticClass: "firstSpan"
  }, [_vm._v("建议游玩")]), _c('span', {
    staticClass: "secondSpan"
  }, [_vm._v(_vm._s(_vm.sugTime))])]) : _vm._e(), _vm._v(" "), (_vm.isBestTimeShow) ? _c('div', {
    staticClass: "sugTime"
  }, [_c('span', {
    staticClass: "firstSpan"
  }, [_vm._v("最佳季节")]), _c('span', {
    staticClass: "secondSpan"
  }, [_vm._v(_vm._s(_vm.bestTime))])]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), (_vm.isTelephoneShow) ? _c('div', {
    staticClass: "telephone"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '18'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        电话\n      ")]), _vm._v(" "), (_vm.isTelephone1Show) ? _c('div', {
    staticClass: "one",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.phoneCall(_vm.telephone1)
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.telephone1) + "\n      ")]) : _vm._e(), _vm._v(" "), (_vm.isTelephone2Show) ? _c('div', {
    staticClass: "two"
  }, [_c('span', {
    staticClass: "otherSpan",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.phoneCall(_vm.telephone1)
      }
    }
  }, [_vm._v(_vm._s(_vm.telephone1))]), _vm._v(" "), _c('span', {
    staticClass: "centerSpan"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "otherSpan",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.phoneCall(_vm.telephone2)
      }
    }
  }, [_vm._v(_vm._s(_vm.telephone2))])]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), (_vm.isHourShow) ? _c('div', [(_vm.isHourShow) ? _c('div', {
    staticClass: "shopHours"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '19'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n          营业时间\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "hour"
  }, [_vm._v("\n          " + _vm._s(_vm.hour) + "\n        ")])])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.isTagShow) ? _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '22'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("印象标签")])]), _vm._v(" "), _c('div', {
    staticClass: "tag"
  }, [_c('div', _vm._l((_vm.tag1OfContent), function(tag1, tag1OfContentIndex) {
    return _c('van-tag', {
      key: tag1OfContentIndex,
      staticClass: "vanTag",
      attrs: {
        "color": "#f2826a",
        "plain": "",
        "size": "large",
        "mpcomid": '20-' + tag1OfContentIndex
      }
    }, [_vm._v(_vm._s(tag1) + "\n            ")])
  })), _vm._v(" "), (_vm.isTag2OfContentShow) ? _c('div', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, _vm._l((_vm.tag2OfContent), function(tag2, tag2OfContentIndex) {
    return _c('van-tag', {
      key: tag2OfContentIndex,
      staticClass: "vanTag",
      attrs: {
        "color": "#f2826a",
        "plain": "",
        "size": "large",
        "mpcomid": '21-' + tag2OfContentIndex
      }
    }, [_vm._v(_vm._s(tag2) + "\n            ")])
  })) : _vm._e()])])], 1)]) : _vm._e(), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "comment"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '37'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("评论")]), _c('span', {
    staticClass: "commentNumber"
  }, [_vm._v("(" + _vm._s(_vm.commentNumber) + "条评论)")]), _vm._v(" "), _c('button', {
    staticClass: "addComment",
    attrs: {
      "type": "primary",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.addComment()
      }
    }
  }, [_c('van-icon', {
    staticStyle: {
      "padding-top": "5px"
    },
    attrs: {
      "name": "edit",
      "size": "15px",
      "mpcomid": '23'
    }
  }), _vm._v("\n            写评论\n          ")], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "commentDetails"
  }, _vm._l((_vm.commentListInfo), function(comment, commentListInfoIndex) {
    return _c('div', {
      key: commentListInfoIndex,
      staticClass: "commentDetail"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '35-' + commentListInfoIndex
      }
    }, [_c('van-col', {
      attrs: {
        "span": "3",
        "mpcomid": '24-' + commentListInfoIndex
      }
    }, [_c('img', {
      staticClass: "portrait",
      attrs: {
        "src": comment.userImage,
        "eventid": '7-' + commentListInfoIndex
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
        "mpcomid": '34-' + commentListInfoIndex
      }
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '25-' + commentListInfoIndex
      }
    }, [_c('span', {
      staticClass: "userName"
    }, [_vm._v(_vm._s(comment.userName))])]), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '30-' + commentListInfoIndex
      }
    }, [_c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '27-' + commentListInfoIndex
      }
    }, [_c('van-rate', {
      attrs: {
        "value": comment.overallRating,
        "size": "13",
        "count": "5",
        "disabled-color": "#00BFFF",
        "disabled": "",
        "mpcomid": '26-' + commentListInfoIndex
      }
    })], 1), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "3",
        "mpcomid": '28-' + commentListInfoIndex
      }
    }, [_c('span', {
      staticClass: "rate"
    }, [_vm._v(_vm._s(comment.overallRating) + "分")])]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "8",
        "offset": "5",
        "mpcomid": '29-' + commentListInfoIndex
      }
    }, [_c('div', {
      staticClass: "time"
    }, [_c('span', [_vm._v(_vm._s(comment.date))])])])], 1), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '31-' + commentListInfoIndex
      }
    }, [_c('div', {
      staticClass: "detail"
    }, [_c('span', [_vm._v("\n                    " + _vm._s(comment.newComment) + "\n                  ")])])]), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '32-' + commentListInfoIndex
      }
    }, [_c('div', [_vm._l((comment.userImg), function(img, imgIndex) {
      return (imgIndex < 3 && img) ? _c('img', {
        key: imgIndex,
        staticClass: "userImg",
        attrs: {
          "src": img,
          "data-src": img,
          "eventid": '8-' + commentListInfoIndex + '-' + imgIndex
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
        "right": "65px",
        "margin-top": "52px"
      }
    }, [_vm._v(_vm._s(comment.imgLength) + "张")]) : _vm._e()], 2)]), _vm._v(" "), _c('van-row', {
      attrs: {
        "mpcomid": '33-' + commentListInfoIndex
      }
    }, [_c('div', {
      staticClass: "bottom"
    }, [_c('span', {
      staticClass: "resource"
    }, [_vm._v(_vm._s(comment.resource))]), _vm._v(" "), _c('img', {
      staticClass: "likeImg",
      attrs: {
        "src": comment.likeImgUrl,
        "eventid": '9-' + commentListInfoIndex
      },
      on: {
        "click": function($event) {
          _vm.like(comment.id, comment.likeImgUrl, commentListInfoIndex)
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "likes"
    }, [_vm._v(_vm._s(comment.likes))])])])], 1)], 1)], 1)
  })), _vm._v(" "), (_vm.isSeeAllShow) ? _c('div', {
    staticClass: "seeAll"
  }, [_c('span', [_vm._v("查看全部")]), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '36'
    }
  })], 1) : _vm._e()])], 1)]), _vm._v(" "), (_vm.isImgListShow) ? _c('div', [_c('div', {
    staticClass: "photograph"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '39'
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("相册")]), _c('span', {
    staticClass: "totalNumber"
  }, [_vm._v("(共" + _vm._s(_vm.totalPhotoNumber) + "张)")]), _vm._v(" "), _c('span', {
    staticClass: "more"
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '38'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "photos"
  }, _vm._l((_vm.imgList), function(photos, imgListIndex) {
    return (imgListIndex <= 3) ? _c('img', {
      key: imgListIndex,
      attrs: {
        "src": photos,
        "eventid": '10-' + imgListIndex
      },
      on: {
        "click": function($event) {
          _vm.seePhoto(photos, _vm.imgList)
        }
      }
    }) : _vm._e()
  }))])], 1)]) : _vm._e(), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.show,
      "actions": _vm.actions,
      "cancel-text": "取消",
      "eventid": '11',
      "mpcomid": '40'
    },
    on: {
      "select": _vm.onSelect,
      "cancel": _vm.onCancel
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '41'
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
     require("vue-hot-reload-api").rerender("data-v-8962503e", esExports)
  }
}

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
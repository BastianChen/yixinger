require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(199);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_378baaca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(202);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-378baaca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_378baaca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInfo: {
        avatarUrl: '',
        city: '',
        country: '',
        gender: 1,
        language: '',
        nickName: '',
        province: '',
        location: ''
      },
      active: 0,
      code: '',
      cityName: '正在定位...',
      banner: [], // 轮播数据数组
      sceneryData: [], // 附近景点数组
      restaurantData: [], // 附近餐馆数组
      allSceneryData: [], // 附近景点数组
      allRestaurantData: [], // 附近餐馆数组
      temperature: '',
      dayPictureUrl: '',
      uidListForType1: '', // 景点uidList
      uidListForType2: '', // 餐馆uidList
      latitudeList: '', // 维度list
      longitudeList: '', // 经度list
      type: '', // 游玩地点类型
      uids: '', // 用于轮播
      isLogin: false, // 判断是否已经授权登录
      longitude: '', //所在地经度
      latitude: '', // 所在地维度
      vuexInfo: {
        location: '' // 现在所在地
      }
    };
  },

  components: {},
  onLoad: function onLoad() {
    var _this2 = this;

    setTimeout(function () {
      if (!_this2.isLogin) {
        __WEBPACK_IMPORTED_MODULE_3__static_vant_weapp_dist_dialog_dialog_js__["a" /* default */].alert({
          title: '温馨提示',
          message: '欢迎使用易行ER，请您先登录！'
        }).then(function () {
          wx.switchTab({
            url: '../../pages/home/main'
          });
        });
      }
    }, 1300);
  },
  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getLocation();
    this.getIndexData();
  },
  mounted: function mounted() {},

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    setDisc: 'set_disc'
  }), {
    toSearch: function toSearch() {
      wx.navigateTo({
        url: '../suggestion/suggestion'
      });
    },
    getUserInfo: function getUserInfo() {
      var _this3 = this;

      wx.login({
        //获取code
        success: function success(res) {
          wx.getUserInfo({
            success: function success(res) {
              _this3.userInfo = res.userInfo;
              console.log(res);
              console.log(_this3.userInfo);
              _this3.isLogin = true;
            }
          });
        }
      });
    },
    getLocation: function getLocation() {
      var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          console.log(res);
          _this.latitude = res.latitude;
          _this.longitude = res.longitude;
          var speed = res.speed;
          var accuracy = res.accuracy;
          // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
          wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y' + '&location=' + _this.latitude + ',' + _this.longitude + '&output=json&coordtype=wgs84ll',
            // url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y' +
            // '&location=' + 52.17643737792969 + ',' + 10.548863410949707 + '&output=json&coordtype=wgs84ll',
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success: function success(res) {
              console.log(res.data.result);
              console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
              // _this.vuexInfo.location = res.data.result.addressComponent.country;
              // _this.setDisc(_this.vuexInfo);
              if (res.data.result.addressComponent.district != '') {
                _this.cityName = res.data.result.addressComponent.district;
              } else {
                _this.cityName = res.data.result.addressComponent.city;
              }
            },

            fail: function fail() {
              // fail
              _this.cityName = '杭州市';
            },
            complete: function complete() {
              // complete
            }
          });
        }
      });
    },
    getIndexData: function getIndexData() {
      var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          console.log(res);
          var latitude = res.latitude;
          var longitude = res.longitude;
          var speed = res.speed;
          var accuracy = res.accuracy;
          // 获取天气信息
          wx.request({
            url: 'https://api.map.baidu.com/telematics/v3/weather?coord_type=gcj02&output=json' + '&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&location=' + longitude + '%2C' + latitude,
            // url: 'https://api.map.baidu.com/telematics/v3/weather?coord_type=gcj02&output=json' +
            // '&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&location=' + 10 + '%2C' + 10,
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success: function success(res) {
              console.log(res.data.results[0].weather_data[0].date);
              _this.temperature = res.data.results[0].weather_data[0].date;
              //console.log("温度"+_this.temperature.substring(_this.temperature.length - 5, _this.temperature.length - 4))
              if (_this.temperature.substring(_this.temperature.length - 5, _this.temperature.length - 4) == '：') {
                _this.temperature = _this.temperature.substring(_this.temperature.length - 4, _this.temperature.length - 1);
              } else {
                _this.temperature = _this.temperature.substring(_this.temperature.length - 3, _this.temperature.length - 1);
              }
              _this.dayPictureUrl = res.data.results[0].weather_data[0].dayPictureUrl;
            },

            fail: function fail() {
              // fail
            },
            complete: function complete() {
              // complete
            }
          });
          // 获取周边景点信息
          wx.request({
            url: 'https://api.map.baidu.com/place/v2/search?query=%E6%99%AF%E7%82%B9&scope=1&filter=&coord_type=2' + '&page_size=10&page_num=0&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&radius=2000' + '&ret_coordtype=gcj02ll&location=' + latitude + '%2C' + longitude,
            // url: 'https://api.map.baidu.com/place/v2/search?query=%E6%99%AF%E7%82%B9&scope=1&filter=&coord_type=2' +
            // '&page_size=10&page_num=0&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&radius=2000' +
            // '&ret_coordtype=gcj02ll&location=' + 13.82031 + '%2C' + 100.66471,
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success: function success(res) {
              var results = res.data.results;
              _this.uidListForType1 == '';
              _this.latitudeList = '';
              _this.longitudeList = '';
              for (var i = 0; i < results.length; i++) {
                if (_this.uidListForType1 == '') {
                  _this.uidListForType1 = results[i].uid;
                  _this.latitudeList = results[i].location.lat;
                  _this.longitudeList = results[i].location.lng;
                  _this.uids = results[i].uid;
                } else {
                  _this.uidListForType1 = _this.uidListForType1 + ';' + results[i].uid;
                  _this.latitudeList = _this.latitudeList + ';' + results[i].location.lat;
                  _this.longitudeList = _this.longitudeList + ';' + results[i].location.lng;
                  _this.uids = _this.uids + ';' + results[i].uid;
                }
              }
              _this.$httpWX.post({
                url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].addPlace,
                data: {
                  uidList: _this.uidListForType1,
                  latitudeList: _this.latitudeList,
                  longitudeList: _this.longitudeList,
                  type: 1
                }
              }).then(function (res) {
                // 获取周边餐馆信息
                wx.request({
                  url: 'https://api.map.baidu.com/place/v2/search?query=%E7%BE%8E%E9%A3%9F&scope=1&filter=&coord_type=2' + '&page_size=10&page_num=0&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&radius=2000' + '&ret_coordtype=gcj02ll&location=' + latitude + '%2C' + longitude,
                  // url: 'https://api.map.baidu.com/place/v2/search?query=%E7%BE%8E%E9%A3%9F&scope=1&filter=&coord_type=2' +
                  // '&page_size=10&page_num=0&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&radius=2000' +
                  // '&ret_coordtype=gcj02ll&location=' + 10.548863410949707 + '%2C' + 52.17643737792969,
                  data: {},
                  header: {
                    'Content-Type': 'application/json'
                  },
                  success: function success(res) {
                    var results = res.data.results;
                    _this.uidListForType2 == '';
                    _this.latitudeList = '';
                    _this.longitudeList = '';
                    for (var _i = 0; _i < results.length; _i++) {
                      if (_this.uidListForType2 == '') {
                        _this.uidListForType2 = results[_i].uid;
                        _this.latitudeList = results[_i].location.lat;
                        _this.longitudeList = results[_i].location.lng;
                        _this.uids = _this.uids + ';' + results[_i].uid;
                      } else {
                        _this.uidListForType2 = _this.uidListForType2 + ';' + results[_i].uid;
                        _this.latitudeList = _this.latitudeList + ';' + results[_i].location.lat;
                        _this.longitudeList = _this.longitudeList + ';' + results[_i].location.lng;
                        _this.uids = _this.uids + ';' + results[_i].uid;
                      }
                    }
                    _this.$httpWX.post({
                      url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].addPlace,
                      data: {
                        uidList: _this.uidListForType2,
                        latitudeList: _this.latitudeList,
                        longitudeList: _this.longitudeList,
                        type: 2
                      }
                    }).then(function (res) {
                      _this.getBannerData();
                      _this.getSceneryData();
                      _this.getRestaurantData();
                    });
                  },

                  fail: function fail() {
                    // fail
                  },
                  complete: function complete() {
                    // complete
                  }
                });
              });
            },

            fail: function fail() {
              // fail
            },
            complete: function complete() {
              // complete
            }
          });
        }
      });
    },
    getBannerData: function getBannerData() {
      var _this4 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceListByUids,
        data: {
          uidList: this.uids
          // longitude: this.longitude,
          // latitude: this.latitude
        }
      }).then(function (res) {
        for (var i = 0; i < 6; i++) {
          _this4.banner.push(res.data[i]);
        }
      });
    },
    getSceneryData: function getSceneryData() {
      var _this5 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceListByUids,
        data: {
          uidList: this.uidListForType1
        }
      }).then(function (res) {
        _this5.allSceneryData = res.data;
        if (res.data.length <= 6) {
          for (var i = 0; i < res.data.length; i++) {
            _this5.sceneryData.push(res.data[i]);
          }
        } else {
          for (var _i2 = 0; _i2 < 6; _i2++) {
            _this5.sceneryData.push(res.data[_i2]);
          }
        }
      });
    },
    getRestaurantData: function getRestaurantData() {
      var _this6 = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getPlaceListByUids,
        data: {
          uidList: this.uidListForType2
        }
      }).then(function (res) {
        _this6.allRestaurantData = res.data;
        if (res.data.length <= 6) {
          for (var i = 0; i < res.data.length; i++) {
            _this6.restaurantData.push(res.data[i]);
          }
        } else {
          for (var _i3 = 0; _i3 < 6; _i3++) {
            _this6.restaurantData.push(res.data[_i3]);
          }
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    radioChange: function radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.target.value);
    },
    swipclick: function swipclick(uid) {
      this.$router.push({
        path: '../placedetail/main',
        query: {
          uid: uid,
          longitude: this.longitude,
          latitude: this.latitude
        }
      });
    },
    totopic: function totopic(type) {
      this.$router.push({
        path: '../nearby/main',
        query: {
          uidListForType1: this.uidListForType1,
          uidListForType2: this.uidListForType2,
          longitude: this.longitude,
          latitude: this.latitude,
          type: type
        }
      });
    }
  })
});

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('span', {
    staticClass: "dingwei"
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.cityName))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.temperature))]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toSearch
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "搜索"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon"
  })])]), _vm._v(" "), _c('div', {
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
        "src": item.image,
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.swipclick(item.uid)
        }
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('van-dialog', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "id": "van-dialog",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "topicList"
  }, [_c('div', {
    staticClass: "topicList-top",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.totopic(0)
      }
    }
  }, [_vm._v("\n      附近景点\n      "), _c('span', {
    staticClass: "icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.sceneryData), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.swipclick(item.uid)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "btom"
    }, [_c('div', [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.address))])], 1)])])
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "topicList"
  }, [_c('div', {
    staticClass: "topicList-top",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.totopic(1)
      }
    }
  }, [_vm._v("\n      附近餐馆\n      "), _c('span', {
    staticClass: "icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.restaurantData), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "click": function($event) {
          _vm.swipclick(item.uid)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "btom"
    }, [_c('div', [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.address))])], 1)])])
  }))], 1)], 1)])], 1)
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

},[198]);
//# sourceMappingURL=main.js.map
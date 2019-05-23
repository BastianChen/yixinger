require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(229);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ecb44f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(232);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ecb44f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ecb44f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\userhistory\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ecb44f2", Component.options)
  } else {
    hotAPI.reload("data-v-2ecb44f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imageUrl: '',
      userInfo: {},
      restaurantData: [],
      sceneryData: [],
      yearsRestaurantData: [],
      yearsSceneryData: [],
      district: '', // 直辖市
      city: '', // 城市名
      isRestaurantDataEmpty: false,
      isSceneryDataEmpty: false
    };
  },
  onShow: function onShow() {
    this.userInfo = this.$store.getters.disc;
    this.restaurantData = [];
    this.sceneryData = [];
    this.yearsRestaurantData = [];
    this.yearsSceneryData = [];
    this.getUserHistoryByUserId();
  },
  onUnload: function onUnload() {
    this.restaurantData = [];
    this.sceneryData = [];
    this.yearsRestaurantData = [];
    this.yearsSceneryData = [];
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    //this.getUserHistoryByUserId();
  },

  methods: {
    clickLong: function clickLong(id, type) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__static_vant_weapp_dist_dialog_dialog_js__["a" /* default */].confirm({
        title: '温馨提示',
        message: '您确定要删除该条记录？'
      }).then(function () {
        _this.$httpWX.post({
          url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].deleteUserHistory,
          data: {
            idList: id,
            userId: _this.userInfo.openid
          }
        }).then(function (res) {
          _this.getUserHistoryByUserId();
          wx.showToast({
            title: res.message,
            icon: 'none'
          });
          if (type == 1) {
            _this.active = 0;
          } else {
            _this.active = 1;
          }
        });
      }).catch(function () {
        console.log("取消");
      });
    },
    onChange: function onChange(index) {
      if (index.target.index == 0) {
        this.active = 0;
      } else if (index.target.index == 1) {
        this.active = 1;
      }
    },
    seeDetails: function seeDetails(data) {
      this.$router.push({
        path: '../placedetail/main',
        query: { uid: data.placeId, longitude: this.userInfo.longitude, latitude: this.userInfo.latitude }
      });
    },
    getUserHistoryByUserId: function getUserHistoryByUserId() {
      var _this2 = this;

      this.restaurantData = [];
      this.sceneryData = [];
      this.yearsRestaurantData = [];
      this.yearsSceneryData = [];
      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getUserHistoryByUserId,
        data: {
          longitude: this.userInfo.longitude,
          latitude: this.userInfo.latitude,
          userId: this.userInfo.openid
        }
      }).then(function (res) {
        var placeData = res.data;
        var myDate = new Date();
        var isTodayFirstOfScenery = false;
        var isYesterdayFirstOfScenery = false;
        var isTodayFirstOfRestaurant = false;
        var isYesterdayFirstOfRestaurant = false;
        for (var i = 0; i < placeData.length; i++) {
          var dateArray = placeData[i].readDate.split('-');
          var isRepeated = false;
          if (placeData[i].placeName.length > 10) {
            placeData[i].placeName = placeData[i].placeName.substring(0, 10) + '...';
          }
          if (placeData[i].address.length > 10) {
            placeData[i].address = placeData[i].address.substring(0, 10) + '...';
          }
          if (!placeData[i].price || placeData[i].price == 0 || placeData[i].price == '' || placeData[i].price == '暂无' || placeData[i].price == 'false') {
            placeData[i].price = null;
          }
          // 设置时间
          placeData[i].year = dateArray[0];
          placeData[i].month = dateArray[1].substring(1, 2) + '月';
          placeData[i].day = dateArray[2].split(' ')[0];
          if (myDate.getFullYear() == dateArray[0] && myDate.getMonth() + 1 == dateArray[1].substring(1, 2) && myDate.getDate() == dateArray[2].split(' ')[0]) {
            if (placeData[i].type == 1) {
              if (!isTodayFirstOfScenery) {
                placeData[i].dateType = 1; // 时间为今天
                isTodayFirstOfScenery = true;
              } else {
                placeData[i].dateType = 4; // 时间为今天,但不是第一条
              }
            } else {
              if (!isTodayFirstOfRestaurant) {
                placeData[i].dateType = 1; // 时间为今天
                isTodayFirstOfRestaurant = true;
              } else {
                placeData[i].dateType = 4; // 时间为今天,但不是第一条
              }
            }
          } else if (myDate.getFullYear() == dateArray[0] && myDate.getMonth() + 1 == dateArray[1].substring(1, 2) && myDate.getDate() - 1 == dateArray[2].split(' ')[0] || myDate.getFullYear() == dateArray[0] && myDate.getMonth() == dateArray[1].substring(1, 2) && myDate.getDate() - 1 == 0 && (dateArray[2].split(' ')[0] == '31' || dateArray[2].split(' ')[0] == '30' || dateArray[2].split(' ')[0] == '29' || dateArray[2].split(' ')[0] == '28')) {
            if (placeData[i].type == 1) {
              if (!isYesterdayFirstOfScenery) {
                placeData[i].dateType = 2; // 时间为昨天
                isYesterdayFirstOfScenery = true;
              } else {
                placeData[i].dateType = 5; // 时间为昨天,但不是第一条
              }
            } else {
              if (!isYesterdayFirstOfRestaurant) {
                placeData[i].dateType = 2; // 时间为昨天
                isYesterdayFirstOfRestaurant = true;
              } else {
                placeData[i].dateType = 5; // 时间为昨天,但不是第一条
              }
            }
          } else {
            var isFirst = false;
            for (var j = 0; j < i; j++) {
              if (placeData[i].year == placeData[j].year && placeData[i].month == placeData[j].month && placeData[i].day == placeData[j].day && placeData[i].type == placeData[j].type) {
                placeData[i].dateType = 6; // 正常时间,但不是第一条
                isFirst = true;
                break;
              }
            }
            if (!isFirst) {
              placeData[i].dateType = 3; // 正常时间
            }
          }
          if (placeData[i].type == 1) {
            if (_this2.yearsSceneryData.length == 0) {
              _this2.yearsSceneryData.push(dateArray[0]);
              isRepeated = false;
            } else {
              for (var _j = 0; _j < _this2.yearsSceneryData.length; _j++) {
                if (_this2.yearsSceneryData[_j] == dateArray[0]) {
                  isRepeated = true;
                  break;
                }
              }
              if (!isRepeated) {
                _this2.yearsSceneryData.push(dateArray[0]);
              }
            }
            _this2.sceneryData.push(placeData[i]);
          } else {
            if (_this2.yearsRestaurantData.length == 0) {
              _this2.yearsRestaurantData.push(dateArray[0]);
              isRepeated = false;
            } else {
              for (var _j2 = 0; _j2 < _this2.yearsRestaurantData.length; _j2++) {
                if (_this2.yearsRestaurantData[_j2] == dateArray[0]) {
                  isRepeated = true;
                  break;
                }
              }
              if (!isRepeated) {
                _this2.yearsRestaurantData.push(dateArray[0]);
              }
            }
            _this2.restaurantData.push(placeData[i]);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 232:
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
      "eventid": '2',
      "mpcomid": '14'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "景点",
      "mpcomid": '6'
    }
  }, [(_vm.isSceneryDataEmpty) ? _c('div', {
    staticClass: "firstDiv"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("\n            暂无景点浏览记录\n          ")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.yearsSceneryData), function(year, key) {
    return (!_vm.isSceneryDataEmpty) ? _c('div', {
      key: key,
      staticClass: "secondDiv"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '1-' + key
      }
    }, [_c('van-col', {
      attrs: {
        "span": "8",
        "offset": "1",
        "mpcomid": '0-' + key
      }
    }, [_vm._v("\n            " + _vm._s(year) + "年\n          ")])], 1), _vm._v(" "), _vm._l((_vm.sceneryData), function(item, index) {
      return _c('div', {
        key: index
      }, [(item.year == year) ? _c('div', [_c('div', {
        staticClass: "rowBottom"
      }, [_c('van-row', {
        attrs: {
          "mpcomid": '5-' + key + '-' + index
        }
      }, [_c('van-col', {
        attrs: {
          "span": "4",
          "offset": "1",
          "mpcomid": '2-' + key + '-' + index
        }
      }, [_c('div', [(item.dateType == 1) ? _c('span', [_vm._v("\n                      今天\n                    ")]) : _vm._e(), _vm._v(" "), (item.dateType == 2) ? _c('span', [_vm._v("\n                      昨天\n                    ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', [_vm._v("\n                      " + _vm._s(item.day) + "\n                    ")]) : _vm._e(), _vm._v(" "), (item.dateType == 4 || item.dateType == 5 || item.dateType == 6) ? _c('span', [_vm._v("\n                        \n                    ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', {
        staticStyle: {
          "font-size": "14px",
          "margin-left": "-7px"
        }
      }, [_vm._v("\n                      " + _vm._s(item.month) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), _c('van-col', {
        attrs: {
          "span": "18",
          "eventid": '0-' + key + '-' + index,
          "mpcomid": '4-' + key + '-' + index
        },
        on: {
          "longpress": function($event) {
            _vm.clickLong(item.id, 1)
          },
          "click": function($event) {
            _vm.seeDetails(item)
          }
        }
      }, [_c('van-card', {
        attrs: {
          "desc": item.address,
          "title": item.placeName,
          "thumb": item.image,
          "tag": item.showtag,
          "centered": "",
          "lazy-load": "",
          "mpcomid": '3-' + key + '-' + index
        }
      })], 1)], 1)], 1)]) : _vm._e()])
    })], 2) : _vm._e()
  })], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "餐馆",
      "mpcomid": '13'
    }
  }, [(_vm.isRestaurantDataEmpty) ? _c('div', {
    staticClass: "firstDiv"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("\n            暂无餐馆浏览记录\n          ")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.yearsRestaurantData), function(year, key) {
    return (!_vm.isRestaurantDataEmpty) ? _c('div', {
      key: key,
      staticClass: "secondDiv"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '8-' + key
      }
    }, [_c('van-col', {
      attrs: {
        "span": "8",
        "offset": "1",
        "mpcomid": '7-' + key
      }
    }, [_vm._v("\n            " + _vm._s(year) + "年\n          ")])], 1), _vm._v(" "), _vm._l((_vm.restaurantData), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: "secondDiv"
      }, [(item.year == year) ? _c('div', [_c('div', {
        staticClass: "rowBottom"
      }, [_c('van-row', {
        attrs: {
          "mpcomid": '12-' + key + '-' + index
        }
      }, [_c('van-col', {
        attrs: {
          "span": "4",
          "offset": "1",
          "mpcomid": '9-' + key + '-' + index
        }
      }, [_c('div', [(item.dateType == 1) ? _c('span', [_vm._v("\n                  今天\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 2) ? _c('span', [_vm._v("\n                  昨天\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', [_vm._v("\n                  " + _vm._s(item.day) + "\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 4 || item.dateType == 5 || item.dateType == 6) ? _c('span', [_vm._v("\n                   \n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', {
        staticStyle: {
          "font-size": "14px",
          "margin-left": "-7px"
        }
      }, [_vm._v("\n                  " + _vm._s(item.month) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c('van-col', {
        attrs: {
          "span": "18",
          "eventid": '1-' + key + '-' + index,
          "mpcomid": '11-' + key + '-' + index
        },
        on: {
          "longpress": function($event) {
            _vm.clickLong(item.id, 2)
          },
          "click": function($event) {
            _vm.seeDetails(item)
          }
        }
      }, [_c('van-card', {
        attrs: {
          "desc": item.address,
          "title": item.placeName,
          "thumb": item.image,
          "tag": item.showtag,
          "price": item.price,
          "centered": "",
          "lazy-load": "",
          "mpcomid": '10-' + key + '-' + index
        }
      })], 1)], 1)], 1)]) : _vm._e()])
    })], 2) : _vm._e()
  })], 2)], 1), _vm._v(" "), _c('van-dialog', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "id": "van-dialog",
      "mpcomid": '15'
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
     require("vue-hot-reload-api").rerender("data-v-2ecb44f2", esExports)
  }
}

/***/ })

},[228]);
//# sourceMappingURL=main.js.map
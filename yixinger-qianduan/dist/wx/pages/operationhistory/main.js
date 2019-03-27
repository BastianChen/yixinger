require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_js__ = __webpack_require__(15);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      photoDistinguishData: [],
      textDistinguishData: [],
      yearsInphotoDistinguish: [],
      yearsIntextDistinguish: [],
      district: '', // 直辖市
      city: '', // 城市名
      isphotoDistinguishDataEmpty: false,
      istextDistinguishDataEmpty: false
    };
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    this.getOperationHistoryData(1);
    this.getOperationHistoryData(2);
  },

  methods: {
    clickLong: function clickLong(id, type) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_1__static_vant_weapp_dist_dialog_dialog_js__["a" /* default */].confirm({
        title: '温馨提示',
        message: '您确定要删除该条记录？'
      }).then(function () {
        _this.$httpWX.post({
          url: type == 1 ? __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].deletePhotoDistinguishById : __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].deleteTextDistinguishById,
          data: {
            idList: id
          }
        }).then(function (res) {
          _this.getOperationHistoryData(type);
          wx.showToast({
            title: res.message,
            icon: 'none'
          });
          if (type == 1) {
            _this.active = 0;
          } else {
            _this.active = 1;
          }
          // setTimeout(() => {
          //   wx.hideToast();
          // }, 2000);
        });
      }).catch(function () {
        console.log("取消");
      });
    },
    onChange: function onChange(index) {
      // wx.showToast({
      //   title: `切换到标签 ${index.target.title}`,
      //   icon: 'none'
      // });
      if (index.target.index == 0) {
        this.active = 0;
      } else if (index.target.index == 1) {
        this.active = 1;
      }
    },
    getOperationHistoryData: function getOperationHistoryData(type) {
      var _this2 = this;

      var myDate = new Date();
      // 获取图像识别的记录
      if (type == 1) {
        this.$httpWX.get({
          url: __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].getPhotoDistinguishList,
          data: {
            userId: this.userInfo.openid
          }
        }).then(function (res) {
          _this2.photoDistinguishData = res.data;
          if (_this2.photoDistinguishData == null) {
            _this2.isphotoDistinguishDataEmpty = true;
          } else {
            _this2.isphotoDistinguishDataEmpty = false;
            var isTodayFirst = false;
            var isYesterdayFirst = false;
            for (var i = 0; i < _this2.photoDistinguishData.length; i++) {
              _this2.photoDistinguishData[i].imageUrl = 'https://www.wzcb97.top/' + _this2.photoDistinguishData[i].imageUrl;
              var desc = void 0;
              var result = JSON.parse(_this2.photoDistinguishData[i].result).result;
              var keyword = void 0;
              var dateArray = _this2.photoDistinguishData[i].date.split('-');
              var cityNameArray = _this2.photoDistinguishData[i].cityName.split('·');
              var isRepeated = false;
              switch (_this2.photoDistinguishData[i].type) {
                case '1':
                  desc = '通用图像识别';
                  keyword = result[0].keyword;
                  break;
                case '2':
                  desc = '植物识别';
                  keyword = result[0].name;
                  break;
                case '3':
                  desc = '动物识别';
                  keyword = result[0].name;
                  break;
                case '4':
                  desc = '菜品识别';
                  keyword = result[0].name;
                  break;
                default:
                  break;
              }
              _this2.$set(_this2.photoDistinguishData[i], 'keyword', keyword);
              _this2.$set(_this2.photoDistinguishData[i], 'desc', desc);
              _this2.$set(_this2.photoDistinguishData[i], 'year', dateArray[0]);
              _this2.$set(_this2.photoDistinguishData[i], 'month', dateArray[1].substring(1, 2) + '月');
              _this2.$set(_this2.photoDistinguishData[i], 'day', dateArray[2].split(' ')[0]);
              _this2.$set(_this2.photoDistinguishData[i], 'city', cityNameArray[0]);
              _this2.$set(_this2.photoDistinguishData[i], 'district', cityNameArray[1]);
              if (myDate.getFullYear() == dateArray[0] && myDate.getMonth() + 1 == dateArray[1].substring(1, 2) && myDate.getDate() == dateArray[2].split(' ')[0]) {
                if (!isTodayFirst) {
                  _this2.$set(_this2.photoDistinguishData[i], 'dateType', 1); // 时间为今天
                  isTodayFirst = true;
                } else {
                  _this2.$set(_this2.photoDistinguishData[i], 'dateType', 4); // 时间为今天,但不是第一条
                }
              } else if (myDate.getFullYear() == dateArray[0] && myDate.getMonth() + 1 == dateArray[1].substring(1, 2) && myDate.getDate() - 1 == dateArray[2].split(' ')[0]) {
                if (!isYesterdayFirst) {
                  _this2.$set(_this2.photoDistinguishData[i], 'dateType', 2); // 时间为昨天
                  isYesterdayFirst = true;
                } else {
                  _this2.$set(_this2.photoDistinguishData[i], 'dateType', 5); // 时间为昨天,但不是第一条
                }
              } else {
                _this2.$set(_this2.photoDistinguishData[i], 'dateType', 3); // 正常时间
              }
              if (_this2.yearsInphotoDistinguish.length == 0) {
                _this2.yearsInphotoDistinguish.push(dateArray[0]);
                isRepeated = false;
              } else {
                for (var j = 0; j < _this2.yearsInphotoDistinguish.length; j++) {
                  if (_this2.yearsInphotoDistinguish[j] == dateArray[0]) {
                    isRepeated = true;
                    break;
                  }
                }
                if (!isRepeated) {
                  _this2.yearsInphotoDistinguish.push(dateArray[0]);
                }
              }
            }
            _this2.setYearsOrder(_this2.yearsInphotoDistinguish);
            console.log(_this2.photoDistinguishData);
            console.log(_this2.yearsInphotoDistinguish);
          }
        });
      } else if (type == 2) {
        // 获取文字识别的记录
        this.$httpWX.get({
          url: __WEBPACK_IMPORTED_MODULE_2__service_api_js__["a" /* apiurl */].getTextDistinguishList,
          data: {
            userId: this.userInfo.openid
          }
        }).then(function (res) {
          _this2.textDistinguishData = res.data;
          if (_this2.textDistinguishData == null) {
            _this2.istextDistinguishDataEmpty = true;
          } else {
            var isTodayFirst = false;
            var isYesterdayFirst = false;
            for (var i = 0; i < _this2.textDistinguishData.length; i++) {
              _this2.textDistinguishData[i].imageUrl = 'https://www.wzcb97.top/' + _this2.textDistinguishData[i].imageUrl;
              var desc = '文字识别';
              var result = JSON.parse(_this2.textDistinguishData[i].words).words_result;
              var keyword = result[0].words + '...';
              var dateArray = _this2.textDistinguishData[i].date.split('-');
              var cityNameArray = _this2.textDistinguishData[i].cityName.split('·');
              var isRepeated = false;
              _this2.$set(_this2.textDistinguishData[i], 'keyword', keyword);
              _this2.$set(_this2.textDistinguishData[i], 'desc', desc);
              _this2.$set(_this2.textDistinguishData[i], 'year', dateArray[0]);
              _this2.$set(_this2.textDistinguishData[i], 'month', dateArray[1].substring(1, 2) + '月');
              _this2.$set(_this2.textDistinguishData[i], 'day', dateArray[2].split(' ')[0]);
              _this2.$set(_this2.textDistinguishData[i], 'city', cityNameArray[0]);
              _this2.$set(_this2.textDistinguishData[i], 'district', cityNameArray[1]);
              if (myDate.getFullYear() == dateArray[0] && myDate.getMonth() + 1 == dateArray[1].substring(1, 2) && myDate.getDate() == dateArray[2].split(' ')[0]) {
                if (!isTodayFirst) {
                  _this2.$set(_this2.textDistinguishData[i], 'dateType', 1); // 时间为今天
                  isTodayFirst = true;
                } else {
                  _this2.$set(_this2.textDistinguishData[i], 'dateType', 4); // 时间为今天,但不是第一条
                }
              } else if (myDate.getFullYear() == dateArray[0] && myDate.getMonth() + 1 == dateArray[1].substring(1, 2) && myDate.getDate() - 1 == dateArray[2].split(' ')[0]) {
                if (!isYesterdayFirst) {
                  _this2.$set(_this2.textDistinguishData[i], 'dateType', 2); // 时间为昨天
                  isYesterdayFirst = true;
                } else {
                  _this2.$set(_this2.textDistinguishData[i], 'dateType', 5); // 时间为昨天,但不是第一条
                }
              } else {
                _this2.$set(_this2.textDistinguishData[i], 'dateType', 3); // 正常时间
              }
              if (_this2.yearsIntextDistinguish.length == 0) {
                _this2.yearsIntextDistinguish.push(dateArray[0]);
                isRepeated = false;
              } else {
                for (var j = 0; j < _this2.yearsIntextDistinguish.length; j++) {
                  if (_this2.yearsIntextDistinguish[j] == dateArray[0]) {
                    isRepeated = true;
                    break;
                  }
                }
                if (!isRepeated) {
                  _this2.yearsIntextDistinguish.push(dateArray[0]);
                }
              }
            }
            _this2.setYearsOrder(_this2.yearsIntextDistinguish);
            console.log(_this2.textDistinguishData);
            console.log(_this2.yearsIntextDistinguish);
          }
        });
      }
    },
    setYearsOrder: function setYearsOrder(years) {
      // 对年份时间进行排序,如果flag>0则排序结束
      var flag = years.length;
      var len = flag;
      var year;
      while (flag > 0) {
        flag = 0;
        for (var m = 1; m < len; m++) {
          // 比较评分，若前面小于后面则交换数据
          if (years[m] < years[m + 1]) {
            year = years[m];
            years[m] = years[m + 1];
            years[m + 1] = year;
            // 设置最新边界
            flag = m;
          }
        }
        // 记录遍历的边界
        len = flag;
      }
    },
    seeDetails: function seeDetails(data, dataType) {
      var datum = {};
      datum.data = data;
      if (dataType == 1) {
        this.$router.push({
          path: '../distinguish/main',
          query: { type: data.type, data: encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(datum)), isHistory: true }
        });
      } else if (dataType == 2) {
        this.$router.push({
          path: '../textdistinguish/main',
          query: { data: encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(datum)), isHistory: true }
        });
      }
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
      "eventid": '2',
      "mpcomid": '14'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "图像识别",
      "mpcomid": '6'
    }
  }, [(_vm.isphotoDistinguishDataEmpty) ? _c('div', {
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
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "14px",
      "font-family": "KaiTi"
    }
  }, [_c('span', [_vm._v("\n            暂无记录\n          ")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.yearsInphotoDistinguish), function(year, key) {
    return (!_vm.isphotoDistinguishDataEmpty) ? _c('div', {
      key: key,
      staticStyle: {
        "margin": "10px 5px",
        "width": "100%",
        "font-weight": "bold",
        "font-size": "28px",
        "font-family": "KaiTi"
      }
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
    }, [_vm._v("\n            " + _vm._s(year) + "年\n          ")])], 1), _vm._v(" "), _vm._l((_vm.photoDistinguishData), function(item, index) {
      return _c('div', {
        key: index,
        staticStyle: {
          "margin": "10px 5px"
        }
      }, [(item.year == year) ? _c('div', [_c('van-row', {
        attrs: {
          "mpcomid": '5-' + key + '-' + index
        }
      }, [_c('van-col', {
        attrs: {
          "span": "4",
          "offset": "1",
          "mpcomid": '2-' + key + '-' + index
        }
      }, [_c('div', [(item.dateType == 1) ? _c('span', [_vm._v("\n                  今天\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 2) ? _c('span', [_vm._v("\n                  昨天\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', [_vm._v("\n                  " + _vm._s(item.day) + "\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 4 || item.dateType == 5) ? _c('span', [_vm._v("\n                   \n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', {
        staticStyle: {
          "font-size": "14px",
          "margin-left": "-7px"
        }
      }, [_vm._v("\n                  " + _vm._s(item.month) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticStyle: {
          "color": "#7d7e80",
          "font-size": "10px",
          "margin-top": "10px"
        }
      }, [_c('span', [_vm._v("\n                    " + _vm._s(item.city) + "\n                  ")])]), _vm._v(" "), _c('div', {
        staticStyle: {
          "color": "#7d7e80",
          "font-size": "10px"
        }
      }, [_c('span', [_vm._v("\n                    " + _vm._s(item.district) + "\n                  ")])])]), _vm._v(" "), _c('van-col', {
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
            _vm.seeDetails(item, 1)
          }
        }
      }, [_c('van-card', {
        attrs: {
          "desc": item.desc,
          "title": item.keyword,
          "thumb": item.imageUrl,
          "centered": "",
          "lazy-load": "",
          "mpcomid": '3-' + key + '-' + index
        }
      })], 1)], 1)], 1) : _vm._e()])
    })], 2) : _vm._e()
  })], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "文字识别",
      "mpcomid": '13'
    }
  }, [(_vm.istextDistinguishDataEmpty) ? _c('div', {
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
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "14px",
      "font-family": "KaiTi"
    }
  }, [_c('span', [_vm._v("\n            暂无记录\n          ")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.yearsIntextDistinguish), function(year, key) {
    return (!_vm.istextDistinguishDataEmpty) ? _c('div', {
      key: key,
      staticStyle: {
        "margin": "10px 5px",
        "width": "100%",
        "font-weight": "bold",
        "font-size": "28px",
        "font-family": "KaiTi"
      }
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
    }, [_vm._v("\n            " + _vm._s(year) + "年\n          ")])], 1), _vm._v(" "), _vm._l((_vm.textDistinguishData), function(item, index) {
      return _c('div', {
        key: index,
        staticStyle: {
          "margin": "10px 5px"
        }
      }, [(item.year == year) ? _c('div', [_c('van-row', {
        attrs: {
          "mpcomid": '12-' + key + '-' + index
        }
      }, [_c('van-col', {
        attrs: {
          "span": "4",
          "offset": "1",
          "mpcomid": '9-' + key + '-' + index
        }
      }, [_c('div', [(item.dateType == 1) ? _c('span', [_vm._v("\n                  今天\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 2) ? _c('span', [_vm._v("\n                  昨天\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', [_vm._v("\n                  " + _vm._s(item.day) + "\n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 4 || item.dateType == 5) ? _c('span', [_vm._v("\n                   \n                ")]) : _vm._e(), _vm._v(" "), (item.dateType == 3) ? _c('span', {
        staticStyle: {
          "font-size": "14px",
          "margin-left": "-7px"
        }
      }, [_vm._v("\n                  " + _vm._s(item.month) + "\n                ")]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticStyle: {
          "color": "#7d7e80",
          "font-size": "10px",
          "margin-top": "10px"
        }
      }, [_c('span', [_vm._v("\n                    " + _vm._s(item.city) + "\n                  ")])]), _vm._v(" "), _c('div', {
        staticStyle: {
          "color": "#7d7e80",
          "font-size": "10px"
        }
      }, [_c('span', [_vm._v("\n                    " + _vm._s(item.district) + "\n                  ")])])]), _vm._v(" "), _c('van-col', {
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
            _vm.seeDetails(item, 2)
          }
        }
      }, [_c('van-card', {
        attrs: {
          "desc": item.desc,
          "title": item.keyword,
          "thumb": item.imageUrl,
          "centered": "",
          "lazy-load": "",
          "mpcomid": '10-' + key + '-' + index
        }
      })], 1)], 1)], 1) : _vm._e()])
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
     require("vue-hot-reload-api").rerender("data-v-f610f38c", esExports)
  }
}

/***/ })

},[188]);
//# sourceMappingURL=main.js.map
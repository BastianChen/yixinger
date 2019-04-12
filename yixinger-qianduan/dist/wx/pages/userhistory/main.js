require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(209);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2ecb44f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(212);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
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

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_weapp_dist_dialog_dialog_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_js__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  onUnload: function onUnload() {
    this.restaurantData = [];
    this.sceneryData = [];
    this.yearsRestaurantData = [];
    this.yearsSceneryData = [];
  },
  mounted: function mounted() {
    this.userInfo = this.$store.getters.disc;
    this.getUserHistoryByUserId();
  },

  methods: {
    getUserHistoryByUserId: function getUserHistoryByUserId() {
      var _this = this;

      this.$httpWX.get({
        url: __WEBPACK_IMPORTED_MODULE_1__service_api_js__["a" /* apiurl */].getUserHistoryByUserId,
        data: {
          longitude: this.userInfo.longitude,
          latitude: this.userInfo.latitude,
          userId: this.userInfo.openid
        }
      }).then(function (res) {
        var placeData = res.data;
        for (var i = 0; i < placeData.length; i++) {
          if (placeData[i].placeName.length > 9) {
            placeData[i].placeName = placeData[i].placeName.substring(0, 9) + '...';
          }
          if (placeData[i].address.length > 7) {
            placeData[i].address = placeData[i].address.substring(0, 7) + '...';
          }
          placeData[i].distance = placeData[i].distance ? placeData[i].distance >= 1000 ? (placeData[i].distance / 1000).toFixed(1) + 'km' : parseInt(placeData[i].distance) + 'm' : 0 + 'm';
          if (placeData[i].type == 1) {
            _this.sceneryData.push(placeData[i]);
          } else {
            _this.restaurantData.push(placeData[i]);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 212:
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
      "mpcomid": '18'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "景点",
      "mpcomid": '8'
    }
  }, [(_vm.isSceneryDataEmpty) ? _c('div', {
    staticClass: "firstDiv"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("\n            暂无推荐景点\n          ")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.sceneryData), function(item, index) {
    return (!_vm.isSceneryDataEmpty) ? _c('div', {
      key: index,
      staticClass: "secondDiv",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.seeDetail(item)
        }
      }
    }, [_c('div', [_c('div', {
      staticClass: "rowBottom"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '7-' + index
      }
    }, [_c('van-col', {
      attrs: {
        "span": "4",
        "offset": "1",
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      attrs: {
        "src": item.image
      }
    })]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "15",
        "offset": "4",
        "mpcomid": '6-' + index
      }
    }, [_c('div', {
      staticClass: "secondCol"
    }, [_c('div', {
      staticClass: "nameDiv"
    }, [_vm._v("\n                    " + _vm._s(item.placeName) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "distanceAndAddressDiv"
    }, [_vm._v("\n                    " + _vm._s(item.distance) + "|" + _vm._s(item.address) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "overallratingAndShowTagDiv"
    }, [_c('van-row', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.overallRating),
        expression: "item.overallRating"
      }],
      attrs: {
        "mpcomid": '4-' + index
      }
    }, [_c('van-col', {
      attrs: {
        "span": "11",
        "mpcomid": '2-' + index
      }
    }, [_c('van-rate', {
      attrs: {
        "value": item.overallRating,
        "size": "15",
        "count": "5",
        "disabled-color": "#00BFFF",
        "disabled": "",
        "mpcomid": '1-' + index
      }
    })], 1), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "3",
        "mpcomid": '3-' + index
      }
    }, [_vm._v("\n                        " + _vm._s(item.overallRating) + "\n                      ")])], 1), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.showtag),
        expression: "item.showtag"
      }],
      staticClass: "tagPaddingTop"
    }, [_c('van-tag', {
      attrs: {
        "color": "#f2826a",
        "plain": "",
        "size": "large",
        "mpcomid": '5-' + index
      }
    }, [_vm._v(_vm._s(item.showtag))])], 1)], 1)])])], 1)], 1)])]) : _vm._e()
  })], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "餐馆",
      "mpcomid": '17'
    }
  }, [(_vm.isRestaurantDataEmpty) ? _c('div', {
    staticClass: "firstDiv"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images/noContent.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("\n            暂无推荐餐馆\n          ")])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.restaurantData), function(item, index) {
    return (!_vm.isRestaurantDataEmpty) ? _c('div', {
      key: index,
      staticClass: "secondDiv",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.seeDetail(item)
        }
      }
    }, [_c('div', [_c('div', {
      staticClass: "rowBottom"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '16-' + index
      }
    }, [_c('van-col', {
      attrs: {
        "span": "4",
        "offset": "1",
        "mpcomid": '9-' + index
      }
    }, [_c('img', {
      attrs: {
        "src": item.image
      }
    })]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "15",
        "offset": "4",
        "mpcomid": '15-' + index
      }
    }, [_c('div', {
      staticClass: "secondCol"
    }, [_c('div', {
      staticClass: "nameDiv"
    }, [_vm._v("\n                    " + _vm._s(item.placeName) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "distanceAndAddressDiv"
    }, [_vm._v("\n                    " + _vm._s(item.distance) + "|" + _vm._s(item.address) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "overallratingAndShowTagDiv"
    }, [_c('van-row', {
      attrs: {
        "mpcomid": '13-' + index
      }
    }, [_c('van-col', {
      attrs: {
        "span": "11",
        "mpcomid": '11-' + index
      }
    }, [_c('van-rate', {
      attrs: {
        "value": item.overallRating,
        "size": "15",
        "count": "5",
        "disabled-color": "#00BFFF",
        "disabled": "",
        "mpcomid": '10-' + index
      }
    })], 1), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "3",
        "mpcomid": '12-' + index
      }
    }, [_vm._v("\n                        " + _vm._s(item.overallRating) + "\n                      ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "tagPaddingTop"
    }, [(item.price || item.price != '') ? _c('span', [_vm._v("¥" + _vm._s(item.price))]) : _vm._e(), _vm._v(" "), _c('van-tag', {
      attrs: {
        "color": "#f2826a",
        "plain": "",
        "size": "large",
        "mpcomid": '14-' + index
      }
    }, [_vm._v(_vm._s(item.showtag))])], 1)], 1)])])], 1)], 1)])]) : _vm._e()
  })], 2)], 1)], 1)
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

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[208]);
//# sourceMappingURL=main.js.map
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_api_js__ = __webpack_require__(101);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInfo: {},
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      active: 0,
      code: '',
      cityName: '',
      banner: [], // 轮播数据数组
      temperature: '',
      dayPictureUrl: '',
      uidList: '', // 游玩地点uidList
      latitudeList: '', // 经度list
      longitudeList: '', // 维度list
      type: '' // 游玩地点类型
    };
  },


  components: {},
  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getLocation();
    this.getIndexData();
  },
  mounted: function mounted() {},

  methods: {
    onChange: function onChange(event) {
      console.log(event.detail);
    },
    vuexPage: function vuexPage() {
      this.$router.push('../counter/main');
    },
    apiPage: function apiPage() {
      this.$router.push('../search/search');
    },
    suggestionPage: function suggestionPage() {
      this.$router.push('../suggestion/suggestion');
    },
    regeocodingPage: function regeocodingPage() {
      this.$router.push('../regeocoding/regeocoding');
    },
    weatherPage: function weatherPage() {
      this.$router.push('../weather/weather');
    },
    bindViewTap: function bindViewTap() {
      // const url = '../logs/main'
      // wx.navigateTo({url})
      this.$router.push('../logs/main');
    },
    photoPage: function photoPage() {
      this.$router.push('../photo/photo');
    },
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      // 调用登录接口
      // wx.login({
      //   success: () => {
      //     wx.getUserInfo({
      //       success: (res) => {
      //         this.userInfo = res.userInfo
      //         console.log(res)
      //         console.log(this.userInfo)
      //       }
      //     })
      //   }
      // }),
      wx.login({
        //获取code
        success: function success(res) {
          _this2.code = res.code;
          console.log(res.code); //返回code
          wx.getUserInfo({
            success: function success(res) {
              _this2.userInfo = res.userInfo;
              console.log(res);
              console.log(_this2.userInfo);
              // wx.request({
              //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx52a9380821d85603&secret=353ae1409d24e026d2bdcb0b180953e8&js_code=' + this.code + '&grant_type=authorization_code',
              //   data: {},
              //   header: {
              //     'content-type': 'application/json'
              //   },
              //   success: (res) => {
              //     console.log("openid"+res)
              //     openid = res.data.openid //返回openid
              //   }
              //})
            }
          });
          // wx.getLocation({
          //   type: 'wgs84',
          //   success(res) {
          //     console.log(res)
          //     const latitude = res.latitude
          //     const longitude = res.longitude
          //     const speed = res.speed
          //     const accuracy = res.accuracy
          //     wx.request({ // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
          //       url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll',
          //       data: {},
          //       header: {
          //         'Content-Type': 'application/json'
          //       },
          //       success(res) {
          //         console.log(res.data.result);
          //         console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
          //         this.cityName = '杭州市';
          //       },
          //       fail: function () {
          //         // fail
          //         this.cityName = '杭州市';
          //       },
          //       complete: function () {
          //         // complete
          //       }
          //     })
          //   }
          // })
        }
      });
    },
    getLocation: function getLocation() {
      var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          console.log(res);
          var latitude = res.latitude;
          var longitude = res.longitude;
          var speed = res.speed;
          var accuracy = res.accuracy;
          wx.request({ // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y' + '&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll',
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success: function success(res) {
              console.log(res.data.result);
              console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
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
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success: function success(res) {
              console.log(res.data.results[0].weather_data[0].date);
              _this.temperature = res.data.results[0].weather_data[0].date;
              _this.temperature = _this.temperature.substring(_this.temperature.length - 3, _this.temperature.length - 1);
              console.log(_this.temperature);
              _this.dayPictureUrl = res.data.results[0].weather_data[0].dayPictureUrl;
              console.log(_this.dayPictureUrl);
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
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success: function success(res) {
              var results = res.data.results;
              for (var i = 0; i < results.length; i++) {
                if (_this.uidList == '') {
                  _this.uidList = results[i].uid;
                  _this.latitudeList = results[i].location.lat;
                  _this.longitudeList = results[i].location.lng;
                } else {
                  _this.uidList = _this.uidList + ';' + results[i].uid;
                  _this.latitudeList = _this.latitudeList + ';' + results[i].location.lat;
                  _this.longitudeList = _this.longitudeList + ';' + results[i].location.lng;
                }
              }
              console.log("_this.uidList" + _this.uidList);
              console.log("_this.latitudeList" + _this.latitudeList);
              console.log("_this.longitudeList" + _this.longitudeList);
              console.log("url" + __WEBPACK_IMPORTED_MODULE_0__service_api_js__["a" /* apiurl */].addPlace);
            },

            fail: function fail() {
              // fail
            },
            complete: function complete() {
              // complete
            }
          });
          _this.$httpWX.post({
            url: __WEBPACK_IMPORTED_MODULE_0__service_api_js__["a" /* apiurl */].addPlace,
            param: {
              uidList: _this.uidList,
              latitudeList: _this.latitudeList,
              longitudeList: _this.longitudeList,
              type: 1
            }
          }).then(function (res) {
            //this.newsList.push(...res.data.articleJSONArray)
            console.log("addPlace" + res);
          });
        }
      });
    },
    getBannerData: function getBannerData() {},
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    radioChange: function radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.target.value);
    }
  }
});

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiurl; });
var apiurl = {
  /**游玩地点API*/
  addPlace: '/Place/addPlace', // 添加游玩地点
  getPlaceByUid: '/Place/getPlaceByUid', // 根据uid获取游玩地点信息
  getPlaceList: '/Place/getPlaceList', // 根据type获取附近推荐的游玩地点
  getPlaceCommentByUid: '/Place/getPlaceCommentByUid', // 根据uid分页获取游玩地点评论
  addPlaceComment: '/Place/addPlaceComment', // 根据uid给游玩地点添加评论
  updateLikes: '/Place/updateLikes', // 更新评论点赞数
  deleteCommentById: '/Place/deleteCommentById', // 根据id删除评论
  getPlacePhotoByUid: '/Place/getPlacePhotoByUid', // 根据uid分页获取游玩地点图片
  updateReadTimes: '/Place/updateReadTimes', // 获取图片详细数据并更新图片浏览数
  deletePhotoById: '/Place/deletePhotoById', // 根据id删除图片
  addPlacePhoto: '/Place/addPlacePhoto', // 根据uid给游玩地点上传图片
  addOrUpdateUserHistory: '/Place/addOrUpdateUserHistory', // 添加或更新用户浏览记录
  deleteUserHistory: '/Place/deleteUserHistory', // 删除用户浏览记录
  getUserHistoryByUserId: '/Place/getUserHistoryByUserId', // 根据用户openid获取浏览记录
  /**用户信息API*/
  addUser: '/User/addUser', // 添加用户信息
  getUser: '/User/getUser', // 获取并翻译用户信息
  updateUser: '/User/updateUser', // 更改用户信息
  /**AI操作API*/
  imageClassify: '/AIOperate/imageClassify', // 图像识别
  getPhotoDistinguishList: '/AIOperate/getPhotoDistinguishList', // 根据用户openid以及type类型获取图像识别所有记录
  deletePhotoDistinguishById: '/AIOperate/deletePhotoDistinguishById', // 根据id删除图像识别记录
  aipOcr: '/AIOperate/aipOcr', // 文字识别
  getTextDistinguishList: '/AIOperate/getTextDistinguishList', // 根据用户openid获取文字识别所有记录
  deleteTextDistinguishById: '/AIOperate/deleteTextDistinguishById', // 根据id删除文字识别记录
  translateText: '/AIOperate/translateText', // 文字翻译
  getTranslatorListByType: '/AIOperate/getTranslatorListByType', // 根据用户openid以及type类型获取所有翻译记录
  deleteTranslatorById: '/AIOperate/deleteTranslatorById', // 根据id删除翻译记录
  speechSynthesis: '/AIOperate/speechSynthesis' // 语音合成
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toMappage
    }
  }, [_vm._v(_vm._s(_vm.cityName))]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
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
        "src": item.image_url
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "channel"
  }, _vm._l((_vm.channel), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.categoryList(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.icon_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "brand"
  }, [_c('div', {
    staticClass: "head",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.tobrandList
    }
  }, [_vm._v("\n      品牌制造商直供\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.brandList), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '4-' + index
      },
      on: {
        "click": function($event) {
          _vm.branddetail(item.id)
        }
      }
    }, [_c('div', [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.floor_price) + "元起")])], 1), _vm._v(" "), _c('img', {
      attrs: {
        "src": item.new_pic_url,
        "alt": ""
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "newgoods"
  }, [_c('div', {
    staticClass: "newgoods-top",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.goodsList('new')
      }
    }
  }, [_c('div', {
    staticClass: "top"
  }, [_c('p', [_vm._v("新品首发")]), _vm._v(" "), _c('p', [_vm._v("查看全部")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.newGoods), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '6-' + index
      },
      on: {
        "click": function($event) {
          _vm.goodsDetail(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.list_pic_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.goods_brief))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.retail_price))])], 1)
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "newgoods hotgoods"
  }, [_c('div', {
    staticClass: "newgoods-top",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.goodsList('hot')
      }
    }
  }, [_c('div', {
    staticClass: "top"
  }, [_c('p', [_vm._v("人气推荐\n          "), _c('span'), _vm._v(" 好物精选")]), _vm._v(" "), _c('p', [_vm._v("查看全部")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.hotGoods), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '8-' + index
      },
      on: {
        "click": function($event) {
          _vm.goodsDetail(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.list_pic_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.goods_brief))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.retail_price))])], 1)
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "topicList"
  }, [_c('div', {
    staticClass: "topicList-top",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.totopic
    }
  }, [_vm._v("\n      专题精选\n      "), _c('span', {
    staticClass: "icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('scroll-view', {
    staticClass: "scroll-view",
    attrs: {
      "scroll-x": true
    }
  }, _vm._l((_vm.topicList), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '10-' + index
      },
      on: {
        "click": function($event) {
          _vm.topicdetail(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.item_pic_url,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "btom"
    }, [_c('div', [_c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.subtitle))])], 1), _vm._v(" "), _c('div', [_vm._v("\n                " + _vm._s(item.price_info) + "元起\n              ")])])])
  }))], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "newcategory"
  }, _vm._l((_vm.newCategoryList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "list"
    }, [_c('div', {
      staticClass: "head"
    }, [_vm._v(_vm._s(item.name) + "好物")]), _vm._v(" "), _c('div', {
      staticClass: "sublist"
    }, [_vm._l((item.goodsList), function(subitem, subindex) {
      return _c('div', {
        key: subindex,
        attrs: {
          "eventid": '11-' + index + '-' + subindex
        },
        on: {
          "click": function($event) {
            _vm.goodsDetail(subitem.id)
          }
        }
      }, [_c('img', {
        attrs: {
          "src": subitem.list_pic_url,
          "alt": ""
        }
      }), _vm._v(" "), _c('p', [_vm._v(_vm._s(subitem.name))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(subitem.retail_price))])], 1)
    }), _vm._v(" "), _c('div', {
      attrs: {
        "eventid": '12-' + index
      },
      on: {
        "click": function($event) {
          _vm.categoryList(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "last"
    }, [_c('p', [_vm._v(_vm._s(item.name) + "好物")]), _vm._v(" "), _c('span', {
      staticClass: "icon"
    })], 1)])], 2)])
  }))])
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

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(98);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_378baaca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(3)
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

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[97]);
//# sourceMappingURL=main.js.map
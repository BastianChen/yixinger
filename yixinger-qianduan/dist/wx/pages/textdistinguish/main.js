require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c5af7e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(207);
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
var __vue_scopeId__ = "data-v-1c5af7e1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c5af7e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\textdistinguish\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c5af7e1", Component.options)
  } else {
    hotAPI.reload("data-v-1c5af7e1", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_wxparse__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_js__ = __webpack_require__(8);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_3_mpvue_wxparse__["a" /* default */]
  },
  data: function data() {
    return {
      fromType: 'auto',
      toType: 'zh',
      isTranslated: false,
      broadcastImgUrl: '/static/images/broadcast.png',
      userInfo: {},
      result: ' ', // '<span>富士山<br/>富士山</span>',
      translateResult: ' ', //'<span style="font-size: 15px;line-height: 20px;padding: 15px">Fuji<br/>Fuji</span>',
      columns: ['自动检测', '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语', '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语', '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
      pickerShow: false,
      language: '自动检测 -> 中文',
      type: '', // 图像识别的类型
      data: {}, // 图像识别的数据
      imageUrl: '',
      jsona: '{"state":0,"message":"图像识别成功","data":{"id":null,"userId":"oE9el5Hx6LplsHe2roGhrkxkEUsk","imageUrl":"/images/photo/15523727225176481725_src.jpg","date":"2019-03-12 14:38:43","type":"1","result":"{\\"result\\":[{\\"score\\":0.973327,\\"root\\":\\"公众人物\\",\\"keyword\\":\\"周杰伦\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E5%91%A8%E6%9D%B0%E4%BC%A6\\\\/129156\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/38dbb6fd5266d0167927ca029b2bd40735fa35d9.jpg\\",\\"description\\":\\"周杰伦(Jay Chou)，1979年1月18日出生于台湾省新北市，中国台湾流行乐男歌手、音乐人、演员、导演、编剧、监制、商人。2000年发行首张个人专辑《Jay》。2001年发行的专辑《范特西》奠定其融合中西方音乐的风格。2002年举行“The One”世界巡回演唱会。2003年成为美国《时代周刊》封面人物。2004年获得世界音乐大奖中国区最畅销艺人奖。2005年凭借动作片《头文字D》获得台湾电影金马奖、香港电影金像奖最佳新人奖。2006年起连续三年获得世界音乐大奖中国区最畅销艺人奖。2007年自编自导的文艺片《不能说的秘密》获得台湾电影金马奖年度台湾杰出电影奖。2008年凭借歌曲《青花瓷》获得第19届金曲奖最佳作曲人奖。2009年入选美国CNN评出的“25位亚洲最具影响力的人物”；同年凭借专辑《魔杰座》获得第20届金曲奖最佳国语男歌手奖。2010年入选美国《Fast Company》评出的“全球百大创意人物”。2011年凭借专辑《跨时代》再度获得金曲奖最佳国语男歌手奖，并且第4次获得金曲奖最佳国语专辑奖；同年主演好莱坞电影《青蜂侠》。2012年登福布斯中国名人榜榜首。2014年发行华语乐坛首张数字音乐专辑《哎呦，不错哦》。2018年举行“地表最强2世界巡回演唱会”。演艺事业外，他还涉足商业、设计等领域。2007年成立杰威尔有限公司。2011年担任华硕笔电设计师并入股香港文化传信集团。周杰伦热心公益慈善，多次向中国内地灾区捐款捐物。2008年捐款援建希望小学。2014年担任中国禁毒宣传形象大使。\\"}},{\\"score\\":0.657525,\\"root\\":\\"人物-人物特写\\",\\"keyword\\":\\"鬓发\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E9%AC%93%E5%8F%91\\\\/4057208\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/7af40ad162d9f2d38cab570bacec8a136227cc98.jpg\\",\\"description\\":\\"鬓发，是在耳朵前面的一绺头发或一簇卷发。也指男士上承头发，下接胡须的中场地带，作用不可小觑，不仅是男发造型中最考功力的地方，更是修饰脸型、决定气质的关键。\\"}},{\\"score\\":0.408127,\\"root\\":\\"人物-人物特写\\",\\"keyword\\":\\"人脸\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E4%BA%BA%E8%84%B8\\\\/9106961\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/4d086e061d950a7b1d387baf08d162d9f2d3c94f.jpg\\",\\"description\\":\\"《人脸》是贯犯四分之一写的网络小说连载于起点中文网。\\"}},{\\"score\\":0.207997,\\"root\\":\\"非自然图像-屏幕截图\\",\\"keyword\\":\\"屏幕截图\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE\\\\/3634161\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/aa18972bd40735fa016882639c510fb30e240854.jpg\\",\\"description\\":\\"所谓屏幕截图就是将电脑屏幕上的桌面、窗口、对话框、选项卡等屏幕元素保存为图片。在Windows下用户可以使用键盘上的“打印屏幕系统请求”(Print Screen)按键进行整个屏幕的截图和当前活动窗口的截图(按住Alt键的同时按下Print Screen键)，还可以借助专业的屏幕截图软件进行截图。\\"}},{\\"score\\":0.007881,\\"root\\":\\"非自然图像-书籍封面\\",\\"keyword\\":\\"书籍\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E4%B9%A6%E7%B1%8D\\\\/59503\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/0b46f21fbe096b63a940b6e806338744ebf8ac29.jpg\\",\\"description\\":\\"书籍，是指装订成册的图书和文字，在狭义上的理解是带有文字,图像的纸张的集合。广义的书则是一切传播信息的媒体。不过有些人认为图书一词是“河图”与“洛书”的简称。\\"}}],\\"log_id\\":6571215882954042508,\\"result_num\\":5}"},"extra":null,"messageDetail":null}',
      words_result: [],
      words_result_num: 0,
      originalText: [],
      translateText: [],
      text: '', // 用于语音合成
      innerAudioContext: '',
      speechPath: '', // 语音路径
      isFirst: false,
      timer: null,
      isPlay: false, // 判断是否正在播放，如在播放则暂停，反之则从头播放。
      img: null,
      imgHeight: '',
      imgWidth: '',
      isShow: false,
      flag: false, // 用于辨别是否显示了该页面
      scrollTop: 0,
      windowHeight: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['disc'])),
  onLoad: function onLoad() {},
  created: function created() {
    var _this2 = this;

    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.autoplay = true;
    this.innerAudioContext.onEnded(function () {
      clearInterval(_this2.timer);
      _this2.timer = null;
      _this2.broadcastImgUrl = '/static/images/broadcast.png';
    });
    this.innerAudioContext.onStop(function () {
      clearInterval(_this2.timer);
      _this2.timer = null;
      _this2.broadcastImgUrl = '/static/images/broadcast.png';
    });
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer);
    this.timer = null;
    this.windowHeight = wx.getSystemInfoSync().windowHeight + 'px';
  },
  onShow: function onShow() {
    this.flag = true;
  },
  onUnload: function onUnload() {
    this.flag = false;
    this.innerAudioContext.stop();
    this.isPlay = false;
    this.isTranslated = false;
    this.translateResult = ' ';
    this.translateText = [];
    this.words_result = [];
    this.words_result_num = 0;
    this.originalText = [];
    this.text = '';
    this.fromType = 'auto';
    this.language = '自动检测 -> 中文';
    this.imageUrl = '';
  },
  mounted: function mounted() {
    if (!this.isFirst && !this.$route.query.isHistory) {
      wx.showToast({
        title: '识别成功',
        icon: 'success'
      });
    }
    this.isFirst = true;
    this.userInfo = this.$store.getters.disc;
    this.data = JSON.parse(decodeURIComponent(this.$route.query.data));
    if (this.data.data.imageUrl.indexOf("https://www.wzcb97.top") == -1) {
      this.imageUrl = 'https://wzcb97.top' + this.data.data.imageUrl;
    } else {
      var imageUrlArray = this.data.data.imageUrl.split("//");
      this.imageUrl = 'https://wzcb97.top/' + imageUrlArray[2];
    }
    // 调整图片为自适应
    var _this = this;
    wx.getImageInfo({
      src: this.imageUrl,
      success: function success(res) {
        //console.log("图片" + JSON.stringify(res))
        var winWidth = wx.getSystemInfoSync().windowWidth;
        if (res.width > winWidth) {
          _this.imgWidth = winWidth * 0.9 + 'px';
          var rate = winWidth * 0.9 / res.width;
          _this.imgHeight = res.height * rate + 'px';
        } else {
          _this.imgWidth = res.width + 'px';
          _this.imgHeight = res.height + 'px';
        }
        _this.isShow = true;
        //console.log("屏幕宽度" + winWidth);
      }
    });
    console.log(JSON.parse(this.data.data.words));
    this.words_result = JSON.parse(this.data.data.words).words_result;
    this.words_result_num = JSON.parse(this.data.data.words).words_result_num;
    this.result = ' ';
    for (var i = 0; i < this.words_result_num; i++) {
      var words = {};
      words.word = this.words_result[i].words;
      this.originalText.push(words);
      if (i == 0) {
        this.result = '<span>' + (i + 1) + '. ' + this.words_result[i].words + '<br/>';
      } else if (i + 1 == this.words_result_num) {
        this.result = this.result + (i + 1) + '. ' + this.words_result[i].words + '</span>';
      } else {
        this.result = this.result + (i + 1) + '. ' + this.words_result[i].words + '<br/>';
      }
    }
    //console.log("this.originalText" + JSON.stringify(this.originalText));
  },

  methods: {
    onConfirm: function onConfirm(index) {
      switch (index.target.value) {
        case '自动检测':
          this.fromType = 'auto';
          this.language = '自动检测 -> 中文';
          break;
        case '中文':
          this.fromType = 'zh';
          this.language = '中文 -> 中文';
          break;
        case '英语':
          this.fromType = 'en';
          this.language = '英语 -> 中文';
          break;
        case '粤语':
          this.fromType = 'yue';
          this.language = '粤语 -> 中文';
          break;
        case '文言文':
          this.fromType = 'wyw';
          this.language = '文言文 -> 中文';
          break;
        case '日语':
          this.fromType = 'jp';
          this.language = '日语 -> 中文';
          break;
        case '韩语':
          this.fromType = 'kor';
          this.language = '韩语 -> 中文';
          break;
        case '法语':
          this.fromType = 'fra';
          this.language = '法语 -> 中文';
          break;
        case '西班牙语':
          this.fromType = 'spa';
          this.language = '西班牙语 -> 中文';
          break;
        case '泰语':
          this.fromType = 'th';
          this.language = '泰语 -> 中文';
          break;
        case '阿拉伯语':
          this.fromType = 'ara';
          this.language = '阿拉伯语 -> 中文';
          break;
        case '俄语':
          this.fromType = 'ru';
          this.language = '俄语 -> 中文';
          break;
        case '葡萄牙语':
          this.fromType = 'pt';
          this.language = '葡萄牙语 -> 中文';
          break;
        case '德语':
          this.fromType = 'de';
          this.language = '德语 -> 中文';
          break;
        case '意大利语':
          this.fromType = 'it';
          this.language = '意大利语 -> 中文';
          break;
        case '希腊语':
          this.fromType = 'el';
          this.language = '希腊语 -> 中文';
          break;
        case '荷兰语':
          this.fromType = 'nl';
          this.language = '荷兰语 -> 中文';
          break;
        case '波兰语':
          this.fromType = 'pl';
          this.language = '波兰语 -> 中文';
          break;
        case '保加利亚语':
          this.fromType = 'bul';
          this.language = '保加利亚语 -> 中文';
          break;
        case '爱沙尼亚语':
          this.fromType = 'est';
          this.language = '爱沙尼亚语 -> 中文';
          break;
        case '丹麦语':
          this.fromType = 'dan';
          this.language = '丹麦语 -> 中文';
          break;
        case '芬兰语':
          this.fromType = 'fin';
          this.language = '芬兰语 -> 中文';
          break;
        case '捷克语':
          this.fromType = 'cs';
          this.language = '捷克语 -> 中文';
          break;
        case '罗马尼亚语':
          this.fromType = 'rom';
          this.language = '罗马尼亚语 -> 中文';
          break;
        case '斯洛文尼亚语':
          this.fromType = 'slo';
          this.language = '斯洛文尼亚语 -> 中文';
          break;
        case '瑞典语':
          this.fromType = 'swe';
          this.language = '瑞典语 -> 中文';
          break;
        case '匈牙利语':
          this.fromType = 'hu';
          this.language = '匈牙利语 -> 中文';
          break;
        case '繁体中文':
          this.fromType = 'cht';
          this.language = '繁体中文 -> 中文';
          break;
        case '越南语':
          this.fromType = 'vie';
          this.language = '越南语 -> 中文';
          break;
        default:
          break;
      }
      this.pickerShow = false;
    },
    onCancel: function onCancel() {
      this.pickerShow = false;
    },
    selectLanguage: function selectLanguage() {
      this.pickerShow = true;
    },
    speechSynthesis: function speechSynthesis() {
      var _this3 = this;

      this.$httpWX.post({
        url: __WEBPACK_IMPORTED_MODULE_4__service_api_js__["a" /* apiurl */].speechSynthesis,
        data: {
          text: this.text,
          userId: this.userInfo.openid
        }
      }).then(function (res) {
        _this3.speechPath = 'https://www.wzcb97.top/' + res.data;
        _this3.innerAudioContext.src = _this3.speechPath;
        _this3.innerAudioContext.play();
      });
    },
    play: function play() {
      var _this4 = this;

      if (this.isPlay == false) {
        if (this.timer == null) {
          this.timer = setInterval(function () {
            if (_this4.broadcastImgUrl == '/static/images/broadcast.png') {
              _this4.broadcastImgUrl = '/static/images/broadcast2.png';
            } else {
              _this4.broadcastImgUrl = '/static/images/broadcast.png';
            }
          }, 800);
        }
        if (this.speechPath == '') {
          this.speechSynthesis();
        } else {
          this.innerAudioContext.play();
        }
        this.isPlay = true;
      } else {
        this.innerAudioContext.stop();
        this.isPlay = false;
      }
    },
    translate: function translate() {
      var _this5 = this;

      this.innerAudioContext.stop();
      this.$httpWX.post({
        url: __WEBPACK_IMPORTED_MODULE_4__service_api_js__["a" /* apiurl */].translateText,
        data: {
          originalText: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.originalText),
          userId: this.userInfo.openid,
          textId: this.data.data.id,
          from: this.fromType,
          to: 'zh', // 暂时只支持翻译成中文
          type: 1
        },
        title: '正在翻译...'
      }).then(function (res) {
        _this5.translateText = res.data;
        _this5.translateResult = ' ';
        _this5.text = '';
        _this5.isPlay = false;
        _this5.speechPath = '';
        for (var i = 0; i < _this5.words_result_num; i++) {
          _this5.text = _this5.text + _this5.translateText[i].word;
          var textWord = _this5.translateText[i].word;
          if (i == 0) {
            _this5.translateResult = '<span>' + (i + 1) + '. ' + textWord + '<br/>';
          } else if (i + 1 == _this5.words_result_num) {
            _this5.translateResult = _this5.translateResult + (i + 1) + '. ' + textWord + '</span>';
          } else {
            _this5.translateResult = _this5.translateResult + (i + 1) + '. ' + textWord + '<br/>';
          }
        }
        _this5.broadcastImgUrl = '/static/images/broadcast.png';
        _this5.isTranslated = true;
        //this.scrollTop =  wx.getSystemInfoSync().windowHeight+1000
      });
    },
    seePhoto: function seePhoto(imageUrl) {
      var imgArray = [];
      imgArray.push(imageUrl);
      wx.previewImage({
        current: imageUrl, // 当前显示图片的http链接
        urls: imgArray // 需要预览的图片http链接列表
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
    staticClass: "firstDiv"
  }, [_c('div', {
    staticClass: "firstRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "offset": "3",
      "mpcomid": '0'
    }
  }, [_c('span', [_vm._v("\n          识别图片：\n        ")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "secondRow"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    style: ({
      width: _vm.imgWidth,
      height: _vm.imgHeight
    }),
    attrs: {
      "src": _vm.imageUrl,
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.seePhoto(_vm.imageUrl)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "thirdRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "offset": "3",
      "mpcomid": '2'
    }
  }, [_c('span', [_vm._v("\n            识别结果：\n          ")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "forthRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "18",
      "offset": "3",
      "mpcomid": '5'
    }
  }, [_c('wxParse', {
    attrs: {
      "content": _vm.result,
      "mpcomid": '4'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "fifthRow"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "10",
      "offset": "2",
      "mpcomid": '7'
    }
  }, [_c('button', {
    staticStyle: {
      "width": "180px"
    },
    attrs: {
      "type": "default",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.selectLanguage
    }
  }, [_vm._v("\n            " + _vm._s(_vm.language) + "\n          ")])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "4",
      "offset": "5",
      "mpcomid": '8'
    }
  }, [_c('button', {
    staticStyle: {
      "width": "80px",
      "border-color": "#1989FA",
      "color": "#1989FA"
    },
    attrs: {
      "type": "primary",
      "size": "mini",
      "plain": "false",
      "bindtap": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.translate
    }
  }, [_vm._v("\n            翻译\n          ")])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "secondDiv"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "secondRow"
  }, [_c('div', [_c('wxParse', {
    attrs: {
      "content": _vm.translateResult,
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isTranslated),
      expression: "isTranslated"
    }],
    attrs: {
      "src": _vm.broadcastImgUrl,
      "eventid": '3'
    },
    on: {
      "click": _vm.play
    }
  })], 1)])]), _vm._v(" "), _c('div', [_c('van-popup', {
    attrs: {
      "show": _vm.pickerShow,
      "position": "bottom",
      "overlay": "false",
      "close-on-click-overlay": "",
      "mpcomid": '12'
    }
  }, [_c('van-picker', {
    attrs: {
      "show-toolbar": "",
      "title": "翻译语种",
      "columns": _vm.columns,
      "eventid": '4',
      "mpcomid": '11'
    },
    on: {
      "cancel": _vm.onCancel,
      "confirm": _vm.onConfirm
    }
  })], 1)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "firstRow"
  }, [_c('span', [_vm._v("\n          -- 翻译结果 --\n        ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c5af7e1", esExports)
  }
}

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
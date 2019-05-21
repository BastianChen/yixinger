<template>
  <div class="index">
    <!--<scroll-view scroll-y :style="{height: windowHeight}" scroll-with-animation="true" :scroll-top="scrollTop">-->
    <div class="radius"></div>
    <div class="firstDiv">
      <div class="secondRow">
        <img :src="imageUrl" :style="{width:imgWidth+'px',height:imgHeight+'px'}" v-show="isShow"
             @click="seePhoto(imageUrl)"/>
      </div>
    </div>
    <div class="secondDiv" :style="{'margin-top':imgHeight-50+'px'}">
      <van-row>
        <van-col span="18">
          <div class="firstCol">
            <wxParse :content="result"/>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="18" offset="6">
          <div class="firstCol">
            <wxParse :content="translateResult"/>
            <img :src="broadcastImgUrl" @click="play" v-show="isTranslated"/>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="thirdDiv">
      <div class="bottom">
        <van-row>
          <div>
            <van-col span="12">
              <div class="firstCol" @click="selectLanguage">
             <span>
               {{language}}
             </span>
              </div>
            </van-col>
            <van-col span="12">
              <div class="secondCol" @click="translate">
             <span>
               翻译
             </span>
              </div>
            </van-col>
          </div>
        </van-row>
      </div>
    </div>
    <!--</scroll-view>-->
    <div>
      <!--<audio :src="speechPath" id="Audio"></audio>-->
      <van-popup :show="pickerShow" position="bottom"
                 overlay="false" close-on-click-overlay>
        <van-picker
          show-toolbar
          title="翻译语种"
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import wxParse from 'mpvue-wxparse';
  import {apiurl} from "@/service/api.js";

  export default {
    components: {
      wxParse
    },
    data() {
      return {
        fromType: 'auto',
        toType: 'zh',
        isTranslated: false,
        broadcastImgUrl: '/static/images/broadcast.png',
        userInfo: {},
        result: ' ',// '<span>富士山<br/>富士山</span>',
        translateResult: ' ',//'<span style="font-size: 15px;line-height: 20px;padding: 15px">Fuji<br/>Fuji</span>',
        columns: ['自动检测', '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语',
          '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语',
          '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
        pickerShow: false,
        language: '自动检测 -> 中文',
        type: '',// 图像识别的类型
        data: {},// 图像识别的数据
        imageUrl: '',
        jsona: '{"state":0,"message":"图像识别成功","data":{"id":null,"userId":"oE9el5Hx6LplsHe2roGhrkxkEUsk","imageUrl":"/images/photo/15523727225176481725_src.jpg","date":"2019-03-12 14:38:43","type":"1","result":"{\\"result\\":[{\\"score\\":0.973327,\\"root\\":\\"公众人物\\",\\"keyword\\":\\"周杰伦\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E5%91%A8%E6%9D%B0%E4%BC%A6\\\\/129156\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/38dbb6fd5266d0167927ca029b2bd40735fa35d9.jpg\\",\\"description\\":\\"周杰伦(Jay Chou)，1979年1月18日出生于台湾省新北市，中国台湾流行乐男歌手、音乐人、演员、导演、编剧、监制、商人。2000年发行首张个人专辑《Jay》。2001年发行的专辑《范特西》奠定其融合中西方音乐的风格。2002年举行“The One”世界巡回演唱会。2003年成为美国《时代周刊》封面人物。2004年获得世界音乐大奖中国区最畅销艺人奖。2005年凭借动作片《头文字D》获得台湾电影金马奖、香港电影金像奖最佳新人奖。2006年起连续三年获得世界音乐大奖中国区最畅销艺人奖。2007年自编自导的文艺片《不能说的秘密》获得台湾电影金马奖年度台湾杰出电影奖。2008年凭借歌曲《青花瓷》获得第19届金曲奖最佳作曲人奖。2009年入选美国CNN评出的“25位亚洲最具影响力的人物”；同年凭借专辑《魔杰座》获得第20届金曲奖最佳国语男歌手奖。2010年入选美国《Fast Company》评出的“全球百大创意人物”。2011年凭借专辑《跨时代》再度获得金曲奖最佳国语男歌手奖，并且第4次获得金曲奖最佳国语专辑奖；同年主演好莱坞电影《青蜂侠》。2012年登福布斯中国名人榜榜首。2014年发行华语乐坛首张数字音乐专辑《哎呦，不错哦》。2018年举行“地表最强2世界巡回演唱会”。演艺事业外，他还涉足商业、设计等领域。2007年成立杰威尔有限公司。2011年担任华硕笔电设计师并入股香港文化传信集团。周杰伦热心公益慈善，多次向中国内地灾区捐款捐物。2008年捐款援建希望小学。2014年担任中国禁毒宣传形象大使。\\"}},{\\"score\\":0.657525,\\"root\\":\\"人物-人物特写\\",\\"keyword\\":\\"鬓发\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E9%AC%93%E5%8F%91\\\\/4057208\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/7af40ad162d9f2d38cab570bacec8a136227cc98.jpg\\",\\"description\\":\\"鬓发，是在耳朵前面的一绺头发或一簇卷发。也指男士上承头发，下接胡须的中场地带，作用不可小觑，不仅是男发造型中最考功力的地方，更是修饰脸型、决定气质的关键。\\"}},{\\"score\\":0.408127,\\"root\\":\\"人物-人物特写\\",\\"keyword\\":\\"人脸\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E4%BA%BA%E8%84%B8\\\\/9106961\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/4d086e061d950a7b1d387baf08d162d9f2d3c94f.jpg\\",\\"description\\":\\"《人脸》是贯犯四分之一写的网络小说连载于起点中文网。\\"}},{\\"score\\":0.207997,\\"root\\":\\"非自然图像-屏幕截图\\",\\"keyword\\":\\"屏幕截图\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE\\\\/3634161\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/aa18972bd40735fa016882639c510fb30e240854.jpg\\",\\"description\\":\\"所谓屏幕截图就是将电脑屏幕上的桌面、窗口、对话框、选项卡等屏幕元素保存为图片。在Windows下用户可以使用键盘上的“打印屏幕系统请求”(Print Screen)按键进行整个屏幕的截图和当前活动窗口的截图(按住Alt键的同时按下Print Screen键)，还可以借助专业的屏幕截图软件进行截图。\\"}},{\\"score\\":0.007881,\\"root\\":\\"非自然图像-书籍封面\\",\\"keyword\\":\\"书籍\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E4%B9%A6%E7%B1%8D\\\\/59503\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/0b46f21fbe096b63a940b6e806338744ebf8ac29.jpg\\",\\"description\\":\\"书籍，是指装订成册的图书和文字，在狭义上的理解是带有文字,图像的纸张的集合。广义的书则是一切传播信息的媒体。不过有些人认为图书一词是“河图”与“洛书”的简称。\\"}}],\\"log_id\\":6571215882954042508,\\"result_num\\":5}"},"extra":null,"messageDetail":null}',
        words_result: [],
        words_result_num: 0,
        originalText: [],
        translateText: [],
        text: '',// 用于语音合成
        innerAudioContext: '',
        speechPath: '',// 语音路径
        isFirst: false,
        timer: null,
        isPlay: false,// 判断是否正在播放，如在播放则暂停，反之则从头播放。
        img: null,
        imgHeight: '',
        imgWidth: '',
        isShow: false,
        flag: false,// 用于辨别是否显示了该页面
        scrollTop: 0,
        windowHeight: ''
      }
    },
    computed: {
      ...mapGetters([
        'disc'
      ])
    },
    onLoad() {
    },
    created() {
      this.innerAudioContext = wx.createInnerAudioContext();
      this.innerAudioContext.autoplay = true;
      this.innerAudioContext.onEnded(() => {
        clearInterval(this.timer);
        this.timer = null;
        this.broadcastImgUrl = '/static/images/broadcast.png';
      })
      this.innerAudioContext.onStop(() => {
        clearInterval(this.timer);
        this.timer = null;
        this.broadcastImgUrl = '/static/images/broadcast.png';
      })
      // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
      clearInterval(this.timer);
      this.timer = null;
      this.windowHeight = wx.getSystemInfoSync().windowHeight + 'px';
    },
    onShow() {
      this.flag = true;
    },
    onUnload() {
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
    mounted() {
      if (!this.isFirst && !this.$route.query.isHistory) {
        wx.showToast({
          title: '识别成功',
          icon: 'success'
        })
      }
      this.isFirst = true;
      this.userInfo = this.$store.getters.disc;
      this.data = JSON.parse(decodeURIComponent(this.$route.query.data));
      if (this.data.data.imageUrl.indexOf("https://www.wzcb97.top") == -1) {
        this.imageUrl = 'https://wzcb97.top' + this.data.data.imageUrl;
      } else {
        let imageUrlArray = this.data.data.imageUrl.split("//");
        this.imageUrl = 'https://wzcb97.top/' + imageUrlArray[2];
      }
      // 调整图片为自适应
      var _this = this;
      wx.getImageInfo({
        src: this.imageUrl,
        success: function (res) {
          //console.log("图片" + JSON.stringify(res))
          let winWidth = wx.getSystemInfoSync().windowWidth;
          if (res.width > winWidth) {
            _this.imgWidth = winWidth * 0.9;
            let rate = (winWidth * 0.9) / res.width;
            _this.imgHeight = res.height * rate;
          } else {
            _this.imgWidth = res.width;
            _this.imgHeight = res.height;
          }
          _this.isShow = true;
          //console.log("屏幕宽度" + winWidth);
        }
      })
      console.log(JSON.parse(this.data.data.words));
      this.words_result = JSON.parse(this.data.data.words).words_result;
      this.words_result_num = JSON.parse(this.data.data.words).words_result_num;
      this.result = ' ';
      for (let i = 0; i < this.words_result_num; i++) {
        let words = {};
        words.word = this.words_result[i].words;
        this.originalText.push(words);
        if (i == 0) {
          this.result = '<span style="font-size: 16px;padding: 10px;text-align: left">' + (i + 1) + '. ' + this.words_result[i].words + '<br/>'
        } else if ((i + 1) == this.words_result_num) {
          this.result = this.result + (i + 1) + '. ' + this.words_result[i].words + '</span>'
        } else {
          this.result = this.result + (i + 1) + '. ' + this.words_result[i].words + '<br/>'
        }
      }
      //console.log("this.originalText" + JSON.stringify(this.originalText));
    },
    methods: {
      onConfirm(index) {
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
      onCancel() {
        this.pickerShow = false;
      },
      selectLanguage() {
        this.pickerShow = true;
      },
      speechSynthesis() {
        this.$httpWX.post({
          url: apiurl.speechSynthesis,
          data: {
            text: this.text,
            userId: this.userInfo.openid
          }
        }).then(res => {
          this.speechPath = 'https://www.wzcb97.top/' + res.data;
          this.innerAudioContext.src = this.speechPath;
          this.innerAudioContext.play();
        })
      },
      play() {
        if (this.isPlay == false) {
          if (this.timer == null) {
            this.timer = setInterval(() => {
              if (this.broadcastImgUrl == '/static/images/broadcast.png') {
                this.broadcastImgUrl = '/static/images/broadcast2.png';
              } else {
                this.broadcastImgUrl = '/static/images/broadcast.png';
              }
            }, 800)
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
      translate() {
        this.innerAudioContext.stop();
        this.$httpWX.post({
          url: apiurl.translateText,
          data: {
            originalText: JSON.stringify(this.originalText),
            userId: this.userInfo.openid,
            textId: this.data.data.id,
            from: this.fromType,
            to: 'zh',// 暂时只支持翻译成中文
            type: 1
          },
          title: '正在翻译...'
        }).then(res => {
          this.translateText = res.data;
          this.translateResult = ' ';
          this.text = '';
          this.isPlay = false;
          this.speechPath = '';
          for (let i = 0; i < this.words_result_num; i++) {
            this.text = this.text + this.translateText[i].word;
            let textWord = this.translateText[i].word;
            if (i == 0) {
              this.translateResult = '<span style="font-size: 16px;padding: 10px;text-align: left">' +
                (i + 1) + '. ' + textWord + '<br/>'
            } else if ((i + 1) == this.words_result_num) {
              this.translateResult = this.translateResult + (i + 1) + '. ' + textWord + '</span>'
            } else {
              this.translateResult = this.translateResult + (i + 1) + '. ' + textWord + '<br/>'
            }
          }
          this.broadcastImgUrl = '/static/images/broadcast.png';
          this.isTranslated = true;
          //this.scrollTop =  wx.getSystemInfoSync().windowHeight+1000
        })
      },
      seePhoto(imageUrl) {
        let imgArray = [];
        imgArray.push(imageUrl);
        wx.previewImage({
          current: imageUrl, // 当前显示图片的http链接
          urls: imgArray // 需要预览的图片http链接列表
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

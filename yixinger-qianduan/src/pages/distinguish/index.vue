<template>
  <div class="index">
    <div class="firstDiv">
      <div class="firstRow">
        <van-row>
          <van-col span="6" offset="3">
          <span>
            识别图片：
          </span>
          </van-col>
        </van-row>
      </div>
      <div class="secondRow">
        <van-row>
          <img :src="imageUrl"/>
        </van-row>
      </div>
      <div class="thirdRow">
        <van-row>
          <van-col span="6" offset="3">
            <span>
              识别结果：
            </span>
          </van-col>
        </van-row>
      </div>
      <div class="forthRow">
        <van-row>
          <van-col span="6" offset="4">
            <wxParse :content="result"/>
          </van-col>
        </van-row>
      </div>
      <div class="fifthRow">
        <van-row>
          <van-col span="10" offset="2">
            <!--<div style="border-width: 1px;border-color: #333333;">-->
            <!--<span @click="selectLanguage">-->
            <!--{{language}}-->
            <!--</span>-->
            <!--</div>-->
            <!--<van-button type="default" @click="selectLanguage">{{language}}</van-button>-->
            <button
              type="default"
              size="mini"
              plain="false"
              bindtap="primary"
              style="width: 180px"
              @click="selectLanguage"
            >
              {{language}}
            </button>
          </van-col>
          <van-col span="4" offset="5">
            <button
              type="primary"
              size="mini"
              plain="false"
              bindtap="primary"
              style="width: 80px;border-color: #1989FA;color: #1989FA"
              @click="translate"
            >
              翻译
            </button>
            <!--<van-button plain type="primary">翻译</van-button>-->
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="secondDiv" v-show="isTranslated">
      <div class="firstRow">
          <span>
            一 翻译结果 一
          </span>
      </div>
      <div class="secondRow">
        <div>
          <wxParse :content="translateResult"/>
          <img :src="broadcastImgUrl" @click="play"/>
        </div>
      </div>
    </div>
    <div>
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
      <!--<van-picker-->
      <!--show-toolbar-->
      <!--title="标题"-->
      <!--:columns="columns"-->
      <!--@cancel="onCancel"-->
      <!--@confirm="onConfirm"-->
      <!--/>-->
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import wxParse from 'mpvue-wxparse';

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
        result: '<span>富士山<br/>富士山</span>',
        translateResult: '<span style="font-size: 15px;line-height: 20px;padding: 15px;">Fuji<br/>Fuji</span>',
        columns: ['自动检测', '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语',
          '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语',
          '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
        pickerShow: false,
        language: '自动检测 -> 中文',
        type: '',// 图像识别的类型
        data: {},// 图像识别的数据
        imageUrl: ''
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
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
      this.type = this.$route.query.type;
      this.data = JSON.parse(this.$route.query.data);
      this.imageUrl = 'https://wzcb97.top' + this.data.data.imageUrl;
      console.log("type" + this.type + this.data)
    },
    methods: {
      onConfirm(index) {
        console.log("index" + JSON.stringify(index))
        console.log(index.target.value)
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
      play() {
        this.broadcastImgUrl = '/static/images/dingwei.png'
      },
      translate() {
        this.isTranslated = true;
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

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
          <img src="https://wzcb97.top/images/index/photo.jpg"/>
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
            >
              翻译
            </button>
            <!--<van-button plain type="primary">翻译</van-button>-->
          </van-col>
        </van-row>
      </div>

    </div>
    <div class="secondDiv">
      <div class="firstRow">
          <span>
            一 翻译结果 一
          </span>
      </div>
      <div class="secondRow">
        <div>
          <span>
            Fuji
          </span>
          <img src="../../../static/images/broadcast.png"/>
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
      userInfo: {},
      result: '<span>富士山<br/>富士山</span>',
      columns: ['自动检测', '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语',
        '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语',
        '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
      pickerShow: false,
      language: '自动检测 -> 中文'
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
  },
  methods: {
    onConfirm(index) {
      console.log("index" + JSON.stringify(index))
      console.log(index.target.value)
    },
    onCancel() {
      this.pickerShow = false;
    },
    selectLanguage() {
      this.pickerShow = true;
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

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
            <wxParse :content="result" @preview="preview" @navigate="navigate" />
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          {{userInfo.province}}
        </van-row>
      </div>

    </div>
    <div class="secondDiv">
      {{userInfo.province}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data() {
    return {
      userInfo: {},
      result:'<span>富士山<br/>富士山</span>'
    }
  },
  computed: {
    ...mapGetters([
      'disc'
    ])
  },
  created() {
    this.userInfo = this.$store.getters.disc;
    console.log("userInfo.province" + this.userInfo.province)
  },
  mounted() {
    this.userInfo = this.$store.getters.disc;
    console.log("userInfo.province" + this.userInfo.province)
  },
  methods: {
    preview(src, e) {
      // do something
    },
    navigate(href, e) {
      // do something
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

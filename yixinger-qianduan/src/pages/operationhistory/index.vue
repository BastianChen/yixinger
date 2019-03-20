<template>
  <div class="index">
    <van-tabs :active="active" @change="onChange" sticky animated swipeable color="#00BFFF">
      <van-tab title="图像识别">
        <div style="margin: 10px 5px;width: 100%;font-weight: bold;font-size: 28px;font-family: KaiTi">
          <van-row>
            <van-col span="8" offset="1">
              2019年
            </van-col>
          </van-row>
          <van-row>
            <van-col span="4" offset="1">
              今天
            </van-col>
            <van-col span="18" @longpress="clickLong">
              <van-card
                desc="通用图像识别"
                title="香奈儿"
                :thumb="imageUrl"
                centered lazy-load
              >
              </van-card>
            </van-col>
          </van-row>
        </div>
        <div style="margin: 10px 5px;width: 100%;font-weight: bold;font-size: 28px;font-family: KaiTi">
          <van-row>
            <van-col span="8" offset="1">
              2018年
            </van-col>
          </van-row>
          <van-row>
            <van-col span="4" offset="1">
              <span>
                11
              </span>
              <span style="font-size: 14px;margin-left:-7px;">
                3月
              </span>
            </van-col>
            <van-col span="18">
              <van-card
                desc="通用图像识别"
                title="香奈儿"
                :thumb="imageUrl"
                centered lazy-load
              >
              </van-card>
            </van-col>
          </van-row>
        </div>
        <div style="margin: 10px 5px;width: 100%;font-weight: bold;font-size: 28px;font-family: KaiTi">
          <van-row v-if="false">
            <van-col span="8" offset="1">
              2018年
            </van-col>
          </van-row>
          <van-row>
            <van-col span="4" offset="1">
              <span>
                09
              </span>
              <span style="font-size: 14px;margin-left:-7px;">
                3月
              </span>
            </van-col>
            <van-col span="18">
              <van-card
                desc="通用图像识别"
                title="香奈儿"
                :thumb="imageUrl"
                centered lazy-load
              >
              </van-card>
            </van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="文字识别">
        <div style="text-align:center;margin-top: 200px">
          <div>
            <img src="../../../static/images/noContent.png" style="width: 80px;height: 80px"/>
          </div>
          <div>
            <span>
              暂无记录
            </span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-dialog id="van-dialog" style="text-align: center"/>
  </div>
</template>

<script>
import Dialog from '../../../static/vant-weapp/dist/dialog/dialog.js';

export default {
  data() {
    return {
      active: 0,
      imageUrl: 'https://www.wzcb97.top/images/photo/155306006312929788825_src.jpg'
    }
  },
  methods: {
    clickLong(index) {
      Dialog.confirm({
        title: '温馨提示',
        message: '您确定要删除该条记录？'
      }).then(() => {
        console.log("确定")
      }).catch(() => {
        console.log("取消")
      });
    },
    onChange(index) {
      // wx.showToast({
      //   title: `切换到标签 ${index.target.title}`,
      //   icon: 'none'
      // });
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

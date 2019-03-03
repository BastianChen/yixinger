<template>
  <div class="my">
    <div class="myinfo">
      <!--<van-button type="primary" size="normal" round open-type="getUserInfo" @click="getUserInfo">获取个人信息</van-button>-->
      <img :src="userInfo.avatarUrl">
      <div>
        <p>{{userInfo.nickName}}</p>
        <van-button type="primary" size="normal" v-show="userInfo==null" open-type="getUserInfo" @click="getUserInfo">点击登录</van-button>
        <!--<p v-else>微信用户</p>-->
      </div>
    </div>
    <div class="iconlist">
      <div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'disc'
      ])
    },
    created() {
      //this.userInfo = this.$store.getters.disc;
    },
    mounted() {
      //this.userInfo = this.$store.getters.disc;
    },
    data() {
      return {
        avator: "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png",
        allcheck: false,
        listData: [],
        Listids: [],
        userInfo: {},
        listData: [{
          title: "我的订单",
          icon: "icon-unie64a",
          url: ""
        },
          {
            title: "优惠券",
            icon: "icon-youhuiquan",
            url: ""
          },
          {
            title: "我的足迹",
            icon: "icon-zuji",
            url: ""
          },
          {
            title: "我的收藏",
            icon: "icon-shoucang",
            url: "/pages/collectlist/main"
          },
          {
            title: "地址管理",
            icon: "icon-dizhiguanli",
            url: "/pages/address/main"
          },
          {
            title: "联系客服",
            icon: "icon-lianxikefu",
            url: ""
          },
          {
            title: "帮助中心",
            icon: "icon-bangzhuzhongxin",
            url: ""
          },
          {
            title: "意见反馈",
            icon: "icon-yijianfankui",
            url: "/pages/feedback/main"
          }
        ]
      };
    },
    components: {},
    methods: {
      getUserInfo() {
        // this.userInfo = this.$store.getters.disc;
        // console.log(this.$store.getters.disc)
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
          success: (res) => {
            this.code = res.code;
            console.log(res.code) //返回code
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
                // localStorage.setItem("userInfo",JSON.stringify(this.userInfo));
                console.log(res)
                console.log(this.userInfo)
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
            })
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
        })
      },
      goTo(url) {
        if (toLogin()) {
          wx.navigateTo({
            url: url
          });
        }
      },
      toLogin() {
        if (!this.userInfo.avatarUrl) {
          wx.navigateTo({
            url: "/pages/login/main"
          });
        }
      }
    }
  };

</script>
<style lang='scss' scoped>
  @import "./style";

</style>

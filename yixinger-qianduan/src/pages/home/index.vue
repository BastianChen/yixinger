<template>
  <div>
    <div class="my">
      <div class="myinfo" v-if="isLogin">
        <div>
          <img :src="userInfo.avatarUrl" open-type="getUserInfo" @click="getUserInfo">
          <div>
            <p>{{userInfo.nickName}}</p>
          </div>
        </div>
      </div>
      <div v-if="isLogin">
        <div style="padding-top: 20px">
          <van-cell
            title="性别"
            :value="userInfo.gender"
            size="large"
          />
          <van-cell
            title="地区"
            :value="userInfo.province+' '+userInfo.city"
            size="large"
          />
        </div>
        <div style="padding-top: 20px">
          <van-cell
            title="浏览记录"
            is-link
          />
          <van-cell
            title="操作记录"
            is-link
          /><!--url="/pages/dashboard/index"-->
        </div>
      </div>
      <div class="login" v-if="!isLogin">
        <div class="button">
          <!--<van-button type="primary" size="normal" square open-type="getUserInfo" @click="getUserInfo">登录</van-button>-->
          <button
            type="primary"
            size="default"
            plain="false"
            bindtap="primary"
            style="background-color: #1989FA;border-color: #1989FA;color: #ffffff"
            open-type="getUserInfo" @click="getUserInfo"
          >
            登录
          </button>
        </div>
      </div>
      <!--<div class="iconlist">-->
      <!--<div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">-->
      <!--<span class="iconfont" :class="item.icon"></span>-->
      <!--<span>{{item.title}}</span>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <!--<div class="my" v-show="!isLogin">-->
    <!--<div class="login">-->
    <!--<div class="button">-->
    <!--&lt;!&ndash;<van-button type="primary" size="normal" square open-type="getUserInfo" @click="getUserInfo">登录</van-button>&ndash;&gt;-->
    <!--<button-->
    <!--type="primary"-->
    <!--size="default"-->
    <!--plain="false"-->
    <!--bindtap="primary"-->
    <!--style="background-color: #1989FA;border-color: #1989FA;color: #ffffff"-->
    <!--open-type="getUserInfo" @click="getUserInfo"-->
    <!--&gt;-->
    <!--登录-->
    <!--</button>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="iconlist">-->
    <!--<div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">-->
    <!--<span class="iconfont" :class="item.icon"></span>-->
    <!--<span>{{item.title}}</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import {apiurl} from "@/service/api.js";

  export default {
    computed: {
      ...mapGetters([
        'disc'
      ])
    },
    created() {
      this.getUserInfo();
      //this.userInfo = this.$store.getters.disc;
    },
    mounted() {
      //this.userInfo = this.$store.getters.disc;
    },
    data() {
      return {
        isLogin: false,
        code: '',
        openid: '',


        avator: "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png",
        allcheck: false,
        listData: [],
        Listids: [],
        userInfo: {},
      };
    },
    components: {},
    methods: {
      ...mapMutations({
        setDisc: 'set_disc'
      }),
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
            console.log("code" + this.code)
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo;
                // console.log("userInfo++++" + JSON.stringify(this.userInfo))
                this.isLogin = true;
                this.$httpWX.post({
                  url: apiurl.addUser + '?code=' + this.code,
                  data: this.userInfo,
                  header: {
                    'Content-type': 'application/json'
                  }
                }).then(res => {
                  this.openid = res.data;
                  this.userInfo.openid = this.openid
                  this.setDisc(this.userInfo);
                  this.$httpWX.get({
                    url: apiurl.getUser,
                    data: {
                      openid: this.openid,
                      language: 'zh'
                    },
                  }).then(res => {
                    this.userInfo = res.data;
                  })
                })
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

<template>
  <div>
    <div class="my">
      <div class="myinfo" v-if="isLogin">
        <div>
          <img :src="userInfo.avatarUrl" :data-src="userInfo.avatarUrl" @click="seePhoto(userInfo.avatarUrl)"/>
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
            v-if="userInfo.city"
            title="地区"
            :value="userInfo.province+' '+userInfo.city"
            size="large"
          />
          <van-cell
            v-if="(!userInfo.city)&&(userInfo.province)"
            title="地区"
            :value="userInfo.country+' '+userInfo.province"
            size="large"
          />
          <van-cell
            v-if="(!userInfo.city)&&(!userInfo.province)&&(userInfo.country)"
            title="地区"
            :value="userInfo.country"
            size="large"
          />
          <van-cell
            v-if="(!userInfo.city)&&(!userInfo.province)&&(!userInfo.country)"
            title="地区"
            value="暂无"
            size="large"
          />
        </div>
        <div style="padding-top: 20px">
          <van-cell
            title="浏览记录"
            is-link
            url="/pages/userhistory/main"
          />
          <van-cell
            title="操作记录"
            is-link
            url="/pages/operationhistory/main"
          />
        </div>
      </div>
      <div class="login" v-if="!isLogin">
        <div class="imgAndSpan">
          <div>
            <img src="../../../static/images/trip.png"/>
          </div>
          <div>
            <span>
              登录用于获取用户的非隐私信息，并用于后续用户查看自己的行为记录
            </span>
          </div>
        </div>
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
    </div>
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
      this.isLogin = this.$store.getters.disc.isLogin ? true : false;
      this.getUserInfo();
    },
    mounted() {
    },
    data() {
      return {
        isLogin: false,
        code: '',
        openid: '',
        userInfo: {}
      };
    },
    components: {},
    methods: {
      ...mapMutations({
        setDisc: 'set_disc'
      }),
      seePhoto(img) {
        let imgArray = [];
        imgArray.push(img);
        wx.previewImage({
          current: img, // 当前显示图片的http链接
          urls: imgArray // 需要预览的图片http链接列表
        })
      },
      getUserInfo() {
        wx.login({
          //获取code
          success: (res) => {
            this.code = res.code;
            console.log("code" + this.code)
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo;
                //console.log("userInfo++++" + JSON.stringify(this.userInfo))
                this.isLogin = true;
                this.$httpWX.post({
                  url: apiurl.addUser + '?code=' + this.code,
                  data: this.userInfo,
                  header: {
                    'Content-type': 'application/json'
                  }
                }).then(data => {
                  let _this = this;
                  wx.getLocation({
                    type: 'wgs84',
                    success(res) {
                      _this.userInfo.latitude = res.latitude
                      _this.userInfo.longitude = res.longitude
                      _this.openid = data.data;
                      _this.userInfo.openid = _this.openid;
                      _this.userInfo.isComment = false;
                      _this.userInfo.isLogin = true;
                      _this.setDisc(_this.userInfo);
                      _this.$httpWX.get({
                        url: apiurl.getUser,
                        data: {
                          openid: _this.openid,
                          language: 'zh'
                        },
                      }).then(userInfo => {
                        _this.userInfo = userInfo.data;
                      })
                    }
                  })
                })
              }
            })
          }
        })
      }
    }
  };

</script>
<style lang='scss' scoped>
  @import "./style";

</style>

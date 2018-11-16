<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <!--<div>-->
      <!--<radio-group class="radio-group" @change="radioChange">-->
        <!--<label class="radio" v-for="(item, index) in items" :key="item.name">-->
          <!--<radio :value="item.name" :checked="item.checked"/>-->
          <!--{{item.value}}-->
        <!--</label>-->
      <!--</radio-group>-->
    <!--</div>-->

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <!--<form class="form-container">-->
      <!--<input type="text" class="form-control" v-model="motto" placeholder="v-model"/>-->
      <!--<input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>-->
    <!--</form>-->
    <!--<a @click="vuexPage" class="counter" open-type="getUserInfo">去往Vuex示例页面</a>-->
    <van-button type="primary" size="normal" round open-type="getUserInfo">获取个人信息</van-button>
    <van-button type="primary" size="normal" round @click="photoPage">打开相机</van-button>
    <van-tabbar active="0" >
      <van-tabbar-item icon="shop" @click="apiPage">POI</van-tabbar-item>
      <van-tabbar-item icon="search" dot @click="suggestionPage">搜索</van-tabbar-item>
      <van-tabbar-item icon="records" info="5" @click="regeocodingPage">逆地址</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20" @click="weatherPage">天气</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      items: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'},
        {name: 'BRA', value: '巴西'},
        {name: 'JPN', value: '日本'},
        {name: 'ENG', value: '英国'},
        {name: 'TUR', value: '法国'}
      ],
      active: 0
    }
  },

  components: {
    card
  },

  methods: {
    onChange (event) {
      console.log(event.detail)
    },
    vuexPage(){
      this.$router.push('../counter/main')
    },
    apiPage(){
      this.$router.push('../search/search')
    },
    suggestionPage(){
      this.$router.push('../suggestion/suggestion')
    },
    regeocodingPage(){
      this.$router.push('../regeocoding/regeocoding')
    },
    weatherPage(){
      this.$router.push('../weather/weather')
    },
    bindViewTap () {
      // const url = '../logs/main'
      // wx.navigateTo({url})
      this.$router.push('../logs/main')
    },
    photoPage(){
      this.$router.push('../photo/photo')
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    radioChange (e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 80px ;
    height: 80px ;
    margin: 20px;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 20px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

  .a {
    color: blue;
    background: aqua;
  }

</style>

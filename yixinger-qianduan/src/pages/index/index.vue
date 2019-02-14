<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
    <!--<div class="userinfo" @click="bindViewTap">-->
      <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>-->
      <!--<div class="userinfo-nickname">-->
        <!--<card :text="userInfo.nickName"></card>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div>-->
    <!--<radio-group class="radio-group" @change="radioChange">-->
    <!--<label class="radio" v-for="(item, index) in items" :key="item.name">-->
    <!--<radio :value="item.name" :checked="item.checked"/>-->
    <!--{{item.value}}-->
    <!--</label>-->
    <!--</radio-group>-->
    <!--</div>-->

    <!--<div class="usermotto">-->
      <!--<div class="user-motto">-->
        <!--<card :text="motto"></card>-->
      <!--</div>-->
    <!--</div>-->

    <!--<form class="form-container">-->
    <!--<input type="text" class="form-control" v-model="motto" placeholder="v-model"/>-->
    <!--<input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>-->
    <!--</form>-->
    <!--<a @click="vuexPage" class="counter" open-type="getUserInfo">去往Vuex示例页面</a>-->
    <!--<van-button type="primary" size="normal" round open-type="getUserInfo" @click="getUserInfo">获取个人信息</van-button>-->
    <!--<van-button type="primary" size="normal" round @click="photoPage">打开相机</van-button>-->
    <!--<van-tabbar active="0">-->
      <!--<van-tabbar-item icon="shop" @click="apiPage">POI</van-tabbar-item>-->
      <!--<van-tabbar-item icon="search" dot @click="suggestionPage">搜索</van-tabbar-item>-->
      <!--<van-tabbar-item icon="records" info="5" @click="regeocodingPage">逆地址</van-tabbar-item>-->
      <!--<van-tabbar-item icon="gold-coin" info="20" @click="weatherPage">天气</van-tabbar-item>-->
    <!--</van-tabbar>-->
  <!--</div>-->
  <div class="index">
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner " :key="index">
          <swiper-item class="swiper-item">
            <image :src="item.image_url" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="channel">
      <div @click="categoryList(item.id)" v-for="(item, index) in channel" :key="index">
        <img :src="item.icon_url" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="brand">
      <div @click="tobrandList" class="head">
        品牌制造商直供
      </div>
      <div class="content">
        <div @click="branddetail(item.id)" v-for="(item, index) in brandList" :key="index">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.floor_price}}元起</p>
          </div>
          <img :src="item.new_pic_url" alt="">
        </div>
      </div>
    </div>
    <div class="newgoods">
      <div @click="goodsList('new')" class="newgoods-top">
        <div class="top">
          <p>新品首发</p>
          <p>查看全部</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="goodsDetail(item.id)" v-for="(item, index) in newGoods" :key="index">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>￥{{item.retail_price}}</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="newgoods hotgoods">
      <div @click="goodsList('hot')" class="newgoods-top">
        <div class="top">
          <p>人气推荐
            <span></span> 好物精选</p>
          <p>查看全部</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="goodsDetail(item.id)" v-for="(item, index) in hotGoods" :key="index">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>￥{{item.retail_price}}</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="topicList">
      <div @click="totopic" class="topicList-top">
        专题精选
        <span class="icon"></span>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="topicdetail(item.id)" v-for="(item, index) in topicList" :key="index">
              <img :src="item.item_pic_url" alt="">
              <div class="btom">
                <div>
                  <p>{{item.title}}</p>
                  <p>{{item.subtitle}}</p>
                </div>
                <div>
                  {{item.price_info}}元起
                </div>
              </div>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="newcategory">
      <div class="list" v-for="(item, index) in newCategoryList" :key="index">
        <div class="head">{{item.name}}好物</div>
        <div class="sublist">
          <div @click="goodsDetail(subitem.id)" v-for="(subitem, subindex) in item.goodsList" :key="subindex">
            <img :src="subitem.list_pic_url" alt="">
            <p>{{subitem.name}}</p>
            <p>￥{{subitem.retail_price}}</p>
          </div>
          <div @click="categoryList(item.id)">
            <div class="last">
              <p>{{item.name}}好物</p>
              <span class="icon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data() {
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
      active: 0,
      code: ""
    }
  },

  components: {
    card
  },

  methods: {
    onChange(event) {
      console.log(event.detail)
    },
    vuexPage() {
      this.$router.push('../counter/main')
    },
    apiPage() {
      this.$router.push('../search/search')
    },
    suggestionPage() {
      this.$router.push('../suggestion/suggestion')
    },
    regeocodingPage() {
      this.$router.push('../regeocoding/regeocoding')
    },
    weatherPage() {
      this.$router.push('../weather/weather')
    },
    bindViewTap() {
      // const url = '../logs/main'
      // wx.navigateTo({url})
      this.$router.push('../logs/main')
    },
    photoPage() {
      this.$router.push('../photo/photo')
    },
    getUserInfo() {
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
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              console.log(res)
              const latitude = res.latitude
              const longitude = res.longitude
              const speed = res.speed
              const accuracy = res.accuracy
              wx.request({ // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
                url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll',
                data: {},
                header: {
                  'Content-Type': 'application/json'
                },
                success(res) {
                  console.log(res.data.result);
                  console.log(res.data.result.addressComponent.city + res.data.result.addressComponent.district);
                },
                fail: function () {
                  // fail
                },
                complete: function () {
                  // complete
                }
              })
            }
          })
        }
      })
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
    }
  },

  created() {
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
    width: 80px;
    height: 80px;
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

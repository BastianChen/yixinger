<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
  <!--<div class="userinfo" @click="bindViewTap">-->
  <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>-->
  <!--<div class="userinfo-nickname">-->
  <!--<card :text="userInfo.nickName"></card>-->
  <!--</div>-->
  <!--</div>-->
  <!--&lt;!&ndash;<div>&ndash;&gt;-->
  <!--&lt;!&ndash;<radio-group class="radio-group" @change="radioChange">&ndash;&gt;-->
  <!--&lt;!&ndash;<label class="radio" v-for="(item, index) in items" :key="item.name">&ndash;&gt;-->
  <!--&lt;!&ndash;<radio :value="item.name" :checked="item.checked"/>&ndash;&gt;-->
  <!--&lt;!&ndash;{{item.value}}&ndash;&gt;-->
  <!--&lt;!&ndash;</label>&ndash;&gt;-->
  <!--&lt;!&ndash;</radio-group>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->

  <!--<div class="usermotto">-->
  <!--<div class="user-motto">-->
  <!--<card :text="motto"></card>-->
  <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash;<form class="form-container">&ndash;&gt;-->
  <!--&lt;!&ndash;<input type="text" class="form-control" v-model="motto" placeholder="v-model"/>&ndash;&gt;-->
  <!--&lt;!&ndash;<input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>&ndash;&gt;-->
  <!--&lt;!&ndash;</form>&ndash;&gt;-->
  <!--&lt;!&ndash;<a @click="vuexPage" class="counter" open-type="getUserInfo">去往Vuex示例页面</a>&ndash;&gt;-->
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
        <input type="text" placeholder="搜索">
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true"
              duration="500">
        <block v-for="(item, index) in banner " :key="index">
          <swiper-item class="swiper-item">
            <image :src="item.image_url" class="slide-image"/>
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
        code: '',
        cityName: '',
        banner: [],// 轮播数据数组
      }
    },

    components: {},
    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo();
      this.getLocation();
    },
    mounted() {
      this.getWeatherData();
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
      getLocation() {
        let _this = this;
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
                console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
                if (res.data.result.addressComponent.district != '') {
                  _this.cityName = res.data.result.addressComponent.district;
                } else {
                  _this.cityName = res.data.result.addressComponent.city;
                }
              },
              fail: function () {
                // fail
                _this.cityName = '杭州市';
              },
              complete: function () {
                // complete
              }
            })
          }
        })
      },
      getWeatherData() {
        wx.request({ // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
          url: 'https://api.map.baidu.com/telematics/v3/weather?coord_type=gcj02&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&location=120.20523%2C30.25727',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success(res) {
            console.log(res.data.results[0].index);
            // console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
            // if (res.data.result.addressComponent.district!=''){
            //   _this.cityName =res.data.result.addressComponent.district;
            // }else {
            //   _this.cityName = res.data.result.addressComponent.city;
            // }
          },
          fail: function () {
            // fail
            // _this.cityName = '杭州市';
          },
          complete: function () {
            // complete
          }
        })
        // var _this = this;
        // var BMap = new BMap.Map('allmap');
        // // var BMap = new bmap.BMapWX({
        // //   ak: 'FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y'
        // // });
        // var fail = function (data) {
        //   console.log('fail!!!!')
        // };
        // var success = function (data) {
        //   console.log(data)
        //   console.log('success!!!');
        //   var weatherData = data.currentWeather[0];
        //   weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
        //   _this.setData({
        //     weatherData: weatherData
        //   });
        //   _this.cityName = weatherData.currentCity;
        // }
        // BMap.weather({
        //   fail: fail,
        //   success: success
        // });
      },
      getBannerData() {

      },
      clickHandle(msg, ev) {
        console.log('clickHandle:', msg, ev)
      },
      radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.target.value)
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
  /*.index {*/
  /*width: 100%;*/
  /*overflow: hidden;*/
  /*position: relative;*/

  /*.search {*/
  /*width: 100%;*/
  /*box-sizing: border-box;*/
  /*padding: 0 25 rpx 0 10 rpx;*/
  /*position: fixed;*/
  /*top: 0;*/
  /*z-index: 99;*/
  /*height: 80 rpx;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*background: #fff;*/

  /*div:nth-child(1) {*/
  /*width: 115 rpx;*/
  /*text-align: center;*/
  /*overflow: hidden;*/
  /*white-space: nowrap;*/
  /*text-overflow: ellipsis;*/
  /*font-size: 20 rpx;*/
  /*padding-right: 15 rpx;*/
  /*}*/

  /*div:nth-child(2) {*/
  /*flex: 1;*/
  /*position: relative;*/

  /*input {*/
  /*width: 100%;*/
  /*height: 56 rpx;*/
  /*border-radius: 8 rpx;*/
  /*background: #ededed;*/
  /*box-sizing: border-box;*/
  /*padding-left: 40 rpx;*/
  /*}*/

  /*.icon {*/
  /*position: absolute;*/
  /*top: 15 rpx;*/
  /*left: 10 rpx;*/
  /*background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png') center no-repeat;*/
  /*background-size: 100%;*/
  /*width: 28 rpx;*/
  /*height: 28 rpx;*/
  /*margin-right: 10 rpx;*/
  /*}*/
  /*}*/
  /*}*/

  /*.swiper {*/
  /*width: 100%;*/
  /*height: 417 rpx;*/
  /*margin-top: 80 rpx;*/

  /*.swiper-container {*/
  /*width: 100%;*/
  /*height: 100%;*/

  /*.swiper-item {*/
  /*width: 100%;*/
  /*height: 100%;*/

  /*.slide-image {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*.channel {*/
  /*display: flex;*/
  /*padding: 20 rpx 0;*/
  /*background: #ffffff;*/

  /*div {*/
  /*width: 25%;*/
  /*text-align: center;*/

  /*img {*/
  /*height: 58 rpx;*/
  /*width: 58 rpx;*/
  /*display: inline-block;*/
  /*}*/
  /*}*/
  /*}*/

  /*.brand {*/
  /*width: 100%;*/
  /*margin-top: 20 rpx;*/
  /*background: #ffffff;*/

  /*.head {*/
  /*text-align: center;*/
  /*padding: 40 rpx 0;*/
  /*}*/

  /*.content {*/
  /*width: 730 rpx;*/
  /*margin: 0 auto;*/
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*flex-wrap: wrap;*/

  /*div {*/
  /*width: 360 rpx;*/
  /*height: 235 rpx;*/
  /*margin-bottom: 10 rpx;*/
  /*position: relative;*/

  /*div {*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*padding: 10 rpx;*/

  /*p:nth-child(2) {*/
  /*font-size: 24 rpx;*/
  /*}*/
  /*}*/

  /*img {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*.newgoods {*/
  /*.newgoods-top {*/
  /*margin-top: 20 rpx;*/
  /*height: 260 rpx;*/
  /*width: 100%;*/
  /*background: url('../../../static/images/bgnew.png') no-repeat;*/
  /*background-size: 100% 100%;*/
  /*text-align: center;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/

  /*.top {*/
  /*p {*/
  /*color: #8c9bae;*/
  /*font-size: 32 rpx;*/
  /*}*/

  /*p:nth-child(2) {*/
  /*width: 180 rpx;*/
  /*height: 50 rpx;*/
  /*line-height: 50 rpx;*/
  /*margin: 27 rpx auto 0 auto;*/
  /*font-size: 22 rpx;*/
  /*background: #d8e4f0;*/
  /*}*/
  /*}*/
  /*}*/

  /*.list {*/
  /*margin-top: 20 rpx;*/
  /*background: #fff;*/
  /*padding-bottom: 10 rpx;*/

  /*ul {*/
  /*.scroll-view {*/
  /*width: 100%; // height: 470rpx; // display: flex;*/
  /*// flex-wrap: nowrap;*/
  /*white-space: nowrap;*/

  /*li {*/
  /*width: 280 rpx;*/
  /*height: 416 rpx;*/
  /*margin: 5 rpx 0 5 rpx 25 rpx;*/
  /*display: inline-block;*/

  /*img {*/
  /*width: 280 rpx;*/
  /*height: 280 rpx;*/
  /*}*/

  /*p:nth-child(2) {*/
  /*font-size: 30 rpx;*/
  /*font-weight: bold;*/
  /*}*/

  /*p:nth-child(3) {*/
  /*color: #8a8a8a;*/
  /*font-size: 24 rpx;*/
  /*}*/

  /*p:nth-child(4) {*/
  /*color: #9c3232;*/
  /*font-size: 24 rpx;*/
  /*}*/

  /*p {*/
  /*width: 94%;*/
  /*overflow: hidden;*/
  /*white-space: nowrap;*/
  /*text-overflow: ellipsis;*/
  /*margin-top: 8 rpx;*/
  /*text-indent: 1em;*/
  /*}*/
  /*}*/

  /*li:nth-child(n+2) {*/
  /*border-left: 1 rpx solid #f4f4f4;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*.hotgoods {*/
  /*.newgoods-top {*/
  /*background: url('../../../static/images/bgtopic.png') no-repeat;*/
  /*background-size: 100% 100%;*/

  /*.top {*/
  /*p {*/
  /*color: #b1a279;*/
  /*font-size: 32 rpx;*/
  /*vertical-align: middle;*/
  /*}*/

  /*p:nth-child(1) {*/
  /*span {*/
  /*width: 4 rpx;*/
  /*height: 4 rpx;*/
  /*font-size: 14 rpx;*/
  /*display: inline-block;*/
  /*vertical-align: middle;*/
  /*background: #b1a279;*/
  /*}*/
  /*}*/

  /*p:nth-child(2) {*/
  /*background: #f4e9cb;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*.topicList {*/
  /*margin-top: 20 rpx;*/
  /*background: #fff;*/

  /*.topicList-top {*/
  /*text-align: center;*/
  /*padding: 36 rpx;*/
  /*vertical-align: middle;*/

  /*.icon {*/
  /*display: inline-block;*/
  /*width: 32 rpx;*/
  /*height: 32 rpx;*/
  /*margin-left: 5 rpx;*/
  /*background: url('../../../static/images/right.png') no-repeat;*/
  /*background-size: 100% 100%;*/
  /*vertical-align: middle;*/
  /*}*/
  /*}*/

  /*.list {*/
  /*.scroll-view {*/
  /*white-space: nowrap;*/

  /*li {*/
  /*display: inline-block;*/
  /*width: 575 rpx;*/
  /*margin-left: 25 rpx;*/

  /*img {*/
  /*display: block;*/
  /*width: 575 rpx;*/
  /*height: 325 rpx;*/
  /*border-radius: 10 rpx;*/
  /*}*/

  /*.btom {*/
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*margin-bottom: 42 rpx;*/
  /*width: 100%;*/

  /*div:nth-child(1) {*/
  /*width: 90%;*/

  /*p {*/
  /*margin-top: 8 rpx;*/
  /*}*/

  /*p:nth-child(1) {*/
  /*font-size: 30 rpx;*/
  /*font-weight: bold;*/
  /*}*/

  /*p:nth-child(2) {*/
  /*width: 90%;*/
  /*color: #8a8a8a;*/
  /*font-size: 24 rpx;*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*white-space: nowrap;*/
  /*}*/
  /*}*/

  /*div:nth-child(2) {*/
  /*margin-top: 8 rpx;*/
  /*color: #9c3232;*/
  /*font-size: 24 rpx;*/
  /*}*/
  /*}*/
  /*}*/

  /*li:last-child {*/
  /*margin-right: 25 rpx;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*.newcategory {*/
  /*margin-top: 20 rpx;*/
  /*padding: 0 10 rpx 25 rpx 10 rpx;*/

  /*.head {*/
  /*padding: 25 rpx 0;*/
  /*text-align: center;*/
  /*}*/

  /*.sublist {*/
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: space-between;*/
  /*width: 730 rpx;*/
  /*margin: 0 auto;*/

  /*div {*/
  /*width: 360 rpx;*/
  /*background: #fff;*/
  /*margin-bottom: 10 rpx;*/
  /*padding-bottom: 10 rpx;*/

  /*img {*/
  /*display: block;*/
  /*width: 302 rpx;*/
  /*height: 302 rpx;*/
  /*margin: 0 auto;*/
  /*}*/

  /*p {*/
  /*margin-bottom: 5 rpx;*/
  /*text-indent: 1em;*/
  /*}*/

  /*p:nth-child(2) {*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*white-space: nowrap;*/
  /*width: 98%;*/
  /*}*/

  /*p:nth-child(3) {*/
  /*color: #9c3232;*/
  /*}*/
  /*}*/

  /*.last {*/
  /*display: block;*/
  /*width: 302 rpx;*/
  /*height: 302 rpx;*/
  /*margin: 0 auto;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  /*flex-wrap: wrap;*/

  /*p {*/
  /*height: 33 rpx;*/
  /*width: 100%;*/
  /*line-height: 33 rpx;*/
  /*color: #333;*/
  /*font-size: 33 rpx;*/
  /*text-align: center;*/
  /*}*/

  /*.icon {*/
  /*display: inline-block;*/
  /*width: 70 rpx;*/
  /*height: 70 rpx;*/
  /*background: url('../../../static/images/rightbig.png') no-repeat;*/
  /*background-size: 100% 100%;*/
  /*margin-top: 60 rpx;*/
  /*}*/
  /*}*/

  /*div:nth-child(2n) {*/
  /*margin-left: 10 rpx;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*.userinfo {*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*}*/

  /*.userinfo-avatar {*/
  /*width: 80px;*/
  /*height: 80px;*/
  /*margin: 20px;*/
  /*border-radius: 50%;*/
  /*}*/

  /*.userinfo-nickname {*/
  /*color: #aaa;*/
  /*}*/

  /*.usermotto {*/
  /*margin-top: 20px;*/
  /*}*/

  /*.form-control {*/
  /*display: block;*/
  /*padding: 0 12px;*/
  /*margin-bottom: 5px;*/
  /*border: 1px solid #ccc;*/
  /*}*/

  /*.counter {*/
  /*display: inline-block;*/
  /*margin: 10px auto;*/
  /*padding: 5px 10px;*/
  /*color: blue;*/
  /*border: 1px solid blue;*/
  /*}*/

  /*.a {*/
  /*color: blue;*/
  /*background: aqua;*/
  /*}*/
</style>

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
      <!--<van-button type="primary" size="normal" round open-type="getUserInfo" @click="getUserInfo">获取个人信息</van-button>-->
      <span class="dingwei"></span>
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toMappage">{{temperature}}
      </div>
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
            <image :src="item.image" class="slide-image" @click="swipclick(item.uid)"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!--<div class="channel">-->
      <!--<div @click="categoryList(item.id)" v-for="(item, index) in banner" :key="index">-->
        <!--<img :src="item.image" alt="">-->
        <!--<p>{{item.name}}</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="brand">-->
      <!--<div @click="tobrandList" class="head">-->
        <!--附近景点-->
      <!--</div>-->
      <!--<div class="content">-->
        <!--<div @click="branddetail(item.id)" v-for="(item, index) in banner" :key="index">-->
          <!--<div>-->
            <!--<p>{{item.name}}</p>-->
            <!--<p>{{item.address}}</p>-->
          <!--</div>-->
          <!--<img :src="item.image" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="newgoods">-->
    <!--<div @click="goodsList('new')" class="newgoods-top">-->
    <!--<div class="top">-->
    <!--<p>附近景点</p>-->
    <!--<p>查看全部</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="list">-->
    <!--<ul>-->
    <!--<scroll-view class="scroll-view" :scroll-x="true">-->
    <!--<li @click="goodsDetail(item.id)" v-for="(item, index) in sceneryData" :key="index">-->
    <!--<img :src="item.image">-->
    <!--<div class="btom">-->
    <!--<div>-->
    <!--<p>{{item.name}}</p>-->
    <!--<p>{{item.address}}</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--</scroll-view>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="newgoods hotgoods">-->
    <!--<div @click="goodsList('hot')" class="newgoods-top">-->
    <!--<div class="top">-->
    <!--<p>附近餐馆-->
    <!--<span>·</span> 人气推荐</p>-->
    <!--<p>查看全部</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="list">-->
    <!--<ul>-->
    <!--<scroll-view class="scroll-view" :scroll-x="true">-->
    <!--<li @click="goodsDetail(item.id)" v-for="(item, index) in restaurantData" :key="index">-->
    <!--<img :src="item.image" alt="">-->
    <!--<div class="btom">-->
    <!--<div>-->
    <!--<p>{{item.name}}</p>-->
    <!--<p>{{item.address}}</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--</scroll-view>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <van-dialog id="van-dialog" style="text-align: center"/>
    <div class="topicList">
      <div @click="totopic" class="topicList-top">
        附近景点
        <span class="icon"></span>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="topicdetail(item.id)" v-for="(item, index) in sceneryData" :key="index">
              <img :src="item.image" alt="">
              <div class="btom">
                <div>
                  <p>{{item.name}}</p>
                  <p>{{item.address}}</p>
                </div>
              </div>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="topicList">
      <div @click="totopic" class="topicList-top">
        附近餐馆
        <span class="icon"></span>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="topicdetail(item.id)" v-for="(item, index) in restaurantData" :key="index">
              <img :src="item.image" alt="">
              <div class="btom">
                <div>
                  <p>{{item.name}}</p>
                  <p>{{item.address}}</p>
                </div>
              </div>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <!--<div class="newcategory">-->
    <!--<div class="list" v-for="(item, index) in banner" :key="index">-->
    <!--<div class="head">{{item.name}}好物</div>-->
    <!--<div class="sublist">-->
    <!--<div @click="goodsDetail(subitem.id)" v-for="(subitem, subindex) in item.goodsList" :key="subindex">-->
    <!--<img :src="subitem.list_pic_url" alt="">-->
    <!--<p>{{subitem.name}}</p>-->
    <!--<p>￥{{subitem.retail_price}}</p>-->
    <!--</div>-->
    <!--<div @click="categoryList(item.id)">-->
    <!--<div class="last">-->
    <!--<p>{{item.name}}好物</p>-->
    <!--<span class="icon"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import {apiurl} from "@/service/api.js";
import {mapMutations} from 'vuex';
import Dialog from '../../../static/vant-weapp/dist/dialog/dialog.js';

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {
        avatarUrl: '',
        city: '',
        country: '',
        gender: 1,
        language: '',
        nickName: '',
        province: '',
        location: ''
      },
      active: 0,
      code: '',
      cityName: '',
      banner: [],// 轮播数据数组
      sceneryData: [],// 附近景点数组
      restaurantData: [],// 附近餐馆数组
      allSceneryData: [],// 附近景点数组
      allRestaurantData: [],// 附近餐馆数组
      temperature: '',
      dayPictureUrl: '',
      uidListForType1: '',// 景点uidList
      uidListForType2: '',// 餐馆uidList
      latitudeList: '',// 经度list
      longitudeList: '',// 维度list
      type: '',// 游玩地点类型
      uids: '',// 用于轮播
      isLogin: false,// 判断是否已经授权登录
      vuexInfo:{
        location: ''// 现在所在地
      }
    }
  },
  components: {},
  onLoad() {
    setTimeout(() => {
      if (!this.isLogin) {
        Dialog.alert({
          title: '温馨提示',
          message: '欢迎使用易行ER，请您先登录！'
        }).then(() => {
          wx.switchTab({
            url: '../../pages/home/main'
          });
        });
      }
    }, 1300)
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    this.getLocation();
    this.getIndexData();
  },
  mounted() {

  },
  methods: {
    ...mapMutations({
      setDisc: 'set_disc'
    }),
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
          // this.code = res.code;
          // console.log(res.code) //返回code
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              console.log(res)
              console.log(this.userInfo)
              this.isLogin = true;
              //this.setDisc(this.userInfo);
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
          // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
          wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y' +
            '&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll',
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success(res) {
              console.log(res.data.result);
              console.log("地点：" + res.data.result.addressComponent.city + res.data.result.addressComponent.district);
              // _this.vuexInfo.location = res.data.result.addressComponent.country;
              // _this.setDisc(_this.vuexInfo);
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
    getIndexData() {
      let _this = this;
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          console.log(res)
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          // 获取天气信息
          wx.request({
            url: 'https://api.map.baidu.com/telematics/v3/weather?coord_type=gcj02&output=json' +
            '&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&location=' + longitude + '%2C' + latitude,
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success(res) {
              console.log(res.data.results[0].weather_data[0].date);
              _this.temperature = res.data.results[0].weather_data[0].date;
              //console.log("温度"+_this.temperature.substring(_this.temperature.length - 5, _this.temperature.length - 4))
              if (_this.temperature.substring(_this.temperature.length - 5, _this.temperature.length - 4) == '：') {
                _this.temperature = _this.temperature.substring(_this.temperature.length - 4, _this.temperature.length - 1);
              } else {
                _this.temperature = _this.temperature.substring(_this.temperature.length - 3, _this.temperature.length - 1);
              }
              _this.dayPictureUrl = res.data.results[0].weather_data[0].dayPictureUrl;
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
          // 获取周边景点信息
          wx.request({
            url: 'https://api.map.baidu.com/place/v2/search?query=%E6%99%AF%E7%82%B9&scope=1&filter=&coord_type=2' +
            '&page_size=10&page_num=0&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&radius=2000' +
            '&ret_coordtype=gcj02ll&location=' + latitude + '%2C' + longitude,
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success(res) {
              let results = res.data.results;
              _this.uidListForType1 == '';
              _this.latitudeList = '';
              _this.longitudeList = '';
              for (let i = 0; i < results.length; i++) {
                if (_this.uidListForType1 == '') {
                  _this.uidListForType1 = results[i].uid;
                  _this.latitudeList = results[i].location.lat;
                  _this.longitudeList = results[i].location.lng;
                  _this.uids = results[i].uid;
                } else {
                  _this.uidListForType1 = _this.uidListForType1 + ';' + results[i].uid;
                  _this.latitudeList = _this.latitudeList + ';' + results[i].location.lat;
                  _this.longitudeList = _this.longitudeList + ';' + results[i].location.lng;
                  _this.uids = _this.uids + ';' + results[i].uid;
                }
              }
              _this.$httpWX.post({
                url: apiurl.addPlace,
                data: {
                  uidList: _this.uidListForType1,
                  latitudeList: _this.latitudeList,
                  longitudeList: _this.longitudeList,
                  type: 1
                },
              }).then(res => {
                // 获取周边餐馆信息
                wx.request({
                  url: 'https://api.map.baidu.com/place/v2/search?query=%E7%BE%8E%E9%A3%9F&scope=1&filter=&coord_type=2' +
                  '&page_size=10&page_num=0&output=json&ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y&sn=&timestamp=&radius=2000' +
                  '&ret_coordtype=gcj02ll&location=' + latitude + '%2C' + longitude,
                  data: {},
                  header: {
                    'Content-Type': 'application/json'
                  },
                  success(res) {
                    let results = res.data.results;
                    _this.uidListForType2 == '';
                    _this.latitudeList = '';
                    _this.longitudeList = '';
                    for (let i = 0; i < results.length; i++) {
                      if (_this.uidListForType2 == '') {
                        _this.uidListForType2 = results[i].uid;
                        _this.latitudeList = results[i].location.lat;
                        _this.longitudeList = results[i].location.lng;
                        _this.uids = _this.uids + ';' + results[i].uid;
                      } else {
                        _this.uidListForType2 = _this.uidListForType2 + ';' + results[i].uid;
                        _this.latitudeList = _this.latitudeList + ';' + results[i].location.lat;
                        _this.longitudeList = _this.longitudeList + ';' + results[i].location.lng;
                        _this.uids = _this.uids + ';' + results[i].uid;
                      }
                    }
                    _this.$httpWX.post({
                      url: apiurl.addPlace,
                      data: {
                        uidList: _this.uidListForType2,
                        latitudeList: _this.latitudeList,
                        longitudeList: _this.longitudeList,
                        type: 2
                      },
                    }).then(res => {
                      _this.getBannerData();
                      _this.getSceneryData();
                      _this.getRestaurantData();
                    })
                  },
                  fail: function () {
                    // fail
                  },
                  complete: function () {
                    // complete
                  }
                })
              })
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
    },
    getBannerData() {
      this.$httpWX.get({
        url: apiurl.getPlaceListByUids,
        data: {
          uidList: this.uids
        },
      }).then(res => {
        for (let i = 0; i < 6; i++) {
          this.banner.push(res.data[i]);
        }
      })
    },
    getSceneryData() {
      this.$httpWX.get({
        url: apiurl.getPlaceListByUids,
        data: {
          uidList: this.uidListForType1
        },
      }).then(res => {
        this.allSceneryData = res.data;
        if (res.data.length <= 6) {
          for (let i = 0; i < res.data.length; i++) {
            this.sceneryData.push(res.data[i]);
          }
        } else {
          for (let i = 0; i < 6; i++) {
            this.sceneryData.push(res.data[i]);
          }
        }
      })
    },
    getRestaurantData() {
      this.$httpWX.get({
        url: apiurl.getPlaceListByUids,
        data: {
          uidList: this.uidListForType2
        },
      }).then(res => {
        this.allRestaurantData = res.data;
        if (res.data.length <= 6) {
          for (let i = 0; i < res.data.length; i++) {
            this.restaurantData.push(res.data[i]);
          }
        } else {
          for (let i = 0; i < 6; i++) {
            this.restaurantData.push(res.data[i]);
          }
        }
      })
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
    },
    swipclick(uid) {
      console.log("uid" + uid);
      /**此处对接getPlaceByUid接口*/
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

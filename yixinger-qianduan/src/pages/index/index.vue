<template>
  <div class="index">
    <div class="search">
      <span class="dingwei"></span>
      <div>{{cityName}}</div>
      <div>{{temperature}}</div>
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
    <van-dialog id="van-dialog" style="text-align: center"/>
    <div class="topicList">
      <div @click="totopic(0)" class="topicList-top">
        附近景点
        <span class="icon"></span>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="swipclick(item.uid)" v-for="(item, index) in sceneryData" :key="index">
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
      <div @click="totopic(1)" class="topicList-top">
        附近餐馆
        <span class="icon"></span>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="swipclick(item.uid)" v-for="(item, index) in restaurantData" :key="index">
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
        cityName: '正在定位...',
        banner: [],// 轮播数据数组
        sceneryData: [],// 附近景点数组
        restaurantData: [],// 附近餐馆数组
        allSceneryData: [],// 附近景点数组
        allRestaurantData: [],// 附近餐馆数组
        temperature: '',
        dayPictureUrl: '',
        uidListForType1: '',// 景点uidList
        uidListForType2: '',// 餐馆uidList
        latitudeList: '',// 维度list
        longitudeList: '',// 经度list
        type: '',// 游玩地点类型
        uids: '',// 用于轮播
        isLogin: false,// 判断是否已经授权登录
        longitude: '',//所在地经度
        latitude: '',// 所在地维度
        vuexInfo: {
          location: ''// 现在所在地
        }
      }
    },
    components: {},
    onLoad() {
    },
    onPullDownRefresh() {
      // wx.showNavigationBarLoading();
      this.uidListForType1 = '';
      this.uidListForType2 = '';
      this.latitudeList = '';
      this.longitudeList = '';
      this.uids = '';
      this.getLocation();
      this.getIndexData();
      // wx.stopPullDownRefresh;
      // wx.hideNavigationBarLoading();
    },
    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo();
      this.getLocation();
      this.getIndexData();
      this.isLogin = this.$store.getters.disc.isLogin ? true : false;
    },
    mounted() {
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
      }, 1500)
    },
    methods: {
      ...mapMutations({
        setDisc: 'set_disc'
      }),
      toSearch() {
        wx.navigateTo({
          url: '../suggestion/suggestion'
        });
      },
      getUserInfo() {
        wx.login({
          //获取code
          success: (res) => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
                console.log(res)
                console.log(this.userInfo)
                this.isLogin = true;
              }
            })
          }
        })
      },
      getLocation() {
        let _this = this;
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            _this.latitude = res.latitude
            _this.longitude = res.longitude
            // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
            wx.request({
              url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y' +
              '&location=' + _this.latitude + ',' + _this.longitude + '&output=json&coordtype=wgs84ll',
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
      getIndexData() {
        let _this = this;
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            const latitude = res.latitude
            const longitude = res.longitude
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
                        _this.banner = [];
                        _this.sceneryData = [];
                        _this.restaurantData = [];
                        _this.allRestaurantData = [];
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
            uidList: this.uids,
            // longitude: this.longitude,
            // latitude: this.latitude
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
      // clickHandle(msg, ev) {
      //   console.log('clickHandle:', msg, ev)
      // },
      // radioChange(e) {
      //   console.log('radio发生change事件，携带value值为：', e.target.value)
      // },
      swipclick(uid) {
        this.$router.push({
          path: `../placedetail/main`,
          query: {
            uid: uid,
            longitude: this.longitude,
            latitude: this.latitude,
          }
        });
      },
      totopic(type) {
        this.$router.push({
          path: `../nearby/main`,
          query: {
            uidListForType1: this.uidListForType1,
            uidListForType2: this.uidListForType2,
            longitude: this.longitude,
            latitude: this.latitude,
            type: type
          }
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

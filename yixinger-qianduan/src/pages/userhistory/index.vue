<template>
  <div class="index">
    <van-tabs :active="active" @change="onChange" sticky animated swipeable color="#00BFFF">
      <van-tab title="景点">
        <div class="firstDiv" v-if="isSceneryDataEmpty">
          <div>
            <img src="../../../static/images/noContent.png"/>
          </div>
          <div class="title">
            <span>
              暂无推荐景点
            </span>
          </div>
        </div>
        <div class="secondDiv" v-for="(year, key) in yearsSceneryData" :key="key" v-if="!isSceneryDataEmpty">
          <van-row>
            <van-col span="8" offset="1">
              {{year}}年
            </van-col>
          </van-row>
          <div v-for="(item, index) in sceneryData" :key="index">
            <div v-if="item.year==year">
              <div class="rowBottom">
                <van-row>
                  <van-col span="4" offset="1">
                    <div>
                      <span v-if="item.dateType==1">
                        今天
                      </span>
                      <span v-if="item.dateType==2">
                        昨天
                      </span>
                      <span v-if="item.dateType==3">
                        {{item.day}}
                      </span>
                      <span v-if="item.dateType==4||item.dateType==5||item.dateType==6">
                         &nbsp;
                      </span>
                      <span style="font-size: 14px;margin-left:-7px;" v-if="item.dateType==3">
                        {{item.month}}
                      </span>
                    </div>
                  </van-col>
                  <van-col span="18" @longpress="clickLong(item.id,1)" @click="seeDetails(item)">
                    <van-card
                      :desc="item.address"
                      :title="item.placeName"
                      :thumb="item.image"
                      :tag="item.showtag"
                      centered lazy-load
                    >
                    </van-card>
                  </van-col>
                </van-row>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="餐馆">
        <div class="firstDiv" v-if="isRestaurantDataEmpty">
          <div>
            <img src="../../../static/images/noContent.png"/>
          </div>
          <div class="title">
            <span>
              暂无推荐餐馆
            </span>
          </div>
        </div>
        <div class="secondDiv" v-for="(year, key) in yearsRestaurantData" :key="key" v-if="!isRestaurantDataEmpty">
          <van-row>
            <van-col span="8" offset="1">
              {{year}}年
            </van-col>
          </van-row>
          <div v-for="(item, index) in restaurantData" :key="index" class="secondDiv">
            <div v-if="item.year==year">
              <div class="rowBottom">
                <van-row>
                  <van-col span="4" offset="1">
                    <div>
                    <span v-if="item.dateType==1">
                    今天
                  </span>
                      <span v-if="item.dateType==2">
                    昨天
                  </span>
                      <span v-if="item.dateType==3">
                    {{item.day}}
                  </span>
                      <span v-if="item.dateType==4||item.dateType==5||item.dateType==6">
                    &nbsp;
                  </span>
                      <span style="font-size: 14px;margin-left:-7px;" v-if="item.dateType==3">
                    {{item.month}}
                  </span>
                    </div>
                  </van-col>
                  <van-col span="18" @longpress="clickLong(item.id,2)" @click="seeDetails(item)">
                    <van-card
                      :desc="item.address"
                      :title="item.placeName"
                      :thumb="item.image"
                      :tag="item.showtag"
                      :price="item.price"
                      centered lazy-load
                    >
                    </van-card>
                  </van-col>
                </van-row>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-dialog id="van-dialog" style="text-align: center"/>
  </div>
</template>

<script>
  import Dialog from '../../../static/vant-weapp/dist/dialog/dialog.js';
  import {apiurl} from "@/service/api.js";

  export default {
    data() {
      return {
        active: 0,
        imageUrl: '',
        userInfo: {},
        restaurantData: [],
        sceneryData: [],
        yearsRestaurantData: [],
        yearsSceneryData: [],
        district: '',// 直辖市
        city: '',// 城市名
        isRestaurantDataEmpty: false,
        isSceneryDataEmpty: false,
      }
    },
    onShow() {
      this.userInfo = this.$store.getters.disc;
      this.restaurantData = [];
      this.sceneryData = [];
      this.yearsRestaurantData = [];
      this.yearsSceneryData = [];
      this.getUserHistoryByUserId();
    },
    onUnload() {
      this.restaurantData = [];
      this.sceneryData = [];
      this.yearsRestaurantData = [];
      this.yearsSceneryData = [];
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
      this.getUserHistoryByUserId();
    },
    methods: {
      clickLong(id, type) {
        Dialog.confirm({
          title: '温馨提示',
          message: '您确定要删除该条记录？'
        }).then(() => {
          this.$httpWX.post({
            url: apiurl.deleteUserHistory,
            data: {
              idList: id,
              userId: this.userInfo.openid
            },
          }).then(res => {
            this.getUserHistoryByUserId();
            wx.showToast({
              title: res.message,
              icon: 'none'
            });
            if (type == 1) {
              this.active = 0;
            } else {
              this.active = 1;
            }
          })
        }).catch(() => {
          console.log("取消")
        });
      },
      onChange(index) {
        if (index.target.index == 0) {
          this.active = 0;
        } else if (index.target.index == 1) {
          this.active = 1;
        }
      },
      seeDetails(data) {
        this.$router.push({
          path: `../placedetail/main`,
          query: {uid: data.placeId, longitude: this.userInfo.longitude, latitude: this.userInfo.latitude}
        });
      },
      getUserHistoryByUserId() {
        this.restaurantData = [];
        this.sceneryData = [];
        this.yearsRestaurantData = [];
        this.yearsSceneryData = [];
        this.$httpWX.get({
          url: apiurl.getUserHistoryByUserId,
          data: {
            longitude: this.userInfo.longitude,
            latitude: this.userInfo.latitude,
            userId: this.userInfo.openid
          },
        }).then(res => {
          let placeData = res.data;
          let myDate = new Date();
          let isTodayFirstOfScenery = false;
          let isYesterdayFirstOfScenery = false;
          let isTodayFirstOfRestaurant = false;
          let isYesterdayFirstOfRestaurant = false;
          for (let i = 0; i < placeData.length; i++) {
            let dateArray = placeData[i].readDate.split('-');
            let isRepeated = false;
            if (placeData[i].placeName.length > 10) {
              placeData[i].placeName = placeData[i].placeName.substring(0, 10) + '...';
            }
            if (placeData[i].address.length > 10) {
              placeData[i].address = placeData[i].address.substring(0, 10) + '...';
            }
            if (!placeData[i].price || placeData[i].price == 0 || placeData[i].price == '' || placeData[i].price == '暂无' || placeData[i].price == 'false') {
              placeData[i].price = null;
            }
            // 设置时间
            placeData[i].year = dateArray[0];
            placeData[i].month = dateArray[1].substring(1, 2) + '月';
            placeData[i].day = dateArray[2].split(' ')[0];
            if ((myDate.getFullYear() == dateArray[0]) && ((myDate.getMonth() + 1) == dateArray[1].substring(1, 2))
              && (myDate.getDate() == dateArray[2].split(' ')[0])) {
              if (placeData[i].type == 1) {
                if (!isTodayFirstOfScenery) {
                  placeData[i].dateType = 1;// 时间为今天
                  isTodayFirstOfScenery = true;
                } else {
                  placeData[i].dateType = 4;// 时间为今天,但不是第一条
                }
              } else {
                if (!isTodayFirstOfRestaurant) {
                  placeData[i].dateType = 1;// 时间为今天
                  isTodayFirstOfRestaurant = true;
                } else {
                  placeData[i].dateType = 4;// 时间为今天,但不是第一条
                }
              }
            } else if ((myDate.getFullYear() == dateArray[0]) && ((myDate.getMonth() + 1) == dateArray[1].substring(1, 2))
              && (myDate.getDate() - 1 == dateArray[2].split(' ')[0])) {
              if (placeData[i].type == 1) {
                if (!isYesterdayFirstOfScenery) {
                  placeData[i].dateType = 2;// 时间为昨天
                  isYesterdayFirstOfScenery = true;
                } else {
                  placeData[i].dateType = 5;// 时间为昨天,但不是第一条
                }
              } else {
                if (!isYesterdayFirstOfRestaurant) {
                  placeData[i].dateType = 2;// 时间为昨天
                  isYesterdayFirstOfRestaurant = true;
                } else {
                  placeData[i].dateType = 5;// 时间为昨天,但不是第一条
                }
              }
            } else {
              let isFirst = false;
              for (let j = 0; j < i; j++) {
                if (placeData[i].year == placeData[j].year &&
                  placeData[i].month == placeData[j].month &&
                  placeData[i].day == placeData[j].day) {
                  placeData[i].dateType = 6;// 正常时间,但不是第一条
                  isFirst = true;
                  break;
                }
              }
              if (!isFirst) {
                placeData[i].dateType = 3;// 正常时间
              }
            }
            if (placeData[i].type == 1) {
              if (this.yearsSceneryData.length == 0) {
                this.yearsSceneryData.push(dateArray[0]);
                isRepeated = false;
              } else {
                for (let j = 0; j < this.yearsSceneryData.length; j++) {
                  if (this.yearsSceneryData[j] == dateArray[0]) {
                    isRepeated = true;
                    break;
                  }
                }
                if (!isRepeated) {
                  this.yearsSceneryData.push(dateArray[0]);
                }
              }
              this.sceneryData.push(placeData[i]);
            } else {
              if (this.yearsRestaurantData.length == 0) {
                this.yearsRestaurantData.push(dateArray[0]);
                isRepeated = false;
              } else {
                for (let j = 0; j < this.yearsRestaurantData.length; j++) {
                  if (this.yearsRestaurantData[j] == dateArray[0]) {
                    isRepeated = true;
                    break;
                  }
                }
                if (!isRepeated) {
                  this.yearsRestaurantData.push(dateArray[0]);
                }
              }
              this.restaurantData.push(placeData[i]);
            }
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

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
        <div v-for="(item, index) in sceneryData" :key="index" class="secondDiv" v-if="!isSceneryDataEmpty"
             @click="seeDetail(item)">
          <div>
            <div class="rowBottom">
              <van-row>
                <van-col span="4" offset="1">
                  <img :src="item.image"/>
                </van-col>
                <van-col span="15" offset="4">
                  <div class="secondCol">
                    <div class="nameDiv">
                      {{item.placeName}}
                    </div>
                    <div class="distanceAndAddressDiv">
                      {{item.distance}}|{{item.address}}
                    </div>
                    <div class="overallratingAndShowTagDiv">
                      <van-row v-show="item.overallRating">
                        <van-col span="11">
                          <van-rate
                            :value="item.overallRating"
                            size="15"
                            count="5"
                            disabled-color="#00BFFF"
                            disabled
                          />
                        </van-col>
                        <van-col span="3">
                          {{item.overallRating}}
                        </van-col>
                      </van-row>
                      <div class="tagPaddingTop" v-show="item.showtag">
                        <van-tag color="#f2826a" plain size="large">{{item.showtag}}</van-tag>
                      </div>
                    </div>
                  </div>
                </van-col>
              </van-row>
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
        <div v-for="(item, index) in restaurantData" :key="index" class="secondDiv" @click="seeDetail(item)"
             v-if="!isRestaurantDataEmpty">
          <div>
            <div class="rowBottom">
              <van-row>
                <van-col span="4" offset="1">
                  <img :src="item.image"/>
                </van-col>
                <van-col span="15" offset="4">
                  <div class="secondCol">
                    <div class="nameDiv">
                      {{item.placeName}}
                    </div>
                    <div class="distanceAndAddressDiv">
                      {{item.distance}}|{{item.address}}
                    </div>
                    <div class="overallratingAndShowTagDiv">
                      <van-row>
                        <van-col span="11">
                          <van-rate
                            :value="item.overallRating"
                            size="15"
                            count="5"
                            disabled-color="#00BFFF"
                            disabled
                          />
                        </van-col>
                        <van-col span="3">
                          {{item.overallRating}}
                        </van-col>
                      </van-row>
                      <div class="tagPaddingTop">
                        <span v-if="item.price||item.price!=''">¥{{item.price}}</span>
                        <van-tag color="#f2826a" plain size="large">{{item.showtag}}</van-tag>
                      </div>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
    onUnload() {
      this.restaurantData=[];
      this.sceneryData=[];
      this.yearsRestaurantData=[];
      this.yearsSceneryData=[];
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
      this.getUserHistoryByUserId();
    },
    methods: {
      getUserHistoryByUserId() {
        this.$httpWX.get({
          url: apiurl.getUserHistoryByUserId,
          data: {
            longitude: this.userInfo.longitude,
            latitude: this.userInfo.latitude,
            userId: this.userInfo.openid
          },
        }).then(res => {
          let placeData = res.data;
          for (let i = 0; i < placeData.length; i++) {
            if (placeData[i].placeName.length > 9) {
              placeData[i].placeName = placeData[i].placeName.substring(0, 9) + '...';
            }
            if (placeData[i].address.length > 7) {
              placeData[i].address = placeData[i].address.substring(0, 7) + '...';
            }
            placeData[i].distance = placeData[i].distance ? placeData[i].distance >= 1000 ? (placeData[i].distance / 1000).toFixed(1)
              + 'km' : parseInt(placeData[i].distance) + 'm' : 0 + 'm';
            if (placeData[i].type == 1) {
              this.sceneryData.push(placeData[i]);
            } else {
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

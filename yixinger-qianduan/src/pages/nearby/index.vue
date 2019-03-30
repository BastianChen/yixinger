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
        <div v-for="(item, index) in sceneryData" :key="index" class="secondDiv" v-if="!isSceneryDataEmpty">
          <div>
            <div class="rowBottom">
              <van-row>
                <van-col span="4" offset="1">
                  <!--<img src="http://a.hiphotos.baidu.com/lbsugc/pic/item/a9d3fd1f4134970a109dadf898cad1c8a6865d7e.jpg"/>-->
                  <img :src="item.image"/>
                </van-col>
                <van-col span="15" offset="4">
                  <div class="secondCol">
                    <div class="nameDiv">
                      {{item.name}}
                    </div>
                    <div class="distanceAndAddressDiv">
                      {{distance}}|{{item.newAddress}}
                    </div>
                    <div class="overallratingAndShowTagDiv">
                      <van-row>
                        <van-col span="12">
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
                      <van-tag color="#f2826a" plain size="large">{{item.showtag}}</van-tag>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
            <!--<div class="rowBottom">-->
              <!--<van-row>-->
                <!--<van-col span="4" offset="1">-->
                  <!--<img src="http://a.hiphotos.baidu.com/lbsugc/pic/item/a9d3fd1f4134970a109dadf898cad1c8a6865d7e.jpg"/>-->
                <!--</van-col>-->
                <!--<van-col span="15" offset="4">-->
                  <!--<div class="secondCol">-->
                    <!--<div class="nameDiv">-->
                      <!--{{name}}-->
                    <!--</div>-->
                    <!--<div class="distanceAndAddressDiv">-->
                      <!--{{distance}}|{{address}}-->
                    <!--</div>-->
                    <!--<div class="overallratingAndShowTagDiv">-->
                      <!--{{overallrating}}-->
                      <!--<span>-->
                    <!--{{showTag}}-->
                  <!--</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</van-col>-->
              <!--</van-row>-->
            <!--</div>-->
          </div>
        </div>
      </van-tab>
      <van-tab title="餐馆">
        <div style="text-align:center;margin-top: 200px" v-if="!isRestaurantDataEmpty">
          <div>
            <img src="../../../static/images/noContent.png" style="width: 80px;height: 80px"/>
          </div>
          <div style="font-size: 14px;font-family: KaiTi">
            <span>
              暂无推荐餐馆
            </span>
          </div>
        </div>
        <div v-for="(item, index) in restaurantData" :key="index" style="margin: 10px 5px"
             v-if="isRestaurantDataEmpty">
          <div v-if="item.year==year">
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
                  <span v-if="item.dateType==4||item.dateType==5">
                    &nbsp;
                  </span>
                  <span style="font-size: 14px;margin-left:-7px;" v-if="item.dateType==3">
                    {{item.month}}
                  </span>
                </div>
                <div style="color:#7d7e80;font-size:10px;margin-top: 10px">
                    <span>
                      {{item.city}}
                    </span>
                </div>
                <div style="color:#7d7e80;font-size:10px">
                    <span>
                      {{item.district}}
                    </span>
                </div>
              </van-col>
              <van-col span="18" @longpress="clickLong(item.id,1)" @click="seeDetails(item,1)">
                <van-card
                  :desc="item.desc"
                  :title="item.keyword"
                  :thumb="item.imageUrl"
                  centered lazy-load
                >
                </van-card>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {apiurl} from "@/service/api.js";

  export default {
    data() {
      return {
        active: 0,
        isRestaurantDataEmpty: true,
        isSceneryDataEmpty: false,
        restaurantData: {},
        sceneryData: {},
        name: '汇合城购物中心',
        distance: '756m',
        address: '江干区-新风路619号',
        overallrating: 4.3,
        showTag: '购物中心',
        uidListForType1: '',// 景点uidList
        uidListForType2: '',// 餐馆uidList
      }
    },
    mounted() {
      // if (this.address.length > 9) {
      //   this.address = this.address.substring(0, 9) + '...';
      // }
      this.getData();
    },
    methods: {
      getData() {
        this.uidListForType1 = this.$route.query.uidListForType1;
        this.uidListForType2 = this.$route.query.uidListForType2;
        this.$httpWX.get({
          url: apiurl.getPlaceListByUids,
          data: {
            uidList: this.uidListForType1
          }
        }).then(res => {
          this.sceneryData = res.data;
          for (let i=0;i<this.sceneryData.length;i++){
            if (this.sceneryData[i].address.length > 7) {
              this.$set(this.sceneryData[i], 'newAddress', this.sceneryData[i].address.substring(0, 7) + '...');
            }else {
              this.$set(this.sceneryData[i], 'newAddress', this.sceneryData[i].address);
            }
          }
        });
        this.$httpWX.get({
          url: apiurl.getPlaceListByUids,
          data: {
            uidList: this.uidListForType2
          }
        }).then(res => {
          this.restaurantData = res.data;
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

<template>
  <div class="index">
    <van-tabs :active="active" @change="onChange" sticky animated swipeable color="#00BFFF">
      <van-tab title="图像识别">
        <div style="text-align:center;margin-top: 200px" v-if="isphotoDistinguishDataEmpty">
          <div>
            <img src="../../../static/images/noContent.png" style="width: 80px;height: 80px"/>
          </div>
          <div style="font-size: 14px;font-family: KaiTi">
            <span>
              暂无记录
            </span>
          </div>
        </div>
        <div style="margin: 10px 5px 20px 5px;width: 100%;font-weight: bold;font-size: 28px;font-family: KaiTi"
             v-for="(year, key) in yearsInphotoDistinguish" :key="key" v-if="!isphotoDistinguishDataEmpty">
          <van-row>
            <van-col span="8" offset="1">
              {{year}}年
            </van-col>
          </van-row>
          <div v-for="(item, index) in photoDistinguishData" :key="index" style="margin: 10px 5px">
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
                    <span v-if="item.dateType==4||item.dateType==5||item.dateType==6">
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
        </div>
      </van-tab>
      <van-tab title="文字识别">
        <div style="text-align:center;margin-top: 200px" v-if="istextDistinguishDataEmpty">
          <div>
            <img src="../../../static/images/noContent.png" style="width: 80px;height: 80px"/>
          </div>
          <div style="font-size: 14px;font-family: KaiTi">
            <span>
              暂无记录
            </span>
          </div>
        </div>
        <div style="margin: 10px 5px;width: 100%;font-weight: bold;font-size: 28px;font-family: KaiTi"
             v-for="(year, key) in yearsIntextDistinguish" :key="key" v-if="!istextDistinguishDataEmpty">
          <van-row>
            <van-col span="8" offset="1">
              {{year}}年
            </van-col>
          </van-row>
          <div v-for="(item, index) in textDistinguishData" :key="index" style="margin: 10px 5px">
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
                    <span v-if="item.dateType==4||item.dateType==5||item.dateType==6">
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
                <van-col span="18" @longpress="clickLong(item.id,2)" @click="seeDetails(item,2)">
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
        photoDistinguishData: [],
        textDistinguishData: [],
        yearsInphotoDistinguish: [],
        yearsIntextDistinguish: [],
        district: '',// 直辖市
        city: '',// 城市名
        isphotoDistinguishDataEmpty: false,
        istextDistinguishDataEmpty: false,
      }
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
      this.getOperationHistoryData(1);
      this.getOperationHistoryData(2);
    },
    methods: {
      clickLong(id, type) {
        Dialog.confirm({
          title: '温馨提示',
          message: '您确定要删除该条记录？'
        }).then(() => {
          this.$httpWX.post({
            url: type == 1 ? apiurl.deletePhotoDistinguishById : apiurl.deleteTextDistinguishById,
            data: {
              idList: id
            },
          }).then(res => {
            this.getOperationHistoryData(type);
            wx.showToast({
              title: res.message,
              icon: 'none'
            });
            if (type == 1) {
              this.active = 0;
            } else {
              this.active = 1;
            }
            // setTimeout(() => {
            //   wx.hideToast();
            // }, 2000);
          })
        }).catch(() => {
          console.log("取消")
        });
      },
      onChange(index) {
        // wx.showToast({
        //   title: `切换到标签 ${index.target.title}`,
        //   icon: 'none'
        // });
        if (index.target.index == 0) {
          this.active = 0;
        } else if (index.target.index == 1) {
          this.active = 1;
        }
      },
      getOperationHistoryData(type) {
        var myDate = new Date();
        // 获取图像识别的记录
        if (type == 1) {
          this.$httpWX.get({
            url: apiurl.getPhotoDistinguishList,
            data: {
              userId: this.userInfo.openid
            },
          }).then(res => {
            this.photoDistinguishData = res.data;
            if (this.photoDistinguishData == null) {
              this.isphotoDistinguishDataEmpty = true;
            } else {
              this.isphotoDistinguishDataEmpty = false;
              var isTodayFirst = false;
              var isYesterdayFirst = false;
              for (let i = 0; i < this.photoDistinguishData.length; i++) {
                this.photoDistinguishData[i].imageUrl = 'https://www.wzcb97.top/' + this.photoDistinguishData[i].imageUrl
                let desc;
                let result = JSON.parse(this.photoDistinguishData[i].result).result;
                let keyword;
                let dateArray = this.photoDistinguishData[i].date.split('-');
                let cityNameArray = this.photoDistinguishData[i].cityName.split('·');
                let isRepeated = false;
                switch (this.photoDistinguishData[i].type) {
                  case '1':
                    desc = '通用图像识别';
                    keyword = result[0].keyword;
                    break;
                  case '2':
                    desc = '植物识别';
                    keyword = result[0].name;
                    break;
                  case '3':
                    desc = '动物识别';
                    keyword = result[0].name;
                    break;
                  case '4':
                    desc = '菜品识别';
                    keyword = result[0].name;
                    break;
                  default:
                    break;
                }
                this.$set(this.photoDistinguishData[i], 'keyword', keyword);
                this.$set(this.photoDistinguishData[i], 'desc', desc);
                this.$set(this.photoDistinguishData[i], 'year', dateArray[0]);
                this.$set(this.photoDistinguishData[i], 'month', dateArray[1].substring(1, 2) + '月');
                this.$set(this.photoDistinguishData[i], 'day', dateArray[2].split(' ')[0]);
                this.$set(this.photoDistinguishData[i], 'city', cityNameArray[0]);
                this.$set(this.photoDistinguishData[i], 'district', cityNameArray[1]);
                if ((myDate.getFullYear() == dateArray[0]) && ((myDate.getMonth() + 1) == dateArray[1].substring(1, 2))
                  && (myDate.getDate() == dateArray[2].split(' ')[0])) {
                  if (!isTodayFirst) {
                    this.$set(this.photoDistinguishData[i], 'dateType', 1);// 时间为今天
                    isTodayFirst = true;
                  } else {
                    this.$set(this.photoDistinguishData[i], 'dateType', 4);// 时间为今天,但不是第一条
                  }
                } else if ((myDate.getFullYear() == dateArray[0]) && ((myDate.getMonth() + 1) == dateArray[1].substring(1, 2))
                  && (myDate.getDate() - 1 == dateArray[2].split(' ')[0])) {
                  if (!isYesterdayFirst) {
                    this.$set(this.photoDistinguishData[i], 'dateType', 2);// 时间为昨天
                    isYesterdayFirst = true;
                  } else {
                    this.$set(this.photoDistinguishData[i], 'dateType', 5);// 时间为昨天,但不是第一条
                  }
                } else {
                  let isFirst = false;
                  for (let j = 0; j < i; j++) {
                    if (this.photoDistinguishData[i].year == this.photoDistinguishData[j].year &&
                      this.photoDistinguishData[i].month == this.photoDistinguishData[j].month &&
                      this.photoDistinguishData[i].day == this.photoDistinguishData[j].day) {
                      this.$set(this.photoDistinguishData[i], 'dateType', 6);// 正常时间,但不是第一条
                      isFirst = true;
                      break;
                    }
                  }
                  if (!isFirst) {
                    this.$set(this.photoDistinguishData[i], 'dateType', 3);// 正常时间,但不是第一条
                  }
                }
                if (this.yearsInphotoDistinguish.length == 0) {
                  this.yearsInphotoDistinguish.push(dateArray[0]);
                  isRepeated = false;
                } else {
                  for (let j = 0; j < this.yearsInphotoDistinguish.length; j++) {
                    if (this.yearsInphotoDistinguish[j] == dateArray[0]) {
                      isRepeated = true;
                      break;
                    }
                  }
                  if (!isRepeated) {
                    this.yearsInphotoDistinguish.push(dateArray[0]);
                  }
                }
              }
              this.setYearsOrder(this.yearsInphotoDistinguish)
            }
          })
        } else if (type == 2) {// 获取文字识别的记录
          this.$httpWX.get({
            url: apiurl.getTextDistinguishList,
            data: {
              userId: this.userInfo.openid
            },
          }).then(res => {
            this.textDistinguishData = res.data;
            if (this.textDistinguishData == null) {
              this.istextDistinguishDataEmpty = true;
            } else {
              var isTodayFirst = false;
              var isYesterdayFirst = false;
              for (let i = 0; i < this.textDistinguishData.length; i++) {
                this.textDistinguishData[i].imageUrl = 'https://www.wzcb97.top/' + this.textDistinguishData[i].imageUrl
                let desc = '文字识别';
                let result = JSON.parse(this.textDistinguishData[i].words).words_result;
                let keyword = result[0].words.length < 10 ? result[0].words : result[0].words.substring(1, 10) + '...';
                let dateArray = this.textDistinguishData[i].date.split('-');
                let cityNameArray = this.textDistinguishData[i].cityName.split('·');
                let isRepeated = false;
                this.$set(this.textDistinguishData[i], 'keyword', keyword);
                this.$set(this.textDistinguishData[i], 'desc', desc);
                this.$set(this.textDistinguishData[i], 'year', dateArray[0]);
                this.$set(this.textDistinguishData[i], 'month', dateArray[1].substring(1, 2) + '月');
                this.$set(this.textDistinguishData[i], 'day', dateArray[2].split(' ')[0]);
                this.$set(this.textDistinguishData[i], 'city', cityNameArray[0]);
                this.$set(this.textDistinguishData[i], 'district', cityNameArray[1]);
                if ((myDate.getFullYear() == dateArray[0]) && ((myDate.getMonth() + 1) == dateArray[1].substring(1, 2))
                  && (myDate.getDate() == dateArray[2].split(' ')[0])) {
                  if (!isTodayFirst) {
                    this.$set(this.textDistinguishData[i], 'dateType', 1);// 时间为今天
                    isTodayFirst = true;
                  } else {
                    this.$set(this.textDistinguishData[i], 'dateType', 4);// 时间为今天,但不是第一条
                  }
                } else if ((myDate.getFullYear() == dateArray[0]) && ((myDate.getMonth() + 1) == dateArray[1].substring(1, 2))
                  && (myDate.getDate() - 1 == dateArray[2].split(' ')[0])) {
                  if (!isYesterdayFirst) {
                    this.$set(this.textDistinguishData[i], 'dateType', 2);// 时间为昨天
                    isYesterdayFirst = true;
                  } else {
                    this.$set(this.textDistinguishData[i], 'dateType', 5);// 时间为昨天,但不是第一条
                  }
                } else {
                  let isFirst = false;
                  for (let j = 0; j < i; j++) {
                    if (this.textDistinguishData[i].year == this.textDistinguishData[j].year &&
                      this.textDistinguishData[i].month == this.textDistinguishData[j].month &&
                      this.textDistinguishData[i].day == this.textDistinguishData[j].day) {
                      this.$set(this.textDistinguishData[i], 'dateType', 6);// 正常时间,但不是第一条
                      isFirst = true;
                      break;
                    }
                  }
                  if (!isFirst) {
                    this.$set(this.textDistinguishData[i], 'dateType', 3);// 正常时间,但不是第一条
                  }
                }
                if (this.yearsIntextDistinguish.length == 0) {
                  this.yearsIntextDistinguish.push(dateArray[0]);
                  isRepeated = false;
                } else {
                  for (let j = 0; j < this.yearsIntextDistinguish.length; j++) {
                    if (this.yearsIntextDistinguish[j] == dateArray[0]) {
                      isRepeated = true;
                      break;
                    }
                  }
                  if (!isRepeated) {
                    this.yearsIntextDistinguish.push(dateArray[0]);
                  }
                }
              }
              this.setYearsOrder(this.yearsIntextDistinguish);
            }
          })
        }
      },
      setYearsOrder(years) {
        // 对年份时间进行排序,如果flag>0则排序结束
        let flag = years.length;
        let len = flag;
        var year;
        while (flag > 0) {
          flag = 0;
          for (let m = 1; m < len; m++) {
            // 比较年份，若前面小于后面则交换数据
            if (years[m] < years[m + 1]) {
              year = years[m];
              years[m] = years[m + 1];
              years[m + 1] = year;
              // 设置最新边界
              flag = m;
            }
          }
          // 记录遍历的边界
          len = flag;
        }
      },
      seeDetails(data, dataType) {
        const datum = {};
        datum.data = data;
        if (dataType == 1) {
          this.$router.push({
            path: `../distinguish/main`,
            query: {type: data.type, data: encodeURIComponent(JSON.stringify(datum)), isHistory: true}
          });
        } else if (dataType == 2) {
          this.$router.push({
            path: `../textdistinguish/main`,
            query: {data: encodeURIComponent(JSON.stringify(datum)), isHistory: true}
          });
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

<template>
  <div class="index">
    <div class="firstDiv">
      <van-row>
        <van-col span="12">
          <div class="imgCol1">
            <img :style="{width:img.imgWidth,height:img.imgHeight}" v-for="(img, imgIndex) in firstPhotoList"
                 :key="imgIndex" :src="img.imageUrl" :data-src="img.imageUrl"
                 @click="seePhoto(img.imageUrl,totalPhotoList)"/>
          </div>
        </van-col>
        <van-col span="12">
          <div class="imgCol2">
            <img :style="{width:img.imgWidth,height:img.imgHeight}" v-for="(img, imgIndex) in secondPhotoList"
                 :key="imgIndex" :src="img.imageUrl" :data-src="img.imageUrl"
                 @click="seePhoto(img.imageUrl,totalPhotoList)"/>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <div class="imgCol1">
          <img v-for="(img, imgIndex) in baiduPhotoList" :key="imgIndex" :src="img.imageUrl" :data-src="img.imageUrl"
               @click="seePhoto(img.imageUrl,totalPhotoList)"/>
        </div>
      </van-row>
    </div>
    <div class="secondDiv">
      <van-row>
        <button
          type="primary"
          size="mini"
          plain="false"
          bindtap="primary"
          @click="commit()"
          class="commit-btn"
        >
          上传图片
        </button>
      </van-row>
    </div>
    <div class="thirdDiv" v-show="isShowLine">
      <img src="../../../static/images/line.png" class="firstImg"/>
      <div class="content">
        <span>
          我是有底线的
        </span>
      </div>
      <img src="../../../static/images/line.png" class="secondImg"/>
    </div>
    <div class="fifthDiv" v-if="isPhotoListEmpty">
      <div>
        <img src="../../../static/images/noContent.png"/>
      </div>
      <div class="title">
        <span>
          暂无图片
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {apiurl} from "@/service/api.js";
  import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        isComment: false,
        userInfo: {},
        firstPhotoList: [],
        secondPhotoList: [],
        totalPhotoList: [],
        baiduPhotoList: [],
        isShowLine: false,
        isPhotoListEmpty: false
      }
    },
    onUnload() {
      this.pageNo = 1;
      this.pageSize = 10;
      this.totalPage = 0;
      this.isShowLine = false;
      this.totalPhotoList = [];
      this.firstPhotoList = [];
      this.secondPhotoList = [];
      this.baiduPhotoList = [];
    },
    onShow() {
      this.userInfo = this.$store.getters.disc;
      this.isComment = this.userInfo.isComment;
      if (this.isComment) {
        this.getPhotoList(true);
      }
    },
    onReachBottom() {
      if (this.pageNo + 1 <= this.totalPage) {
        this.pageNo = this.pageNo + 1;
        this.isShowLine = false;
        this.getPhotoList(false);
      } else {
        this.isShowLine = true;
      }
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
      this.isComment = this.userInfo.isComment;
      this.getPhotoList(false);
    },
    methods: {
      ...mapMutations({
        setDisc: 'set_disc'
      }),
      /**
       * 预览图片
       */
      seePhoto(index, imgList) {
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgList // 需要预览的图片http链接列表
        })
      },
      commit() {
        this.userInfo.isComment = false;
        this.setDisc(this.userInfo);
        var _this = this;
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            _this.$router.push({
              path: `../addphoto/main`,
              query: {
                placeId: _this.$route.query.placeId,
                // placeId: '72aa2513e7472646077ce816',
                imgList: encodeURIComponent(JSON.stringify(res))
              }
            });
          }
        })
      },
      getPhotoList(type) {
        this.$httpWX.get({
          url: apiurl.getPlacePhotoByUid,
          data: {
            uid: this.$route.query.placeId,
            pageNo: this.pageNo,
            pageSize: this.pageSize
          },
          isShowLoading: type ? true : false
        }).then(res => {
          if (res.state == 0) {
            this.isPhotoListEmpty = false;
            this.totalPage = res.data.totalPage;
            if (res.data.totalNum < 11) {
              this.isShowLine = true;
            }
            let imageList = res.data.items;
            var _this = this;
            imageList.forEach(function (imageObject, i) {
              var isRepated = false;
              if (imageObject.imageUrl.indexOf("/images/placephoto") != -1) {
                imageObject.imageUrl = 'https://wzcb97.top/' + imageObject.imageUrl;
                if (_this.totalPhotoList.length != 0) {
                  for (let j = 0; j < _this.totalPhotoList.length; j++) {
                    if (_this.totalPhotoList[j] == imageObject.imageUrl) {
                      isRepated = true;
                      break;
                    }
                  }
                }
                if (!isRepated) {
                  wx.getImageInfo({
                    src: imageObject.imageUrl,
                    success: function (res) {
                      if (i % 2 == 0) {
                        if (!type) {
                          _this.firstPhotoList.push(imageObject);
                        } else {
                          _this.firstPhotoList.unshift(imageObject);
                        }
                      } else {
                        if (!type) {
                          _this.secondPhotoList.push(imageObject);
                        } else {
                          _this.secondPhotoList.unshift(imageObject);
                        }
                      }
                      if (!type) {
                        _this.totalPhotoList.push(imageObject.imageUrl);
                      } else {
                        _this.totalPhotoList.unshift(imageObject.imageUrl);
                      }
                      let winWidth = wx.getSystemInfoSync().windowWidth;
                      imageObject.imgWidth = winWidth * 0.45 + 'px';
                      let rate = (winWidth * 0.45) / res.width;
                      imageObject.imgHeight = res.height * rate + 'px';
                    }
                  })
                }
              } else {
                if (_this.totalPhotoList.length != 0) {
                  for (let j = 0; j < _this.totalPhotoList.length; j++) {
                    if (_this.totalPhotoList[j] == imageObject.imageUrl) {
                      isRepated = true;
                      break;
                    }
                  }
                }
                if (!isRepated) {
                  _this.baiduPhotoList.push(imageObject);
                  _this.totalPhotoList.push(imageObject.imageUrl);
                }
              }
            })
          } else {
            this.isPhotoListEmpty = true;
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

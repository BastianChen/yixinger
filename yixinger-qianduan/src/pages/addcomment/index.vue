<template>
  <div class="index">
    <div class="firstDiv">
      <van-row>
        <van-col span="5" offset="1">
          <span class="firstCol">请您评分</span>
        </van-col>
        <van-col span="10">
          <div class="secondCol">
            <van-rate
              :value="rateValue"
              size="25"
              color="#00BFFF"
              void-color="#00BFFF"
              @change="onChange"
              style="text-align: center"
            />
          </div>
        </van-col>
        <van-col span="2" offset="1">
          <span class="thirdCol">{{value}}</span>
        </van-col>
      </van-row>
    </div>
    <div class="secondDiv">
      <van-row>
        <textarea class='text' maxlength='2000' :value="comment" name="content" placeholder="写下我的感受..."
                  @input="insert"/>
      </van-row>
    </div>
    <div class="thirdDiv">
      <van-row>
        <img src="../../../static/images/add_photo.png" @click="addPhoto()"/>
      </van-row>
    </div>
    <div class="forthDiv">
      <img v-for="(item, index) in imgList" :key="index" :src="item" @longpress="clickLong(index,imgList)"
           @click="seePhoto(item,imgList)"/>
    </div>
    <div class="fifthDiv">
      <van-row>
        <button
          type="primary"
          size="mini"
          plain="false"
          bindtap="primary"
          @click="commit()"
          class="commit-btn"
        >
          发表
        </button>
      </van-row>
    </div>
    <van-dialog id="van-dialog" style="text-align: center"/>
  </div>
</template>

<script>
  import {apiurl} from "@/service/api.js";
  import {mapGetters, mapMutations} from 'vuex';
  import Dialog from '../../../static/vant-weapp/dist/dialog/dialog.js';

  export default {
    computed: {
      ...mapGetters([
        'disc'
      ])
    },
    data() {
      return {
        title: '',
        rateValue: 0,
        value: '',
        comment: '',
        imgList: [],
        imageList: '',
        isFinished: false,
        userInfo: {}
      }
    },
    onLoad(opts) {
      this.title = opts.title;
      wx.setNavigationBarTitle({
        title: this.title,
        success: function (res) {
          // success
        }
      })
    },
    onUnload() {
      if (this.isFinished) {
        this.rateValue = 0;
        this.value = '';
        this.comment = '';
        this.imgList = [];
        this.imageList = '';
        this.isFinished = false;
      } else {
        this.isFinished = false;
      }
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
    },
    methods: {
      ...mapMutations({
        setDisc: 'set_disc'
      }),
      onChange(event) {
        this.value = event.mp.detail + '.0';
        this.rateValue = event.mp.detail;
      },
      insert(event) {
        this.comment = event.mp.detail.value;
      },
      commit() {
        if (this.comment == '' || this.comment.match(/^[ ]*$/)) {
          wx.showToast({
            title: '请写下您的感受',
            icon: 'none'
          })
        } else {
          var placeComment = {};
          placeComment.placeId = this.$route.query.placeId;
          placeComment.likes = 0;
          placeComment.userId = this.$store.getters.disc.openid;
          placeComment.userName = this.$store.getters.disc.nickName;
          placeComment.userImage = this.$store.getters.disc.avatarUrl;
          placeComment.overallRating = this.rateValue;
          placeComment.comment = this.comment;
          this.uploadImage(this.imgList, placeComment);
        }
      },
      uploadImage(data, placeComment) {
        var _this = this;
        var i = 0;
        if (data.length != 0) {
          for (i = 0; i < data.length; i++) {
            wx.uploadFile({
              url: 'https://wzcb97.top/' + apiurl.uploadImage,
              filePath: data[i],
              name: 'imageFile',
              formData: {type: 1},
              success: function (res) {
                if (JSON.parse(res.data).state == 0) {
                  var imageUrl = JSON.parse(res.data);
                  _this.imageList = _this.imageList + imageUrl.data + ";";
                  let imgArray = _this.imageList.split(";")
                  if (imgArray.length == (data.length + 1)) {
                    _this.imageList = _this.imageList.substring(0, _this.imageList.length - 1)
                    _this.$httpWX.post({
                      url: apiurl.addPlaceComment + '?imageList=' + _this.imageList,
                      data: placeComment,
                      header: {
                        'Content-type': 'application/json'
                      }
                    }).then(data => {
                      wx.showToast({
                        title: data.message,
                        icon: 'success',
                        duration: 3000
                      })
                      _this.userInfo.isComment = true;
                      _this.setDisc(_this.userInfo);
                      setTimeout(() => {
                        _this.isFinished = true;
                        _this.$router.go(-1);
                      }, 1500)
                    })
                  }
                } else {
                  wx.showToast({
                    title: JSON.parse(res.data).message,
                    icon: 'none',
                    duration: 3000
                  })
                }
              }
            })
          }
        } else {
          _this.$httpWX.post({
            url: apiurl.addPlaceComment,
            data: placeComment,
            header: {
              'Content-type': 'application/json'
            }
          }).then(data => {
            wx.showToast({
              title: data.message,
              icon: 'success',
              duration: 3000
            })
            _this.userInfo.isComment = true;
            _this.setDisc(_this.userInfo);
            setTimeout(() => {
              _this.isFinished = true;
              _this.$router.go(-1);
            }, 1500)
          })
        }
      },
      pageJump() {
        this.$router.push({
          path: `../placedetail/main`,
          query: {
            uid: this.uid
          }
        });
      },
      addPhoto() {
        if (this.imgList.length == 9) {
          wx.showToast({
            title: '最多只能上传9张图片哦!',
            icon: 'none'
          })
        } else {
          var _this = this;
          wx.chooseImage({
            count: 9, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              if (_this.imgList.length + res.tempFilePaths.length < 10) {
                for (let i = 0; i < res.tempFilePaths.length; i++) {
                  _this.imgList.push(res.tempFilePaths[i])
                }
              } else {
                wx.showToast({
                  title: '最多只能上传9张图片哦!',
                  icon: 'none'
                })
              }
            }
          })
        }
      },
      /**
       * 预览图片
       */
      seePhoto(index, imgList) {
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgList // 需要预览的图片http链接列表
        })
      },
      clickLong(index, imgList) {
        Dialog.confirm({
          title: '温馨提示',
          message: '您确定要删除该张照片？'
        }).then(() => {
          imgList.splice(index, 1);
        }).catch(() => {
          console.log("取消")
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

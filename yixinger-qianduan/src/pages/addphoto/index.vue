<template>
  <div class="index">
    <div class="firstDiv">
      <img v-for="(img, imgIndex) in imgList" :key="imgIndex"
           :src="img" :data-src="img" @click="seePhoto(img,imgList)" @longpress="clickLong(index,imgList)"/>
      <img src="../../../static/images/add_photo.png" @click="addPhoto()"/>
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
          发表
        </button>
      </van-row>
    </div>
    <van-dialog id="van-dialog"/>
  </div>
</template>

<script>
  import {apiurl} from "@/service/api.js";
  import {mapMutations} from 'vuex';
  import Dialog from '../../../static/vant-weapp/dist/dialog/dialog.js';

  export default {
    data() {
      return {
        isComment: false,
        imgList: [],
        imageList: '',
        userInfo: {},
        isFinished: false
      }
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
      this.isComment = this.userInfo.isComment;
      if (this.isFinished) {
        this.imgList = JSON.parse(decodeURIComponent(this.$route.query.imgList)).tempFilePaths;
      } else {
        var imageList = JSON.parse(decodeURIComponent(this.$route.query.imgList)).tempFilePaths;
        if (this.imgList.length + imageList.length < 10) {
          for (let i = 0; i < imageList.length; i++) {
            this.imgList.push(imageList[i]);
          }
        } else {
          wx.showToast({
            title: '最多只能上传9张图片哦!',
            icon: 'none'
          })
        }
      }
    },
    methods: {
      ...mapMutations({
        setDisc: 'set_disc'
      }),
      seePhoto(index, imgList) {
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgList // 需要预览的图片http链接列表
        })
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
      clickLong(index, imgList) {
        Dialog.confirm({
          title: '温馨提示',
          message: '您确定要删除该张照片？'
        }).then(() => {
          imgList.splice(index, 1);
        }).catch(() => {
          console.log("取消")
        });
      },
      initImgList() {
        this.imgList = this.$route.query.imgList;
      },
      commit() {
        var _this = this;
        var i = 0;
        if (_this.imgList.length != 0) {
          for (i = 0; i < _this.imgList.length; i++) {
            wx.uploadFile({
              url: 'https://wzcb97.top/' + apiurl.uploadImage,
              filePath: _this.imgList[i],
              name: 'imageFile',
              formData: {type: 2},
              success: function (res) {
                if (JSON.parse(res.data).state == 0) {
                  var imageUrl = JSON.parse(res.data);
                  _this.imageList = _this.imageList + imageUrl.data + ";";
                  let imgArray = _this.imageList.split(";")
                  if (imgArray.length == (_this.imgList.length + 1)) {
                    _this.imageList = _this.imageList.substring(0, _this.imageList.length - 1)
                    _this.$httpWX.post({
                      url: apiurl.addPlacePhoto + '?imageList=' + _this.imageList,
                      data: {
                        userId: _this.userInfo.openid,
                        userName: _this.userInfo.nickName,
                        placeId: _this.$route.query.placeId
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
                        _this.imageList = [];
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
          wx.showToast({
            title: '请添加图片',
            icon: 'none'
          })
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

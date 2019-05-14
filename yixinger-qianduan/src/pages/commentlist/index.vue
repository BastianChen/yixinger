<template>
  <div class="index">
    <div class="firstDiv">
      <div class="commentDetail" v-for="(comment, commentListInfoIndex) in commentListInfo "
           :key="commentListInfoIndex">
        <van-row>
          <van-col span="3">
            <img class="portrait" @click="seePhoto(comment.userImage,comment.userImage)"
                 :src="comment.userImage"/>
          </van-col>
          <van-col span="19" offset="1">
            <van-row>
              <span class="userName">{{comment.userName}}</span>
            </van-row>
            <van-row>
              <van-col span="8">
                <van-rate
                  :value="comment.overallRating"
                  size="13"
                  count="5"
                  disabled-color="#00BFFF"
                  disabled
                />
              </van-col>
              <van-col span="3">
                <span class="rate">{{comment.overallRating}}分</span>
              </van-col>
              <van-col span="8" offset="5">
                <div class="time"><span>{{comment.date}}</span></div>
              </van-col>
            </van-row>
            <van-row>
              <div class="detail">
                <span>
                  {{comment.comment}}
                </span>
              </div>
            </van-row>
            <van-row>
              <div>
                <img class="userImg" v-for="(img, imgIndex) in comment.userImg " :key="imgIndex"
                     :src="img" :data-src="img" v-if="imgIndex<3&&img" @click="seePhoto(img,comment.userImg)"/>
                <span v-if="comment.moreThanThree"
                      style="width:30px;height:15px;background:#000000;opacity:0.6;color:#ffffff;position:absolute;font-size:12px;text-align:center;right:137rpx;margin-top:112rpx;">{{comment.imgLength}}张</span>
              </div>
            </van-row>
            <van-row>
              <div class="bottom">
                <span class="resource">{{comment.resource}}</span>
                <img class="likeImg" :src="comment.likeImgUrl"
                     @click="like(comment.id,comment.likeImgUrl,commentListInfoIndex)"/>
                <span class="likes">{{comment.likes}}</span>
              </div>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="secondDiv" v-show="isShowLine">
      <img src="../../../static/images/line.png" class="firstImg"/>
      <div class="content">
            <span>
              我是有底线的
            </span>
      </div>
      <img src="../../../static/images/line.png" class="secondImg"/>
    </div>
    <div class="thirdDiv">
      <van-row>
        <button
          type="primary"
          size="mini"
          plain="false"
          bindtap="primary"
          @click="commit()"
          class="commit-btn"
        >
          发表评论
        </button>
      </van-row>
    </div>
    <div class="fifthDiv" v-if="isCommentListEmpty">
      <div>
        <img src="../../../static/images/noContent.png"/>
      </div>
      <div class="title">
        <span>
          暂无评论
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
      isComment: false,
      pageNo: 1,
      pageSize: 10,
      totalPage: 0,
      commentListInfo: [],
      likeImgUrl: '/static/images/like.png',
      likedHistory: {},
      isShowLine: false,
      isCommentListEmpty: false,
      totalNum: 0
    }
  },
  onShow() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    if (this.isComment) {
      this.getNewComment();
    }
  },
  onUnload() {
    this.isComment = false;
    this.pageNo = 1;
    this.pageSize = 10;
    this.totalPage = 0;
    this.commentListInfo = [];
    this.isShowLine = false;
    this.isCommentListEmpty = false;
    this.totalNum = 0;
  },
  onReachBottom() {
    if (this.pageNo + 1 <= this.totalPage) {
      this.pageNo = this.pageNo + 1;
      this.isShowLine = false;
      this.getCommentList();
    } else {
      this.isShowLine = true;
    }
  },
  mounted() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    this.getLikedCommentByPlaceIdAndUserId();
  },
  methods: {
    ...mapMutations({
      setDisc: 'set_disc'
    }),
    /**
     * 预览图片
     */
    seePhoto(index, imgList) {
      if (imgList instanceof Array) {
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgList // 需要预览的图片http链接列表
        })
      } else {
        let imgArray = [];
        imgArray.push(imgList);
        wx.previewImage({
          current: index, // 当前显示图片的http链接
          urls: imgArray // 需要预览的图片http链接列表
        })
      }
    },
    commit() {
      this.$router.push({
        path: `../addcomment/main`,
        query: {
          title: this.$route.query.title,
          placeId: this.$route.query.placeId
        }
      });
    },
    getCommentList() {
      this.$httpWX.get({
        url: apiurl.getPlaceCommentByUid,
        data: {
          uid: this.$route.query.placeId,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      }).then(res => {
        if (res.state != 0) {
          this.isCommentListEmpty = true;
        } else {
          this.totalNum = res.data.totalNum;
          this.totalPage = res.data.totalPage;
          if (res.data.totalNum < 11) {
            this.isShowLine = true;
          }
          if (this.commentListInfo.length != 0 && (this.$route.query.placeId != this.commentListInfo[0].placeId)) {
            this.commentListInfo = [];
          }
          let dataList = res.data.items;
          for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].imageList) {
              var userImg = JSON.parse(dataList[i].imageList);
              let userImgArray = [];
              for (let j = 0; j < userImg.length; j++) {
                if (userImg[j].pic_url.indexOf("/images/comment") != -1) {
                  userImgArray.push('https://wzcb97.top' + userImg[j].pic_url);
                } else {
                  userImgArray.push(userImg[j].pic_url);
                }
              }
              this.$set(dataList[i], 'userImg', userImgArray);
              if (userImgArray.length > 3) {
                this.$set(dataList[i], 'moreThanThree', true);
              } else {
                this.$set(dataList[i], 'moreThanThree', false);
              }
              this.$set(dataList[i], 'imgLength', userImgArray.length);
            } else {
              this.$set(dataList[i], 'userImg', null);
            }
            this.$set(dataList[i], 'date', dataList[i].date.split(" ")[0]);
            if (this.likedHistory) {// 有点赞记录
              for (let m = 0; m < this.likedHistory.length; m++) {
                if (dataList[i].id == this.likedHistory[m].placeCommentId) {
                  this.$set(dataList[i], 'likeImgUrl', '/static/images/liked.png');
                  break;
                } else {
                  this.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
                }
              }
            } else {// 无点赞记录
              this.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
            }
            this.commentListInfo.push(dataList[i]);
          }
        }
      })
    },
    getNewComment() {
      this.$httpWX.get({
        url: apiurl.getPlaceCommentByUid,
        data: {
          uid: this.$route.query.placeId,
          pageNo: 1,
          pageSize: 1
        },
        isShowLoading: true
      }).then(res => {
        if ((this.totalNum + 1) % 10 == 0) {
          this.totalPage = (this.totalNum + 1) / 10;
        } else {
          this.totalPage = (this.totalNum + 1) / 10 + 1;
        }
        if ((this.totalNum + 1) < 11) {
          this.isShowLine = true;
        }
        if (res.data.items[0].id != this.commentListInfo[0].id) {
          let dataList = res.data.items;
          for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].imageList) {
              var userImg = JSON.parse(dataList[i].imageList);
              let userImgArray = [];
              for (let j = 0; j < userImg.length; j++) {
                if (userImg[j].pic_url.indexOf("/images/comment") != -1) {
                  userImgArray.push('https://wzcb97.top' + userImg[j].pic_url);
                } else {
                  userImgArray.push(userImg[j].pic_url);
                }
              }
              this.$set(dataList[i], 'userImg', userImgArray);
              if (userImgArray.length > 3) {
                this.$set(dataList[i], 'moreThanThree', true);
              } else {
                this.$set(dataList[i], 'moreThanThree', false);
              }
              this.$set(dataList[i], 'imgLength', userImgArray.length);
            } else {
              this.$set(dataList[i], 'userImg', null);
            }
            this.$set(dataList[i], 'date', dataList[i].date.split(" ")[0]);
            if (this.likedHistory) {// 有点赞记录
              for (let m = 0; m < this.likedHistory.length; m++) {
                if (dataList[i].id == this.likedHistory[m].placeCommentId) {
                  this.$set(dataList[i], 'likeImgUrl', '/static/images/liked.png');
                  break;
                } else {
                  this.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
                }
              }
            } else {// 无点赞记录
              this.$set(dataList[i], 'likeImgUrl', '/static/images/like.png');
            }
            this.commentListInfo.unshift(dataList[i]);
          }
        }
      })
    },
    getLikedCommentByPlaceIdAndUserId() {
      this.$httpWX.get({
        url: apiurl.getLikedCommentByPlaceIdAndUserId,
        data: {
          placeId: this.$route.query.placeId,
          openid: this.userInfo.openid
        },
      }).then(res => {
        this.likedHistory = res.data;
        this.getCommentList();
      })
    },
    like(commentId, likeImgUrl, index) {
      this.$httpWX.post({
        url: apiurl.updateLikes,
        data: {
          userId: this.userInfo.openid,
          placeCommentId: commentId,
          placeId: this.$route.query.placeId
        },
      }).then(res => {
        if (res.state == 0) {
          if (likeImgUrl == '/static/images/like.png') {
            this.commentListInfo[index].likeImgUrl = '/static/images/liked.png';
            this.commentListInfo[index].likes = res.data.likes;
          } else {
            this.commentListInfo[index].likeImgUrl = '/static/images/like.png';
            this.commentListInfo[index].likes = res.data.likes;
          }
          this.userInfo.isComment = true;
          this.setDisc(this.userInfo);
        } else {
          wx.showToast({
            title: res.message,
            duration: 3000,
            icon: 'none'
          });
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

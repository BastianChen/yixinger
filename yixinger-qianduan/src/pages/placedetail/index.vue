<template>
  <div class="index">
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true"
              duration="500">
        <block v-for="(item, index) in banner " :key="index">
          <swiper-item class="swiper-item">
            <image :src="item" :data-src="item" @click="seePhoto(item,banner)" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="info">
      <van-row>
        <span class="name">
          {{name}}
        </span>
        <img class="navigation" @click="navigation()" src="https://wzcb97.top/images/index/navigation.png"/>
      </van-row>
      <van-row class="distanceAndAddress">
        <van-col span="4">
          {{distance}}
        </van-col>
        <van-col span="1" offset="1">
          |
        </van-col>
        <van-col span="17" offset="1">
          {{address}}
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <van-rate
            :value="overallRating"
            size="13"
            count="5"
            disabled-color="#00BFFF"
            disabled
          />
        </van-col>
        <van-col span="7" v-if="placeType==2&&price!=0">
          <div class="showTag">
            ¥{{price}} {{showtag}}
          </div>
        </van-col>
        <van-col span="5" v-else>
          <div class="showTag">
            {{showtag}}
          </div>
        </van-col>
        <van-col span="11">
          <van-tag v-for="(item, tags1Index) in tags1" :key="tags1Index" v-if="tags1Index<=tags1ShowIndex"
                   color="#FFF6EF"
                   text-color="#C7A98B"
                   class="tags1">
            {{item}}
          </van-tag>
        </van-col>
      </van-row>
    </div>
    <div class="introduce" v-if="isSurveyOfScenery">
      <van-row>
        <div class="title">
          景区概况
        </div>
        <div class="content" v-if="isIntroduceShow">
          <van-row @click="seeIntroduce()">
            <van-col span="22">
            <span>
            {{introduce}}
            </span>
            </van-col>
            <van-col span="2">
              <div class="right">
                <van-icon name="arrow"/>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="sugTime" v-if="isSugTimeShow">
          <span class="firstSpan">建议游玩</span><span class="secondSpan">{{sugTime}}</span>
        </div>
        <div class="sugTime" v-if="isBestTimeShow">
          <span class="firstSpan">最佳季节</span><span class="secondSpan">{{bestTime}}</span>
        </div>
      </van-row>
    </div>
    <div class="telephone" v-if="isTelephoneShow">
      <van-row>
        <div class="title">
          电话
        </div>
        <div class="one" v-if="isTelephone1Show" @click="phoneCall(telephone1)">
          {{telephone1}}
        </div>
        <div class="two" v-if="isTelephone2Show">
          <span class="otherSpan" @click="phoneCall(telephone1)">{{telephone1}}</span>
          <span class="centerSpan">|</span>
          <span class="otherSpan" @click="phoneCall(telephone2)">{{telephone2}}</span>
        </div>
      </van-row>
    </div>
    <div v-if="isHourShow">
      <div class="shopHours" v-if="isHourShow">
        <van-row>
          <div class="title">
            营业时间
          </div>
          <div class="hour">
            {{hour}}
          </div>
        </van-row>
      </div>
    </div>
    <div v-if="isTagShow">
      <div class="content">
        <van-row>
          <div class="title">
            <span>印象标签</span>
            <!--<span class="more">发现更多<van-icon name="arrow"/></span>-->
          </div>
          <div class="tag">
            <div>
              <van-tag color="#f2826a" plain size="large" class="vanTag"
                       v-for="(tag1, tag1OfContentIndex) in tag1OfContent"
                       :key="tag1OfContentIndex">{{tag1}}
              </van-tag>
            </div>
            <div style="margin-top: 10px" v-if="isTag2OfContentShow">
              <van-tag color="#f2826a" plain size="large" class="vanTag"
                       v-for="(tag2, tag2OfContentIndex) in tag2OfContent"
                       :key="tag2OfContentIndex">{{tag2}}
              </van-tag>
            </div>
          </div>
        </van-row>
      </div>
    </div>
    <div>
      <div class="comment">
        <van-row>
          <div class="title">
            <span>评论</span><span class="commentNumber">({{commentNumber}}条评论)</span>
            <button
              type="primary"
              size="mini"
              plain="false"
              bindtap="primary"
              class="addComment"
              @click="addComment()"
            >
              <img src="../../../static/images/edit.png" class="addImg"/>
              <!--<van-icon name="edit" size="15px" style="padding-top: 5px"/>-->
              <span class="addSpan">写评论</span>
            </button>
          </div>
          <div class="commentDetails">
            <div class="commentDetail" v-for="(comment, commentListInfoIndex) in commentListInfo "
                 :key="commentListInfoIndex" v-if="commentListInfoIndex<3">
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
                      {{comment.newComment}}
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
          <div class="seeAll" v-if="isSeeAllShow" @click="seeAllComments()">
            <span>查看全部</span>
            <van-icon name="arrow"/>
          </div>
        </van-row>
      </div>
    </div>
    <div>
      <div class="photograph">
        <van-row>
          <div class="title" @click="seePhotoList()">
            <span>相册</span><span class="totalNumber">(共{{totalPhotoNumber}}张)</span>
            <span class="more"><van-icon name="arrow"/></span>
          </div>
          <div class="photos" v-if="isImgListShow">
            <img v-for="(photos, imgListIndex) in imgList"
                 :key="imgListIndex" :src="photos" v-if="imgListIndex<=3"
                 @click="seePhoto(photos,imgList)"/>
          </div>
        </van-row>
      </div>
    </div>
    <van-action-sheet :show="show" :actions="actions" cancel-text="取消"
                      @select="onSelect" @cancel="onCancel"/>
    <van-dialog id="van-dialog"/>
  </div>
</template>

<script>
import {apiurl} from "@/service/api.js";
import {mapGetters, mapMutations} from 'vuex';
import Dialog from '../../../static/vant-weapp/dist/dialog/dialog.js';

export default {
  data() {
    return {
      userId: '',
      uid: '',
      longitude: 0,
      latitude: 0,
      placeDetailData: {},
      name: '',
      overallRating: 0,
      distance: '',
      address: '',
      showtag: '',
      sugTime: '',
      bestTime: '',
      telephone1: '',
      telephone2: '',
      isOneTelephone: true,// 判断是否有两个电话
      tags1: [],
      tags1ShowIndex: 0,
      tag1OfContent: [],
      tag2OfContent: [],
      isTagShow: true,
      commentNumber: 0,
      commentListInfo: [],
      imgList: [],
      hour: '',
      introduce: '',
      isIntroduceShow: false,
      isSugTimeShow: false,
      isBestTimeShow: false,
      isSurveyOfScenery: false,
      isTelephoneShow: false,
      isTelephone1Show: false,
      isTelephone2Show: false,
      isHourShow: false,
      isTag2OfContentShow: false,
      isImgListShow: false,
      isSeeAllShow: false,
      banner: [],
      userInfo: {},
      likeImgUrl: '/static/images/like.png',
      likedHistory: {},
      totalPhotoNumber: 0,
      show: false,
      phoneNumber: '',
      price: 0,
      placeType: 1,
      actions: [
        {
          name: '',
          disabled: true
        },
        {
          name: '呼叫'
        }
      ],
      isComment: false// 用于辨别是否为添加评论操作
    }
  },
  computed: {
    ...mapGetters([
      'disc'
    ])
  },
  created() {

  },
  onShow() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    if (this.isComment) {
      this.getLikedCommentByPlaceIdAndUserId();
      this.addOrUpdateUserHistory();
    }
  },
  mounted() {
    this.userInfo = this.$store.getters.disc;
    this.isComment = this.userInfo.isComment;
    this.uid = this.$route.query.uid;
    this.getLikedCommentByPlaceIdAndUserId();
    this.addOrUpdateUserHistory();
  },
  onUnload() {
    this.banner = [];
    this.tag1OfContent = [];
    this.tag2OfContent = [];
    this.commentListInfo = [];
    this.tags1 = [];
    this.imgList = [];
    this.name = '';
    this.overallRating = 0;
    this.distance = '';
    this.address = '';
    this.showtag = '';
    this.sugTime = '';
    this.bestTime = '';
    this.telephone1 = '';
    this.telephone2 = '';
    this.commentNumber = 0;
    this.totalPhotoNumber = 0;
    this.hour = '';
    this.introduce = '';
    this.phoneNumber = '';
    this.price = 0;
    this.uid = '';
    this.userInfo.isComment = false;
    this.setDisc(this.userInfo);
  },
  methods: {
    ...mapMutations({
      setDisc: 'set_disc'
    }),
    /**
     * 预览图片
     */
    seePhoto(index, imgList) {
      this.userInfo.isComment = false;
      this.setDisc(this.userInfo);
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
    getPlaceDetailData() {
      this.tag1OfContent = [];
      this.tag2OfContent = [];
      this.imgList = [];
      this.banner = [];
      this.longitude = this.$route.query.longitude;
      this.latitude = this.$route.query.latitude;
      this.$httpWX.get({
        url: apiurl.getPlaceByUid,
        data: {
          uid: this.uid,
          longitude: this.longitude,
          latitude: this.latitude
        },
      }).then(res => {
        this.placeDetailData = res.data;
        this.placeType = this.placeDetailData.place.type;
        if (this.placeDetailData.placePhotoList != null && this.placeDetailData.placePhotoList.length > 0) {
          for (let i = 0; i < this.placeDetailData.placePhotoList.length; i++) {
            if (this.placeDetailData.placePhotoList[i].imageUrl.indexOf("/images/placephoto") != -1) {
              this.placeDetailData.placePhotoList[i].imageUrl = 'https://wzcb97.top/' + this.placeDetailData.placePhotoList[i].imageUrl;
            }
            this.banner.push(this.placeDetailData.placePhotoList[i].imageUrl);
            if (i == 4) {
              break;
            }
          }
        } else {
          this.banner.push(this.placeDetailData.place.image);
        }
        this.name = this.placeDetailData.place.name;
        if (this.placeDetailData.place.distance / 1000 >= 10000) {
          this.distance = '>10000km';
        } else {
          this.distance = this.placeDetailData.place.distance ? this.placeDetailData.place.distance >= 1000 ?
            (this.placeDetailData.place.distance / 1000).toFixed(1) + 'km' :
            parseInt(this.placeDetailData.place.distance) + 'm' : 0 + 'm';
        }
        this.address = this.placeDetailData.place.address;
        this.overallRating = this.placeDetailData.place.overallRating;
        if (this.placeDetailData.place.type == 2) {
          if (!this.placeDetailData.place.price || this.placeDetailData.place.price == '' ||
            this.placeDetailData.place.price == '暂无' || this.placeDetailData.place.price == 'false') {
            this.price = 0;
          } else {
            this.price = parseInt(this.placeDetailData.place.price);
          }
        }
        this.showtag = this.placeDetailData.place.showtag;
        if (this.placeDetailData.place.tags1) {
          let tags1Array = this.placeDetailData.place.tags1.split(';');
          let tags1Length = 0;
          for (let j = 0; j < tags1Array.length; j++) {
            tags1Length = tags1Length + tags1Array[j].length;
            if (tags1Length <= 10) {
              this.tags1ShowIndex = j;
            } else {
              break;
            }
            this.tags1.push(tags1Array[j]);
          }
        } else {
          this.tags1 = [];
        }
        // 判断是否显示景点简介
        if (this.placeDetailData.place.introduce && this.placeDetailData.place.introduce != '暂无') {
          if (this.placeDetailData.place.introduce.length > 65) {
            this.introduce = this.placeDetailData.place.introduce.substring(0, 65) + '...';
          } else {
            this.introduce = this.placeDetailData.place.introduce;
          }
          this.isIntroduceShow = true;
        } else {
          this.isIntroduceShow = false;
        }
        // 判断是否显示建议游玩时间
        if (this.placeDetailData.place.sugTime && this.placeDetailData.place.sugTime != '' && this.placeDetailData.place.sugTime != '暂无') {
          this.sugTime = this.placeDetailData.place.sugTime;
          this.isSugTimeShow = true;
        } else {
          this.isSugTimeShow = false;
        }
        // 判断是否显示建议游玩季节
        if (this.placeDetailData.place.bestTime && this.placeDetailData.place.bestTime != '' && this.placeDetailData.place.bestTime != '暂无') {
          this.bestTime = this.placeDetailData.place.bestTime;
          this.isBestTimeShow = true;
        } else {
          this.isBestTimeShow = false;
        }
        // 判断是否显示景点概况
        if (!this.isIntroduceShow && !this.isSugTimeShow && !this.isBestTimeShow) {
          this.isSurveyOfScenery = false;
        } else {
          this.isSurveyOfScenery = true;
        }
        // 判断是否显示电话信息
        if (this.placeDetailData.place.phone && this.placeDetailData.place.phone != 'null') {
          this.isTelephoneShow = true;
          let phoneArray = this.placeDetailData.place.phone.split(',');
          this.telephone1 = phoneArray[0];
          if (phoneArray.size > 1) {
            this.isTelephone1Show = false;
            this.isTelephone2Show = true;
            this.telephone2 = phoneArray[1];
          } else {
            this.isTelephone1Show = true;
            this.isTelephone2Show = false;
          }
        } else {
          this.isTelephoneShow = false;
          this.isTelephone1Show = false;
          this.isTelephone2Show = false;
        }
        // 判断是否显示营业时间
        if (this.placeDetailData.place.shopHours != '暂无' && this.placeDetailData.place.shopHours && this.placeDetailData.place.shopHours != '') {
          this.hour = this.placeDetailData.place.shopHours;
          this.isHourShow = true;
        } else {
          this.isHourShow = false;
        }
        if (this.placeDetailData.place.content != '暂无' && this.placeDetailData.place.content && this.placeDetailData.place.content != '') {
          this.isTagShow = true;
          let contentArray = this.placeDetailData.place.content.split(';');
          if (contentArray.length <= 3) {
            for (let i = 0; i < contentArray.length; i++) {
              this.tag1OfContent.push(contentArray[i]);
            }
            this.isTag2OfContentShow = false;
          } else if (contentArray.length > 3 && contentArray.length <= 6) {
            for (let i = 0; i < contentArray.length; i++) {
              if (i < 3) {
                this.tag1OfContent.push(contentArray[i]);
              } else {
                this.tag2OfContent.push(contentArray[i]);
              }
            }
            this.isTag2OfContentShow = true;
          } else {
            for (let i = 3; i < 6; i++) {
              if (i < 3) {
                this.tag1OfContent.push(contentArray[i]);
              } else {
                this.tag2OfContent.push(contentArray[i]);
              }
            }
            this.isTag2OfContentShow = true;
          }
        } else {
          this.isTagShow = false;
        }
        this.handleCommentList();
        // 处理图片列表
        if (res.data.placePhotoList.length > 0) {
          for (let i = 0; i < res.data.placePhotoList.length; i++) {
            this.imgList.push(res.data.placePhotoList[i].imageUrl);
          }
          this.totalPhotoNumber = this.imgList.length;
          this.isImgListShow = true;
        } else {
          this.isImgListShow = false;
        }
      })
    },
    // 处理评论
    handleCommentList() {
      this.$httpWX.get({
        url: apiurl.getPlaceCommentByUid,
        data: {
          uid: this.placeDetailData.place.uid,
          pageNo: 1,
          pageSize: 3
        },
      }).then(res => {
        this.commentListInfo = res.data.items;
        this.commentNumber = res.data.totalNum;
        if (this.commentNumber > 0) {
          this.isSeeAllShow = true;
        } else {
          this.isSeeAllShow = false;
        }
        let userImgArray = [];
        let length = 0;
        if (this.commentListInfo.length <= 3) {
          length = this.commentListInfo.length;
        } else {
          length = 3;
        }
        for (let i = 0; i < length; i++) {
          if (this.commentListInfo[i].comment.length > 58) {
            this.$set(this.commentListInfo[i], 'newComment', this.commentListInfo[i].comment.substring(0, 58) + '...');
          } else {
            this.$set(this.commentListInfo[i], 'newComment', this.commentListInfo[i].comment);
          }
          if (this.commentListInfo[i].imageList) {
            var userImg = JSON.parse(this.commentListInfo[i].imageList);
            userImgArray = [];
            for (let j = 0; j < userImg.length; j++) {
              if (userImg[j].pic_url.indexOf("/images/comment") != -1) {
                userImgArray.push('https://wzcb97.top' + userImg[j].pic_url);
              } else {
                userImgArray.push(userImg[j].pic_url);
              }
            }
            this.$set(this.commentListInfo[i], 'userImg', userImgArray);
            if (userImgArray.length > 3) {
              this.$set(this.commentListInfo[i], 'moreThanThree', true);
            } else {
              this.$set(this.commentListInfo[i], 'moreThanThree', false);
            }
            this.$set(this.commentListInfo[i], 'imgLength', userImgArray.length);
          } else {
            this.$set(this.commentListInfo[i], 'userImg', null);
          }
          this.$set(this.commentListInfo[i], 'date', this.commentListInfo[i].date.split(" ")[0]);
          if (this.likedHistory) {// 有点赞记录
            for (let m = 0; m < this.likedHistory.length; m++) {
              if (this.commentListInfo[i].id == this.likedHistory[m].placeCommentId) {
                this.$set(this.commentListInfo[i], 'likeImgUrl', '/static/images/liked.png');
                break;
              } else {
                this.$set(this.commentListInfo[i], 'likeImgUrl', '/static/images/like.png');
              }
            }
          } else {// 无点赞记录
            this.$set(this.commentListInfo[i], 'likeImgUrl', '/static/images/like.png');
          }
        }
      })
    },
    like(commentId, likeImgUrl, index) {
      this.$httpWX.post({
        url: apiurl.updateLikes,
        data: {
          userId: this.userInfo.openid,
          placeCommentId: commentId,
          placeId: this.uid
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
        } else {
          wx.showToast({
            title: res.message,
            duration: 3000,
            icon: 'none'
          });
        }
      })
    },
    getLikedCommentByPlaceIdAndUserId() {
      this.$httpWX.get({
        url: apiurl.getLikedCommentByPlaceIdAndUserId,
        data: {
          placeId: this.uid,
          openid: this.userInfo.openid
        },
      }).then(res => {
        this.likedHistory = res.data;
        this.getPlaceDetailData();
      })
    },
    phoneCall(number) {
      this.show = true;
      this.actions[0].name = number;
      this.phoneNumber = number;
    },
    onSelect(index) {
      this.userInfo.isComment = false;
      this.setDisc(this.userInfo);
      if (index.target.name == '呼叫') {
        wx.makePhoneCall({
          phoneNumber: this.phoneNumber,
        })
      }
    },
    onCancel() {
      this.show = false;
    },
    addOrUpdateUserHistory() {// 添加或更新用户浏览记录
      this.$httpWX.post({
        url: apiurl.addOrUpdateUserHistory,
        data: {
          userId: this.userInfo.openid,
          placeId: this.uid
        },
      }).then(res => {
      })
    },
    seeIntroduce() {
      Dialog.alert({
        message: this.placeDetailData.place.introduce
      }).then(() => {
      });
    },
    navigation() {
      wx.openLocation({
        latitude: parseFloat(this.placeDetailData.place.latitude),
        longitude: parseFloat(this.placeDetailData.place.longitude),
        name: this.name,
        address: this.address
      });
    },
    addComment() {
      this.userInfo.isComment = false;
      this.setDisc(this.userInfo);
      this.$router.push({
        path: `../addcomment/main`,
        query: {
          title: this.name,
          placeId: this.uid
        }
      });
    },
    seeAllComments() {
      this.userInfo.isComment = false;
      this.setDisc(this.userInfo);
      this.$router.push({
        path: `../commentlist/main`,
        query: {
          title: this.name,
          placeId: this.uid
        }
      });
    },
    seePhotoList() {
      this.userInfo.isComment = false;
      this.setDisc(this.userInfo);
      this.$router.push({
        path: `../photolist/main`,
        query: {
          title: this.name,
          placeId: this.uid
        }
      });
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

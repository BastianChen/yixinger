<template>
  <div class="index">
    <div class="firstDiv">
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
                      style="width:30px;height:15px;background:#000000;opacity:0.6;color:#ffffff;position:absolute;font-size:12px;text-align:center;right:65px;margin-top:52px;">{{comment.imgLength}}张</span>
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
          发表评论
        </button>
      </van-row>
    </div>
  </div>
</template>

<script>
  import {apiurl} from "@/service/api.js";

  export default {
    data() {
      return {
        isComment: false,
        pageNo: 1,
        pageSize: 10,
        commentListInfo: []
      }
    },
    onLoad(opts) {
    },
    mounted() {
      this.getCommentList();
    },
    methods: {
      commit() {
        this.isComment = false;
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
        }).then(data => {
          this.commentListInfo = res.data;
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

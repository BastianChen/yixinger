<template>
  <div class="index">
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true"
              duration="500">
        <block v-for="(item, index) in banner " :key="index">
          <swiper-item class="swiper-item">
            <image :src="item" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="info">
      <van-row>
        <span class="name">
          {{name}}
        </span>
      </van-row>
      <van-row class="distanceAndAddress">
        <van-col span="4">
          {{distance}}|
        </van-col>
        <van-col span="19" offset="1">
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
        <van-col span="5">
          <div class="showTag">
            {{showtag}}
          </div>
        </van-col>
        <van-col span="12">
          <van-tag v-for="(item, tags1Index) in tags1" :key="tags1Index" v-if="tags1Index<3" color="#FFF6EF"
                   text-color="#C7A98B"
                   class="tags1">
            {{item}}
          </van-tag>
        </van-col>
      </van-row>
    </div>
    <div class="introduce">
      <van-row>
        <div class="title">
          景区概况
        </div>
        <div class="content">
          <van-row>
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
        <div class="sugTime">
          <span class="firstSpan">建议游玩</span><span class="secondSpan">{{sugTime}}</span>
        </div>
        <div class="sugTime">
          <span class="firstSpan">最佳季节</span><span class="secondSpan">{{bestTime}}</span>
        </div>
      </van-row>
    </div>
    <div class="telephone">
      <van-row>
        <div class="title">
          电话
        </div>
        <div class="one">
          {{telephone1}}
        </div>
        <div class="two">
          <span class="otherSpan">{{telephone1}}</span>
          <span class="centerSpan">|</span>
          <span class="otherSpan">{{telephone2}}</span>
        </div>
      </van-row>
    </div>
    <div>
      <div class="shopHours">
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
            <div style="margin-top: 10px">
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
            >
              <van-icon name="edit" size="15px" style="padding-top: 5px"/>
              写评论
            </button>
          </div>
          <div class="commentDetails">
            <div class="commentDetail" v-for="(comment, commentListInfoIndex) in commentListInfo "
                 :key="commentListInfoIndex">
              <van-row>
                <van-col span="3">
                  <img class="portrait"
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
                      <span class="rate">{{comment.overallRating}}</span>
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
                           :src="img"
                           :data-src="img" v-if="imgIndex<3&&img" @click="seePhoto(img)"/>
                      <!--<img style="height: 70px;width: 70px;margin-right: 15px"-->
                      <!--src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"/>-->
                      <!--<img style="height: 70px;width: 70px;margin-right: 15px"-->
                      <!--src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"/>-->
                      <span v-if="imgIndex>3"
                            style="width:25px;height:15px;background:#000000;opacity:0.6;color:#ffffff;position:absolute;font-size:12px;text-align:center;right:66px;margin-top:55px;">9张</span>
                    </div>
                  </van-row>
                  <van-row>
                    <div class="bottom">
                      <span class="resource">{{comment.resource}}</span>
                      <img class="likeImg" src="../../../static/images/like.png"/>
                      <span class="likes">5</span>
                    </div>
                  </van-row>
                </van-col>
              </van-row>
            </div>
            <!--<div class="commentDetail">-->
            <!--<van-row>-->
            <!--<van-col span="3">-->
            <!--<img class="portrait"-->
            <!--src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"/>-->
            <!--</van-col>-->
            <!--<van-col span="19" offset="1">-->
            <!--<van-row>-->
            <!--<span class="userName">158****3385</span>-->
            <!--</van-row>-->
            <!--<van-row>-->
            <!--<van-col span="8">-->
            <!--<van-rate-->
            <!--:value="overallRating"-->
            <!--size="13"-->
            <!--count="5"-->
            <!--disabled-color="#00BFFF"-->
            <!--disabled-->
            <!--/>-->
            <!--</van-col>-->
            <!--<van-col span="3">-->
            <!--<span class="rate">{{overallRating}}</span>-->
            <!--</van-col>-->
            <!--<van-col span="8" offset="5">-->
            <!--<div class="time"><span>2019-04-04</span></div>-->
            <!--</van-col>-->
            <!--</van-row>-->
            <!--<van-row>-->
            <!--<div class="detail">-->
            <!--<span>-->
            <!--位置：地铁🚇一号线西湖文化广场C出口，周边交通便利环境：近武林广场，武林码头，杭州大厦，比较热闹博物馆：周一闭馆，平时...-->
            <!--</span>-->
            <!--</div>-->
            <!--</van-row>-->
            <!--<van-row>-->
            <!--<div>-->
            <!--<img style="height: 70px;width: 70px;margin-right: 15px"-->
            <!--src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"/>-->
            <!--<img style="height: 70px;width: 70px;margin-right: 15px"-->
            <!--src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"/>-->
            <!--<img style="height: 70px;width: 70px;margin-right: 15px"-->
            <!--src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132"/>-->
            <!--<span-->
            <!--style="width:25px;height:15px;background:#000000;opacity:0.6;color:#ffffff;position:absolute;font-size:12px;text-align:center;right:66px;margin-top:55px;">9张</span>-->
            <!--</div>-->
            <!--</van-row>-->
            <!--<van-row>-->
            <!--<div class="bottom">-->
            <!--<span class="resource">来自百度地图</span>-->
            <!--<img class="likeImg" src="../../../static/images/like.png"/>-->
            <!--<span class="likes">5</span>-->
            <!--</div>-->
            <!--</van-row>-->
            <!--</van-col>-->
            <!--</van-row>-->
            <!--</div>位置：地铁🚇一号线西湖文化广场C出口，周边交通便利环境：近武林广场，武林码头，杭州大厦，比较热闹博物馆：周一闭馆，平时...-->
          </div>
          <div class="seeAll">
            <span>查看全部</span>
            <van-icon name="arrow"/>
          </div>
        </van-row>
      </div>
    </div>
    <div>
      <div class="photograph">
        <van-row>
          <div class="title">
            <span>相册</span><span class="more"><van-icon name="arrow"/></span>
          </div>
          <div class="photos">
            <img v-for="(item, imgListIndex) in imgList "
                 :key="imgListIndex" :src="item" :data-src="item" v-if="imgListIndex<=3" @click="seePhoto(item)"/>
          </div>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import {apiurl} from "@/service/api.js";

export default {
  data() {
    return {
      uid: '',
      placeDetailData: {},
      name: '',
      overallRating: 0,
      distance: '11.4km',
      address: '',
      showtag: '',
      sugTime: '',
      bestTime: '',
      telephone1: '',
      telephone2: '',
      isOneTelephone: true,// 判断是否有两个电话
      tags1: [],
      // tag1OfContent: ['人气旺(323)', '景色优美(299)', '免费项目(94)'],
      // tag2OfContent: ['环境很好(79)', '收费合理(59)', '水很清澈(35)'],
      tag1OfContent: [],
      tag2OfContent: [],
      isTagShow: true,
      commentNumber: 0,
      commentListInfo: [],
      imgList: ['http://hiphotos.baidu.com/map/pic/item/b3fb43166d224f4a23eb6f7404f790529822d162.jpg', 'http://hiphotos.baidu.com/map/pic/item/738b4710b912c8fc4a42f05af1039245d78821f7.jpg', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIn6LQJNqACR7upOO7QQ8wcoZxHU9rzekAnUVQmnGDyad3k0mX6DJ0iaYKUicYANOD9yAVLC805hyPw/132'],
      hour: '周五至周日11:00-13:30;16:30-20:30周一至周四11:00-13:00;16:30-20:30非营;周五至周日11:00-13:30',
      introduce: '西湖古称“钱塘湖”，又名“西子湖”，古代诗人苏轼就对它评价道：“欲把西湖比西子，淡妆西湖古称“钱塘湖”，又名“名名名名名子，淡妆浓抹总...',
      // banner: [{
      //   "id": 381,
      //   "name": "海底捞火锅(天虹商场店)",
      //   "address": "杭州市江干区新塘路天虹商场A座5层",
      //   "phone": "(0571)86088932,(0571)86088932",
      //   "uid": "813f4ba4ad2bf7694107c1d9",
      //   "showtag": "火锅",
      //   "image": "http://hiphotos.baidu.com/map/pic/item/b3fb43166d224f4a23eb6f7404f790529822d162.jpg",
      //   "shopHours": "09:00-00:00 00:00-07:00",
      //   "commentNumber": 1,
      //   "latitude": 30.264475835188,
      //   "longitude": 120.20888925074,
      //   "price": "127.0",
      //   "overallRating": 5,
      //   "tags1": null,
      //   "wordList": null,
      //   "imgList": null,
      //   "content": "[[{\"count\":2,\"label_id\":\"cater_02_sub07\",\"label_name\":\"菜品精致\"}],[{\"count\":2,\"label_id\":\"cater_03_sub03\",\"label_name\":\"服务很好\"},{\"count\":1,\"label_id\":\"cater_03_sub01\",\"label_name\":\"上菜很快\"}],[{\"count\":1,\"label_id\":\"cater_04_sub03\",\"label_name\":\"环境不错\"},{\"count\":1,\"label_id\":\"cater_04_sub06\",\"label_name\":\"人气旺\"}],[{\"count\":1,\"label_id\":\"cater_02_sub03\",\"label_name\":\"味道不错\"}]]",
      //   "commentList": "[{\"overall_rating\":5,\"one_url\":null,\"taste_rating\":null,\"user_name\":\"我的心痛以死了\",\"environment_rating\":null,\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/2bd17f5d?r=1551835828\",\"one_url_mobile\":null,\"service_rating\":null,\"poi_id\":\"17256439067194809041\",\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"user_url_mobile\":null,\"date\":\"2018-07-11 19:39\",\"user_url\":null,\"comment_num\":1,\"cmt_icons\":{\"comment_icon\":{\"type\":2,\"text\":\"首评\"}},\"time_stamp\":1531309174,\"price\":0,\"content\":\"服务特别好，值得推荐，交通方便\",\"quality\":null,\"uniqkey\":\"4be858711430e55a652db2d1c0711303\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":null,\"comment_url_mobile\":null,\"uid\":\"17256439067194809041:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":5,\"mark_userscore\":10,\"mark_total\":35,\"cmt_id\":\"311849874\",\"reply\":null,\"favorNum\":2,\"isAgree\":false}]",
      //   "photoList": null,
      //   "introduce": null,
      //   "count": 0,
      //   "sugTime": null,
      //   "bestTime": null,
      //   "weather": null,
      //   "type": 2,
      //   "distance": null
      // }, {
      //   "id": 376,
      //   "name": "采荷公园",
      //   "address": "五安路与采菱东路交叉口西北100米",
      //   "phone": "null",
      //   "uid": "07f3c8b51f4d5b626240a902",
      //   "showtag": "公园",
      //   "image": "http://hiphotos.baidu.com/map/pic/item/738b4710b912c8fc4a42f05af1039245d78821f7.jpg",
      //   "shopHours": "暂无",
      //   "commentNumber": 3,
      //   "latitude": 30.255372071061,
      //   "longitude": 120.19782741611,
      //   "price": "false",
      //   "overallRating": 4.8,
      //   "tags1": null,
      //   "wordList": null,
      //   "imgList": null,
      //   "content": "[]",
      //   "commentList": "[{\"overall_rating\":5,\"date\":\"2017-09-05 00:00\",\"one_url\":\"http://m.dianping.com/review/368090601\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"tongkekehz\",\"uniqkey\":\"2e5cc4cd1c07e587b759cd37ccce0afd\",\"user_logo\":\"http://store.is.autonavi.com/showpic/bedbd48edcad2d956b507c50eed81114\",\"time_stamp\":1504540800,\"one_url_mobile\":\"http://m.dianping.com/review/368090601\",\"price\":null,\"content\":\"总有这样一种心情 特别适合此情此景\",\"pics\":[{\"pic_url\":\"http://store.is.autonavi.com/showpic/7e72076211cc99e2168469772b7df2cb\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/087d26fe739d994cf72eee093cb0fe72\",\"pic_pv\":12},{\"pic_url\":\"http://store.is.autonavi.com/showpic/e83bfeaddfb6ad1344b5716fd5a8c080\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/bb512433a08e38ca32c79b082bbbfb0f\",\"pic_pv\":4},{\"pic_url\":\"http://store.is.autonavi.com/showpic/b23c83b8ac3e0cd993385eb871d058ae\",\"pic_pv\":2}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"17992255917256605695\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/56611913/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/56611913/review_all\",\"uid\":\"17992255917256605695:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":5,\"mark_userscore\":10,\"mark_total\":100,\"comment_num\":2,\"cmt_id\":\"2e5cc4cd1c07e587b759cd37ccce0afd\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-07-02 21:43\",\"one_url\":\"http://www.dianping.com/shop/56611913/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/48493911\",\"user_url_mobile\":null,\"poi_id\":\"17992255917256605695\",\"user_name\":\"琦琦treasure\",\"uniqkey\":\"7684ba8ac8eb39f0bb4c521be4f8aea8\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/98e470a7b39a0a279910627f02faf4632285.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1530538980,\"one_url_mobile\":\"http://www.dianping.com/shop/56611913/review_all\",\"price\":null,\"content\":\"采荷公园，位于庆春东路五安路采荷街道对面，公园很小，走一圈最多10-15分钟，有个小池塘，里面有荷花，鱼🐟，虾🦐等，有时边上家居养的鸭子🦆也会在这里放养。白天，晚上来公园锻炼的人比较多，广场舞，气功，跑步🏃‍♀️走路🚶‍♀️跳舞💃都有，下午有人来钓鱼🎣虾或者打牌，看书，聊天，给小区带来一个不错的娱乐环境😊\",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":2,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/56611913/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/56611913/review_all\",\"uid\":\"17992255917256605695:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"7684ba8ac8eb39f0bb4c521be4f8aea8\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-11-23 00:05\",\"one_url\":null,\"service_rating\":null,\"user_url\":null,\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":{\"type\":2,\"text\":\"首评\"}},\"user_name\":\"在野法曹lawyer\",\"uniqkey\":\"760e98fe9af5904d6bf67a5e227bde1a\",\"user_logo\":null,\"time_stamp\":1542902712,\"one_url_mobile\":null,\"price\":0,\"content\":\"环境不错\",\"poi_id\":\"17992255917256605695\",\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":1,\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":null,\"comment_url_mobile\":null,\"uid\":\"17992255917256605695:ugc\",\"mark_source\":10,\"mark_duration\":15,\"mark_multimedia\":0,\"mark_content\":0,\"mark_userscore\":10,\"mark_total\":35,\"cmt_id\":\"777786455\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
      //   "photoList": "https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=07f3c8b51f4d5b626240a902&width=720&height=360&quality=80&fovx=120;http://hiphotos.baidu.com/map/pic/item/6a600c338744ebf8b600c560d2f9d72a6059a778.jpg;http://hiphotos.baidu.com/map/pic/item/2934349b033b5bb598f9efb33dd3d539b600bc55.jpg;http://hiphotos.baidu.com/map/pic/item/00e93901213fb80e9674d1bd3ad12f2eb9389437.jpg",
      //   "introduce": "暂无",
      //   "count": null,
      //   "sugTime": "暂无",
      //   "bestTime": "暂无",
      //   "weather": null,
      //   "type": 1,
      //   "distance": null
      // }, {
      //   "id": 350,
      //   "name": "夏衍旧居",
      //   "address": "浙江省杭州市江干区严家路50号",
      //   "phone": "null",
      //   "uid": "b3aa435d9248560a1576433d",
      //   "showtag": "文物古迹",
      //   "image": "http://hiphotos.baidu.com/lbsugc/pic/item/8644ebf81a4c510fd2bbe1076c59252dd42aa5ab.jpg",
      //   "shopHours": "暂无",
      //   "commentNumber": 3,
      //   "latitude": 30.273301448474,
      //   "longitude": 120.20214178904,
      //   "price": "false",
      //   "overallRating": 4.7,
      //   "tags1": null,
      //   "wordList": null,
      //   "imgList": null,
      //   "content": "[[{\"count\":1,\"label_id\":\"scope_3_01\",\"label_name\":\"设施新全\"}],[{\"count\":1,\"label_id\":\"scope_2_15\",\"label_name\":\"位置较偏\"}]]",
      //   "commentList": "[{\"overall_rating\":5,\"date\":\"2018-03-15 12:19\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/949fbe56?r=1551835681\",\"user_name\":\"157******27\",\"uniqkey\":\"9c7a0c2bb4c52ec4c06361f229c72cf8\",\"poi_id\":\"17992255822767325183\",\"time_stamp\":1521087588,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"旁边拆迁，13年9月就闭馆了。\\n专程去的，还好有一位工作人员在，大爷人很好，让我进去了。陈设的物品都收起来了，电子设备一律停用，只有宣传展示板，但是环境安静幽雅，还是值得一看的。\",\"pics\":[{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/8644ebf81a4c510fd2bbe1076c59252dd42aa5ab.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":165},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/0e2442a7d933c895793f9b66dd1373f08202006d.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":154},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/d01373f082025aaf0a737dd6f7edab64034f1a6d.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":237},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/5ab5c9ea15ce36d3c27b802d36f33a87e950b1ab.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":148},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/b151f8198618367a113a7cc022738bd4b31ce578.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":121},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/b219ebc4b74543a93e0bf9d112178a82b901149e.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":107}],\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"cmt_icons\":{\"comment_icon\":{\"type\":2,\"text\":\"首评\"}},\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"17992255822767325183:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":90,\"mark_content\":20,\"mark_userscore\":10,\"mark_total\":140,\"comment_num\":2,\"cmt_id\":\"304439544\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":3,\"date\":\"2017-06-25 00:00\",\"one_url\":\"http://m.dianping.com/review/354824907\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"晓明的小名是小明\",\"uniqkey\":\"09b857ac5abf0523846581f318ee8088\",\"user_logo\":\"http://store.is.autonavi.com/showpic/ad0f8515931efeb7193786103042460c\",\"time_stamp\":1498320000,\"one_url_mobile\":\"http://m.dianping.com/review/354824907\",\"price\":null,\"content\":\"夏衍故居建于清末民初，属中式平房，位于杭州庆春门外严家弄。著名作家夏衍曾居住于此。现为陈列室，是杭州市文物保护单位。故居原名八咏堂，为五开间七进深院落，为夏衍诞生至青少年时代的活动地，现经扩建，占地一千两百平方米，建筑面积为六百平方米，采用院落式和江南民居式样。陈列室展示了夏衍一生从事电影活动的生平事迹，以及夏衍生前用过眼镜、衣物，还有名家字画等。大理想家（DreamInn）客栈云游至此不禁对现如今正在整改的面貌心痛，附近拆迁建设破烂不堪，看门的大爷态度很差，一问三不知，但模糊的说明可能要搞个几年，目前不对外，照片是工地状态下拍摄的，小伙伴们自己联想吧。\",\"pics\":[{\"pic_url\":\"http://store.is.autonavi.com/showpic/725535630d64ad28b5cc2f35e9e9efe9\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/ab4abc5e8234009039fca7fec1f824bb\",\"pic_pv\":13},{\"pic_url\":\"http://store.is.autonavi.com/showpic/bd2124d16761a6b7d456b2f7a6ee9cb4\",\"pic_pv\":14},{\"pic_url\":\"http://store.is.autonavi.com/showpic/db4fc6fc5fcaab68745ed1c60273d573\",\"pic_pv\":8},{\"pic_url\":\"http://store.is.autonavi.com/showpic/9e39ab66545c620914981af5288f89de\",\"pic_pv\":5}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"17992255822767325183\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/1624672/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/1624672/review_all\",\"uid\":\"17992255822767325183:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":35,\"mark_userscore\":5,\"mark_total\":125,\"comment_num\":4,\"cmt_id\":\"09b857ac5abf0523846581f318ee8088\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-03-15 12:19\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/949fbe56?r=1551835681\",\"user_name\":\"157******27\",\"uniqkey\":\"e4873fc8ebb42f8e0e0f38d21821306a\",\"poi_id\":\"17992255822767325183\",\"time_stamp\":1521087588,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"\",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"comment_num\":2,\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"17992255822767325183:ugc\",\"mark_source\":10,\"mark_duration\":10,\"mark_multimedia\":30,\"mark_content\":-20,\"mark_userscore\":10,\"mark_total\":40,\"cmt_id\":\"304439546\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
      //   "photoList": "http://hiphotos.baidu.com/lbsugc/pic/item/8644ebf81a4c510fd2bbe1076c59252dd42aa5ab.jpg;http://hiphotos.baidu.com/lbsugc/pic/item/0e2442a7d933c895793f9b66dd1373f08202006d.jpg;http://hiphotos.baidu.com/lbsugc/pic/item/d01373f082025aaf0a737dd6f7edab64034f1a6d.jpg;http://hiphotos.baidu.com/lbsugc/pic/item/5ab5c9ea15ce36d3c27b802d36f33a87e950b1ab.jpg",
      //   "introduce": "暂无",
      //   "count": null,
      //   "sugTime": "暂无",
      //   "bestTime": "暂无",
      //   "weather": null,
      //   "type": 1,
      //   "distance": null
      // }, {
      //   "id": 370,
      //   "name": "杭州基督教会崇一堂",
      //   "address": "杭州市江干区新塘路26号",
      //   "phone": "(0571)86961163",
      //   "uid": "2089583e646dc5ba14b54b58",
      //   "showtag": "教堂",
      //   "image": "http://hiphotos.baidu.com/map/pic/item/37d12f2eb9389b507d4990c08835e5dde6116ee9.jpg",
      //   "shopHours": "09:00-18:00",
      //   "commentNumber": 3,
      //   "latitude": 30.259386365918,
      //   "longitude": 120.20873161583,
      //   "price": "false",
      //   "overallRating": 4.5,
      //   "tags1": null,
      //   "wordList": null,
      //   "imgList": null,
      //   "content": "[[{\"count\":2,\"label_id\":\"scope_3_01\",\"label_name\":\"设施新全\"}],[{\"count\":6,\"label_id\":\"scope_1_01\",\"label_name\":\"环境很好\"},{\"count\":5,\"label_id\":\"scope_1_03\",\"label_name\":\"人气旺\"},{\"count\":1,\"label_id\":\"scope_1_02\",\"label_name\":\"景色优美\"},{\"count\":1,\"label_id\":\"scope_1_10\",\"label_name\":\"卫生干净\"}],[{\"count\":2,\"label_id\":\"scope_2_04\",\"label_name\":\"位置好找\"}]]",
      //   "commentList": "[{\"overall_rating\":5,\"date\":\"2018-02-23 00:00\",\"one_url\":\"http://m.dianping.com/review/401373589\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"TRISTABOA\",\"uniqkey\":\"095521c9d61ae1e8f9e9c3abbf45f6be\",\"user_logo\":\"http://store.is.autonavi.com/showpic/9c6a462eada0f273833e5a6ac8a15641?type=pic\",\"time_stamp\":1519315200,\"one_url_mobile\":\"http://m.dianping.com/review/401373589\",\"price\":null,\"content\":\"20180218礼拜天，下雨。事先了解到，主日早上有两堂，家里人也有安排，所以想赶第一堂，六点多出门，只是没想到杭州的公交车班次不多，等车的时间比车开的时间要多许多。到达要将近八点了。但似乎礼拜刚开始程序，直到第二堂开始，才明白，原来这里的礼拜前半个小时是类似我们青年聚会的敬拜赞美，然后才是唱诗，读经，讲道，祝福等。两堂的信息内容不同。每个月出一期报告单上有教会聚会的时间安排，主日第一次信息分享讲章，每个月讲员的安排。硬件设施很好，聚会也比较兴旺。值得一去。\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/7uyOZ7mngA1v0NiswKHNUe2kNkLfUT3tkg__BOi0REa02gP6n_pP8IiNC4YjV8AhTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":99},{\"pic_url\":\"http://qcloud.dpfile.com/pc/CrVadRPDE4sI6JwORwmyuVG-KryHMVsf6yidMZyBviC7i7vV9ObJPOsO43b14yI-TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":96},{\"pic_url\":\"http://qcloud.dpfile.com/pc/xoyxhKMFcnoEXcdLn8R14W7IUHUy9zPCcyKidkcGYjxg6j9t0CW1LrTJzdCeGhEmTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":102},{\"pic_url\":\"http://qcloud.dpfile.com/pc/Ca9mfVnzu2KKR39ITLiOE77Cgf85N-EK-ElSUin_MBM0GUjvJzQzFwFs1fXpEp90TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":83},{\"pic_url\":\"http://qcloud.dpfile.com/pc/vmAPR2ZdRyAXWVWz8wfciTkraqKBEnk7V3pW6MbePpjjnhhjdeoakUCXE8V2yzfATYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":75},{\"pic_url\":\"http://qcloud.dpfile.com/pc/bVWpG5iBFxfH4UkLedoKtHEzPL6Phy04KTVgdFQi7rYXKNwzfgiuxdswZL2PI7n0TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":73},{\"pic_url\":\"http://qcloud.dpfile.com/pc/T74w6jeI6uukXGcv8chmNHAJmW94naW7LxopdbmbpdD0kAawvhDXOXBa2ZnI1FIWTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":67},{\"pic_url\":\"http://qcloud.dpfile.com/pc/AoNUW9beO2lZDLgjxajzs_ebweGgCYfMJbC0afpGCQ39FiMxfamhzOpBpUB36ZKETYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":80},{\"pic_url\":\"http://qcloud.dpfile.com/pc/evktjPm63CefrNzkSWOs0ThPrpv2POdLIJw02PRHSbwkNVqbowOSz6WrD4VBGHSxTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":55},{\"pic_url\":\"http://qcloud.dpfile.com/pc/cX-p39d-RhWiQSN4NQ5iN7enKhuTS1qTBQ19lnJ-BwX0kAawvhDXOXBa2ZnI1FIWTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":41},{\"pic_url\":\"http://qcloud.dpfile.com/pc/2TWMJeN7uQzS4Prz6SExtHt9GOj8heBRmbrAupy1EU0iwrBb5QDLn8whC_rzgH4hTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":3},{\"pic_url\":\"http://qcloud.dpfile.com/pc/Zja0U0VPWj4WerJ1_Fgc784kPrlvVr8DEDg5YxYoj5g-qWei53Gil9abJGGAXOm_TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":0}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"3266827264757833760\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/4691436/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/4691436/review_all\",\"uid\":\"3266827264757833760:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":60,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":130,\"comment_num\":22,\"cmt_id\":\"095521c9d61ae1e8f9e9c3abbf45f6be\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-04-02 00:00\",\"one_url\":\"http://m.dianping.com/review/409116449\",\"service_rating\":\"\",\"user_url\":\"\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"吃掉一只鞋\",\"uniqkey\":\"956ab75a350e82944e5ae33fff27b964\",\"user_logo\":\"http://store.is.autonavi.com/showpic/9c6a462eada0f273833e5a6ac8a15641?type=pic\",\"time_stamp\":1522598400,\"one_url_mobile\":\"http://m.dianping.com/review/409116449\",\"price\":null,\"content\":\"非常漂亮的教堂 是我去过的最漂亮的一个 拍的照片也是好多同学夸了 本人非基督教徒 只是慕名而来 和同学一起 果然是杭州最大的教堂 礼堂很大 人也很多 不过我是复活节去的 基本座无虚席 那天圣乐也很欢快 感受到了不一样的文化氛围\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/uxlkq1c8NRyDDO6Io78p2QllxqPIBATk64Vnla0YmgG5Pv7t-93aTa-KZ8SNGZEoTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":136},{\"pic_url\":\"http://qcloud.dpfile.com/pc/MDsPzvd7uJ39xGJiVyfdts8jsH4FcAaa8rfvyNoGa72uNpWMbCKzOc3N4RcAeSVCTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":8},{\"pic_url\":\"http://qcloud.dpfile.com/pc/7DVdnyMCuwasc5Apzyyx5rjgEPzw7JrmAMxpbrlcE5RxhwTPxxcbal6SR_KLdMFeTYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":16}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"3266827264757833760\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/4691436/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/4691436/review_all\",\"uid\":\"3266827264757833760:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":40,\"mark_content\":30,\"mark_userscore\":10,\"mark_total\":110,\"comment_num\":22,\"cmt_id\":\"956ab75a350e82944e5ae33fff27b964\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2017-12-25 14:31\",\"one_url\":\"\",\"service_rating\":null,\"user_url\":\"\",\"user_url_mobile\":\"\",\"user_logo\":\"http://himg.bdimg.com/sys/portrait/item/5e1c7426?r=1551835825\",\"user_name\":\"阿甘517\",\"uniqkey\":\"8c41c246518a7ebeb0cd291ec09049c8\",\"cmt_icons\":{\"comment_icon\":[]},\"time_stamp\":1514183460,\"one_url_mobile\":\"\",\"price\":0,\"content\":\"\",\"pics\":[{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/f9dcd100baa1cd11118210d9b212c8fcc3ce2d16.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":217},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/d62a6059252dd42ad9916252083b5bb5c8eab8ab.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":189},{\"pic_url\":\"http://hiphotos.baidu.com/lbsugc/pic/item/bba1cd11728b4710dc1b9f35c8cec3fdfc032316.jpg\",\"pic_type\":\"0\",\"pic_name\":\"\",\"pic_pv\":188}],\"video_url\":\"\",\"video_pic\":\"\",\"video_time\":\"\",\"media\":1,\"poi_id\":\"3266827264757833760\",\"src\":\"baidumap\",\"former_source\":\"ugc\",\"cn_name\":\"百度地图\",\"from\":\"map.baidu.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"3266827264757833760:ugc\",\"mark_source\":10,\"mark_duration\":5,\"mark_multimedia\":70,\"mark_content\":-20,\"mark_userscore\":10,\"mark_total\":75,\"comment_num\":18,\"cmt_id\":\"244871706\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
      //   "photoList": "https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=2089583e646dc5ba14b54b58&width=720&height=360&quality=80&fovx=120;http://hiphotos.baidu.com/map/pic/item/472309f7905298220141b2a6daca7bcb0a46d461.jpg;http://hiphotos.baidu.com/map/pic/item/dc54564e9258d109cac6bcd6dd58ccbf6c814da8.jpg;http://hiphotos.baidu.com/map/pic/item/b21bb051f8198618da20cfdd41ed2e738bd4e600.jpg",
      //   "introduce": "暂无",
      //   "count": null,
      //   "sugTime": "暂无",
      //   "bestTime": "暂无",
      //   "weather": null,
      //   "type": 1,
      //   "distance": null
      // }, {
      //   "id": 375,
      //   "name": "古庆春门",
      //   "address": "环城东路132号",
      //   "phone": "null",
      //   "uid": "2e64ef686ee2feae5b10936d",
      //   "showtag": "风景区",
      //   "image": "http://att2.citysbs.com/hangzhou/image/day_080226/middle_20080226_74c7f390e3ba09652e698DQmhRLfbje0.jpg",
      //   "shopHours": "暂无",
      //   "commentNumber": 2,
      //   "latitude": 30.25813816449,
      //   "longitude": 120.18781032115,
      //   "price": "false",
      //   "overallRating": 4.5,
      //   "tags1": null,
      //   "wordList": null,
      //   "imgList": null,
      //   "content": "[]",
      //   "commentList": "[{\"overall_rating\":5,\"date\":\"2018-04-20 00:00\",\"one_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/23507836\",\"user_url_mobile\":null,\"poi_id\":\"470119242343676612\",\"user_name\":\"张小凡09\",\"uniqkey\":\"6f802674869b05947facbd6ed0bf7d3c\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/863554f9c35bb4cd729e1b22b4469d2b428011.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1524153600,\"one_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"price\":null,\"content\":\"古庆春门是杭州城里古十大城门之一，始建于隋唐时期，据说，明初朱元璋部将常遇春率部由此入城，为祝大捷，改称庆春门<br>位置在环城东路与庆春路交叉口,原来的城门早在1959年建环城东路时拆除了，1994年在门址上筑庆春立交桥，现在看到的是2006年原址上仿古建造了一个城门,以杭州清代古城墙为原型，城墙全长66米、宽5.4米、高6.65米，两端为残墙，城墙中间建有城门，城墙里面还有个古城墙陈列馆，不过也早就大门紧闭不开放了<br>下午烈日当头，好多大伯们在城墙拱门洞里打着牌下着棋，热热闹闹的很不错。  \",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":2,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"uid\":\"470119242343676612:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"6f802674869b05947facbd6ed0bf7d3c\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":4,\"date\":\"2018-04-03 00:00\",\"one_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/54575141\",\"user_url_mobile\":null,\"poi_id\":\"470119242343676612\",\"user_name\":\"能美酱好吃\",\"uniqkey\":\"33149a180d0dbab008352f29a8a0dcf9\",\"user_logo\":\"https://p0.meituan.net/userheadpicbackend/2c08a2e1489fa4be6d7154d1d3c27f9a243100.jpg%40120w_120h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1522684800,\"one_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"price\":null,\"content\":\"始建于南宋高宗绍兴年间。它有着好几个名字，诸如“东青门”、“菜市门”和“太平门”。 “东青门”是庆春门始建时的名字。“菜市门”的由来是因为门外有菜市。而“太平门”则是元末张士诚改筑杭城之后的俗称，庆春门之称始于明朝。由于杭州东面城垣几次扩大、故地址亦多有变迁。庆春门内的庆春街，历来为繁华街道之一。惠济桥位于庆春门的西面，俗称 “盐桥”，是宋时盐船待榷（卖）处”。东面则有菜市桥，因宋时的蔬菜集市而得名。北面有潮鸣寺，是始建于五代后梁的古刹。寺北有回龙桥，据说是因为高宗赵构曾路过这里题诗而致。庆春门一带，历来就是文人的寓居之地。如唐朝的著名的书法家褚遂良，以《长生殿》留名于世的清代剧作家洪升，都曾在此一带居住。旧时，庆春街的西端，还留存有纪念岳飞的“忠烈祠”。现在古庆春门只剩下城门遗址，也均有铁门拦住不能攀爬，城门脚下，多得是贩卖古玩的商人。  \",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":2,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"http://www.dianping.com/shop/17320388/review_all\",\"comment_url_mobile\":\"http://www.dianping.com/shop/17320388/review_all\",\"uid\":\"470119242343676612:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"33149a180d0dbab008352f29a8a0dcf9\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
      //   "photoList": "https://mapsv0.bdimg.com/?qt=pr3dpoi&uid=2e64ef686ee2feae5b10936d&width=720&height=360&quality=80&fovx=120;http://att2.citysbs.com/hangzhou/image/day_080228/middle_20080228_8fd66e52cafb2198d5aaMMl1MF0miY0h.jpg;http://t11.baidu.com/it/u=3201882226,140008280&fm=22",
      //   "introduce": "暂无",
      //   "count": null,
      //   "sugTime": "暂无",
      //   "bestTime": "暂无",
      //   "weather": null,
      //   "type": 1,
      //   "distance": null
      // }, {
      //   "id": 523,
      //   "name": "中国围棋博物馆",
      //   "address": "杭州市江干区钱潮路2号天元大厦1层",
      //   "phone": "null",
      //   "uid": "21cdd62450b565f4b64f54b5",
      //   "showtag": "博物馆",
      //   "image": "http://t10.baidu.com/it/u=2242376274,3337817292&fm=22",
      //   "shopHours": "暂无",
      //   "commentNumber": 3,
      //   "latitude": 30.254654193284,
      //   "longitude": 120.22412135153,
      //   "price": "false",
      //   "overallRating": 4.5,
      //   "tags1": null,
      //   "wordList": null,
      //   "imgList": null,
      //   "content": "[]",
      //   "commentList": "[{\"overall_rating\":5,\"date\":\"2017-05-11 11:00\",\"one_url\":\"http://www.dianping.com/shop/16706187/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/1108002291\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"最浪漫的事是吃遍美食\",\"uniqkey\":\"fd1a2299ccb7c9f0b005a08b750711ff\",\"user_logo\":\"https://p0.meituan.net/userheadpicbackend/94c064b77ba1ed23b7e90d7bd38d9c8741254.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1494471600,\"one_url_mobile\":\"http://www.dianping.com/shop/16706187/review_all\",\"price\":null,\"content\":\"在天元大厦一楼，整个一楼都是展厅和办公室，很有文化气息的棋文化博物馆。 展厅很大，室内安静且干净，里面有各类棋具的展示厅，以及人物雕塑，感受到中华文化的博大精深。 工作日基本没什么人，对于这种小众的文化，应该也不会有太多人，应该是办活动或者比赛的时候比较热闹吧。\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/_aB2BeyamaAYcuK9sjESgeHQbJW9Z8efRO-rIbLIf8CYHbSvEEy9ZAO7_JSsQRUETYGVDmosZWTLal1WbWRW3A.jpg\",\"big_photo\":\"http://qcloud.dpfile.com/pc/_aB2BeyamaAYcuK9sjESgeHQbJW9Z8efRO-rIbLIf8CYHbSvEEy9ZAO7_JSsQRUETYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":21}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"7484308829683361089\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"7484308829683361089:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":40,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":110,\"comment_num\":7,\"cmt_id\":\"fd1a2299ccb7c9f0b005a08b750711ff\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":4,\"date\":\"2017-03-21 19:03\",\"one_url\":\"http://www.dianping.com/shop/16706187/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/39329662\",\"user_url_mobile\":null,\"cmt_icons\":{\"comment_icon\":[]},\"user_name\":\"__当时我就懵逼了\",\"uniqkey\":\"7dc720419aa60ec6555d845476f823de\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/2fec984f5794a4245ddfb7571b70bef5443207.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1490094180,\"one_url_mobile\":\"http://www.dianping.com/shop/16706187/review_all\",\"price\":0,\"content\":\"下午去天元大厦开会，居然一年多没去，发生的悄无声息的变化，演变出一家中国围棋博物馆来，能把中国传统文化融入道企业文化里，天元是花了心思了。博物馆里对中国围棋的起源、传承、兴衰变革，都做了脉络的梳理和讲解，并对围棋发展过程中的特殊人物做了塑形展示,历朝历代的知名国手的生平、成就、著作做了简约的介绍，一圈参观下来，受益匪浅。\",\"pics\":[{\"pic_url\":\"http://qcloud.dpfile.com/pc/I7ueuIMcNg7LzAZltd5nBadVLQ3Z8NmrhG7TFmtAX5tiWRr1Oyx9E1Ltd1LLhGf7TYGVDmosZWTLal1WbWRW3A.jpg\",\"big_photo\":\"http://qcloud.dpfile.com/pc/I7ueuIMcNg7LzAZltd5nBadVLQ3Z8NmrhG7TFmtAX5tiWRr1Oyx9E1Ltd1LLhGf7TYGVDmosZWTLal1WbWRW3A.jpg\",\"pic_pv\":7}],\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":1,\"poi_id\":\"7484308829683361089\",\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"7484308829683361089:new_dianping\",\"mark_source\":20,\"mark_duration\":5,\"mark_multimedia\":40,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":110,\"comment_num\":7,\"cmt_id\":\"7dc720419aa60ec6555d845476f823de\",\"isAgree\":null,\"favorNum\":0,\"reply\":null},{\"overall_rating\":5,\"date\":\"2018-07-18 09:54\",\"one_url\":\"http://www.dianping.com/shop/16706187/review_all\",\"service_rating\":\"\",\"user_url\":\"http://www.dianping.com/member/183381\",\"user_url_mobile\":null,\"poi_id\":\"7484308829683361089\",\"user_name\":\"even66\",\"uniqkey\":\"02524819c1812d9390dcd8a7a8b21bc5\",\"user_logo\":\"https://p1.meituan.net/userheadpicbackend/50d51762df0a7f043dd5295cb266cc4d33497.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0\",\"time_stamp\":1531878840,\"one_url_mobile\":\"http://www.dianping.com/shop/16706187/review_all\",\"price\":null,\"content\":\"在钱塘江边的天元大厦的一楼。大堂就很有围棋特色，墙面上是超大的棋盘。四处都是棋局和棋子道具。博物馆加图书馆，都是免费的。资料齐全，很多围棋相关的书。从古至今的棋手和棋局的演变都有。需要耐心潜下来细读。实际上天元大厦里每一层还有各地围棋发展详细的介绍。挺值得看的。\",\"cmt_icons\":{\"comment_icon\":[]},\"video_url\":null,\"video_pic\":null,\"video_time\":null,\"media\":0,\"comment_num\":7,\"src\":\"new_dianping\",\"former_source\":\"new_dianping\",\"cn_name\":\"大众点评\",\"from\":\"dianping.com\",\"comment_url\":\"\",\"comment_url_mobile\":\"\",\"uid\":\"7484308829683361089:new_dianping\",\"mark_source\":20,\"mark_duration\":10,\"mark_multimedia\":0,\"mark_content\":35,\"mark_userscore\":10,\"mark_total\":75,\"cmt_id\":\"02524819c1812d9390dcd8a7a8b21bc5\",\"isAgree\":null,\"favorNum\":0,\"reply\":null}]",
      //   "photoList": "http://t10.baidu.com/it/u=2242376274,3337817292&fm=22;http://hiphotos.baidu.com/map/pic/item/fd039245d688d43f52a45533741ed21b0ff43be6.jpg;http://hiphotos.baidu.com/map/pic/item/8b13632762d0f703a40c4f1d01fa513d2797c5b1.jpg;http://zgqyhzfy.com/web/images/top1.jpg",
      //   "introduce": "暂无",
      //   "count": null,
      //   "sugTime": "暂无",
      //   "bestTime": "暂无",
      //   "weather": null,
      //   "type": 1,
      //   "distance": null
      // }],// 轮播数据数组
      banner: []
    }
  },
  created() {

  },
  mounted() {
    this.getPlaceDetailData();
  },
  onUnload() {
    this.banner = [];
    this.tag1OfContent = [];
    this.tag2OfContent = [];
    this.commentListInfo = [];
    this.tags1 = [];
  },
  methods: {
    /**
     * 预览图片
     */
    seePhoto(index) {
      wx.previewImage({
        current: index, // 当前显示图片的http链接
        urls: this.imgList // 需要预览的图片http链接列表
      })
    },
    getPlaceDetailData() {
      this.uid = this.$route.query.uid;
      this.$httpWX.get({
        url: apiurl.getPlaceByUid,
        data: {
          uid: this.uid
        },
      }).then(res => {
        this.placeDetailData = res.data;
        if (this.placeDetailData.placePhotoList != null && this.placeDetailData.placePhotoList.length > 0) {
          for (let i = 0; i < this.placeDetailData.placePhotoList.length; i++) {
            this.banner.push(this.placeDetailData.placePhotoList[i].imageUrl);
          }
        } else {
          this.banner.push(this.placeDetailData.place.image);
        }
        this.name = this.placeDetailData.place.name;
        this.address = this.placeDetailData.place.address;
        this.overallRating = this.placeDetailData.place.overallRating;
        this.showtag = this.placeDetailData.place.showtag;
        if (this.placeDetailData.place.tags1) {
          let tags1Array = this.placeDetailData.place.tags1.split(';');
          if (tags1Array.length < 3) {
            for (let j = 0; j < tags1Array.length; j++) {
              this.tags1.push(tags1Array[j]);
            }
          } else {
            for (let j = 0; j < 3; j++) {
              this.tags1.push(tags1Array[j]);
            }
          }
        } else {
          this.tags1 = [];
        }
        this.introduce = this.placeDetailData.place.introduce ? this.placeDetailData.place.introduce : '暂无';
        this.sugTime = this.placeDetailData.place.sugTime ? this.placeDetailData.place.sugTime : '暂无';
        this.bestTime = this.placeDetailData.place.bestTime ? this.placeDetailData.place.bestTime : '暂无';
        if (this.placeDetailData.place.phone && this.placeDetailData.place.phone != 'null') {
          let phoneArray = this.placeDetailData.place.phone.split(',');
          this.telephone1 = phoneArray[0];
          if (phoneArray.size > 1) {
            this.telephone2 = phoneArray[1];
          }
        } else {
          this.telephone1 = '暂无';
        }
        this.hour = this.placeDetailData.place.shopHours;
        if (this.placeDetailData.place.content != '暂无') {
          this.isTagShow = true;
          let contentArray = this.placeDetailData.place.content.split(';');
          if (contentArray.length <= 3) {
            for (let i = 0; i < contentArray.length; i++) {
              this.tag1OfContent.push(contentArray[i]);
            }
          } else if (contentArray.length > 3 && contentArray.length <= 6) {
            for (let i = 0; i < contentArray.length; i++) {
              if (i < 3) {
                this.tag1OfContent.push(contentArray[i]);
              } else {
                this.tag2OfContent.push(contentArray[i]);
              }
            }
          } else {
            for (let i = 3; i < 6; i++) {
              if (i < 3) {
                this.tag1OfContent.push(contentArray[i]);
              } else {
                this.tag2OfContent.push(contentArray[i]);
              }
            }
          }
        } else {
          this.isTagShow = false;
        }
        this.commentNumber = this.placeDetailData.place.commentNumber;
        this.handleCommentList();
        //this.handleCommentList(JSON.parse(this.placeDetailData.place.commentList));
      })
    },
    handleCommentList() {
      // let commentDetail = {};
      // for (let i = 0; i < commentList.length; i++) {
      //   //this.$set(commentDetail, 'userName', commentList[i].user_name);
      //   let pictures = commentList[i].pics;
      //   commentDetail.userLogo = commentList[i].user_logo;
      //   commentDetail.userName = commentList[i].user_name;
      //   commentDetail.overallRating = commentList[i].overall_rating;
      //   commentDetail.date = commentList[i].date;
      //   commentDetail.content = commentList[i].content.substring(0, 55) + '...';
      //   for (let j = 0; j < pictures.length; j++) {
      //     commentList.imgUrl.push(pictures[j].pic_url);
      //   }
      //   commentDetail.resource = commentList[i].cn_name;
      //   this.commentListInfo.push(commentDetail);
      // }
      this.$httpWX.get({
        url: apiurl.getPlaceCommentByUid,
        data: {
          uid: this.placeDetailData.place.uid,
          pageNo: 1,
          pageSize: 3
        },
      }).then(res => {
        this.commentListInfo = res.data.items;
        let userImgArray = [];
        for (let i = 0; i < this.commentListInfo.length; i++) {
          if (this.commentListInfo[i].imageList) {
            var userImg = JSON.parse(this.commentListInfo[i].imageList);
            userImgArray = [];
            for (let j = 0; j < userImg.length; j++) {
              userImgArray.push(userImg[j].pic_url);
            }
            this.$set(this.commentListInfo[i], 'userImg', userImgArray);
          } else {
            this.$set(this.commentListInfo[i], 'userImg', null);
          }
          this.$set(this.commentListInfo[i], 'date', this.commentListInfo[i].date.split(" ")[0]);
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

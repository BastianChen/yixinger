<template>
  <div class="index">
    <!--<div class="auxiliary">-->
    <!--<div class="content">-->
    <!--<div>-->
    <!--<div>-->
    <!--<p>图像识别</p>-->
    <!--</div>-->
    <!--<img src="https://wzcb97.top/images/index/photo.jpg">-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="auxiliary">-->
    <!--<div class="content">-->
    <!--<div>-->
    <!--<div>-->
    <!--<p>文字识别</p>-->
    <!--</div>-->
    <!--<img-->
    <!--src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787214368&di=1603f11da101544e417a131ff1bb9ba5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F18%2F20140618110551_vL3iQ.jpeg">-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <div>
      <button
        type="primary"
        size="default"
        plain="false"
        bindtap="primary"
        @click="photoDistinguish()"
        style="background-color: #1989FA;border-color: #1989FA;color: #ffffff;width: 90%;margin-top: 20px"
      >
        图像识别
      </button>
    </div>
    <div>
      <button
        type="primary"
        size="default"
        plain="false"
        bindtap="primary"
        @click="textDistinguish()"
        style="width: 90%;margin-top: 20px"
      >
        通用文字识别
      </button>
    </div>
    <!--:title="message"-->
    <van-action-sheet
      :show="show"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="onSelect"
    />
  </div>
</template>

<script>
import {apiurl} from "@/service/api.js";

export default {
  data() {
    return {
      show: false,
      message: '请选择图像识别类型',
      actions: [
        {
          name: '通用图像识别'
        },
        {
          name: '植物识别'
        },
        {
          name: '动物识别'
        },
        {
          name: '菜品识别'
        }
      ],
      type: '',// 图像识别的类型
      typeName: '',// 图像识别的类型的名字
      userInfo: {},
      data: {},
      cityName: '',// 进行AI操作的地点用于操作记录展示
      jsona: '{"state":0,"message":"图像识别成功","data":{"id":null,"userId":"oE9el5Hx6LplsHe2roGhrkxkEUsk","imageUrl":"/images/photo/155236695464693289269_src.jpg","date":"2019-03-12 13:02:36","type":"1","result":"{\\"result\\":[{\\"score\\":0.426083,\\"root\\":\\"植物-苏铁科\\",\\"keyword\\":\\"苏铁\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E8%8B%8F%E9%93%81\\\\/323399\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/32fa828ba61ea8d36fd15f93950a304e241f58b1.jpg\\",\\"description\\":\\"苏铁。俗称：铁树，别名：辟火蕉、凤尾蕉、凤尾松、凤尾草，拉丁文名：Cycas revoluta Thunb.苏铁科、苏铁属，一说是因其木质密度大，入水即沉，沉重如铁而得名；另一说因其生长需要大量铁元素，故而名之。又名凤尾蕉、避火蕉、凤尾松，多种植在南方，现广泛分布于中国、日本、菲律宾和印度尼西亚等国家。苏铁最为出名的是其开花，被称之为“铁树开花”。苏铁为优美的观赏树种，栽培极为普遍，茎内含淀粉，可供食用；种子含油和丰富的淀粉，微有毒，供食用和药用，有治痢疾、止咳和止血之效。\\"}},{\\"score\\":0.319034,\\"root\\":\\"植物-树\\",\\"keyword\\":\\"树\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E6%A0%91\\\\/2699484\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/e4dde71190ef76c6864ea9509e16fdfaaf516728.jpg\\",\\"description\\":\\"树状图是一种数据结构，它是由n(n>=1)个有限结点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。它具有以下的特点：每个结点有零个或多个子结点；没有父结点的结点称为根结点；每一个非根结点有且只有一个父结点；除了根结点外，每个子结点可以分为多个不相交的子树；\\"}},{\\"score\\":0.216707,\\"root\\":\\"植物-其它\\",\\"keyword\\":\\"盆栽植物\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E7%9B%86%E6%A0%BD%E6%A4%8D%E7%89%A9\\\\/5895507\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/2e6fa73892a0299bd46225ee.jpg\\",\\"description\\":\\"盆栽植物，表达山水景色的盆栽。盆栽的种类很多，普通按盆栽观赏加以剪定整姿，可依树型、树数、树高、树种、观赏及格调。风水师认为扭转乾坤、带来好运的盆栽植物不少，金钱竹、马拉巴栗、兰花等等都是大家爱用的前几名。 当这些象征吉祥的盆栽植物花谢了、枯了，一定要马上更换一盆，才能继续聚气。盆栽植物为我们在狭小的个人空间里营造一个室外自然的景色，让我们在紧张的生活工作中置身大自然的陶冶中。\\"}},{\\"score\\":0.111181,\\"root\\":\\"植物-其它\\",\\"keyword\\":\\"大铁树\\",\\"baike_info\\":{}},{\\"score\\":0.013349,\\"root\\":\\"商品-食品\\",\\"keyword\\":\\"玉米\\",\\"baike_info\\":{\\"baike_url\\":\\"http:\\\\/\\\\/baike.baidu.com\\\\/item\\\\/%E7%8E%89%E7%B1%B3\\\\/18401\\",\\"image_url\\":\\"http:\\\\/\\\\/imgsrc.baidu.com\\\\/baike\\\\/pic\\\\/item\\\\/5243fbf2b2119313d5a23cff6f380cd790238d98.jpg\\",\\"description\\":\\"玉米(拉丁学名：Zea mays L.)是禾本科玉蜀黍属一年生草本植物。别名：玉蜀黍、棒子、包谷、包米、包粟、玉茭、苞米、珍珠米、苞芦、大芦粟，东北辽宁话称珍珠粒，潮州话称薏米仁，粤语称为粟米，闽南语称作番麦。玉米是一年生雌雄同株异花授粉植物， 植株高大， 茎强壮， 是重要的粮食作物和饲料作物， 也是全世界总产量最高的农作物， 其种植面积和总产量仅次于水稻和小麦。玉米一直都被誉为长寿食品， 含有丰富的蛋 白质、脂肪、维生素、微量元素、纤维素等， 具有开发高营养、高生物学功能食品的巨大潜力。但由于其遗传性较为复杂， 变异种类丰富， 在常规的育种过程中存在着周期过长、变异系数过大、影响子代生长发育的缺点， 而现代生物育种技术不但克服了上述缺点和不足， 同时也提高了育种速度和质量。玉米味道香甜，可做各式菜肴，如玉米烙、玉米汁等，它也是工业酒精和烧酒的主要原料。2018年8月，财政部、农业农村部、银保监会印发通知，将玉米作物制种纳入中央财政农业保险保险费补贴目录。\\"}}],\\"log_id\\":8844610026703883180,\\"result_num\\":5}"},"extra":null,"messageDetail":null}',
      text: '{"state":0,"message":"文字识别成功","data":{"id":57,"date":"2019-03-19 09:25:35","userId":"oE9el5Hx6LplsHe2roGhrkxkEUsk","imageUrl":"/images/text/155295873538748332225_src.jpg","words":"{\\"log_id\\":6417996874593015347,\\"words_result\\":[{\\"probability\\":{\\"average\\":0.998993,\\"min\\":0.998993,\\"variance\\":0},\\"words\\":\\"⑤\\"},{\\"probability\\":{\\"average\\":0.944361,\\"min\\":0.618964,\\"variance\\":0.011822},\\"words\\":\\"HD446%13:27\\"},{\\"probability\\":{\\"average\\":0.999572,\\"min\\":0.998791,\\"variance\\":0},\\"words\\":\\"←评论(6292)\\"},{\\"probability\\":{\\"average\\":0.992255,\\"min\\":0.992255,\\"variance\\":0},\\"words\\":\\"∝\\"},{\\"probability\\":{\\"average\\":0.988136,\\"min\\":0.988136,\\"variance\\":0},\\"words\\":\\" Dive\\"},{\\"probability\\":{\\"average\\":0.985888,\\"min\\":0.978553,\\"variance\\":5.4E-5},\\"words\\":\\" Ed Sheeran\\"},{\\"probability\\":{\\"average\\":0.999905,\\"min\\":0.999778,\\"variance\\":0},\\"words\\":\\"相关视频\\"},{\\"probability\\":{\\"average\\":0.98699,\\"min\\":0.961014,\\"variance\\":3.37E-4},\\"words\\":\\"更多>\\"},{\\"probability\\":{\\"average\\":0.998936,\\"min\\":0.997138,\\"variance\\":1.0E-6},\\"words\\":\\"21697\\"},{\\"probability\\":{\\"average\\":0.98602,\\"min\\":0.944051,\\"variance\\":2.67E-4},\\"words\\":\\"ㄍDive》 from Ed Sheeran in\\"},{\\"probability\\":{\\"average\\":0.947542,\\"min\\":0.904548,\\"variance\\":7.15E-4},\\"words\\":\\" Newcastle St James Park\\"},{\\"probability\\":{\\"average\\":0.973389,\\"min\\":0.946777,\\"variance\\":7.08E-4},\\"words\\":\\" by wondering-searching\\"},{\\"probability\\":{\\"average\\":0.999977,\\"min\\":0.999947,\\"variance\\":0},\\"words\\":\\"精彩评论\\"},{\\"probability\\":{\\"average\\":0.999088,\\"min\\":0.997846,\\"variance\\":1.0E-6},\\"words\\":\\"帐号已注销\\"},{\\"probability\\":{\\"average\\":0.993337,\\"min\\":0.987305,\\"variance\\":1.9E-5},\\"words\\":\\"10141\\"},{\\"probability\\":{\\"average\\":0.999803,\\"min\\":0.999379,\\"variance\\":0},\\"words\\":\\"2017年5月13日\\"},{\\"probability\\":{\\"average\\":0.996272,\\"min\\":0.978255,\\"variance\\":5.6E-5},\\"words\\":\\"我买了 goproAdobe pr,我开始在改\\"},{\\"probability\\":{\\"average\\":0.999867,\\"min\\":0.999441,\\"variance\\":0},\\"words\\":\\"变我自己,而这一切从我意识到我错过你开始。我\\"},{\\"probability\\":{\\"average\\":0.997907,\\"min\\":0.960689,\\"variance\\":6.6E-5},\\"words\\":\\"制订了许多宏伟的计划,把这个歌拍成mv将是我\\"},{\\"probability\\":{\\"average\\":0.987677,\\"min\\":0.743914,\\"variance\\":0.002971},\\"words\\":\\"的最后一张王牌。你真的不知道我有多喜欢你公\\"},{\\"probability\\":{\\"average\\":0.996574,\\"min\\":0.983823,\\"variance\\":3.3E-5},\\"words\\":\\"17条回复>\\"},{\\"probability\\":{\\"average\\":0.963547,\\"min\\":0.963547,\\"variance\\":0},\\"words\\":\\" WANLYU\\"},{\\"probability\\":{\\"average\\":0.97868,\\"min\\":0.898244,\\"variance\\":0.001618},\\"words\\":\\"8150凸\\"},{\\"probability\\":{\\"average\\":0.999686,\\"min\\":0.999069,\\"variance\\":0},\\"words\\":\\"2017年6月4日\\"},{\\"probability\\":{\\"average\\":0.972776,\\"min\\":0.86499,\\"variance\\":0.002905},\\"words\\":\\" JB: baby baby baby\\"},{\\"probability\\":{\\"average\\":0.89408,\\"min\\":0.726803,\\"variance\\":0.01248},\\"words\\":\\" Fd: don\'t all me haha\\"},{\\"probability\\":{\\"average\\":0.995995,\\"min\\":0.952252,\\"variance\\":1.49E-4},\\"words\\":\\"说点什么吧,也许Ta都听得到\\"},{\\"probability\\":{\\"average\\":0.999912,\\"min\\":0.99986,\\"variance\\":0},\\"words\\":\\"发送发送发送发送发送发\\"}],\\"words_result_num\\":28,\\"direction\\":0}"},"extra":null,"messageDetail":null}'
    }
  },
  created() {
    this.getLocation();
  },
  mounted() {
    this.userInfo = this.$store.getters.disc;
    console.log(JSON.stringify(this.userInfo))
  },
  methods: {
    getLocation() {
      let _this = this;
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          console.log(res)
          const latitude = res.latitude
          const longitude = res.longitude
          // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
          wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=FuD2k606aTeFr0dOa4bFs0PIzz8VFs9Y' +
            '&location=' + latitude + ',' + longitude + '&output=json&coordtype=wgs84ll',
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            success(res) {
              if (res.data.result.addressComponent.district != '') {
                _this.cityName = res.data.result.addressComponent.city + '·' + res.data.result.addressComponent.district;
              } else {
                _this.cityName = res.data.result.addressComponent.city;
              }
            },
            fail: function () {
              _this.cityName = '杭州市';
            },
            complete: function () {
            }
          })
        }
      })
    },
    photoDistinguish() {
      this.show = true;
    },
    textDistinguish() {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // wx.showLoading({
          //   title: '识别中...',
          // })
          wx.showToast({
            title: '识别中...',
            icon: 'loading'
          })
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          //上传图片到服务器api
          wx.uploadFile({
            url: 'https://wzcb97.top/' + apiurl.aipOcr, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'imageFile',
            formData: {
              userId: _this.userInfo.openid,
              cityName: _this.cityName
            },
            success: function (res) {
              if (JSON.parse(res.data).state == 0) {
                var data = JSON.parse(res.data);
                console.log(res.data.toString())
                _this.$router.push({
                  path: `../textdistinguish/main`,
                  query: {data: encodeURIComponent(JSON.stringify(data)), isHistory: false}
                });
              } else {
                wx.showToast({
                  title: JSON.parse(res.data).message,
                  icon: 'none',
                  duration: 3000
                })
              }
            }
          })

          // console.log(_this.type);
        }
      })
      // _this.data = JSON.parse(_this.text);
      // _this.$router.push({
      //   path: `../textdistinguish/main`,
      //   query: {data: encodeURIComponent(JSON.stringify(_this.data))}
      // });
    },
    onCancel() {
      this.show = false;
    },
    onSelect(index) {
      this.typeName = index.target.name;
      switch (this.typeName) {
        case '通用图像识别':
          this.type = 1;
          this.show = false;
          break;
        case '植物识别':
          this.type = 2;
          this.show = false;
          break;
        case '动物识别':
          this.type = 3;
          this.show = false;
          break;
        case '菜品识别':
          this.type = 4;
          this.show = false;
          break;
        default:
          break;
      }
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // wx.showLoading({
          //   title: '识别中...',
          // })
          wx.showToast({
            title: '识别中...',
            icon: 'loading'
          })
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          //上传图片到服务器api
          wx.uploadFile({
            url: 'https://wzcb97.top/' + apiurl.imageClassify, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'imageFile',
            formData: {
              type: _this.type,
              userId: _this.userInfo.openid,
              cityName: _this.cityName
            },
            success: function (res) {
              if (JSON.parse(res.data).state == 0) {
                var data = JSON.parse(res.data);
                //console.log("data"+data)
                _this.$router.push({
                  path: `../distinguish/main`,
                  query: {type: _this.type, data: encodeURIComponent(JSON.stringify(data)), isHistory: false}
                });
              } else {
                wx.showToast({
                  title: JSON.parse(res.data).message,
                  icon: 'none',
                  duration: 3000
                })
              }
            }
          })
          // _this.data = JSON.parse(_this.jsona);
          // _this.$router.push({
          //   path: `../distinguish/main`,
          //   query: {type: _this.type, data: encodeURIComponent(JSON.stringify(_this.data))}
          // });
          // console.log(_this.type);

        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

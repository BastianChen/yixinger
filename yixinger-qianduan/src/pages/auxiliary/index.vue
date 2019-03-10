<template>
  <div class="index">
    <div class="auxiliary">
      <div class="content">
        <div>
          <div>
            <p>图像识别</p>
          </div>
          <img src="https://wzcb97.top/images/index/photo.jpg">
        </div>
      </div>
    </div>
    <div class="auxiliary">
      <div class="content">
        <div>
          <div>
            <p>文字识别</p>
          </div>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787214368&di=1603f11da101544e417a131ff1bb9ba5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F18%2F20140618110551_vL3iQ.jpeg">
        </div>
      </div>
    </div>
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
        style="width: 90%;margin-top: 20px"
      >
        文字识别
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
        userInfo: {}
      }
    },
    mounted() {
      this.userInfo = this.$store.getters.disc;
    },
    methods: {
      photoDistinguish() {
        this.show = true;
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
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            // _this.setData({
            //   tempFilePaths: res.tempFilePaths
            // })

            //上传图片到服务器api
            var tempFilePaths = res.tempFilePaths
            console.log("res" + JSON.stringify(res))
            console.log("apiurl" + apiurl.imageClassify + "ss" + apiurl.getUser)
            wx.uploadFile({
              url: 'https://wzcb97.top/' + apiurl.imageClassify, //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: 'imageFile',
              header: {
                "Content-Type": "multipart/form-data"
              },
              formData: {
                type: _this.type,
                userId: _this.userInfo.openid,
              },
              success: function (res) {
                var data = res.data;
                _this.$router.push({
                  path: `../distinguish/main`,
                  query: {type: _this.type, data: data}
                });
                //do something
              }
            })
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

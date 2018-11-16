//获取应用实例
var app = getApp()
Page({
  data: {
    tempFilePaths: ''
  },
  onLoad: function () {
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  //上传图片到服务器api
  // wx.chooseImage({
  //   success: function (res) {
  //     var tempFilePaths = res.tempFilePaths
  //     wx.uploadFile({
  //       url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
  //       filePath: tempFilePaths[0],
  //       name: 'file',
  //       formData: {
  //         'user': 'test'
  //       },
  //       success: function (res) {
  //         var data = res.data
  //         //do something
  //       }
  //     })
  //   }
  // })
})
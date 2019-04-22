var bmap = require('../../libs/bmap-wx.min.js');
var config = require('../../libs/config.js');
var city = '';
Page({
  data: {
    sugData: '',
    inputValue: ''
  },
  onLoad: function() {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: config.Config.ak
    });
  },
  bindKeyInput: function(e) {
    var that = this;
    if (e.detail.value === '') {
      that.setData({
        sugData: '',
        inputValue: e.detail.value
      });
      return;
    }
    var BMap = new bmap.BMapWX({
      ak: config.Config.ak
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      console.log(data)
      var sugData = data.result;
      that.setData({
        sugData: sugData
      });
    }
    BMap.suggestion({
      query: e.detail.value,
      region: city,
      city_limit: false,
      fail: fail,
      success: success
    });
  },
  search: function(e) {
    var data = e.currentTarget.dataset.name;
    var latitude = data.location.lat;
    var longitude = data.location.lng;
    var uid = data.uid;
    wx.request({
      url: 'https://wzcb97.top/Place/addPlace',
      data: {
        uidList: uid,
        latitudeList: latitude,
        longitudeList: longitude,
        type: '2'
      },
      method: 'post',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success(res) {
        if (res.data.state == 0) {
          wx.getLocation({
            type: 'wgs84',
            success(locate) {
              latitude = locate.latitude
              longitude = locate.longitude
              var url = '../placedetail/main' + '?uid=' + uid + '&latitude=' + latitude + '&longitude=' + longitude;
              wx.navigateTo({
                url: url
              })
            }
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 3000
          });
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  clear: function() {
    var that = this;
    that.setData({
      sugData: '',
      inputValue: ''
    })
  }
})

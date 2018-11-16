var bmap = require('../../libs/bmap-wx.min.js');
var config = require('../../libs/config.js');
var city = '';
Page({
  data: {
    sugData: ''
  },
  onLoad: function() {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: config.Config.ak
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      console.log(data)
      city = data.originalData.results[0].city
    }
    BMap.search({
      "query": '美食',
      fail: fail,
      success: success,
      iconPath: '../../img/marker_checked.png',
      iconTapPath: '../../img/marker_checked.png'
    });
  },
  bindKeyInput: function(e) {

    var that = this;
    if (e.detail.value === '') {
      that.setData({
        sugData: ''
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
      var sugData = '';
      for (var i = 0; i < data.result.length; i++) {
        sugData = sugData + data.result[i].name + '\n';
      }
      that.setData({
        sugData: sugData
      });
    }
    BMap.suggestion({
      query: e.detail.value,
      region: city,
      city_limit: true,
      fail: fail,
      success: success
    });
    
  }
})
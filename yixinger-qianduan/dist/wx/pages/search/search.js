var bmap = require('../../libs/bmap-wx.min.js');
var config = require('../../libs/config.js');
var wxMarkerData = [];
var city = '';
var name = '';
var desc = '';
var latitude = 0;
var longitude = 0;
var queryType = '景点&美食';
//var queryType = '美食';

Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {},
    showOrHidden: false
  },
  makertap: function(e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
    that.nav(wxMarkerData, id);
  },
  onLoad: function() {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: config.Config.ak
    });
    //console.log(BMap)
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      wxMarkerData = data.wxMarkerData;
      city = data.originalData.results.city
    }
    var success2 = function(data) {
      //console.log("first" + JSON.stringify(data.wxMarkerData));
      var len = wxMarkerData.length;
      for (let i = 0; i < data.wxMarkerData.length; i++) {
        data.wxMarkerData[i].id = len + data.wxMarkerData[i].id;
        wxMarkerData.push(data.wxMarkerData[i]);
      }
      //console.log("second" + JSON.stringify(wxMarkerData));
      city = data.originalData.results.city
      that.setData({
        showOrHidden: false,
        markers: wxMarkerData,
        latitude: wxMarkerData[0].latitude,
        longitude: wxMarkerData[0].longitude
      });
    }
    BMap.search({
      "query": '景点',
      fail: fail,
      //"page_size": 5,
      success: success,
      iconPath: '../../img/marker_checked.png',
      iconTapPath: '../../img/marker_checked.png'
    });
    BMap.search({
      "query": '美食',
      fail: fail,
      success: success2,
      iconPath: '../../img/marker_checked.png',
      iconTapPath: '../../img/marker_checked.png'
    });

  },
  showSearchInfo: function(data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: data[i].title,
        address: data[i].address,
        // telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function(data, id) {
    var that = this;
    var markersTemp = [];
    for (var i = 0; i < data.length; i++) {
      if (i === id) {
        data[i].iconPath = "../../img/marker.png";
      } else {
        data[i].iconPath = "../../img/marker_checked.png";
      }
      markersTemp[i] = data[i];
    }
    that.setData({
      markers: markersTemp
    });
  },
  bindKeyInput: function(e) {
    var that = this;
    var url = '../suggestion/suggestion';
    wx.navigateTo({
      url: url
    })
    // if (e.target.dataset.latitude && e.target.dataset.longitude && e.target.dataset.city) {
    //   var dataset = e.target.dataset;
    //   url = url + '?lonlat=' + dataset.longitude + ',' + dataset.latitude + '&city=' + dataset.city;
    // }
    // wx.redirectTo({
    //   url: url
    // })
  },
  nav: function(data, i) {
    var that = this;
    name = data[i].title;
    desc = data[i].address;
    latitude = data[i].latitude;
    longitude = data[i].longitude;
    that.setData({
      showOrHidden: true
    });
  },
  navigation() {
    wx.openLocation({
      latitude: +latitude,
      longitude: +longitude,
      name: name,
      address: desc
    });
  }
})
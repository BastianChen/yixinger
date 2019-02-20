// const host = 'http://139.196.139.249:8080'
//const host = 'http://localhost:8080'
const host = 'https://wzcb97.top'

function request(url, method, data, header) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: method == 'POST' ? {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'// POST默认值
      } : {
        'Content-type': 'application/json' // GET默认值
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

function get(obj) {
  return request(obj.url, 'GET', obj.data)
}

function post(obj) {
  return request(obj.url, 'POST', obj.data)
}

export default {
  request,
  get,
  post,
  host
}

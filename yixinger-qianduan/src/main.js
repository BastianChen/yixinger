import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import WXrequest from './utils/wx-request'
Vue.prototype.$httpWX = WXrequest

Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/logs/main', 'pages/counter/main',"pages/api/main","pages/search/search",
      "pages/suggestion/suggestion",
      "pages/regeocoding/regeocoding",
      "pages/weather/weather",
      "pages/photo/photo"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ea5149',
      navigationBarTitleText: 'yixinger',
      navigationBarTextStyle: 'white'
    },
    "tabBar": {
      "backgroundColor": "#fff",
      "borderStyle": "white",
      "selectedColor": "#3A82F8",
      "color": "#666666",
      "list": [{
        "pagePath": "pages/index/main",
        "iconPath": "static/images/ic_menu_choice_nor.png",
        "selectedIconPath": "static/images/ic_menu_choice_pressed.png",
        "text": "首页"
      },
        {
          "pagePath": "pages/search/search",
          "iconPath": "static/images/ic_menu_topic_nor.png",
          "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
          "text": "专题"
        },
        {
          "pagePath": "pages/suggestion/suggestion",
          "iconPath": "static/images/ic_menu_sort_nor.png",
          "selectedIconPath": "static/images/ic_menu_sort_pressed.png",
          "text": "分类"
        },
        {
          "pagePath": "pages/regeocoding/regeocoding",
          "iconPath": "static/images/ic_menu_shoping_nor.png",
          "selectedIconPath": "static/images/ic_menu_shoping_pressed.png",
          "text": "购物车"
        },
        {
          "pagePath": "pages/weather/weather",
          "iconPath": "static/images/ic_menu_me_nor.png",
          "selectedIconPath": "static/images/ic_menu_me_pressed.png",
          "text": "我的"
        }
      ]
    }
  }
}

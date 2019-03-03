import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import WXrequest from './utils/wx-request'
//引入store
import store from './store/index'

Vue.prototype.$httpWX = WXrequest

//把store挂载到全局
Vue.prototype.$store = store;

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
      navigationBarTextStyle: 'black'
    }
  }
}

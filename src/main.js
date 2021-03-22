import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/assets/icon/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// import { List } from 'vant'
// Vue.use(List);
// import infiniteScroll from 'vue-infinite-scroll'
// Vue.use(infiniteScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

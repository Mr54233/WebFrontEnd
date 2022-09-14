import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 默认导入数据仓库
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,// 将数据仓库挂载到vue实例对象中
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI)

Vue.config.productionTip = false;

// 引入API文件
import api from './api/index.js'
Vue.prototype.$api = api

// 引用工具文件
import utils from './utils/index.js'
Vue.prototype.$utils = utils

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

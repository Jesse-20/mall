import Vue from 'vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import App from './App.vue'

//前端的跨域方式
axios.defaults.baseURL = 'https://www.fastmock.site/mock/d4730d54d71131d03b27e9a2dbb0fd79/api';
//axios.defaults.baseURL = '/api';
//请求时间限制8s
axios.defaults.timeout = 8000;

Vue.use(VueAxios,axios)//安装axios插件和VueAxios插件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

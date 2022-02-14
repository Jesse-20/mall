import Vue from 'vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'

//配置全局的axios默认值
axios.defaults.baseURL = 'https://www.fastmock.site/mock/d4730d54d71131d03b27e9a2dbb0fd79/api';
//axios.defaults.baseURL = '/api';
//axios请求超时时间限制8s
axios.defaults.timeout = 8000;

//拦截器的使用to-do
axios.interceptors.request.use(function (response) {
  let res = response;
  return res;
})

Vue.use(Vuex)//安装vuex插件
Vue.use(VueAxios,axios)//安装axios插件和VueAxios插件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

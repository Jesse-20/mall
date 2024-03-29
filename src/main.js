import Vue from 'vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import store from './store'
import { Message,Button,Pagination } from 'element-ui'
import './assets/scss/element-variables.scss'
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

//按需加载Element当中的插件
Vue.use(Pagination);
Vue.use(Button);
Vue.prototype.$message = Message;

Vue.use(VueAxios,axios)//安装axios插件和VueAxios插件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

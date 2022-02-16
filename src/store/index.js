import Vue from "vue"
import Vuex from "vuex"
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex);//使用vue插件

const state = {
    username: '',
    cartListNum: 0,
    cartList:[],
    routeName:'',
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
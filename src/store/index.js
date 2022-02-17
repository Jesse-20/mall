import Vue from "vue"
import Vuex from "vuex"
import actions from './action'
import mutations from './mutations'
import createPersistedState from "vuex-persistedstate" //本地存储来防止浏览器刷新时数据丢失

Vue.use(Vuex);//使用vue插件

const state = {
    username: '',
    cartListNum: 0,
    cartList: [],
    routeName: '',
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [createPersistedState({
        key: 'new',
        //存储在sessionStorage
        //storage:window.sessionStorage,
        // reducer(val) {
        //     return {
        //         S1:val.username,
        //         S2:val.cartListNum,
        //     }
        // }
    }
    )],
})
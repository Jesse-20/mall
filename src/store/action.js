export default {
    //初始化登录和购物车
    initializeData({ commit }) {
        commit('INITIALIZE_DATA');
    },
    //改变登录状态
    changeUserdata({ commit },name) {
        commit('CHANGE_USERDATA', name);
    }
}
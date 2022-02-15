export default {
    //初始化登录和购物车
    initializeData({ commit }) {
        commit('INITIALIZE_DATA');
    },
    //改变登录状态
    changeUserdata({ commit },name) {
        commit('CHANGE_USERDATA', name);
    },
    //改变购物车状态
    changeCartNum({commit},cartNum){
        commit('CHANGE_CARTNUM',cartNum);
    },
    //改变购物车物件的信息
    changeCartList({ commit }, cartList) {
        commit('CHANGE_CARTLIST',cartList)
    }
}
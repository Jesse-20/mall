const INITIALIZE_DATA = 'INITIALIZE_DATA'
const CHANGE_USERDATA = 'CHANGE_USERDATA'
const CHANGE_CARTNUM = 'CHANGE_CARTNUM'

export default {
    //初始化信息
    [INITIALIZE_DATA](state) {
        state.username = "";
        state.cartListNum = 0;
    },
    //改变登录的状态信息
    [CHANGE_USERDATA](state,name) {
        state.username = name;
    },
    //改变购物车的状态信息
    [CHANGE_CARTNUM](state, cartNum) {
        state.cartListNum = cartNum;
    }
}
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const CHANGE_USERDATA = 'CHANGE_USERDATA'
const CHANGE_CARTNUM = 'CHANGE_CARTNUM'
const CHANGE_CARTLIST = 'CHANGE_CARTLIST'
const GET_ROUTETYPE = 'GET_ROUTETYPE'

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
    },
    //改变购物车物件的信息
    [CHANGE_CARTLIST](state,cartList) {
        state.cartList = cartList;
    },
    //获取路由的路径信息
    [GET_ROUTETYPE](state,routeName) {
        state.routeName = routeName;
    }
}
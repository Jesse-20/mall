import Vue from 'vue'
import VueRouter from "vue-router"//导入vue-router
import Index from "./../pages/index"
import Home from "./../pages/home"
import Product from "./../pages/product"
import Login from "./../pages/login"
import Cart from "./../pages/cart"
import Regist from './../pages/regist'
import OrderList from "./../pages/orderList"

Vue.use(VueRouter);//安装vue-router插件

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    }
    return originalPush.call(this, location).catch(err => err)
}


//将Vue实例作为模板进行导出
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: Cart,
                },
                {
                    path: '/orderList',
                    name: 'orderList',
                    component: OrderList,
                },
                {
                    path: '/login',
                    name: 'login',
                    component: Login,
                },
                {
                    path: '/regist',
                    name: 'regist',
                    component: Regist,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
            ]
        },
        
    ]
})

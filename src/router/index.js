import Vue from 'vue'
import VueRouter from "vue-router"//导入vue-router
import Index from "./../pages/index"
import Home from "./../pages/home"
import Product from "./../pages/product"
import Login from "./../pages/login"
import Cart from "./../pages/cart"

Vue.use(VueRouter);//安装vue-router插件

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    }
    return originalPush.call(this,location).catch(err=>err)
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
                component:Index,
            },
            ]
        },
        {
            path: '/product/:id',
            name: 'product',
            component:Product,
        },
        {
            path: '/login',
            name: 'login',
            component:Login,
        },
        {
            path: '/cart',
            name: 'cart',
            component:Cart,
        }
    ]
})

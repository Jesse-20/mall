import Vue from 'vue'
import VueRouter from "vue-router"//导入vue-router
import Index from "./../pages/index"
import NavHeader from "./../components/NavHeader"
import NavFooter from "./../components/NavFooter"

Vue.use(VueRouter);//安装vue-router插件

//将Vue实例作为模板进行导出
export default new VueRouter({
    routes: [
        {path: '/',
        name: 'home',
        component: Index,
        redirect: '/index',},
        {
            path: '/index',
            name: 'index',
            component:Index,
        },
        {
            path: '/nav-header',
            name: 'navheader',
            component:NavHeader,
        },
        {
            path: '/nav-footer',
            name: 'navfooter',
            component:NavFooter,
        }
    ]
})

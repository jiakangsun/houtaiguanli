import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 静态路由
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: () => import('@/views/Login') },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    name: 'home',
    redirect: 'home/users',
    children: [
      { path: 'users', component: () => import('@/views/Users'), name: 'users' },
      { path: 'roles', component: () => import('@/views/Roles'), name: 'roles' },
      { path: 'rights', component: () => import('@/views/QuanXian'), name: 'rights' },
      { path: 'goods', component: () => import('@/views/GoodsList'), name: 'goods' },
      { path: 'params', component: () => import('@/views/Parameter'), name: 'params' },
      { path: 'categories', component: () => import('@/views/Classification'), name: 'categories' },
      { path: 'orders', component: () => import('@/views/Orders'), name: 'orders' },
      { path: 'reports', component: () => import('@/views/Datas'), name: 'reports' },
      { path: 'addgoods', component: () => import('@/views/AddGoods'), name: 'addgoods' }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import router from '@/router'
import store from '@/store'
// 进度条效果
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//  白名单
const whiteList = ['/login', '/404']
// 前置路由
router.beforeEach((to, from, next) => {
  // 开启进度条效果
  Nprogress.start()
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      next('/home/users')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
// 后置路由
router.afterEach(() => {
  // 结束进度条效果
  Nprogress.done()
})

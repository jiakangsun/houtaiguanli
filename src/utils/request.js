import axios from 'axios'
// import { Message } from 'element-ui'
import store from '@/store'
// import store from '@/store'
// import router from '@/router'
const request = axios.create({
  baseURL: 'http://liufusong.top:8899/api/private/v1/',
  timeout: 8000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  const token = store.state.user.token
  if (token) {
    config.headers.Authorization = token
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
// request.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   if (response.data.meta.status === 200) {
//     return response
//   } else {
//     Message.error(response.data.meta.msg)
//     return Promise.reject(new Error(response.data.meta.msg))
//   }
// }, function (error) {
//   console.dir(error)
//   // 对响应错误做点什么
//   return Promise.reject(error)
// })
export default request

import request from '@/utils/request'
// 获取所有权限列表
export const getRightsList = (type) => {
  return request({
    url: `rights/${type}`
  })
}

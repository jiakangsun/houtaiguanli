import request from '@/utils/request'

/**
 * 登录
 * @param {*} param0
 * @returns
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'login',
    data: {
      username,
      password
    }
  })
}
// 获取用户数据列表
export const getUsersList = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'users',
    params: { query, pagenum, pagesize }
  })
}

// 删除单个用户
export const delUsers = id => {
  return request({
    method: 'DELETE',
    url: `users/${id}`
  })
}

// 添加用户
export const addUsers = ({ username, password, email, mobile }) => {
  return request({
    method: 'POST',
    url: 'users',
    data: { username, password, email, mobile }
  })
}

// 修改用户状态
export const reviesStatus = (uld, type) => {
  return request({
    method: 'PUT',
    url: `users/${uld}/state/${type}`
  })
}
// 编辑用户
export const editUsers = ({ id, email, mobile }) => {
  return request({
    method: 'PUT',
    url: `users/${id}`,
    data: { id, email, mobile }
  })
}

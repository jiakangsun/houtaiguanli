import request from '@/utils/request'
// 左侧菜单权限
export const getMenus = () => {
  return request({
    url: 'menus'
  })
}

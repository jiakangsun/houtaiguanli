import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
import router from '@/router'
const state = {
  token: getToken()
}
const mutations = {
  getToken (state, token) {
    state.token = token
  },
  removeToken (state) {
    state.token = null
    removeToken()
  }
}
const actions = {
  async setToken (context, data) {
    try {
      const res = await login(data)
      console.log('login', res)
      context.commit('getToken', res.data.data.token)
      setToken(res.data.data.token)
      router.push('/home')
    } catch (err) {
      console.log(err)
    }
  },
  logouts (context) {
    context.commit('removeToken')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

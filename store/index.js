import Vuex from 'vuex'
import axios from '~/plugins/axios'

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    signIn(state, user) {
    	console.log(user)
    	state.user.username = user.username
    	state.user.email = user.username
    	state.token = user.token
      state.message = ''
    }
  },
  actions: {
  	signin() {

  	},
  	signout() {

  	},
  	async register({ commit, state}, { username, email, password }) {
      try {
        let res = await axios.post('/api/users', { username, email, password })
        console.log(res)
        commit('signIn', res)
      } catch (error) {
        state.message = 'Something went wrong.'
      }
  	}
  }
})

export default store
import Vuex from 'vuex'
import axios from '~/plugins/axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'




const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: '',
    user: {}
  },
  mutations: {
    signIn(state, res) {
      let user = res.data.user
      let token = res.data.token
    	state.user = user
      state.token = token
      state.isAuthenticated = true
    	// state.email = user.email
      if (process.env.VUE_ENV === 'client') {
        Cookies.set('token', token)
      }
      state.message = ''
    }
  },
  actions: {
  	async signIn({ commit, state}, { username, password }) {
      try {
        let res = await axios.post('/api/users/signin', { username, password })
        console.log(res)
        commit('signIn', res)
      } catch (error) {
        state.message = 'Something went wrong.'
      }
  	},
  	signOut() {

  	},
  	async register({ commit, state}, { username, email, password }) {
      try {
        let res = await axios.post('/api/users', { username, email, password })
        console.log(res)
        // go signin...
      } catch (error) {
        state.message = 'Something went wrong.'
      }
  	}
  }
})

export default store
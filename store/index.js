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
    	// state.username = user.username
    	// state.email = user.username
    	// state.token = user.token
    }
  },
  actions: {
  	signin() {

  	},
  	signout() {

  	},
  	async register({ commit, state}, { username, email, password }) {
  		let res = await axios.post('/', { username, email, password })
      console.log(res.user)
  		commit('signIn', user)
  	}
  }
})

export default store
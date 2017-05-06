import Vuex from 'vuex'
import axios from '~/plugins/axios'

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    signin(state, user) {
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
  		let user = await axios.post('/', { username, email, password })
  		commit('signIn', user)
  	}
  }
})

export default store
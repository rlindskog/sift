import Vuex from 'vuex'
import axios from '~/plugins/axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'


// initialie store on the client.
if (process.BROWSER_BUILD) {
  let token = Cookies.get('token')
  let user = jwtDecode(token)

  if (decoded.user) {
    store.commit('SET_USER', { user, token })
  }
}


const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: '',
    user: {}
  },
  mutations: {
    SET_USER(state, data) {
      state.token = data.token
      state.user = data.user
      state.isAuthenticated = true
    },
    SIGN_IN(state, res) {
      let user = res.data.user
      let token = res.data.token
    	state.user = user
      state.token = token
      state.isAuthenticated = true
    	// state.email = user.email
      if (process.BROWSER_BUILD) {
        Cookies.set('token', token)
      }
      state.message = ''
    }
  },
  actions: {
    // nuxtServerInit({ commit }, { req }) {
    //   if (req.user) {
    //     commit('SET_USER', req.user)
    //   }
    // },
  	async signIn({ commit, state}, { username, password }) {
      try {
        let res = await axios.post('/api/users/signin', { username, password })
        console.log(res)
        commit('SIGN_IN', res)
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
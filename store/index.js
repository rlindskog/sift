import Vuex from 'vuex'
import router from 'vue-router'
import axios from '~/plugins/axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: '',
    user: {},
    article: {},
    lists: {
      articles: [],
      users: []
    },
    fetched_user: {}
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
      console.log(token)
      if (process.BROWSER_BUILD) {
        Cookies.set('token', token)
      }
      state.message = ''
    },
    SIGN_OUT(state, res) {
      state.isAuthenticated = false
      state.token = ''
      state.user = {}
    },
    FETCH_USERS(state, users) {
      state.lists.users = users
    },
    FETCH_USER(state, fetched_user) {
      state.fetched_user = fetched_user
    },
    FETCH_ARTICLES(state, articles) {
      state.lists.articles = articles
    },
    FETCH_ARTICLE(state, article) {
      state.article = article
    }
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (req.cookies.token) {
        let token = req.cookies.token
        let user = jwtDecode(token)
        let data = { user, token}
        commit('SET_USER', data)
      }
    },
  	async signIn({ commit, state}, { username, password }) {
      try {
        let res = await axios.post('/api/users/signin', { username, password })
        console.log(res)
        commit('SIGN_IN', res)
      } catch (error) {
        state.message = 'Something went wrong.'
      }
  	},
  	signOut({ commit, state }) {
      Cookies.remove('token')
      commit('SIGN_OUT')
  	},
  	async register({ commit, state}, { username, email, password }) {
      try {
        let res = await axios.post('/api/users', { username, email, password })
        state.message = 'Registration sucessful. Please sign in.'
      } catch (error) {
        state.message = 'Something went wrong.'
      }
  	},
    async fetchUser({ commit, state }, { username }) {
      try {
        let { data } = await axios(`/api/users/${username}`)
        commit('FETCH_USER', data[0])
      } catch (error) {
        state.message = 'Something went wrong.'
      }
    },
    async submitArticle({ commit, state }, { title, body }) {
      try {
        let { data } = await axios.post(`/api/articles/?owner=${state.user._id}`)
        console.log(data)
      } catch(error) {
        state.message = 'Something went wrong.'
      }
    },
    async fetchArticles({ commit, state } ) {
      try {
        let { data } = await axios.get(`/api/articles`)
        console.log('DATA', data)
        commit('FETCH_ARTICLES', data)
      } catch(error) {
        state.message = 'Something went wrong.'
      }
    },
  }
})

// // initialie store on the client.
// if (process.BROWSER_BUILD) {
//   let token = Cookies.get('token')
  
//   let user = jwtDecode(token)
//   // alert(user.email)
//   if (user.username) {
//     store.commit('SET_USER', { user, token })
//   }
// }

export default store
<template>
	<div>
		<v-row v-for="article in $store.state.lists.articles" key="article.index">
			<v-col xs12 offset-xs1 sm6 offset-sm3>
			<h4>{{article.title}}</h4>
			<span>
				<p v-for="author in article.author" key="author.index">{{author}}</p>
				<p>{{article.pub_date}}, {{article.publication}}</p>
			</span>
			<span><a :href="article.url">Original Source</a></span>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
	async fetch ({ store, params }) {
		let { data } = await axios.get('/api/articles')
    store.commit('FETCH_ARTICLES', data)
  },
 //  created() {
	// 	let username = this.$route.params.username
	// 	this.$store.dispatch('fetchUser', { username })
	// },

}
</script>

<style scoped></style>
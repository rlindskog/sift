<template>
	<div id="user">
		<profile-banner :image="newyork" :facial="dummyProfile"/>
		<v-container fluid="fluid" class="news-article-feed">
		  <v-row class="mr-3 ml-3 mt-3">

				<h4>{{ this.$store.state.fetched_user.username }}</h4>
				<ul>
					<li>email: {{ this.$store.state.fetched_user.email }}</li>
					<li>createdAt: {{ this.$store.state.fetched_user.createdAt }}</li>
					<li>_id: {{ this.$store.state.fetched_user._id }}</li>
				</ul>

		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		  </v-row>
		</v-container>

	</div>
</template>

<script>
import face from '~/assets/images/face.png'
import dummyProfile from '~/assets/images/user.svg'
import newyork from '~/assets/images/nyc.jpg'
import TripleNewsArticleRow from '~/components/TripleNewsArticleRow.vue'
import DoubleNewsArticleRow from '~/components/DoubleNewsArticleRow.vue'
import ProfileBanner from '~/components/ProfileBanner.vue'
import axios from '~/plugins/axios'

export default {
	components: { TripleNewsArticleRow, DoubleNewsArticleRow, ProfileBanner  },
	data() {
		return {
			url: this.$route.params.username,
			card_text: "sample card text",
			face,
			newyork,
			dummyProfile
		}
	},
	created() {
		let username = this.$route.params.username
		this.$store.dispatch('fetchUser', { username })
	},

	async fetch({ store, params, req }) {
		try {
			let token = req.cookies.token
			let { data } = await axios.get(`users/${params.username}`, {
				headers: {
					'x-access-token': token
				}
			})
			let fetched_user = data[0]
			store.commit('FETCH_USER', fetched_user)
		} catch (error) {
			console.log(error)
		}
	}
}
</script>

<style>
	
</style>
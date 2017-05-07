<template>
	<div id="user">
		<v-container fluid="fluid" class="news-article-feed" v-if="this.$store.state.isAuthenticated">
		<profile-banner :image="newyork" :facial="dummyProfile"/>
		  <v-row class="mr-3 ml-3 mt-3" >
		  	<v-col sm8 offset-sm2 >
				
				<ul>
					<li><h4>{{ $store.state.fetched_user.username }}</h4></li>
					<li>email: {{ $store.state.fetched_user.email }}</li>
					<li>createdAt: {{ $store.state.fetched_user.createdAt }}</li>
					<li>_id: {{ $store.state.fetched_user._id }}</li>
				</ul>
				<article-form />
				<div>
				<h3>{{ $store.state.fetched_user.username }}'s Articles</h3>
				</div>
		    <!-- <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" />
		    <double-news-article-row title="My article" />
		    <triple-news-article-row title="My post" /> -->
		   </v-col>
		   <!-- <v-col v-else>
		   	<h4>Must be logged in to view this profile.</h4>
		   </v-col> -->
		  </v-row>
		</v-container>
		<v-container fluid="fluid" class="news-article-feed" v-else>
			<v-row class="mr-3 ml-3 mt-3" >
		  	<v-col sm8 offset-sm2 >
					<h1 class="center">Must be logged in to view this profile.</h1>
				</v-col>
			</v-row>
		</v-container>
		<div>
			 <v-row class="mr-3 ml-3 mt-3" v-for="article in $store.state.fetched_user.articles">
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
import ArticleForm from '~/components/ArticleForm.vue'

export default {
	components: {
		ArticleForm,
		TripleNewsArticleRow,
		DoubleNewsArticleRow,
		ProfileBanner
	},
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
			console.log('THE TOKEN:', token)
			let { data } = await axios.get(`/api/users/${params.username}`, {
				withCredentials: true,
				headers: {
					'x-access-token': token
				}
			})
			console.log('FETCHED_USER', data)
			store.commit('FETCH_USER', data)
		} catch (error) {
			console.log(error)
		}
	}
}
</script>

<style>
	
</style>
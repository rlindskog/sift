<template>
	<div id="user">
		<profile-banner :image="newyork" :facial="face"/>
		<v-container fluid="fluid" class="news-article-feed">
		  <v-row class="mr-3 ml-3 mt-3">

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
import newyork from '~/assets/images/nyc.jpg'
import TripleNewsArticleRow from '~/components/TripleNewsArticleRow.vue'
import DoubleNewsArticleRow from '~/components/DoubleNewsArticleRow.vue'
import ProfileBanner from '~/components/ProfileBanner.vue'
// username
// email



export default {
	components: { TripleNewsArticleRow, DoubleNewsArticleRow, ProfileBanner  },
	data() {
		return {
			url: this.$route.params.username,
			card_text: "sample card text",
			face,
			newyork
			// fetch user: this.$route.params.user
		}
	},
	created: {
		getUser() {
			this.$store.disptach('FETCH_USER', this.$route.params.username)
		}
	}
}
</script>

<style>
	
</style>
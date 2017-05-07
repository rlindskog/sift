<template>
	<div id="user">
		<p>The url is {{ url }}</p>
		
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
export default {
	components: { TripleNewsArticleRow, DoubleNewsArticleRow, ProfileBanner  },
	data() {
		return {
			url: this.$route.params.user,
			card_text: "sample card text",
			face,
			newyork

		}
	}
}
</script>

<style>
	
</style>
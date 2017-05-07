<template>
	<div>	
		<v-row>
		<v-col xs10 offset-xs1 sm6 offset-sm3>
			<h4>Headline Admin</h4>
			<articles-from-author-form />
		</v-col>
		</v-row>
	</div>
</template>

<script>
import ArticlesFromAuthorForm from '~/components/ArticlesFromAuthorForm.vue'
export default {
	components: {
		ArticlesFromAuthorForm
	},
}
</script>

<style>
	
</style>
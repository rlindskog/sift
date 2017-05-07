<template>
	<div id="article-form">
		<v-card class="grey lighten-4 elevation-0">
  		<v-card-text>
				<v-row>
					<v-col xs10 offset-xs1 sm6 offset-sm3>
						<h5>Submit an Article</h5>
						<form @keydown.enter="signIn">
							<v-text-field
								type="text"
								name="title"
								label="title"
								v-model="title"/>
							<v-text-field
								type="password"
								name="body"
								label="body"
								append-icon="remove_red_eye"
								v-model="body"
								multi-line/>
							<v-btn
								light
								default
								class="btn--light-flat-focused"
								@click.native="signIn"
							>Submit</v-btn>
						</form>
						<!-- <quill-editor
							v-model="content"
              ref="myQuillEditor"
              :options="editorOption">
					  </quill-editor> -->
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			body: '',
		}
	},
	methods: {
		submitArticle() {
			let payload = {
				title: this.title,
				body: this.body
			}
			alert(payload)
			this.$store.dispatch('submitArticle', payload)
		}
	},
	fetchArticles() {

	}
}	
</script>

<style>
	
</style>
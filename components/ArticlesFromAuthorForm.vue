<template>
	<div>
		<form @submit.prevent="getArticles">
			<v-text-field
				label="Author"
				type="text"
				name="author"
				v-model="author"/>
			<v-btn
				light
				default
				class="btn--light-flat-focused"
				@click.native="getArticles"
			>Submit</v-btn>
		</form>
		{{ data }}
		<p>{{message}}</p>
	</div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
	data() {
		return {
			author: '',
			loading: false,
			message: '',
			data: '',
		}
	},
	methods: {
		async getArticles() {
			try {
				this.loading = true
				let { data } = await axios.post('/api/admin/author', { author: this.author })
				// console.log(typeof data.data)
				// data.data.forEach(item => console.log(item))
				this.data = data
				this.loading = false
			} catch(error) {
				console.log(error)
				this.loading = false
				this.message = 'Something went wrong :('
			}
		}
	}
}
</script>

<style>
	
</style>
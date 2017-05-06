<template>
	<div id="register-form">
		<form @submit.prevent="register">
			<input
				type="text"
				name="username"
				placeholder="username"
				v-model="username">
			<input
				type="email"
				name="email"
				placeholder="email"
				v-model="email">
			<input
				type="password"
				name="password"
				placeholder="password"
				v-model="password">
			<input
				type="submit"
				name="Submit"
				value="Submit">
		</form>

	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
		}
	},
	methods: {
		register() {
			let payload = {
				username: this.username,
				email: this.email,
				password: this.password,
			}
			this.$store.dispatch('register', payload)
			this.username = ''
			this.email = ''
			this.password = ''
		}
	}
}
</script>

<style>
	
</style>
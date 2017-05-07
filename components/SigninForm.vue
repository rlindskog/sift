<template>
	<div id="sign-in-form">
		<form @submit.prevent="signIn">
			<input
				type="text"
				name="username"
				placeholder="username"
				v-model="username">
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
		<h1 v-if="$store.isAuthenticated">Signed in</h1>
		<h1 v-else>Not signed in</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		}
	},
	methods: {
		signIn() {
			let payload = {
				username: this.username,
				password: this.password
			}
			this.$store.dispatch('signIn', payload)
		}
	}
}	
</script>

<style>
	
</style>
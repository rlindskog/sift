<template>
	<div id="sign-in-form">
		<div>
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
		</div>
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
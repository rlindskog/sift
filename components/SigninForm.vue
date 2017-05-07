<template>
	<div id="sign-in-form">
			<v-row>
				<v-col xs10 offset-xs1 sm6 offset-sm3>
					<h5>Sign In</h5>
					<form @keydown.enter="signIn">
						<v-text-field
							type="text"
							name="username"
							label="username"
							v-model="username"/>
						<v-text-field
							type="password"
							name="password"
							label="password"
							append-icon="remove_red_eye"
							v-model="password"/>
						<v-btn
							light
							default
							class="btn--light-flat-focused"
							@click.native="signIn"
						>Submit</v-btn>
					</form>
				</v-col>
			</v-row>
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
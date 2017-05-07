<template>
	<div id="register-form">
		<v-row>
			<v-col xs10 offset-xs1 sm6 offset-sm3>
				<h5>Register</h5>
				<form @keydown.enter="register">
					<v-text-field
						type="text"
						name="username"
						label="username"
						v-model="username"/>
					<v-text-field
						type="email"
						name="email"
						label="email"
						v-model="email"/>
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
						@click.native="register"
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
			email: '',
			password: ''
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
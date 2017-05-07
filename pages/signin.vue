<template>
	<div id="index">
		<p>Sign in</p>
		<div v-if="!$store.state.isAuthenticated">
			<sign-in-form />
		</div>
		<div v-else>
			<h4>Welcome {{ $store.state.user.username }}!</h4>
			<p>Check out your <nuxt-link :to="'/' + $store.state.user.username">profile</nuxt-link></p>
		</div>
	</div>
</template>

<script>
import SignInForm from '~/components/SignInForm.vue'
export default {
	components: { SignInForm },
	data() {
		return {
			message: 'This is register!'
		}
	}
}
</script>

<style>


</style>
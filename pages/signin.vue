<template>
	<div id="index">
		<div v-if="!$store.state.isAuthenticated">
			<sign-in-form />
		</div>
		<v-row v-else>
			<v-col xs10 offset-xs1 sm6 offset-sm3>
			<h4>Welcome {{ $store.state.user.username }}!</h4>
			<p>Check out your <nuxt-link :to="'/users/' + $store.state.user.username">profile</nuxt-link></p>
			</v-col>
		</v-row>
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
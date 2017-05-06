<template>
	<div id="index">
		<p>SignIn {{ message }}</p>
		<sign-in-form />
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
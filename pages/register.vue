<template>
	<div id="index">
		<p>Register {{ message }}</p>
		<register-form />
	</div>
</template>

<script>
import RegisterForm from '~/components/RegisterForm.vue'
export default {
	components: { RegisterForm },
	data() {
		return {
			message: 'This is register!'
		}
	}
}
</script>

<style>


</style>
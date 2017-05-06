<template>
	<div id="sign-in-form">
		<form>
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
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		}
	}
}	
</script>

<style>
	
</style>
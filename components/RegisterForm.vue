<template>
	<div id="register-form">
		<form>
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
	}
}
</script>

<style>
	
</style>
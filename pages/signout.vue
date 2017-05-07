<template>
	<div>
		<p>Are you sure you would like to signout?</p>
		<button @click="signOut">Yes</button>
	</div>
</template>

<script>
export default {
	methods: {
		signOut() {
			this.$store.dispatch('signOut')
		}
	}
}
</script>

<style>
	
</style>
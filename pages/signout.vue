<template>
	<v-row>
		<v-col xs10 offset-xs1 sm6 offset-sm3>
		<h4>Are you sure you would like to signout?</h4>
		<v-btn
			light
			default
			center
			class="center btn--light-flat-focused"
			@click.native="signOut"
		>Submit</v-btn>
		</v-col>
	</v-row>
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
.center {
	margin: 0 auto;
}
	
</style>
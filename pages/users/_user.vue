<template>
	<div id="user">
		<p>The url is {{ url }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: this.$route.params.user
		}
	}
}
</script>

<style>
	
</style>
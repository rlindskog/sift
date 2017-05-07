<template>
	<div>
		<p>{{id}}</p>
		<p>This is an article</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id
		}
	}
}
</script>

<style scoped></style>
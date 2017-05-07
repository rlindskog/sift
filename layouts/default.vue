<template>
	<div>
		<nav-bar />
		<div id="content">
			<nuxt/>
		</div>
	</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
	components: { NavBar }
}
</script>

<style>
#content {
	margin-top: 100px;
}
</style>
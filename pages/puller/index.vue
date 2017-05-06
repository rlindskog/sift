<template>
	<div id="index">
		<p>Puller</p>
		<form>
			<input type="" name="">
			<button v-on:click="submit" ></button>
		</form>
	</div>
</template>

<script>
// import axios from '~plugins/axios'

export default {
	data() {
		return {
			message: 'Hello, world!'
		}
	},
	method: {
		submit() {
			axios.post('')
		}
	}
}
</script>

<style>


</style>
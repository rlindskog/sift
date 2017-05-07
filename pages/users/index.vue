<template>
	<div id="user">
		<p>This is users.</p>
		<div v-for="user in $store.state.lists.users" key="user.index">
			<h4>{{ user.username }}</h4>
			<ul>
				<li>{{ user.email }}</li>
				<li>{{ user.createdAt }}</li>
				<li>{{ user._id }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
	async fetch ({ store, params }) {
		let { data } = await axios.get('/api/users')
		console.log(data)
    store.commit('FETCH_USERS', data)
  }
}
</script>

<style>
	
</style>
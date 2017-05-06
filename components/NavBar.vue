<template>
	<div id="nav-bar">
		<nav id="nav">
			<ul v-if="$store.state.isAuthenticated">
				<nuxt-link class="nav-item" to="/" exact>Home</nuxt-link>
				<nuxt-link class="nav-item" to="/about">About</nuxt-link>
			</ul>
			<ul v-else>
				<nuxt-link class="nav-item" to="/register">Register</nuxt-link>
				<nuxt-link class="nav-item" to="/signin">Signin</nuxt-link>
			</ul>
		</nav>
	</div>
</template>

<script>
	
</script>

<style>
#nav-bar {
	z-index: 999;
	top: 0;
	position: fixed;
	width: 100%;
	background-color: white;
	box-shadow: 0 5px 10px rgba(0,0,0,0.19);
}

ul {
	width: 100%;
	list-style: none;
	display: block;
	margin-right: 10px;
}

.nav-item {
	text-decoration: none;
	color: black;
	padding-left: 10px;
	padding-right: 10px;
}
.nav-item {
	color: black;
	transition: color .5s;
}


.nuxt-link-active {
	color: red;
	transition: color .5s;
}




	
</style>
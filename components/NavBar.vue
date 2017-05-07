<template>
	<div>
		<v-toolbar>
		  	<!-- <v-toolbar-logo>Logo</v-toolbar-logo> -->
		  	<v-toolbar-items>

			  	
			  	<img :src="headlinelogo">

				<v-toolbar-title> </v-toolbar-title>

				<span v-if="$store.state.isAuthenticated">

					<v-toolbar-item class="nav-item" to="/register">Register</v-toolbar-item>
					<v-toolbar-item class="nav-item" to="/signin">Signin</v-toolbar-item>
				</span>
				<span v-else>
					<v-toolbar-item class="nav-item" to="/" exact>Home</v-toolbar-item>
					<v-toolbar-item class="nav-item" to="/about">About</v-toolbar-item>
				</span>

			</v-toolbar-items>
		</v-toolbar>
	</div>	
</template>


<!-- <v-toolbar-items class="hidden-sm-and-down">
    <v-toolbar-item v-for="item in items">{{ item.text }}</v-toolbar-item>
  </v-toolbar-items> -->



<script>
	import headlinelogo from '~/assets/images/Headline_LOGO.svg'

	export default {
	data() {
		return {
			headlinelogo
		}
	}
}
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






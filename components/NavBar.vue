<template>
		<v-toolbar class="sticky grey">
		  	<!-- <v-toolbar-logo>Logo</v-toolbar-logo> -->
		  	<v-toolbar-items>
	      	<img id="logo" :src="headlinelogo">

		      <v-toolbar-title></v-toolbar-title>
		      <v-toolbar-items>
			      <v-toolbar-items>
			        <v-toolbar-item ripple class="nav-item" router to="/" exact>Home</v-toolbar-item>
			        <v-toolbar-item ripple class="nav-item" router to="/about">About</v-toolbar-item>
		     		</v-toolbar-items>
		     		<v-toolbar-item ripple class="nav-item" router to="/articles">Articles</v-toolbar-item>
		     		</v-toolbar-items>

		     		<v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
				      <v-btn icon dark slot="activator">
				        <v-icon>more_vert</v-icon>
				      </v-btn>

			      <v-list v-if="$store.state.isAuthenticated">
			        <v-list-item>
			          <v-list-tile ripple router to="/signout">
			            <v-list-tile-title>Sign Out</v-list-tile-title>
			          </v-list-tile>
			        </v-list-item>
			        <v-list-item>
			          <v-list-tile>
			            <v-list-tile-title>Settings</v-list-tile-title>
			          </v-list-tile>
			        </v-list-item>
			      </v-list>

			      <v-list v-else>
			        <v-list-item>
			          <v-list-tile ripple router to="/signin">
			            <v-list-tile-title >Sign In</v-list-tile-title>
			          </v-list-tile>
			        </v-list-item>
			        <v-list-item>
			          <v-list-tile ripple router to="/register">
			            <v-list-tile-title >Register</v-list-tile-title>
			          </v-list-tile>
			        </v-list-item>
			      </v-list>

			    </v-menu>
     		</v-toolbar-items>

    </v-toolbar-items>
  </v-toolbar>

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

	#logo {
		position: auto;
		z-index: 5000;
	}
	.nuxt-link-active {
		color: red;
		transition: color .5s;
	}

	.sticky {
		top: 0;
		position: fixed;
	}

	
</style>
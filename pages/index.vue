<template>
	<div id="index">
		<!-- <v-card v-bind:img="image" height="500px" class="parent"> -->
		<v-parallax :src="newyork" class="gobehind opacity goUp" id="signin-btn">
			<div class="text-md-center centerpiece valign">
			<b>HEADLINE</b>
			, ORGANIZING THE WORLD'S STORIES FOR YOUR PASSIONS
			<div>
			<v-btn
					light
					default
					class="btn-light-flat-focused"
					router
						
					to="/signin"
				>Sign In</v-btn>
				</div>
			</div>
		</v-parallax>
		

		<div class="text-md-center centerpiece">HEADLINE

		</div>
		<p>
			
		</p>
	</div>
</template>

<script>
import newyork from '~/assets/images/nyc.jpg'

export default {
	data() {
		return {
			newyork
		}
	}
}
</script>

<style>
.body {
	height: 100vh;
}
.centerpiece {
	font-size: 25px;
	z-index: 9;
	position: relative; 
	margin: auto;
	left: 0;
	right: 0;
	color: white;

}
.valign {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    /* vendor prefixes omitted due to brevity */
}
.gobehind {
	z-index: -1;
    overflow: visible;

}
.goUp {
	margin-top: -55px;
	position: relative;
}
.opacity {
	opacity: 1;


}

#signin-btn {
	z-index: 5;
}


</style>
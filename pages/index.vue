<template>
	<div id="index">
		<!-- <v-card v-bind:img="image" height="500px" class="parent"> -->
		<v-parallax :src="newyork" class="gobehind opacity goUp">
			<div class="text-md-center centerpiece valign">
			<b>HEADLINE</b>
			, ORGANIZING THE WORLD'S STORIES FOR YOUR PASSIONS
			</div>
		</v-parallax>
		<div class="text-md-center centerpiece">HEADLINE</div>
		<p>Home {{ message }}</p>
		<p>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</p>
	</div>
</template>

<script>
import newyork from '~/assets/images/nyc.jpg'

export default {
	data() {
		return {
			message: 'This is home!',
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
	z-index: 100;
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

</style>
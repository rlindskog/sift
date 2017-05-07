<template>
	<div id="index">
		<div class=" goUp text-md-center text-xs-center text-sm-center" id="test">
			<img class="pen-img center" :src="headlinelogo">
			<div class=" centertext valign">
				
				<div>
				Portfolio for journalists. <br />
				Trusted content for readers. <br />
				</div>
				<v-btn
					light
					default
					class="btn-light-flat-focused"
					router
					to="/signin"
				>Sign In</v-btn>
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import headlinelogo from '~/assets/images/Headline Vertical New.svg'
export default {
	data() {
		return {
			 headlinelogo
		}
	}
}
</script>

<style>
.body {
	height: 100vh;
}
.centertext {
	font-size: 25px;
	color: #333;

}
.valign {
    position: relative;
    top: 50%;
    /*transform: translateY(-50%);*/
    /* vendor prefixes omitted due to brevity */
}
.gobehind {
	z-index: -1;
    overflow: visible;

}
.goUp {
	margin-top: -55px;
	
}

.front-page {
	min-height: 100%;
	padding-top: 20%;

}

#signin-btn {
	margin-top:2px;
	z-index: 5;
}

.front-logo {
	margin-top: 150px;
	max-height: 200px;
	max-width: 200px;
	width: 100%;

	
}

.pen-img {
	max-width: 25%;
	max-height: 25%;
	display: block;
}

.center {
	margin: 0 auto;
	
}


@media (max-width: 640px) {
	.pen-img {
		margin-top: 200px;
	}

}

</style>
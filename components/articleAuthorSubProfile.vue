<template>
	<div class="inbl">
		<img :src = "face" class = " mini-face"/>
		
		<!-- TODO: add link to their profile on image click -->
		<div class="name">David J Pfeiffer</div>
		<div class="person-summary">Student and Software Engineer. I want to use science and technology to make the world a better place</div>
		<div class="date">May 3, 2016</div>

	</div>
</template>

<script>
import face from '~/assets/images/face.png'

export default {
	props: ['facial'],
	data() {
		return {
			face
		}
	}
}	
</script>

<style scoped>
	.name {
		font-size: 15px;
	}
	.person-summary,
	.date {
		font-size: 13px;
	}
	.inbl {
	    overflow: hidden;
    	white-space: nowrap;
    	margin-bottom: 30px;
    	margin-top: -40px;
	}
	.container {
	    white-space: nowrap;
	} 
	.mini-face {
		max-width: 60px;
		max-height: 60px;
	}

</style>
<!-- <div class = "container">
    <img src = "pic.png" class = "inbl"/>
    <div class = "inbl"></div>
    <div class = "inbl"></div>
</div>
CSS:





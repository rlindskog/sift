<template>
	<div >
		
		<v-card v-bind:img="image" height="500px" class="parent">
			<v-row>
				<img :src="facial" class="img-circle center text-lg-center" /> 
				 <v-icon large class="teal--text text--darken-2">email</v-icon>
			</v-row>
		</v-card>
		

	</div>	
</template>

<script>
export default {
	props: ['image', 'facial'],
}	
</script>

<style scoped>
.parent {
  position: relative;
  top: 0;
  left: 0;
  
}


.center {
	margin: 0 auto;
}

.img-circle {
    border-radius: 50%;
    max-height: 80%;
}
</style>




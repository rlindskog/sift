<template>
	<v-container fluid="fluid">
		<v-row class="mr-3 ml-3 mt-3">
			<v-col lg8 md8 sm12 xs12 class="mt-5">
			  <v-card class="primary story-card">
			    <v-card-text>{{ title }}</v-card-text>
			  </v-card>
			</v-col>
			<v-col lg4 md4 sm12 xs12 class="mt-5">
			  <v-card class="primary story-card">
			    <v-card-text>{{ title }}</v-card-text>
			  </v-card>
			</v-col>
		</v-row>
	</v-container >		

</template>

<script>
export default {
	props: ['title']
}	
</script>

<style>
	
</style>
<template >
	<div class="article-width centered">
		<div class="ml-5 mr-5 text-md-center text-lg-center left">

			<!-- TODO add image argument passing -->
			<articleAuthorSubProfile />

			<h2 class="medium-h1"><b>{{ title }}</b></h2>

			<h1>{{ subtitle }}</h1>

			<br />

			{{ body }}

		</div>
	</div>
</template>

<script>

import articleAuthorSubProfile from '~/components/articleAuthorSubProfile.vue'
export default {
	components: { articleAuthorSubProfile },
	data() {
		return {
			articleAuthorSubProfile,
			body,
			subtitle,
			title
		}
	}
}
	
</script>


<style scoped>
	/*.medium-h1 {
		font-family: "Charter ITC"
	}*/
	.centered {
		margin: auto;
	}

	div,
	h2,
	h1,
	p {
		text-align: left;
	}
	@media (max-width: 640px) {
		.medium-h1 {
			font-size: 32px;
		}
		.article-width {
			max-width: 99%;
		}
		p {
			font-size: 18px;
		}
	}

	@media (min-width: 641px) {
		.medium-h1 {
			font-size: 40px;
		}
		.article-width {
			max-width: 75%;
		}
		p {
			font-size: 21px;
		}
	}
</style>
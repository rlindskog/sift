<template >
	<div class="article-width centered">
		<div class="ml-5 mr-5 text-md-center text-lg-center left">

			<!-- TODO add image argument passing -->
			<articleAuthorSubProfile />

			<h2 class="medium-h1"><b>Melinda Gates and Fei-Fei Li Want to Liberate AI from “Guys With Hoodies”</b></h2>

			<h1>These two female technologists discuss the promises of artificial intelligence — and how to diversify the field.</h1>

			<br />

			<p>Artificial intelligence has a diversity problem. Too many of the people creating it share a similar background. To renowned researcher Fei-Fei Li, this paucity of viewpoints constitutes a crisis: “As an educator, as a woman, as a woman of color, as a mother, I’m increasingly worried,” she says. “AI is about to make the biggest changes to humanity, and we’re missing a whole generation of diverse technologists and leaders.”

			From the chair next to her, Melinda Gates affirms this, adding, “If we don’t get women and people of color at the table — real technologists doing the real work — we will bias systems. Trying to reverse that a decade or two from now will be so much more difficult, if not close to impossible.”
			</p>
			<p>
			Both women are powerful technologists. As chief scientist of artificial intelligence and machine learning for Google Cloud, Li is currently on sabbatical from Stanford, where she directs the Stanford Artificial Intelligence Lab. Gates studied artificial intelligence in the early days of the 1980s when when she was learning to code at Duke University. She spent a decade at Microsoft before leaving and later pursuing philanthropy. Now Gates is putting her mind and her money behind a national nonprofit that Li is helping launch: AI4All.
			
			The name says it all. AI4All will support educational programs designed to expose underrepresented high school students to artificial intelligence. I sat down with Gates and Li last week at Stanford University to talk about how to make AI research more appealing to women, why hoodies shouldn’t be tech’s status symbol, and what it takes to work in AI.
			</p>
		</div>
</template>

<script>

import articleAuthorSubProfile from '~/components/articleAuthorSubProfile.vue'
export default {
	components: { articleAuthorSubProfile },
	data() {
		return {
			articleAuthorSubProfile
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
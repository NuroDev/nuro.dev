<template>
	<div class="flex flex-col h-full">
		<Navbar />

		<main class="mt-16 flex flex-row flex-wrap items-center justify-center">
			<BlogCard
				v-for="(post, i) in posts"
				:key="i"
				:post="post"
				data-aos="fade-up"
				data-aos-duration="1200"
				:data-aos-delay="i * 50"
				:data-aos-offset="-(i * 100)"
				data-aos-easing="ease-in-out-back"
			/>
		</main>
	</div>
</template>

<script>
import AOS from 'aos';

import BlogCard from '@theme/components/BlogCard.vue';
import Navbar from '@theme/components/Navbar.vue';

// TODO: Move to theme.styl
import 'aos/dist/aos.css';

export default {
	components: {
		BlogCard,
		Navbar,
	},
	data() {
		return {
			posts: [],
		};
	},
	mounted() {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out-sin',
			once: true,
		});

		this.posts = this.$site.pages
			.filter((x) => x.path.startsWith('/blog/') && !x.frontmatter.index)
			.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
	},
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>

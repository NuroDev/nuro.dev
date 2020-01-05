<template>
	<div class="flex flex-col h-full">
		<Navbar />

		<main class="mt-16 flex flex-wrap items-center justify-around">
			<BlogCard 
				v-for="(post, i) in 5" 
				:key="i"
				title="Title" 
				description="Description" 
				:date="new Date()" 
				url="/"
				tag="Random"
			/>
		</main>
	</div>
</template>

<script>
import moment from 'moment';

import BlogCard from '@theme/components/BlogCard.vue';
import Navbar from '@theme/components/Navbar.vue';

export default {
	components: {
		BlogCard,
		Navbar,
	},
	methods: {
		formateDate: (date) => moment(date).format("MMM Do YYYY"),
	},
	computed: {
		posts: () => {
			// this.$site.pages.filter(x => x.path.startsWith('/blog/') && !x.frontmatter.index).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
			// console.log(this.$site);
		}
	}
}
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>

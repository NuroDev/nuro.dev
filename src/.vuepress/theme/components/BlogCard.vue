<template>
	<a :href="post.path">
		<article
			class="max-w-md mx-8 md:mx-4 mb-4 md:mb-12 overflow-hidden rounded-lg defaultTransition cursor-pointer"
		>
			<img
				class="w-full"
				:src="`/assets/blog/${post.frontmatter.banner}`"
				:alt="post.frontmatter.banner_alt ? post.frontmatter.banner_alt : ''"
			/>

			<div class="p-4 md:p-16">
				<span
					v-if="post.frontmatter.tags != undefined"
					v-for="(tag, i) in post.frontmatter.tags"
					:key="i"
					class="inline-block rounded-full px-3 py-1 text-blue-500 mr-2 mb-5 uppercase tracking-widest text-xs tag"
					v-text="`#${tag}`"
				/>
				<h1
					:href="post.path"
					class="text-2xl md:text-4xl mb-4 block font-semibold leading-tight"
					v-text="post.frontmatter.title"
				/>
				<p class="text-gray-500" v-text="post.frontmatter.description" />

				<p class="text-gray-500" v-text="formatDate(post.frontmatter.date)" />
			</div>
		</article>
	</a href="">
</template>

<script>
import moment from 'moment';

export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	methods: {
		formatDate: (date) => moment(date).format('Do MMM YYYY'),
	}
};
</script>

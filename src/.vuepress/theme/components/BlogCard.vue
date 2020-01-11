<template>
	<div>
		<!-- Wrapper element to stop AOS transition overrides -->
		<article
			class="max-w-md overflow-hidden rounded-lg shadow-md hover:shadow-2xl defaultTransition mx-4 mb-4 md:mb-12 bg-white"
		>
			<a :href="post.path" v-if="post.frontmatter.banner">
				<img
					class="w-full"
					:src="`/assets/blog/${post.frontmatter.banner}`"
					:alt="post.frontmatter.banner_alt ? post.frontmatter.banner_alt : ''"
				/>
			</a>
			<div class="p-4 md:p-16">
				<span
					v-if="post.frontmatter.tags != undefined"
					v-for="(tag, i) in post.frontmatter.tags"
					:key="i"
					class="inline-block bg-blue-100 rounded-full px-3 py-1 text-blue-500 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes"
					v-text="`#${tag}`"
				/>
				<a
					:href="post.path"
					class="text-2xl md:text-4xl mb-4 block font-semibold leading-tight text-gray-800 hover:text-gray-700"
					v-text="post.frontmatter.title"
				/>
				<p class="text-gray-500" v-text="post.frontmatter.description" />

				<p class="text-gray-500" v-text="formatDate(post.frontmatter.date)" />
				<a
					:href="post.path"
					class="mt-6 block text-gray-600 hover:text-gray-900 defaultTransition"
				>
					Read more
					<!-- TODO: Add SVG icon -->
					<i class="pl-2 fas fa-arrow-right"></i>
				</a>
			</div>
		</article>
	</div>
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

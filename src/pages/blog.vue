<template>
	<div class="content">
		<div class="relative max-w-6xl mx-auto">
			<div class="px-2">
				<h2 class="title">📕 Blog</h2>
				<p class="subtitle">Let's talk about games, tech & programming</p>
			</div>
			<PostLatest v-if="latestPost" :post="latestPost" />
			<div class="posts">
				<PostCard v-for="(post, i) in posts" :key="i" :post="post" :index="i" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { format } from 'date-fns';
import { useRouter } from 'vue-router';

import type { IFrontmatter, IPost } from '~/types/blog';

useHead({
	title: 'nuro ─ blog',
});

const router = useRouter();
const posts = router.getRoutes()
	.map((route) => {
		const frontmatter = route.meta.frontmatter as IFrontmatter;

		if (!route.path.startsWith('/blog/') && !frontmatter.date) return null

		const date = new Date(frontmatter.date);

		const result: IPost = {
			banner: {
				alt: frontmatter.banner_alt,
				show: frontmatter.banner_show || true,
				url: frontmatter.banner,
			},
			date: {
				raw: date,
				readable: format(date, 'PPP'),
			},
			description: {
				show: frontmatter.description_show || false,
				raw: frontmatter.description,
			},
			title: {
				prefix: frontmatter.title_prefix,
				raw: frontmatter.title,
			},
			url: route.path.replaceAll('//', '/'),
		}

		return result;
	})
	.filter((route) => route !== null)
	.sort((a, b) => +new Date(b.date.raw) - +new Date(a.date.raw));

const latestPost: IPost = [...posts][0];
posts.shift();
</script>

<style lang="postcss" scoped>
.content {
	@apply relative \
		pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8;

	.title {
		@apply text-3xl sm:text-4xl font-extrabold \
			text-gray-900 dark:text-white \
			tracking-tight;
	}

	.subtitle {
		@apply mt-3 sm:mt-4 \
			text-md font-medium \
			text-gray-400;
	}

	.posts {
		@apply max-w-lg \
			mt-4 lg:mt-12 mx-auto \
			grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none;
	}
}
</style>

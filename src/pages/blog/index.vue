<template>
	<div class="content">
		<div class="relative max-w-6xl mx-auto">
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
	.filter((route) => route.path.startsWith('//blog//') && route.meta.frontmatter)
	.map((route) => {
		const {
			banner_alt,
			banner_show = true,
			banner,
			description_show = false,
			description,
			title_prefix,
			title,
			...frontmatter
		} = route.meta.frontmatter as IFrontmatter;
		const date = new Date(frontmatter.date);

		return {
			banner: {
				alt: banner_alt,
				show: banner_show,
				url: banner,
			},
			date: {
				raw: date,
				readable: format(date, 'PPP'),
			},
			description: {
				show: description_show,
				raw: description,
			},
			title: {
				prefix: title_prefix,
				raw: title,
			},
			url: route.path.replaceAll('//', '/'),
		} as IPost;
	})
	.sort((a, b) => +new Date(b.date.raw) - +new Date(a.date.raw));

const latestPost: IPost = [...posts][0];
posts.shift();
</script>

<style lang="postcss" scoped>
.content {
	@apply relative \
		pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8;

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

<template>
	<template v-if="!posts">
		<NoPosts />
	</template>
	<div v-else class="content">
		<div class="relative max-w-6xl mx-auto">
			<PostLatest v-if="posts.latestPost" :post="posts.latestPost" />
			<div class="posts">
				<PostCard v-for="(post, i) in posts.posts" :key="i" :post="post" :index="i" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

import { usePosts } from '~/composables';

const title = 'nuro ─ blog ─ all';
useHead({
	title,
	meta: [
		{ itemprop: 'description', content: "Hey 👋 I'm Ben, a developer" },
		{ itemprop: 'image', content: '/og_banner.png' },
		{ itemprop: 'name', content: title },
		{ name: 'og:description', content: "Hey 👋 I'm Ben, a developer" },
		{ name: 'og:image', content: '/og_banner.png' },
		{ name: 'og:title', content: title },
		{ name: 'twitter:description', content: "Hey 👋 I'm Ben, a developer" },
		{ name: 'twitter:image:src', content: '/og_banner.png' },
		{ name: 'twitter:title', content: title },
	],
});

const posts = usePosts();
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

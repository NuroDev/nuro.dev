<template>
	<div class="content">
		<div class="relative max-w-6xl mx-auto">
			<PostLatest :post="latestPost" />
			<div class="posts">
				<PostCard v-for="(post, i) in posts" :key="i" :post="post" :index="i" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

import { usePosts } from '~/consumables';

useHead({
	title: 'nuro ─ blog',
});

const { latestPost, posts } = usePosts();
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

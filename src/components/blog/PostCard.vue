<template>
	<router-link :aria-label="`Read blog post: ${post.title.raw}`" :to="post.url" class="post">
		<div class="banner" v-if="post.banner.url && index <= 2">
			<div class="placeholder animate-pulse" />
			<img :alt="post.title.raw" :draggable="false" loading="lazy" :src="post.banner.url" />
		</div>

		<div class="content">
			<div class="text">
				<p class="title" v-text="post.title.raw" />
				<p
					class="description"
					v-text="post.description.raw"
					:aria-label="post.description.raw"
				/>

				<div v-if="post.date" class="meta">
					<PostDatePill :date="post.date.raw" />
				</div>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import type { IPost } from '~/types/blog';

defineProps<{
	index: number;
	post: IPost;
}>();
</script>

<style lang="postcss" scoped>
.post {
	@apply flex flex-col \
		rounded-2xl overflow-hidden \
		hover:shadow-xl \
		transform hover:-translate-y-1 \
		transition ease-in-out duration-300 \
		focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-primary-500;

	.banner {
		@apply relative flex justify-center my-auto \
			w-full max-w-xl lg:max-h-sm \
			overflow-hidden;

		.placeholder {
			@apply w-full h-full lg:h-48 \
				bg-gray-200 dark:bg-gray-600;
		}

		img {
			@apply absolute top-0 left-0 w-full h-48 \
				object-cover select-none;
		}
	}

	.content {
		@apply flex-1 flex flex-col justify-between \
			p-6 \
			bg-gray-50 dark:bg-gray-900 bg-opacity-5 dark:bg-opacity-5 backdrop-filter backdrop-blur backdrop-saturate-200 \
			rounded-2xl lg:rounded-tr-none lg:rounded-tl-none \
			border-2 lg:border-t-0 border-gray-100 dark:border-gray-500 \
			bg-transparent;

		.text {
			@apply flex flex-col flex-1 justify-around \
				rounded-lg \
				text-gray-300 dark:text-gray-400 \
				focus:outline-none focus:ring-4 focus:border-none focus:ring-primary-500;

			.title {
				@apply text-xl font-bold \
					text-gray-900 dark:text-gray-100;
			}

			.description {
				@apply mt-3 \
					text-base line-clamp-2;
			}

			.meta {
				@apply flex items-start space-x-1 \
					mt-4 \
					text-sm;
			}
		}
	}
}
</style>

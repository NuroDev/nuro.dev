<template>
	<a :aria-label="`Read blog post: ${post.title}`" :href="post.url" class="post">
		<div class="banner" v-if="post.imageUrl">
			<img
				class="h-48 w-full object-cover select-none"
				draggable="false"
				loading="lazy"
				:src="post.imageUrl"
				:alt="post.title"
			/>
		</div>

		<div class="content">
			<div class="text">
				<p class="title" v-text="post.title" />
				<p class="description" v-text="post.description" :aria-label="post.description" />

				<div class="meta">
					<time :datetime="post.datetime" v-text="post.date" />
					<span aria-hidden="true">
						&middot;
					</span>
					<span v-text="`${post.readingTime} read`" />
				</div>
			</div>
		</div>
	</a>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import type { PropType } from "vue";

import type { IPost } from "../../types/blog";

defineProps({
	post: {
		required: true,
		type: Object as PropType<IPost>
	},
})
</script>

<style lang="postcss" scoped>
.post {
	@apply flex flex-col \
		border-2 border-gray-100 dark:border-gray-500 \
		rounded-lg overflow-hidden \
		hover:shadow-xl \
		transform hover:-translate-y-1 \
		focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-primary-500;

	.banner {
		@apply flex-shrink-0;

		img {
			@apply w-full h-48 \
				select-none;
		}
	}

	.content {
		@apply flex-1 flex flex-col justify-between \
			p-6 \
			bg-transparent;

		.text {
			@apply flex flex-col flex-1 justify-around mt-2 \
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

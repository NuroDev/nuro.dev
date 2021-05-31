<template>
	<router-link
		:aria-label="`Read blog post: ${post.title}`"
		class="post"
		rel="noopener noreferrer"
		:to="post.url"
	>
		<div class="banner">
			<picture>
				<source :srcset="post.imageUrl" />
				<img :src="post.imageUrl" :alt="post.title" loading="lazy" />
			</picture>
		</div>

		<div class="content">
			<h2 class="title" v-text="post.title" />
			<p v-if="post.description" class="description" v-text="post.description" />
			<div class="footer">
				<img
					v-if="post.author"
					class="avatar"
					loading="lazy"
					:src="post.author.imageUrl"
					:alt="post.author.name"
				/>
				<div class="text-sm pl-4">
					<div class="meta">
						<span>18/05/2021</span>
						<span class="divider" />
						<span>2 min read</span>
					</div>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

import type {PropType} from "vue"

import type { IPost } from "../../types/blog"

defineProps({
	post: {
		required: true,
		type: Object as PropType<IPost>,
	}
})
</script>

<style lang="postcss" scoped>
.post {
	@apply flex flex-col lg:flex-row \
		mt-12 p-4 \
		rounded-lg \
		border-2 border-gray-100 dark:border-gray-500 lg:border-none \
		focus:outline-none focus:ring-4 focus:ring-primary-500;

	.banner {
		@apply flex justify-center \
			w-full xl:w-2/4 lg:max-w-xl lg:h-auto \
			overflow-hidden overflow-hidden \
			rounded-lg hover:shadow-xl;

		picture {
			img {
				@apply w-full h-full object-cover;
			}
		}
	}

	.content {
		@apply flex flex-col flex-1 justify-evenly \
			m-auto sm:m-0 pb-3 sm:p-1 sm:pt-0 lg:pl-12 \
			text-gray-300 dark:text-gray-400;

		.title {
			@apply mt-6 lg:mt-0 \
				text-3xl sm:text-4xl lg:text-5xl font-bold \
				text-gray-500 dark:text-white;
		}

		.description {
			@apply mt-6 lg:mt-0 \
				text-lg;
		}

		.footer {
			@apply flex items-center \
				mt-6 lg:mt-0;

			.avatar {
				@apply w-10 h-10 \
					border border-2 border-primary-500 \
					rounded-full;
			}

			.meta {
				@apply flex items-center;
			}

			.divider {
				@apply h-1 w-1 mx-1 border-2 dark:border-gray-400 rounded-full;
			}
		}
	}
}
</style>

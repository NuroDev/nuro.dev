<template>
	<router-link
		:aria-label="`Read blog post: ${post.title.raw}`"
		class="post"
		rel="noopener noreferrer"
		:to="post.url"
	>
		<div class="banner">
			<picture>
				<source :srcset="post.banner.url" />
				<img
					:alt="post.banner?.alt || post.title.raw"
					:draggable="false"
					loading="lazy"
					:src="post.banner.url"
				/>
			</picture>
		</div>

		<div class="content">
			<h2 class="title" v-text="post.title.raw || post.title" />
			<p
				v-if="(post.description && post.description.show) || true"
				class="description"
				v-text="post.description.raw || post.description"
			/>
			<div class="footer">
				<img
					alt="nuro"
					class="avatar"
					:draggable="false"
					loading="lazy"
					src="/apple-touch-icon-ipad-76x76.png"
				/>
				<div v-if="post.date" class="text-sm pl-4">
					<div class="meta">
						<span v-text="post.date.readable" />
					</div>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

import type { IPost } from "~/types/blog"

defineProps<{
	post: IPost,
}>();
</script>

<style lang="postcss" scoped>
.post {
	@apply flex flex-col lg:flex-row \
		mt-12 p-4 \
		rounded-lg \
		border-2 border-gray-100 dark:border-gray-500 lg:border-none \
		focus:outline-none focus:ring-4 focus:ring-primary-500;

	.banner {
		@apply flex justify-center my-auto \
			w-full xl:w-2/4 lg:max-w-xl lg:max-h-sm \
			overflow-hidden overflow-hidden rounded-lg \
			hover:shadow-xl;

		picture {
			img {
				@apply w-full h-auto \
					rounded-lg object-cover select-none;
			}
		}
	}

	.content {
		@apply flex flex-col flex-1 justify-evenly \
			m-auto sm:m-0 pb-3 sm:p-1 sm:pt-0 lg:pl-12 \
			text-gray-300 dark:text-gray-400;

		.title {
			@apply mt-6 lg:mt-0 \
				text-3xl sm:text-4xl lg:text-5xl font-bold line-clamp-4 \
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
				@apply w-8 h-8 \
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

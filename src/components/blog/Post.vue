<template>
	<div class="content">
		<div class="banner">
			<div class="relative">
				<div class="placeholder animate-pulse" />
				<img
					:src="frontmatter.banner.url ?? frontmatter.banner"
					:alt="frontmatter.banner.alt ?? frontmatter.title"
					:draggable="false"
				/>
			</div>
		</div>

		<div class="body">
			<h1>
				<span
					v-if="frontmatter.title.prefix"
					class="block text-base text-center text-primary-600 font-semibold tracking-wide uppercase"
				>
					{{ frontmatter.title.prefix }}
				</span>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
				>
					{{ frontmatter.title.text ?? frontmatter.title }}
				</span>
			</h1>
			<p v-if="frontmatter.description" class="mt-8 text-xl text-gray-500 leading-8">
				{{ frontmatter.description }}
			</p>
		</div>
		<div class="body">
			<p v-if="frontmatter.description">
				{{ frontmatter.description }}
			</p>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { defineProps } from 'vue';

const { frontmatter } = defineProps<{
	frontmatter: any;
}>();

useHead({
	title: `nuro ─ ${frontmatter.title.text ?? frontmatter.title}`,
});
</script>

<style lang="postcss" scoped>
.content {
	@apply relative px-4 py-16 sm:px-6 lg:px-8 \
		overflow-hidden;

	.banner {
		@apply sm:max-w-2xl lg:sm:max-w-6xl mx-auto;

		.placeholder {
			@apply w-6xl h-full h-[16rem] lg:h-lg mb-8 \
				bg-gray-200 dark:bg-gray-600 \
				rounded-3xl;
		}

		img {
			@apply absolute top-0 left-0 w-full h-auto max-h-[16rem] lg:max-h-lg \
				mb-8 \
				rounded-3xl object-cover select-none hover:shadow-xl;
		}
	}

	.body {
		@apply mt-6 prose prose-primary prose-lg text-gray-500 mx-auto;

		.markdown-body {
			h1,
			h2 {
				@apply text-white;
			}

			img {
				@apply rounded-3xl object-cover select-none hover:shadow-xl;
			}
		}
	}
}
</style>

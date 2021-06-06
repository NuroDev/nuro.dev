<template>
	<div class="content">
		<div v-if="frontmatter.banner" class="banner">
			<div class="relative" v-if="frontmatter.banner.show || true">
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

			<p
				v-if="(frontmatter.description && frontmatter.description.show) ?? false"
				class="mt-8 text-xl text-gray-500 leading-8"
			>
				{{ frontmatter.description.text || frontmatter.description }}
			</p>
		</div>
		<div class="body">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { defineProps } from 'vue';

import type { IFrontmatter } from '~/types/blog';

const { frontmatter } = defineProps<{
	frontmatter: IFrontmatter;
}>();

console.log(frontmatter);

useHead({
	title: `nuro ─ ${typeof frontmatter.title === "string" ? frontmatter.title : frontmatter.title.text}`,
});
</script>

<style lang="postcss" scoped>
.content {
	@apply relative px-4 py-16 sm:px-6 lg:px-8 \
		overflow-hidden;

	.banner {
		@apply sm:max-w-2xl lg:sm:max-w-6xl mx-auto;

		.placeholder {
			@apply w-full h-full h-[16rem] lg:h-lg mb-8 \
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
	}
}
</style>

<style lang="postcss">
.markdown-body {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply dark:text-white !important;

		&:hover,
		&:focus {
			.header-anchor {
				@apply opacity-100 no-underline;
			}
		}
	}

	a {
		@apply no-underline \
				transition duration-300 ease-in-out;
	}

	p,
	ul,
	li {
		@apply text-gray-400;
	}

	strong {
		@apply dark:text-white !important;
	}

	img {
		@apply rounded-3xl object-cover select-none hover:shadow-xl;
	}

	figcaption {
		@apply text-gray-200 dark:text-gray-500 \
			text-center !important;
	}

	hr {
		@apply mb-8 dark:border-gray-600 !important;
	}

	p code {
		@apply mx-0.5 py-1 px-2 \
			bg-gray-900 dark:bg-gray-500 \
			text-gray-200 dark:text-gray-100 \
			rounded-lg !important;

		&:after,
		&:before {
			@apply hidden;
		}
	}
}

a.item {
	@apply opacity-60 no-underline border-b-0 \
			transition duration-200 ease-out;

	&:hover {
		@apply opacity-100;
	}
}

a.header-anchor {
	@apply float-left mt-0.5 -ml-5 pr-2 \
			border-none \
			opacity-0 no-underline;
}
</style>

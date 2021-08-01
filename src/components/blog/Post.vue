<template>
	<div class="content">
		<div v-if="frontmatter.banner" class="banner">
			<div class="relative" v-if="frontmatter.banner_show || true">
				<div class="placeholder animate-pulse" />

				<template v-if="Array.isArray(frontmatter.banner)">
					<picture>
						<img
							v-for="(src, i) in frontmatter.banner.reverse()"
							:key="i"
							:src="src"
							:alt="frontmatter.banner_alt ?? frontmatter.title"
							:draggable="false"
						/>
					</picture>
				</template>
				<template v-else>
					<img
						:src="frontmatter.banner"
						:alt="frontmatter.banner_alt ?? frontmatter.title"
						:draggable="false"
					/>
				</template>
			</div>
		</div>

		<div class="body">
			<div class="title">
				<span
					v-if="frontmatter.title_prefix"
					class="prefix"
					v-text="frontmatter.title_prefix"
				/>
				<h1 v-if="frontmatter.title" v-text="frontmatter.title" />
			</div>

			<span v-if="frontmatter.date" class="date">
				<PostDatePill :date="frontmatter.date" />
			</span>

			<p
				v-if="frontmatter.description_show ?? false"
				class="description"
				v-text="frontmatter.description"
			/>
		</div>
		<div class="body">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useHead } from '@vueuse/head';

import type { IFrontmatter } from '~/types/blog';

const { frontmatter } = defineProps<{
	frontmatter: IFrontmatter;
}>();

useHead({
	title: `nuro ─ ${frontmatter.title || 'blog'}`,
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
				rounded-4xl lg:rounded-6xl;
		}

		img {
			@apply absolute top-0 left-0 w-full h-auto max-h-[16rem] lg:max-h-lg \
				mb-8 \
				rounded-4xl lg:rounded-6xl object-cover select-none hover:shadow-xl \
				transition ease-in-out duration-300;
		}
	}

	.prefix {
		@apply block \
			text-base text-center font-semibold tracking-wide uppercase \
			text-primary-600;
	}

	.title {
		h1 {
			@apply block mb-0 \
			text-3xl sm:text-4xl text-center leading-8 font-extrabold tracking-tight \
			text-gray-900 dark:text-white;
		}
	}

	.date {
		@apply flex justify-center items-center \
			mt-4;
	}

	.description {
		@apply mt-8 text-xl text-gray-400 leading-8;
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
		@apply no-underline rounded \
				dark:text-white \
				transition duration-300 ease-in-out \
				focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2 !important;
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
		@apply rounded-3xl object-cover select-none hover:shadow-xl \
			transition ease-in-out duration-300;
	}

	figcaption {
		@apply text-gray-200 dark:text-gray-400 \
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

	th {
		@apply dark:text-white;
	}

	td {
		@apply dark:text-gray-400;
	}

	ol li::before {
		@apply dark:text-gray-300 !important;
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

<template>
	<div class="content">
		<div class="relative max-w-6xl mx-auto">
			<h2 class="title">📕 Blog</h2>
			<p class="subTitle">Let's talk about games, tech & programming</p>
			<PostLatest v-if="posts.latest" :post="posts.latest" />
			<div class="posts">
				<PostCard v-for="(post, i) in posts.all" :key="i" :post="post" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

import type { IPosts } from "../../types/blog"

useHead({
	title: 'nuro ─ blog'
})

const posts: IPosts = {
	latest: {
		title: '👋🏻 Hello World',
		url: '#',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		imageUrl: 'https://via.placeholder.com/1280x720',
		readingTime: '2 min',
		author: {
			name: 'Ben',
			imageUrl: '/apple-touch-icon-ipad-76x76.png',
		},
	},
	all: [
		{
			title: 'Cras sagittis nibh eget blandit.',
			url: '#',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			imageUrl: 'https://via.placeholder.com/1280x720',
			readingTime: '6 min',
			author: {
				name: 'Ben',
				imageUrl: '/apple-touch-icon-ipad-76x76.png',
			},
		},
		{
			title: 'Aliquam erat volutpat. Nullam et.',
			url: '#',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
			date: 'Mar 10, 2020',
			datetime: '2020-03-10',
			imageUrl: 'https://via.placeholder.com/1280x720',
			readingTime: '4 min',
			author: {
				name: 'Ben',
				imageUrl: '/apple-touch-icon-ipad-76x76.png',
			},
		},
		{
			title: 'Nulla dapibus, leo in mollis.',
			url: '#',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
			date: 'Feb 12, 2020',
			datetime: '2020-02-12',
			imageUrl: 'https://via.placeholder.com/1280x720',
			readingTime: '11 min',
			author: {
				name: 'Ben',
				imageUrl: '/apple-touch-icon-ipad-76x76.png',
			},
		},
		{
			title: 'Maecenas efficitur ex id nisl.',
			url: '#',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			readingTime: '2 min',
		},
		{
			title: 'Donec auctor sem at scelerisque.',
			url: '#',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			readingTime: '2 min',
		},
		{
			title: 'Orci varius natoque penatibus et.',
			url: '#',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			readingTime: '2 min',
		},
	],
};
</script>

<style lang="postcss" scoped>
.content {
	@apply relative \
		pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8;

	.title {
		@apply text-3xl sm:text-4xl font-extrabold \
			text-gray-900 dark:text-white \
			tracking-tight;
	}

	.subTitle {
		@apply mt-3 sm:mt-4 \
			text-xl\
			text-gray-400;
	}

	.posts {
		@apply max-w-lg \
			mt-12 mx-auto \
			grid gap-5 lg:grid-cols-3 lg:max-w-none;
	}
}
</style>

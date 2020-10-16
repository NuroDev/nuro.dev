<template>
	<section class="bg-transparent body-font">
		<div class="container px-5 py-24 mx-auto">
			<div class="lg:text-center mb-16">
				<p class="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
					Statistics
				</p>
				<h3
					class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
				>
					Unlimited
					<span class="text-red-600">downloads</span>, forever.
				</h3>
				<p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
					cupiditate veritatis in accusamus quisquam.
				</p>
			</div>

			<div class="flex flex-wrap -m-4 text-center">
				<div
					class="p-4 md:w-1/4 sm:w-1/2 w-full transition duration-300 ease-in-out transform hover:-translate-y-2"
				>
					<div
						class="px-4 py-6 rounded-lg bg-white dark:bg-gray-800 shadow dark:shadow-none"
					>
						<DownloadCloudIcon class="text-red-600 w-12 h-12 mb-3 inline-block" />
						<h2 class="title-font font-medium text-3xl dark:text-white">2.7K</h2>
						<p class="leading-relaxed text-gray-500 dark:text-gray-600">Downloads</p>
					</div>
				</div>

				<div
					class="p-4 md:w-1/4 sm:w-1/2 w-full transition duration-300 ease-in-out transform hover:-translate-y-2"
				>
					<div
						class="px-4 py-6 rounded-lg bg-white dark:bg-gray-800 shadow dark:shadow-none"
					>
						<UsersIcon class="text-red-600 w-12 h-12 mb-3 inline-block" />
						<h2 class="title-font font-medium text-3xl dark:text-white">1.3K</h2>
						<p class="leading-relaxed text-gray-500 dark:text-gray-600">Users</p>
					</div>
				</div>

				<div
					class="p-4 md:w-1/4 sm:w-1/2 w-full transition duration-300 ease-in-out transform hover:-translate-y-2"
				>
					<div
						class="px-4 py-6 rounded-lg bg-white dark:bg-gray-800 shadow dark:shadow-none"
					>
						<HeadphonesIcon class="text-red-600 w-12 h-12 mb-3 inline-block" />
						<h2 class="title-font font-medium text-3xl dark:text-white">74</h2>
						<p class="leading-relaxed text-gray-500 dark:text-gray-600">Files</p>
					</div>
				</div>

				<div
					class="p-4 md:w-1/4 sm:w-1/2 w-full transition duration-300 ease-in-out transform hover:-translate-y-2"
				>
					<div
						class="px-4 py-6 rounded-lg bg-white dark:bg-gray-800 shadow dark:shadow-none"
					>
						<ShieldIcon class="text-red-600 w-12 h-12 mb-3 inline-block" />
						<h2 class="title-font font-medium text-3xl dark:text-white">46</h2>
						<p class="leading-relaxed text-gray-500 dark:text-gray-600">Places</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { DownloadCloudIcon, UsersIcon, HeadphonesIcon, ShieldIcon } from 'vue-feather-icons';

export default defineComponent({
	components: {
		DownloadCloudIcon,
		HeadphonesIcon,
		UsersIcon,
		ShieldIcon,
	},
});
</script>

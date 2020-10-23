<template>
	<footer class="bg-gray-100 dark:bg-gray-900 body-font">
		<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-white"
			>
				<img
					src="/icon.png"
					alt="Avatar"
					class="w-10 h-10 text-white p-2 bg-red-600 rounded-full"
				/>
			</a>
			<p
				class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:dark:border-gray-700 sm:py-2 sm:mt-0 mt-4"
			>
				© 2020 —
				<a
					href="https://twitter.com/nurodev"
					class="text-gray-500 ml-1"
					target="_blank"
					rel="noopener noreferrer"
					>@nurodev</a
				>
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<NuxtLink
					to="/twitter"
					target="_blank"
					class="ml-3 text-gray-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full"
				>
					<TwitterIcon size="1x" class="w-5 h-5" />
				</NuxtLink>

				<NuxtLink
					to="/github"
					target="_blank"
					class="ml-3 text-gray-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full"
				>
					<GithubIcon size="1x" class="w-5 h-5" />
				</NuxtLink>

				<NuxtLink
					to="/linkedin"
					target="_blank"
					class="ml-3 text-gray-500 hover:text-black dark:hover:text-white transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full"
				>
					<LinkedinIcon size="1x" class="w-5 h-5" />
				</NuxtLink>
			</span>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'vue-feather-icons';

export default Vue.extend({
	components: {
		GithubIcon,
		LinkedinIcon,
		TwitterIcon,
	},
});
</script>

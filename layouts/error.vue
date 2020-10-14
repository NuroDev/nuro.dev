<template>
	<div
		class="h-screen w-screen flex items-center bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
	>
		<div class="container flex flex-col md:flex-row items-center justify-center px-5">
			<div class="max-w-xl">
				<p class="my-4 text-6xl md:text-3xl font-bold leading-normal">
					Sorry we couldn't find this page.
				</p>
				<p class="mb-8 text-2xl text-gray-500 dark:text-gray-600">
					But dont worry, you can find plenty of other things on our homepage.
				</p>

				<NuxtLink to="/">
					<button
						type="button"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
					>
						<ArrowLeftIcon class="h-6 w-6 mr-4" />
						Go Back Home
					</button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { ArrowLeftIcon } from 'vue-feather-icons';

export default Vue.extend({
	components: {
		ArrowLeftIcon,
	},
});
</script>

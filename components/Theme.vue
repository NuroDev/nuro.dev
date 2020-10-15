<template>
	<section class="bg-white dark:bg-gray-800 shadow dark:shadow-none">
		<div
			class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
		>
			<h2
				class="text-3xl leading-9 font-extrabold tracking-tight light:text-gray-800 dark:text-gray-200 sm:text-4xl sm:leading-10"
			>
				Ready to dive in?
				<br />
				<span class="text-red-600">Start your free trial today.</span>
			</h2>
			<div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
				<div class="inline-flex rounded-md shadow">
					<button
						type="button"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						@click="$colorMode.preference = 'system'"
					>
						<MonitorIcon class="h-6 w-6 mr-4" />
						System
					</button>
				</div>
				<div class="ml-3 inline-flex rounded-md shadow">
					<button
						type="button"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						@click="$colorMode.preference = 'dark'"
					>
						<MoonIcon class="h-6 w-6 mr-4" />
						Dark
					</button>
				</div>
				<div class="ml-3 inline-flex rounded-md shadow">
					<button
						type="button"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-600 bg-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						@click="$colorMode.preference = 'light'"
					>
						<SunIcon class="h-6 w-6 mr-4" />
						Light
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MonitorIcon, MoonIcon, SunIcon } from 'vue-feather-icons';

export default defineComponent({
	components: {
		MonitorIcon,
		MoonIcon,
		SunIcon,
	},
});
</script>

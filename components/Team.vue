<template>
	<section class="bg-white dark:bg-gray-800 shadow dark:shadow-none">
		<div class="container px-5 py-24 mx-auto">
			<div class="lg:text-center mb-16">
				<p class="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
					Team
				</p>
				<h3
					class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
				>
					Meet our
					<span class="text-red-600">team</span>
				</h3>
				<p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
					cupiditate veritatis in accusamus quisquam.
				</p>
			</div>

			<div class="flex flex-wrap -m-2">
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div
						class="h-full flex items-center border-gray-400 dark:border-gray-700 border p-4 rounded-lg"
					>
						<FeatherIcon
							size="2x"
							class="w-10 h-10 mr-4 text-white bg-red-600 p-2 rounded-full"
						/>
						<div class="flex-grow">
							<h2 class="dark:text-white title-font font-medium">Holden Caulfield</h2>
							<p class="text-gray-600">UI Designer</p>
						</div>
					</div>
				</div>
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div
						class="h-full flex items-center border-gray-400 dark:border-gray-700 border p-4 rounded-lg"
					>
						<FeatherIcon
							size="2x"
							class="w-10 h-10 mr-4 text-white bg-red-600 p-2 rounded-full"
						/>
						<div class="flex-grow">
							<h2 class="dark:text-white title-font font-medium">Henry Letham</h2>
							<p class="text-gray-600">CTO</p>
						</div>
					</div>
				</div>
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div
						class="h-full flex items-center border-gray-400 dark:border-gray-700 border p-4 rounded-lg"
					>
						<FeatherIcon
							size="2x"
							class="w-10 h-10 mr-4 text-white bg-red-600 p-2 rounded-full"
						/>
						<div class="flex-grow">
							<h2 class="dark:text-white title-font font-medium">Oskar Blinde</h2>
							<p class="text-gray-600">Founder</p>
						</div>
					</div>
				</div>
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div
						class="h-full flex items-center border-gray-400 dark:border-gray-700 border p-4 rounded-lg"
					>
						<FeatherIcon
							size="2x"
							class="w-10 h-10 mr-4 text-white bg-red-600 p-2 rounded-full"
						/>
						<div class="flex-grow">
							<h2 class="dark:text-white title-font font-medium">John Doe</h2>
							<p class="text-gray-600">DevOps</p>
						</div>
					</div>
				</div>
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div
						class="h-full flex items-center border-gray-400 dark:border-gray-700 border p-4 rounded-lg"
					>
						<FeatherIcon
							size="2x"
							class="w-10 h-10 mr-4 text-white bg-red-600 p-2 rounded-full"
						/>
						<div class="flex-grow">
							<h2 class="dark:text-white title-font font-medium">Martin Eden</h2>
							<p class="text-gray-600">Software Engineer</p>
						</div>
					</div>
				</div>
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div
						class="h-full flex items-center border-gray-400 dark:border-gray-700 border p-4 rounded-lg"
					>
						<FeatherIcon
							size="2x"
							class="w-10 h-10 mr-4 text-white bg-red-600 p-2 rounded-full"
						/>
						<div class="flex-grow">
							<h2 class="dark:text-white title-font font-medium">Boris Kitua</h2>
							<p class="text-gray-600">UX Researcher</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { FeatherIcon } from 'vue-feather-icons';

export default Vue.extend({
	components: {
		FeatherIcon,
	},
});
</script>

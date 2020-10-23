<template>
	<section class="bg-white dark:bg-gray-800 shadow dark:shadow-none">
		<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
			<div class="lg:text-center mb-16">
				<p class="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
					Features
				</p>
				<h3
					class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
				>
					A
					<span class="text-red-600">better</span> way to send money.
				</h3>
				<p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
					cupiditate veritatis in accusamus quisquam.
				</p>
			</div>

			<div class="mt-10">
				<ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
					<li>
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
								>
									<GlobeIcon class="h-6 w-6" />
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
								>
									Competitive exchange rates
								</h4>
								<p class="mt-2 text-base leading-6 text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Maiores impedit perferendis suscipit eaque, iste dolor
									cupiditate blanditiis ratione.
								</p>
							</div>
						</div>
					</li>
					<li class="mt-10 md:mt-0">
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
								>
									<DollarSignIcon class="h-6 w-6" />
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
								>
									No hidden fees
								</h4>
								<p class="mt-2 text-base leading-6 text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Maiores impedit perferendis suscipit eaque, iste dolor
									cupiditate blanditiis ratione.
								</p>
							</div>
						</div>
					</li>
					<li class="mt-10 md:mt-0">
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
								>
									<ZapIcon class="h-6 w-6" />
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
								>
									Transfers are instant
								</h4>
								<p class="mt-2 text-base leading-6 text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Maiores impedit perferendis suscipit eaque, iste dolor
									cupiditate blanditiis ratione.
								</p>
							</div>
						</div>
					</li>
					<li class="mt-10 md:mt-0">
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white"
								>
									<BellIcon class="h-6 w-6" />
								</div>
							</div>
							<div class="ml-4">
								<h4
									class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
								>
									Mobile notifications
								</h4>
								<p class="mt-2 text-base leading-6 text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Maiores impedit perferendis suscipit eaque, iste dolor
									cupiditate blanditiis ratione.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { BellIcon, DollarSignIcon, GlobeIcon, ZapIcon } from 'vue-feather-icons';

export default Vue.extend({
	components: {
		BellIcon,
		DollarSignIcon,
		GlobeIcon,
		ZapIcon,
	},
});
</script>

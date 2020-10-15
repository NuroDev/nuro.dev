<template>
	<section class="pt-24 pb-32">
		<div class="lg:text-center">
			<p class="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
				Pricing
			</p>
			<h3
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
			>
				Start
				<span class="text-red-600">free</span>, grow with us.
			</h3>
			<p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
				cupiditate veritatis in accusamus quisquam.
			</p>
			<div
				class="mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-left h-76"
			>
				<div
					class="col-span-1 transition duration-300 ease-in-out transform hover:-translate-y-2 shadow dark:shadow-none rounded-lg"
				>
					<div class="p-8 bg-white dark:bg-gray-800 rounded-t-lg" style="height: 14rem">
						<h3
							class="text-lg font-semibold rounded-full bg-red-600 inline-block px-2 text-red-200"
						>
							Free
						</h3>
						<br />
						<h1 class="mt-2 text-4xl font-extrabold mx-auto inline-block">
							$0<span class="text-gray-600 text-2xl font-medium">, forever.</span>
						</h1>
						<p class="text-gray-600 mt-2">Try and evaluate, as long as you want.</p>
					</div>
					<div
						class="px-8 py-4 bg-gray-100 dark:bg-gray-700 rounded-b-lg"
						style="height: 9rem"
					>
						<ul>
							<li class="flex items-center text-gray-700 dark:text-white">
								<CheckIcon class="inline w-8 h-8 text-red-500 mr-3" />
								100 calls / month
							</li>
						</ul>
						<a
							class="block mt-8 bg-white hover:bg-red-100 dark:bg-red-600 dark:hover:bg-red-700 text-center text-red-600 dark:text-white px-8 py-3 text-base font-medium rounded-md transition duration-150 ease-in-out"
							>Sign Up</a
						>
					</div>
				</div>
				<div
					class="col-span-1 transition duration-300 ease-in-out transform hover:-translate-y-2 shadow dark:shadow-none rounded-lg"
				>
					<div class="p-8 bg-white dark:bg-gray-800 rounded-t-lg" style="height: 14rem">
						<h3
							class="text-lg font-semibold rounded-full bg-red-600 inline-block px-2 text-red-200"
						>
							Pro
						</h3>
						<br />
						<h1 class="mt-2 text-4xl font-extrabold mx-auto inline-block">
							$20<span class="text-gray-600 text-2xl font-medium">/month.</span>
						</h1>
						<p class="text-gray-600 mt-2">Ready for production.</p>
						<p class="text-gray-600 mt-2">
							<span class="text-red-600">OSS &amp; Side Projects</span>
							<!-- -->are discounted up to 100%.<!-- -->
						</p>
					</div>
					<div
						class="px-8 py-4 bg-gray-100 dark:bg-gray-700 rounded-b-lg text-gray-700 dark:text-white"
						style="height: 9rem"
					>
						<ul>
							<li>
								<CheckIcon class="inline w-8 h-8 text-red-500 mr-2" />
								10,000 calls included
							</li>
							<li class="flex items-center">
								<CheckIcon class="inline w-8 h-8 text-red-500 mr-3" />
								Billed monthly
							</li>
							<li class="flex items-center">
								<CheckIcon class="inline w-8 h-8 text-red-500 mr-3" />
								Credit card / PayPal
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CheckIcon } from 'vue-feather-icons';

export default defineComponent({
	components: {
		CheckIcon,
	},
});
</script>

<template>
	<section>
		<div class="max-w-screen-xl mx-auto">
			<div class="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pb-32">
				<div
					class="container h-screen max-w-full mx-auto flex flex-wrap items-center justify-around"
				>
					<div class="sm:text-center lg:text-left">
						<h2
							class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl"
						>
							Data to enrich your
							<br class="xl:hidden" />
							<span class="text-red-600">online business</span>
						</h2>
						<p
							class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
						>
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
							cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="rounded-md shadow">
								<a
									href="#"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
								>
									Get started
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-700 bg-red-100 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
								>
									Live demo
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { GithubIcon, TwitterIcon } from 'vue-feather-icons';

export default defineComponent({
	components: {
		GithubIcon,
		TwitterIcon,
	},
});
</script>

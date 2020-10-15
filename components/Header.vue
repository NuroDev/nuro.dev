<template>
	<section class="relative overflow-hidden bg-white dark:bg-gray-800 shadow dark:shadow-none">
		<div class="max-w-screen-xl mx-auto">
			<div
				class="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 py-16 pb-32"
			>
				<svg
					class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-800 transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
				>
					<polygon points="50,0 100,0 50,100 0,100" />
				</svg>

				<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
					<nav
						class="relative flex items-center justify-between sm:h-10 lg:justify-start"
					>
						<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div class="flex items-center justify-between w-full md:w-auto">
								<a href="#" aria-label="Home">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 35 32"
										class="h-8 w-auto sm:h-10 text-red-600"
									>
										<path
											fill="currentColor"
											d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"
										/>
										<path
											fill="currentColor"
											d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
										/>
									</svg>
								</a>
								<div class="-mr-2 flex items-center md:hidden">
									<button
										id="main-menu"
										type="button"
										class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
										aria-label="Main menu"
										aria-haspopup="true"
									>
										<svg
											class="h-6 w-6"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="hidden md:block md:ml-10 md:pr-4">
							<a
								href="#"
								class="font-medium text-gray-500 hover:text-red-600 transition duration-150 ease-in-out"
								>Product</a
							>
							<a
								href="#"
								class="ml-8 font-medium text-gray-500 hover:text-red-600 transition duration-150 ease-in-out"
								>Features</a
							>
							<a
								href="#"
								class="ml-8 font-medium text-gray-500 hover:text-red-600 transition duration-150 ease-in-out"
								>Marketplace</a
							>
							<a
								href="#"
								class="ml-8 font-medium text-gray-500 hover:text-red-600 transition duration-150 ease-in-out"
								>Company</a
							>
						</div>
					</nav>
				</div>

				<!--
				Mobile menu, show/hide based on menu open state.

				Entering: "duration-150 ease-out"
				From: "opacity-0 scale-95"
				To: "opacity-100 scale-100"
				Leaving: "duration-100 ease-in"
				From: "opacity-100 scale-100"
				To: "opacity-0 scale-95"
			-->
				<div
					class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div class="rounded-lg shadow-md">
						<div
							class="rounded-lg bg-white shadow-xs overflow-hidden"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="main-menu"
						>
							<div class="px-5 pt-4 flex items-center justify-between">
								<div>
									<img
										class="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
										alt=""
									/>
								</div>
								<div class="-mr-2">
									<button
										type="button"
										class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
										aria-label="Close menu"
									>
										<svg
											class="h-6 w-6"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div class="px-2 pt-2 pb-3">
								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
									role="menuitem"
									>Product</a
								>
								<a
									href="#"
									class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
									role="menuitem"
									>Features</a
								>
								<a
									href="#"
									class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
									role="menuitem"
									>Marketplace</a
								>
								<a
									href="#"
									class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
									role="menuitem"
									>Company</a
								>
							</div>
							<div>
								<a
									href="#"
									class="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out"
									role="menuitem"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</div>

				<main
					class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
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
				</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
				alt=""
			/>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

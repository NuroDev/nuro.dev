<template>
	<div>
		<div class="relative overflow-hidden">
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
										<img
											class="h-8 w-auto sm:h-10"
											src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
											alt="Logo"
										/>
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
									class="font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
									>Product</a
								>
								<a
									href="#"
									class="ml-8 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
									>Features</a
								>
								<a
									href="#"
									class="ml-8 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
									>Marketplace</a
								>
								<a
									href="#"
									class="ml-8 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
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
										class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
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
								<span class="text-indigo-600">online business</span>
							</h2>
							<p
								class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
							>
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
								lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
								fugiat aliqua.
							</p>
							<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div class="rounded-md shadow">
									<a
										href="#"
										class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
									>
										Get started
									</a>
								</div>
								<div class="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
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
		</div>

		<div class="pt-24 pb-32 bg-gray-100 dark:bg-gray-900">
			<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="lg:text-center">
					<p
						class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
					>
						Transactions
					</p>
					<h3
						class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-gray-900 dark:text-white"
					>
						A better way to send money
					</h3>
					<p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
						Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
						voluptatum cupiditate veritatis in accusamus quisquam.
					</p>
				</div>

				<div class="mt-10">
					<ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						<li>
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
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
										class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
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
										class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
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
										class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
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
		</div>

		<div>
			<div
				class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
			>
				<h2
					class="text-3xl leading-9 font-extrabold tracking-tight light:text-gray-800 dark:text-gray-200 sm:text-4xl sm:leading-10"
				>
					Ready to dive in?
					<br />
					<span class="text-indigo-600">Start your free trial today.</span>
				</h2>
				<div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
					<div class="inline-flex rounded-md shadow">
						<button
							type="button"
							class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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
							class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
							@click="$colorMode.preference = 'light'"
						>
							<SunIcon class="h-6 w-6 mr-4" />
							Light
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import {
	BellIcon,
	DollarSignIcon,
	GlobeIcon,
	MonitorIcon,
	MoonIcon,
	SunIcon,
	ZapIcon,
} from 'vue-feather-icons';

export default defineComponent({
	components: {
		BellIcon,
		DollarSignIcon,
		GlobeIcon,
		MonitorIcon,
		MoonIcon,
		SunIcon,
		ZapIcon,
	},
});
</script>

<style>
.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>

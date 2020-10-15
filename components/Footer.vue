<template>
	<footer class="px-8 w-full py-8 bg-gray-100 dark:bg-gray-900">
		<div
			class="mx-auto max-w-screen-xl grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-10 lg:gap-20 mb-3"
		>
			<div class="col-span-4 md:col-span-3">
				<a href="/">
					<span class="flex items-center">
						<h1 class="ml-3 text-3xl font-semibold text-red-600">Title</h1>
					</span>
				</a>
				<p class="text-md my-4 text-gray-500">
					Data to enrich your online business<br /><br />

					John Oliver<br />Oxford Street<br />London<br />United Kingdom<br />
				</p>
			</div>
			<nav class="col-span-1">
				<p
					class="uppercase text-gray-900 dark:text-white text-xs tracking-wider font-medium mb-3"
				>
					Product
				</p>
				<a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Features</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Sign Up</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Roadmap</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Documentation</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Pricing</a
				>
			</nav>
			<nav class="col-span-1">
				<p
					class="uppercase text-gray-900 dark:text-white text-xs tracking-wider font-medium mb-3"
				>
					Contact
				</p>
				<a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Blog</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Twitter</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Email</a
				>
			</nav>
			<nav class="col-span-1 lg:col-span-2">
				<p
					class="uppercase text-gray-900 dark:text-white text-xs tracking-wider font-medium mb-3"
				>
					Legal
				</p>
				<a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Terms of Use</a
				><a
					class="flex mb-3 md:mb-2 text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Privacy Policy</a
				>
			</nav>
			<div class="col-span-3">
				<p
					class="uppercase text-gray-600 text-xs tracking-wider font-medium mb-3 uppercase"
				>
					Subscribe to our newsletter
				</p>
				<form class="mb-2">
					<label class="tag-label tag-label-sm"
						><div class="tag-append">
							<input
								type="email"
								name="email"
								class="inline-block placeholder-gray-500 appearance-none px-3 py-2 text-gray-900 rounded-l-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
								placeholder="Enter your email"
								required=""
							/><button
								class="text-center px-4 py-1 border border-transparent text-base leading-6 font-medium rounded-r-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
								type="submit"
							>
								Subscribe
							</button>
						</div></label
					>
				</form>
				<p class="text-xs text-gray-600">
					Stay up-to-date on development and get exclusive insights
				</p>
			</div>
		</div>
		<div
			class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-10 mt-10"
		>
			<p class="text-gray-700 dark:text-gray-500 font-medium text-sm text-left mb-6 md:mb-0">
				© Copyright 2020 John. All Rights Reserved
			</p>
			<div class="flex items-start md:items-center justify-start md:justify-center space-x-6">
				<a
					class="font-medium text-sm text-gray-700 dark:text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Terms</a
				><a
					class="font-medium text-sm text-gray-700 dark:text-gray-500 hover:text-gray-600 transition-colors duration-100 ease-in"
					>Privacy</a
				>
			</div>
		</div>
	</footer>
</template>

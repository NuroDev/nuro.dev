<template>
	<nav class="w-full pt-8">
		<div class="flex items-center justify-between max-w-6xl mx-auto">
			<ul class="flex items-center">
				<li>
					<img class="rounded-full h-10 w-10 bg-gray-900 block avatar" src="@theme/assets/avatar.png" />
				</li>
			</ul>
			<ul class="flex">
				<a href="/" class="p-2 px-4 mx-2 rounded font-bold uppercase tracking-widest text-gray-500 hover:text-gray-600 hover:bg-gray-300 defaultTransition cursor-pointer">home</a>
				<a href="/blog" class="p-2 px-4 mx-2 rounded font-bold uppercase tracking-widest text-gray-500 hover:text-gray-600 hover:bg-gray-300 defaultTransition cursor-pointer">blog</a>
				<a href="/portfolio" class="p-2 px-4 mx-2 rounded font-bold uppercase tracking-widest text-gray-500 hover:text-gray-600 hover:bg-gray-300 defaultTransition cursor-pointer">portfolio</a>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
};
</script>

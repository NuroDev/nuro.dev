<template>
	<div>
		<!-- Wrapper element to stop AOS transition overrides -->
		<article
			class="rounded-lg shadow-md hover:shadow-2xl defaultTransition p-8 md:p-16 mx-4 mb-4 md:mb-12 bg-white"
		>
			<div class="py-4">
				<span
					v-if="tag != undefined"
					class="inline-block bg-blue-100 rounded-full px-3 py-1 text-blue-500 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes"
					v-text="`#${tag}`"
				/>
				<a
					:href="url"
					class="text-2xl md:text-4xl mb-4 block font-semibold leading-tight text-gray-800 hover:text-gray-700"
					v-text="title"
				/>
				<p class="text-gray-500" v-text="date" />
				<a
					:href="url"
					class="mt-6 block text-gray-600 hover:text-gray-900 defaultTransition"
				>
					Read more
					<!-- TODO: Add SVG icon -->
					<i class="pl-2 fas fa-arrow-right"></i>
				</a>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	props: {
		date: {
			type: Date,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		tag: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			default: '/',
			required: true,
		},
	},
};
</script>

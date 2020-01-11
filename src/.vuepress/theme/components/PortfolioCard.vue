<template>
	<a :href="repo.html_url">
		<!-- Wrapper element to stop AOS transition overrides -->
		<article
			:class="
				`max-w-full md:max-w-xl overflow-hidden rounded-lg shadow-md hover:shadow-2xl defaultTransition animatedPress p-6 md:p-16 mx-8 mb-8 md:mb-12 bg-white ${
					repo.archived ? 'opacity-25' : null
				}`
			"
			:style="`border: .5px solid ${languageColor};`"
		>
			<div class="py-4">
				<span
					class="inline-block rounded-full px-3 py-1 text-gray-800 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes"
					:style="`border: 1px solid ${languageColor}; color: ${languageColor};`"
					v-text="`#${repo.language}`"
				/>
				<span
					class="inline-block rounded-full px-3 py-1 border border-yellow-500 mr-2 mb-5 tracking-widest text-xs tag-notes"
					:style="`border: 1px solid ${languageColor}; color: ${languageColor};`"
					v-text="`⭑ ${repo.stargazers_count}`"
				/>
				<span
					v-if="repo.archived"
					class="inline-block rounded-full px-3 py-1 text-red-500 border-red-500 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes"
					:style="`border: 1px solid`"
					v-text="`#Archived`"
				/>
				<span
					:href="repo.html_url"
					class="text-2xl md:text-4xl mb-4 block font-semibold leading-tight text-gray-800 hover:text-gray-700"
					v-text="repo.name"
				/>
				<p class="text-gray-500" v-text="repo.description" />
			</div>
		</article>
	</a>
</template>

<script>
import GitHubColors from 'github-colors';

export default {
	data() {
		return {
			languageColor: '',
		};
	},
	props: {
		repo: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		this.languageColor = GitHubColors.get(this.repo.language).color;
	},
};
</script>

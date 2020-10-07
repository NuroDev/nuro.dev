<template>
	<a :href="repo.html_url">
		<article
			:class="
				`min-w-0 xs:min-w-full max-w-md p-6 md:p-16 mx-8 mb-8 md:mb-12 overflow-hidden rounded-lg blogCard cursor-pointer ${
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
					v-text="`⭐ ${repo.stargazers_count}`"
				/>
				<span
					v-if="repo.fork"
					class="inline-block rounded-full px-3 py-1 text-red-500 border-red-500 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes"
					:style="`border: 1px solid ${languageColor}; color: ${languageColor};`"
					v-text="`🍴 Fork`"
				/>
				<span
					v-if="repo.archived"
					class="inline-block rounded-full px-3 py-1 text-red-500 border-red-500 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes"
					:style="`border: 1px solid`"
					v-text="`#archived`"
				/>
				<h1
					:href="repo.html_url"
					class="text-2xl md:text-4xl mb-4 block font-semibold leading-tight"
					v-text="repo.name"
				/>
				<p class v-text="repo.description" />
			</div>
		</article>
	</a>
</template>

<script>
import GitHubColors from 'github-colors';

export default {
	data() {
		return {
			languageColor: '#ffffff',
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

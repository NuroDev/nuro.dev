<template>
	<section class="contentContainer elevation-0">
		<AppToolbar />
		<v-container fluid>
			<v-layout row wrap align-center justify-center>
				<v-flex xs12>
					<h1
						class="spacedLetters display-2 font-weight-black mb-4 text-uppercase text-xs-center"
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out-back"
					>
						Portfolio
					</h1>

					<br />

					
				</v-flex>
			</v-layout>

			<v-layout row wrap align-center justify-center>
				<v-flex xs12 sm6 md6 lg4 xl4 grow v-for="(repo, i) in repos" :key="i">
					
					<div
						data-aos="fade-up"
						data-aos-duration="1200"
						:data-aos-delay="i * 50"
						:data-aos-offset="-(i * 100)"
						data-aos-easing="ease-in-out-back"
					>
						<a :href="repo.html_url">
							<v-card
								light
								class="pa-4 ma-5 repoCard"
								:style="`border: .5px solid ${repo.languageColor}; ${repo.archived ? 'opacity: .25;' : null}`"
							>
								<v-card-title>
									<v-chip outline class="pa-3" :style="`color: ${repo.languageColor}`" v-text="`#${repo.language}`" />
									<v-chip outline class="pa-1" :style="`color: ${repo.languageColor}`">
										<IconStar class="mr-2" />
										<span v-text="repo.stargazers_count" />
									</v-chip>
									<v-chip v-if="repo.archived" outline class="pa-3" color="red" v-text="`#archived`" />
								</v-card-title>

								<v-card-title>
									<span class="display-1 mt-1 text-xs-left" v-html="repo.name" />
								</v-card-title>
								
								<v-card-text>
									<span class="text-sm-left" v-html="repo.description" />
								</v-card-text>
							</v-card>
						</a>
					</div>
					
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
import GitHubColors from 'github-colors';

import AppToolbar from '~/components/appToolbar';
import IconArchived from '~/static/icons/archived.svg';
import IconFork from '~/static/icons/fork.svg';
import IconLink from '~/static/icons/external-link.svg';
import IconStar from '~/static/icons/star.svg';

export default {
	components: {
		AppToolbar,
		IconArchived,
		IconFork,
		IconLink,
		IconStar,
	},
	data () {
		return {
			repos: []
		};
	},
	async mounted () {
		let response = await fetch('https://api.github.com/users/nurodev/repos')
		let json = await response.json();
		this.repos = json.sort();

		this.repos.forEach(repo => {
			repo.languageColor = GitHubColors.get(repo.language).color;
		});
	}
};
</script>

<style>
.repoCard {
	border-radius: 8px !important;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
}
.repoCard:hover {
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
}
</style>

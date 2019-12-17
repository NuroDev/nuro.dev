<template>
	<section class="contentContainer elevation-0">
		<AppToolbar />
		<v-container fluid text-xs-center>
			<v-layout row wrap align-center>
				<v-flex xs12> </v-flex>
			</v-layout>
			<v-layout row wrap align-center justify-center>
				<v-flex xs12 sm6 md6 lg4 xl4>
					<h1
						class="spacedLetters display-2 font-weight-black mb-4"
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out-back"
					>
						Portfolio
					</h1>

					<br />

					<div
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-easing="ease-in-out-back"
					>
						<v-card
							class="pa-2 ma-4 elevation-0 repoCard"
							:style="
								'border-bottom: 10px solid ' +
									CalculateBorderColor(repos.language) +
									';'
							"
							v-for="(repos, i) in repos"
							:key="i"
						>
							<v-card-title>
								<v-spacer />
								<v-tooltip left v-if="repos.archived">
									<v-btn
										flat
										icon
										large
										ripple
										color="grey darken-1"
										class="ma-2"
										slot="activator"
									>
										<IconArchived />
									</v-btn>
									<span>Archived</span>
								</v-tooltip>
								<v-tooltip left v-if="repos.fork">
									<v-btn
										flat
										icon
										large
										ripple
										color="grey darken-1"
										class="ma-2"
										slot="activator"
									>
										<IconFork />
									</v-btn>
									<span>Fork</span>
								</v-tooltip>
								<span class="headline mt-1" v-html="repos.name" />
								<v-btn
									flat
									icon
									large
									color="grey darken-1"
									ripple
									:href="repos.html_url"
								>
									<IconLink />
								</v-btn>
								<v-spacer />
							</v-card-title>
							<v-card-text>
								<v-btn flat large round color="amber" ripple class="mr-4">
									<IconStar class="mr-3" />
									<span v-html="repos.stargazers_count" />
								</v-btn>
								<span v-html="repos.description" />
							</v-card-text>
						</v-card>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
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
	data() {
		return {
			repos: [],
		};
	},
	methods: {
		CalculateBorderColor: (inputLang) => {
			if (inputLang === 'C++') {
				return '#f34b7d';
			}
			if (inputLang === 'C#') {
				return '#f34b7d';
			}
			if (inputLang === 'Objective-C') {
				return '#438eff';
			}
			if (inputLang === 'Swift') {
				return '#ffac45';
			}
			if (inputLang === 'Rust') {
				return '#dea584';
			}
			if (inputLang === 'Java') {
				return '#b07219';
			}
			if (inputLang === 'HTML') {
				return '#e34c26';
			}
			if (inputLang === 'CSS') {
				return '#563d7c';
			}
			if (inputLang === 'JavaScript') {
				return '#f1e05a';
			}
			if (inputLang === 'Vue') {
				return '#2c3e50';
			}
			if (inputLang === 'Lua') {
				return '#000080';
			}
			if (inputLang === 'Shell') {
				return '#89e051';
			}
		},
	},
	mounted: function() {
		this.$http
			.get('https://api.github.com/users/nurodev/repos', {
				responseType: 'json',
			})
			.then((response) => {
				this.repos = response.data.sort();
			});
	},
};
</script>

<style>
.repoCard {
	border-radius: 8px !important;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	transform: scale(1);
}
.repoCard:hover {
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	transform: scale(1.025);
}
.repoCard:active {
	transform: scale(0.97);
}
.theme--dark.v-sheet {
	background-color: #1C1D1F!important;
}
</style>

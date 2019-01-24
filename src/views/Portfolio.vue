<template>
	<v-responsive height="100%">
		<v-layout align-center justify-center fill-height>
			<v-flex xs12 sm10 md8 lg6 xl4 text-xs-center>
				<v-card
					light
					class="pa-4 ma-4 elevation-0 repoCard"
					v-for="(repos, i) in repos"
					:key="i"
				>
					<v-card-title>
						<v-spacer />
						<span class="headline mt-1" v-html="repos.name" />
						<v-btn
							flat
							icon
							large
							color="grey darken-3"
							ripple
							:href="repos.url"
						>
							<v-icon v-html="$vuetify.icons.link" />
						</v-btn>
						<v-spacer />
					</v-card-title>
					<v-card-text>
						<span v-html="repos.description" />
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-responsive>
</template>

<script>
export default {
	data() {
		return {
			repos: [
				{ name: "Title", url: "https://github.com/", description: "Text goes here..." },
				{ name: "Title", url: "https://github.com/", description: "Text goes here..." },
				{ name: "Title", url: "https://github.com/", description: "Text goes here..." },
				{ name: "Title", url: "https://github.com/", description: "Text goes here..." },
			],
		};
	},
};
</script>

<style>
.repoCard {
	border-radius: 8px !important;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	transform: scale(1);
	-webkit-box-shadow: 0 8px 15px rgba(125, 147, 178, 0.25) !important;
	-moz-box-shadow: 0 8px 15px rgba(125, 147, 178, 0.25) !important;
	box-shadow: 0 8px 15px rgba(125, 147, 178, 0.25) !important;
}
.repoCard:hover {
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	transform: scale(1.025);
}
.repoCard:active {
	transform: scale(0.97);
}
</style>

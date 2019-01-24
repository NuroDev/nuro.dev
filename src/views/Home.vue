<template>
	<v-responsive height="100%">
		<v-container fill-height>
			<v-layout align-center>
				<v-flex xs12 text-xs-center>
					<h1 class="display-2 indexTitle text-uppercase">👋🏻 Hello, I'm Ben</h1>
					<br />
					<p class="body-2 indexSubTitle text-uppercase">
						Game Engine & Graphics Engineer
					</p>
					<p class="body-2 indexSubTitle text-uppercase">Fullstack Web Developer</p>

					<v-btn flat large icon href="https://github.com/nurodev">
						<v-icon v-html="$vuetify.icons.github" />
					</v-btn>
					<v-btn flat large icon href="https://twitter.com/nurodev">
						<v-icon v-html="$vuetify.icons.twitter" />
					</v-btn>
					<v-btn flat large icon href="https://twitter.com/nurodev">
						<v-icon v-html="$vuetify.icons.linkedin" />
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-responsive>
</template>

<style>
.indexAvatar {
	margin: 60px;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	transform: scale(1);
}
.indexAvatar:hover {
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	transform: scale(1.1);
}
.indexAvatar:active {
	transform: scale(0.9);
}
.indexTitle {
	font-family: 'Work Sans', Arial, Helvetica, sans-serif !important;
	font-weight: 100 !important;
	letter-spacing: 0.2em !important;
}
.indexSubTitle {
	font-family: 'Work Sans', Arial, Helvetica, sans-serif !important;
	font-weight: 400 !important;
	letter-spacing: 0.1em !important;
}
</style>

<template>
	<section class="contentContainer elevation-0" style="height: 100vh;!important">
		<v-container fill-height text-xs-center>
			<v-layout row wrap align-center>
				<v-flex xs12 sm12 md12 lg12 xl12>
					<div
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out-back"
					>
						<v-avatar size="160px" class="indexAvatar elevation-0">
							<img src="/avatar.png" alt="Avatar" />
						</v-avatar>
					</div>

					<div
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-easing="ease-in-out-back"
					>
						<h1 class="spacedLetters display-2 font-weight-black">👋🏻 Hello, I'm Ben</h1>
						<br />
						<p class="subheading">Games Programmer | Web Developer</p>
					</div>

					<v-flex xs12>
						<v-btn
							flat
							large
							round
							color="white"
							href="https://blog.nuro.sh"
							prefetch
							data-aos="fade-up"
							data-aos-duration="1400"
							data-aos-easing="ease-in-out-back"
						>
							<IconBlog class="mr-3" />
							<span>Blog</span>
						</v-btn>
						<v-btn
							flat
							large
							round
							color="white"
							to="/portfolio"
							prefetch
							data-aos="fade-up"
							data-aos-duration="1600"
							data-aos-easing="ease-in-out-back"
						>
							<IconPortfolio class="mr-3" />
							<span>Portfolio</span>
						</v-btn>
						<v-btn
							flat
							large
							round
							color="white"
							href="https://github.com/nurodev"
							prefetch
							data-aos="fade-up"
							data-aos-duration="1800"
							data-aos-easing="ease-in-out-back"
						>
							<IconGitHub class="mr-3" />
							<span>Github</span>
						</v-btn>
					</v-flex>
					<v-flex xs12>
						<v-btn
							flat
							large
							round
							color="white"
							href="https://twitter.com/nurodev"
							prefetch
							data-aos="fade-up"
							data-aos-duration="2000"
							data-aos-easing="ease-in-out-back"
						>
							<IconTwitter class="mr-3" />
							<span>Twitter</span>
						</v-btn>
						<v-btn
							flat
							large
							round
							color="white"
							href="https://www.linkedin.com/in/nurodev/"
							prefetch
							data-aos="fade-up"
							data-aos-duration="2200"
							data-aos-easing="ease-in-out-back"
						>
							<IconLinkedIn class="mr-3" />
							<span>LinkedIn</span>
						</v-btn>
					</v-flex>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
import IconBlog from '~/static/icons/blog.svg';
import IconGitHub from '~/static/icons/github.svg';
import IconLinkedIn from '~/static/icons/linkedin.svg';
import IconPortfolio from '~/static/icons/portfolio.svg';
import IconTwitter from '~/static/icons/twitter.svg';

export default {
	components: {
		IconBlog,
		IconGitHub,
		IconLinkedIn,
		IconPortfolio,
		IconTwitter,
	},
};
</script>

<style>
.indexAvatar {
	margin: 20px;
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
</style>

module.exports = {
	mode: 'spa',

	// Set build directory
	generate: {
		dir: 'public',
	},

	// Use HTTP2
	render: {
		http2: {
			push: true,
		},
	},

	// Headers of the page
	head: {
		link: [
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
			},
		],
	},

	// Customize the progress bar color
	loading: {
		color: '#eff6ff',
		failedColor: '#f44336',
		height: '3px',
	},

	// NuxtJS Modules
	modules: ['@nuxtjs/pwa', '@nuxtjs/robots', 'nuxt-svg-loader'],

	// Custom plugins
	plugins: [
		'~/plugins/aos.js',
		'~/plugins/axios.js',
		'~/plugins/confetti.js',
		'~/plugins/vuetify.js',
	],

	// Load custom CSS
	css: ['~/assets/style/app.styl'],

	// PWA Module configuration
	pwa: {
		meta: {
			favicon: true,
			name: 'NURO | Developer',
			description: 'NURO | Developer',
			lang: 'en',
			theme_color: '#05a9f4',
		},
		manifest: {
			name: 'NURO',
			short_name: 'NURO',
			description: 'NURO | Developer',
			lang: 'en',
			start_url: '/',
			display: 'standalone',
			orientation: 'portrait',
			background_color: '#05a9f4',
			theme_color: '#05a9f4',
		},
		icon: {
			sizes: [16, 128, 144, 152, 192, 256, 512],
		},
	},

	// Robots.txt module configuration
	robots: {
		UserAgent: '*',
		Disallow: '',
	},
};

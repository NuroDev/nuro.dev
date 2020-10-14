const title = '👋🏻 N U R O ™';
const description = `Hi! I'm Ben, a developer`;
const themeColor = '#000000';
const domain = 'nuro.dev';

export default {
	mode: 'universal',
	target: 'static',
	components: true,
	head: {
		title,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: description },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		script: [
			{
				async: true,
				defer: true,
				'data-website-id': '2b32cecd-efb1-4747-87f6-471765358b0d',
				'data-do-not-track': true,
				src: `https://analytics.${domain}/umami.js`,
			},
		],
	},

	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/color-mode',
		'@nuxtjs/composition-api',
		'@nuxtjs/google-fonts',
		'@nuxtjs/pwa',
		'@nuxtjs/tailwindcss',
	],
	modules: [
		'@luxdamore/nuxt-canvas-sketch',
		'@nuxt/content',
		'@nuxt/http',
		'@nuxt/image',
		'@nuxtjs/pwa',
		'@nuxtjs/redirect-module',
	],

	// https://github.com/LuXDAmore/generative-art
	canvasSketch: {
		hideErrorsInConsole: false,
		hideGenericMessagesInConsole: false,
	},

	colorMode: {
		classSuffix: '',
	},

	// https://content.nuxtjs.org/
	content: {
		apiPrefix: '/content/',
		markdown: {
			remarkPlugins: ['remark-code-blocks', 'remark-emoji'],
		},
	},

	// https://github.com/nuxt-community/google-fonts-module
	googleFonts: {
		// families: {
		// 	Roboto: true,
		// 	Raleway: {
		// 		wght: [100, 400],
		// 		ital: [100],
		// 	},
		// },
	},

	// https://image.nuxtjs.org/providers/
	image: {
		providers: {
			local: {
				dir: '~/assets/images/',
				clearCache: false,
			},
		},
	},

	pwa: {
		meta: {
			favicon: true,
			name: title,
			description,
			lang: 'en',
			theme_color: themeColor,
			display: 'minimal-ui',
		},
		manifest: {
			name: title,
			short_name: title,
			description,
			lang: 'en',
			start_url: '/',
			display: 'standalone',
			orientation: 'portrait',
			background_color: themeColor,
			theme_color: themeColor,
		},
		icon: {
			sizes: [16, 128, 144, 152, 192, 256, 512],
		},
	},

	redirect: [
		{ from: '^/github', to: 'https://github.com/nurodev', statusCode: 301 },
		{ from: '^/linkedin', to: 'https://www.linkedin.com/in/nurodev/', statusCode: 301 },
		{ from: '^/twitter', to: 'https://twitter.com/nurodev', statusCode: 301 },
	],

	robots: {
		UserAgent: '*',
		Disallow: '',
	},

	tailwindcss: {
		config: {
			dark: 'class',
			experimental: {
				darkModeVariant: true,
			},
			purge: {
				enabled: process.env.NODE_ENV === 'production',
				content: [
					'api/**/*.{js,ts}',
					'content/**/*.md',
					'components/**/*.vue',
					'layouts/**/*.vue',
					'pages/**/*.vue',
					'nuxt.config.{js,ts}',
				],
			},
		},
	},
};

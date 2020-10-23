const title = '👋🏻 N U R O ™';
const description = `Hi! I'm Ben, a developer`;
const themeColor = '#000000';
const domain = 'nuro.dev';

export default {
	target: 'static',
	ssr: false,
	components: true,
	head: {
		htmlAttrs: {
			lang: 'en', // TODO: Use nuxt-i18n
		},
		title,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: description },
			{ hid: 'og:site_name', property: 'og:site_name', content: title },
      		{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'twitter:site', name: 'twitter:site', content: '@nurodev' },
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: `https://${domain}/social-card.png`,
			},
			{
				hid: 'og:image:secure_url',
				property: 'og:image:secure_url',
				content: `https://${domain}/social-card.png`,
			},
			{
				hid: 'og:image:alt',
				property: 'og:image:alt',
				content: title,
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: `https://${domain}/social-card.png`,
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		script: [
			{
				async: true,
				defer: true,
				'data-website-id': process.env.UMAMI_WEBSITE_ID,
				'data-do-not-track': true,
				src: `https://analytics.${domain}/umami.js`,
			},
		],
	},
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/color-mode',
		'@nuxtjs/pwa',
		'@nuxtjs/tailwindcss',
	],
	modules: [
		// '@nuxt/content',
		'@nuxt/http',
		'@nuxtjs/pwa',
		'@nuxtjs/redirect-module',
	],
	colorMode: {
		classSuffix: '',
	},
	content: {
		apiPrefix: '/content/',
		markdown: {
			remarkPlugins: ['remark-code-blocks', 'remark-emoji'],
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
			icons: [{
				src: '/icon.png',
				type: 'image/png',
				sizes: '512x512',
				purpose: 'any maskable'
			}]
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
					'components/**/*.vue',
					'layouts/**/*.vue',
					'pages/**/*.vue',
					'nuxt.config.{js,ts}',
				],
			},
		},
	},
};

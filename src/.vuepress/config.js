module.exports = {
	base: '/',
	description: 'Games Programmer | Web Developer',
	dest: 'public',
	postcss: {
		plugins: [require('tailwindcss'), require('autoprefixer')],
	},
	plugins: ['vuepress-plugin-reading-time'],
	serviceWorker: true,
	title: '👋🏻 N U R O ™',
	themeConfig: {
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Blog', link: '/blog' },
			{ text: 'Portfolio', link: '/portfolio' },
			{ text: 'Contact', link: '/contact' },
		],
		serviceWorker: {
			updatePopup: true,
		},
	},
	head: [
		['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
		['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
		['link', { rel: "manifest", href: "/site.webmanifest"}],
		['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#0072ff"}],
		['link', { rel: "shortcut icon", href: "/favicon.ico"}],
		['meta', { name: "theme-color", content: "#0072ff"}],
		['script', { async: true, defer: true, "data-domain": "nuro.dev", src: "https://analytics.nuro.dev/js/plausible.js" }]
	],
};

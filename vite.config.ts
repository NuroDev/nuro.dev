import { defineConfig } from 'vite';
import { join } from 'path';
import { VitePWA as PWA } from 'vite-plugin-pwa';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

const extensions: Array<string> = ['md', 'vue'];

export default defineConfig({
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
	},
	plugins: [
		Components({
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: 'i',
					enabledCollections: ['feather', 'heroicons-outline'],
				}),
			],
			customLoaderMatcher: (id: string) => id.endsWith('.md'),
			extensions,
		}),
		Icons(),
		Pages({
			extensions,
		}),
		Markdown(),
		PWA({
			manifest: {
				background_color: '#0d0f11',
				description: 'developer',
				display: 'standalone',
				icons: [
					{ src: '/android-launchericon-48-48.png', sizes: '48x48' },
					{ src: '/android-launchericon-72-72.png', sizes: '72x72' },
					{ src: '/android-launchericon-96-96.png', sizes: '96x96' },
					{ src: '/android-launchericon-144-144.png', sizes: '144x144' },
					{ src: '/android-launchericon-192-192.png', sizes: '192x192' },
					{ src: '/android-launchericon-512-512.png', sizes: '512x512' },
					{ src: '/apple-touch-icon-ipad-76x76.png', sizes: '76x76' },
					{ src: '/apple-touch-icon-ipad-retina-152x152.png', sizes: '152x152' },
					{ src: '/apple-touch-icon-iphone-60x60.png', sizes: '60x60' },
					{ src: '/apple-touch-icon-iphone-retina-120x120.png', sizes: '120x120' },
					{ src: '/firefox-general-16-16.png', sizes: '16x16' },
					{ src: '/firefox-general-32-32.png', sizes: '32x32' },
					{ src: '/firefox-general-48-48.png', sizes: '48x48' },
					{ src: '/firefox-general-64-64.png', sizes: '64x64' },
					{ src: '/firefox-general-90-90.png', sizes: '90x90' },
					{ src: '/firefox-general-128-128.png', sizes: '128x128' },
					{ src: '/firefox-general-256-256.png', sizes: '256x256' },
					{ src: '/firefox-marketplace-128-128.png', sizes: '128x128' },
					{ src: '/firefox-marketplace-512-512.png', sizes: '512x512' },
				],
				name: 'nuro',
				short_name: 'nuro',
				theme_color: '#0072ff',
			},
		}),
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		WindiCSS({
			config: {
				darkMode: 'class',
				plugins: [
					require('windicss/plugin/aspect-ratio'),
					require('windicss/plugin/typography'),
				],
				theme: {
					extend: {
						colors: {
							gray: {
								100: '#eaeaeb',
								200: '#cacbcd',
								300: '#a7a9ac',
								400: '#696c71',
								500: '#282d34',
								600: '#24292f',
								700: '#181b20',
								800: '#121518',
								900: '#0c0e10',
							},
							primary: {
								50: '#32a4ff',
								100: '#289aff',
								200: '#1e90ff',
								300: '#1486ff',
								400: '#0a7cff',
								500: '#0072ff',
								600: '#0068f5',
								700: '#005eeb',
								800: '#0054e1',
								900: '#004ad7',
							},
						},
					},
				},
			},
		}),
	],
	resolve: {
		alias: {
			'~': join(__dirname, './src/'),
		},
	},
});

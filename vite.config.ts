import { defineConfig } from 'vite';
import { resolve } from 'path';
import { VitePWA as PWA } from 'vite-plugin-pwa';
import { ViteSSGOptions } from 'vite-ssg';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

import WindiPluginAspectRatio from 'windicss/plugin/aspect-ratio';
import WindiPluginTypography from 'windicss/plugin/typography';

import { colors } from './src/utils';

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
					enabledCollections: ['feather'],
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
				name: 'nuro',
				short_name: 'nuro',
				description: 'developer',
				icons: [
					{ src: '/android/launchericon-48.png', sizes: '48x48' },
					{ src: '/android/launchericon-72.png', sizes: '72x72' },
					{ src: '/android/launchericon-96.png', sizes: '96x96' },
					{ src: '/android/launchericon-144.png', sizes: '144x144' },
					{ src: '/android/launchericon-192.png', sizes: '192x192' },
					{ src: '/android/launchericon-512.png', sizes: '512x512' },
					{ src: '/apple/touch-icon-ipad.png', sizes: '76x76' },
					{ src: '/apple/touch-icon-ipad-retina.png', sizes: '152x152' },
					{ src: '/apple/touch-icon-iphone.png', sizes: '60x60' },
					{ src: '/apple/touch-icon-iphone-retina.png', sizes: '120x120' },
					{ src: '/firefox/general-16.png', sizes: '16x16' },
					{ src: '/firefox/general-32.png', sizes: '32x32' },
					{ src: '/firefox/general-48.png', sizes: '48x48' },
					{ src: '/firefox/general-64.png', sizes: '64x64' },
					{ src: '/firefox/general-90.png', sizes: '90x90' },
					{ src: '/firefox/general-128.png', sizes: '128x128' },
					{ src: '/firefox/general-256.png', sizes: '256x256' },
					{ src: '/firefox/marketplace-128.png', sizes: '128x128' },
					{ src: '/firefox/marketplace-512.png', sizes: '512x512' },
				],
			},
		}),
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		WindiCSS({
			config: {
				darkMode: 'class',
				plugins: [WindiPluginAspectRatio, WindiPluginTypography],
				theme: {
					extend: {
						colors,
					},
				},
			},
		}),
	],
	resolve: {
		alias: {
			'~': resolve(__dirname, 'src'),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3030/api/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	// @ts-ignore
	ssgOptions: <ViteSSGOptions>{
		script: 'async',
		formatting: 'prettify',
	},
});

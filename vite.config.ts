import { defineConfig } from 'vite';
import { join } from 'path';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Colors from 'windicss/colors';

const extensions: Array<string> = ['md', 'vue'];

export default defineConfig({
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

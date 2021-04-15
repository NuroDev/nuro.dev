import { defineConfig } from 'vite';
import { join } from 'path';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

const extensions: Array<string> = ['js', 'jsx', 'md', 'ts', 'tsx', 'vue'];

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
			},
		}),
	],
	resolve: {
		alias: {
			'~': join(__dirname, './src/'),
		},
	},
});

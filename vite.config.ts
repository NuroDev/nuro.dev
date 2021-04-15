import { defineConfig } from 'vite';
import { join } from 'path';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

const extensions: Array<string> = ['vue', 'js', 'jsx', 'ts', 'tsx'];

export default defineConfig({
	plugins: [
		Components({
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: 'i',
					enabledCollections: ['feather', 'heroicons-outline'],
				}),
			],
			extensions,
		}),
		Icons(),
		Pages({
			extensions,
		}),
		Vue(),
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

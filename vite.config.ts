import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

const extensions: Array<string> = ['vue', 'js', 'jsx', 'ts', 'tsx'];

export default defineConfig({
	plugins: [
		Pages({
			extensions,
		}),
		Vue(),
		WindiCSS({
			config: {
				darkMode: 'class',
			},
		}),
	],
});

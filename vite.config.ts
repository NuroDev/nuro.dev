import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		Vue(),
		WindiCSS({
			config: {
				darkMode: 'class',
			},
		}),
	],
});

import { defineConfig } from 'windicss/helpers';

import { colors } from './lib/theme';

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['.git', '.next', 'node_modules'],
	},
	plugins: [require('windicss/plugin/line-clamp'), require('windicss/plugin/typography')],
	theme: {
		extend: {
			colors,
		},
	},
});

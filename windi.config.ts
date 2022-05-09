import { defineConfig } from 'windicss/helpers';

import { colors } from './lib/theme';

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['.git', '.next', 'node_modules'],
	},
	plugins: [require('windicss/plugin/line-clamp'), require('windicss/plugin/typography')],
	shortcuts: {
		'default-focus':
			'focus:(outline-none ring-4 ring-offset-4 dark:ring-offset-gray-900 ring-primary-500)',
		'default-transition': 'transition ease-in-out duration-300',
	},
	theme: {
		extend: {
			colors,
		},
	},
});

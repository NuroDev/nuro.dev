import defaultTheme from 'windicss/defaultTheme';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	plugins: [require('windicss/plugin/line-clamp'), require('windicss/plugin/typography')],
	shortcuts: {
		'default-focus':
			'focus:(outline-none ring-4 ring-offset-4 dark:ring-offset-gray-900 ring-primary-500)',
		'default-transition': 'transition ease-in-out duration-300',
	},
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				gray: {
					50: '#f9fafb',
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
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
});

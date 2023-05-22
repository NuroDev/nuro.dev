/** @type {import("prettier").Config} */
module.exports = {
	...require('prettier-config-standard'),
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	importOrderSeparation: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],
	plugins: [
		require.resolve("@trivago/prettier-plugin-sort-imports"),
		require.resolve('prettier-plugin-astro'),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true
};

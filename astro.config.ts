import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Absolute import paths cannot be used in Astro config files
// because the tsconfig import path aliases are not applied.
import { siteUrl } from './src/content/site';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
	integrations: [
		mdx(),
		prefetch(),
		sitemap(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
	],
	site: isProduction ? siteUrl.href : 'http://localhost:3000',
});

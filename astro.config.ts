import Image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';
import { defineConfig } from 'astro/config';
import RehypeAutolinkHeadings from 'rehype-autolink-headings';
import RemarkCodeTitles from 'remark-code-titles';
import RemarkEmoji from 'remark-emoji';
import RemarkPrism from 'remark-prism';
import RemarkSlug from 'remark-slug';

// https://astro.build/config
export default defineConfig({
	adapter: vercel({
		analytics: true,
	}),
	experimental: {},
	integrations: [
		Image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		prefetch(),
		solidJs(),
		tailwind(),
	],
	markdown: {
		gfm: true,
		rehypePlugins: [[RehypeAutolinkHeadings, {}]],
		remarkPlugins: [RemarkCodeTitles, RemarkEmoji, RemarkPrism, RemarkSlug],
		syntaxHighlight: 'prism',
	},
	output: 'server',
});

import prefetch from '@astrojs/prefetch';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';
import type { AstroIntegration } from 'astro';
import { defineConfig } from 'astro/config';
import RehypeAutolinkHeadings from 'rehype-autolink-headings';
import RemarkCodeTitles from 'remark-code-titles';
import RemarkEmoji from 'remark-emoji';
import RemarkPrism from 'remark-prism';
import RemarkSlug from 'remark-slug';

function getAdapter(): AstroIntegration {
	// For some reason Astro does not allow passing `undefined` here
	// so we need to assert the return type of `getAdapter` to `AstroIntegration`
	if (import.meta.env.DEV) return undefined as unknown as AstroIntegration;

	// TODO: Add `VERCEL === '1'` check & default to Node.js server

	return vercel({
		analytics: true,
	});
}

export default defineConfig({
	adapter: getAdapter(),
	integrations: [prefetch(), solidJs(), tailwind()],
	markdown: {
		gfm: true,
		rehypePlugins: [[RehypeAutolinkHeadings, {}]],
		remarkPlugins: [RemarkCodeTitles, RemarkEmoji, RemarkPrism, RemarkSlug],
		syntaxHighlight: 'prism',
	},
	output: 'server',
});

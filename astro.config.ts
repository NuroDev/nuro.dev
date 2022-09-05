import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';
import { defineConfig } from 'astro/config';

const { NODE_ENV, VERCEL_URL } = process.env;

const isVercel = Boolean(NODE_ENV === 'production' && VERCEL_URL);

export default defineConfig({
	adapter: vercel(),
	integrations: [sitemap(), solid(), tailwind()],
	...(isVercel
		? {
				adapter: vercel(),
				output: 'server',
		  }
		: {}),
	output: 'server',
	site: isVercel ? (VERCEL_URL ? VERCEL_URL : 'https://nuro.dev') : 'http://localhost:3000',
});

import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';
import { defineConfig } from 'astro/config';

export default defineConfig({
	adapter: vercel(),
	integrations: [solid(), tailwind()],
	output: 'server',
});

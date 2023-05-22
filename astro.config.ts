import node from '@astrojs/node';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';
import type { AstroIntegration } from 'astro';
import { defineConfig } from 'astro/config';

function getAdapter(): AstroIntegration | undefined {
	if (import.meta.env.DEV) return undefined;

	if (import.meta.env.VERCEL === '1') return vercel();

	return node({
		mode: 'standalone',
	});
}

export default defineConfig({
	// For some reason Astro does not allow passing `undefined` here
	// so we need to assert the return type of `getAdapter` to `AstroIntegration`
	adapter: getAdapter() as AstroIntegration,
	integrations: [solidJs(), tailwind()],
	output: 'server',
});

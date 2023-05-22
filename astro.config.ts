import prefetch from '@astrojs/prefetch';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';
import type { AstroIntegration } from 'astro';
import { defineConfig } from 'astro/config';

function getAdapter(): AstroIntegration | undefined {
	if (import.meta.env.DEV) return undefined;

	// TODO: Add `VERCEL === '1'` check & default to Node.js server

	return vercel({
		analytics: true,
	});
}

// https://astro.build/config
export default defineConfig({
	// For some reason Astro does not allow passing `undefined` here
	// so we need to assert the return type of `getAdapter` to `AstroIntegration`
	adapter: getAdapter() as AstroIntegration,
	integrations: [solidJs(), tailwind(), prefetch()],
	output: 'server',
});

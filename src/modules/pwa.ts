import { ViteSSGContext } from 'vite-ssg';

export async function install({ isClient }: ViteSSGContext): Promise<void> {
	if (!isClient) return;

	const { registerSW } = await import('virtual:pwa-register');
	registerSW();
}

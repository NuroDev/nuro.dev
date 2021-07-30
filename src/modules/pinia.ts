import { createPinia } from 'pinia';

import type { ViteSSGContext } from 'vite-ssg';

export function install({ app, initialState }: ViteSSGContext): void {
	const pinia = createPinia();
	app.use(pinia);

	if (import.meta.env.SSR) {
		initialState.pinia = pinia.state.value;
	} else {
		pinia.state.value = initialState.pinia || {};
	}
}

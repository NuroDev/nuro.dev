import { ViteSSGContext } from 'vite-ssg';
import nprogress from 'nprogress';

import 'nprogress/nprogress.css';

export function install({ isClient, router }: ViteSSGContext): void {
	if (!isClient) return;

	nprogress.configure({
		showSpinner: false,
		trickle: true,
	});

	router.beforeEach((to, _from, next) => {
		if (to.name) nprogress.start();
		next();
	});

	router.afterEach(() => nprogress.done());
}

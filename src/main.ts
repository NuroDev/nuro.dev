import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';
import nprogress from 'nprogress';

import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import 'virtual:windi.css';
import 'nprogress/nprogress.css';

import App from './App.vue';

export const createApp = ViteSSG(App, { routes }, async ({ app, isClient, router }) => {
	if (isClient)
		nprogress.configure({
			showSpinner: false,
			trickle: true,
		});

	router.beforeResolve(
		(
			to: RouteLocationNormalized,
			_from: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			if (isClient && to.name) nprogress.start();
			next();
		},
	);
	router.afterEach(() => isClient && nprogress.done());
});

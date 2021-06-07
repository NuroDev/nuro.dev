import { ViteSSG } from 'vite-ssg';
import nprogress from 'nprogress';
import routes from 'virtual:generated-pages';

import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-typescript';

import 'nprogress/nprogress.css';
import 'prismjs/themes/prism.css';
import 'virtual:windi.css';

import { useVitals } from './vitals';
import App from './App.vue';

export const createApp = ViteSSG(App, { routes }, ({ isClient, router }) => {
	if (isClient)
		nprogress.configure({
			showSpinner: false,
			trickle: true,
		});

	router.beforeResolve(
		(
			route: RouteLocationNormalized,
			_from: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			if (isClient) {
				if (route.name) nprogress.start();
				if (import.meta.env.PROD) useVitals({ route });
			}

			next();
		},
	);
	router.afterEach(() => nprogress.done());
});

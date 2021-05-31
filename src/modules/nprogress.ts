import nprogress from 'nprogress';

import 'nprogress/nprogress.css';

import { IViteSSRContext } from '~/types';

export function install({ isClient, router }: IViteSSRContext): void {
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

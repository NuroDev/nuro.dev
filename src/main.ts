import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';

import 'nprogress/nprogress.css';
import 'virtual:windi.css';

import App from './App.vue';

export const createApp = ViteSSG(App, { routes }, (ctx) => {
	// Load/install all modules
	const modules = import.meta.globEager('./modules/*.ts');
	Object.values(modules).map((module) => module.install?.(ctx));
});

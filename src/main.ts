import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';

import 'nprogress/nprogress.css';
import 'prismjs/themes/prism.css';
import 'virtual:windi.css';

import App from './App.vue';

export const createApp = ViteSSG(App, { routes }, (ctx) => {
	Object.values(import.meta.globEager('./modules/*.ts')).map(
		async (module) => await module.install?.(ctx),
	);
});

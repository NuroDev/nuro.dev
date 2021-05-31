import ViteSSR, { ClientOnly } from 'vite-ssr';
import routes from 'virtual:generated-pages';

import 'nprogress/nprogress.css';
import 'virtual:windi.css';

import App from '~/App.vue';
import { IViteSSRContext } from '~/types';

export default ViteSSR(App, { routes }, async (ctx: IViteSSRContext) => {
	// Load/install all modules
	const modules = import.meta.globEager('./modules/*.ts');
	Object.values(modules).map((module) => module.install?.(ctx));

	// Import client only component
	ctx.app.use(ClientOnly.name, ClientOnly);
});

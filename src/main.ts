import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createRouter, createWebHistory } from 'vue-router';
import nprogress from 'nprogress';
import routes from 'virtual:generated-pages';

import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import 'nprogress/nprogress.css';
import 'virtual:windi.css';

import { useVitals } from 'vue-web-vitals';
import App from './App.vue';

const head = createHead();
const router = createRouter({
	history: createWebHistory(),
	routes,
});

useVitals({ router });

nprogress.configure({
	showSpinner: false,
	trickle: true,
});

router.beforeResolve(
	(route: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
		if (route.name) nprogress.start();
		next();
	},
);
router.afterEach(() => nprogress.done());

createApp(App)
	.use(head)
	.use(router)
	.mount('#app');

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import nprogress from 'nprogress';

import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import 'virtual:windi.css';
import 'nprogress/nprogress.css';

import App from './App.vue';

const head = createHead();
const router = createRouter({
	history: createWebHistory(),
	routes,
});

nprogress.configure({
	showSpinner: false,
	trickle: true,
});

router.beforeResolve(
	(to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
		if (to.name) nprogress.start();
		next();
	},
);
router.afterEach(() => nprogress.done());

createApp(App).use(head).use(router).mount('#app');

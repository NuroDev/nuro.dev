import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

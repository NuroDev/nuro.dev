import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

import 'virtual:windi.css';

import App from './App.vue';

const head = createHead();
const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(head).use(router).mount('#app');

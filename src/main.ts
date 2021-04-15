import { createApp } from 'vue';

import 'virtual:windi.css';

import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

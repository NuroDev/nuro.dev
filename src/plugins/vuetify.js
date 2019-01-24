import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import '../assets/feather.css';

Vue.use(Vuetify, {
	iconfont: 'feather',
	icons: {
		home: 'feather-home',
		portfolio: 'feather-layers',
		contact: 'feather-mail',
		github: 'feather-github',
		twitter: 'feather-twitter',
		linkedin: 'feather-linkedin',
		link: 'feather-external-link',
	},
});

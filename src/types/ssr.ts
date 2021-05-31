import { App } from 'vue';
import { Router } from 'vue-router';

export interface IViteSSRContext {
	url: URL;
	app: App;
	router: Router;
	isClient: boolean;
	initialState: any;
	initialRoute: any;
	[key: string]: any;
}

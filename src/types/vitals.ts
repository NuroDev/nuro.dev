import { Metric } from 'web-vitals';
import { RouteLocationNormalized } from 'vue-router';

export interface IVitalsOptions {
	debug?: true;
	route: RouteLocationNormalized;
}

export interface IVitalsContext {
	fullPath: string;
	href: string;
}

export interface IVitalSendOptions {
	context: IVitalsContext;
	debug: boolean;
	metric: Metric;
}

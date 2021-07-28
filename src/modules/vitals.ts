import { getCLS, getFCP, getFID, getLCP, getTTFB, Metric } from 'web-vitals';
import { ViteSSGContext } from 'vite-ssg';

import { IVitalsContext, IVitalSendOptions, IVitalsOptions } from '~/types';

const VITALS_URL = 'https://vitals.vercel-analytics.com/v1/vitals';

function useVitals(options: IVitalsOptions): void {
	const { debug = import.meta.env.DEV, route } = options;

	const context: IVitalsContext = {
		fullPath: route.fullPath,
		href: location.href,
	};

	try {
		getFID((metric: Metric) => sendMetric({ context, metric, debug }));
		getTTFB((metric: Metric) => sendMetric({ context, metric, debug }));
		getLCP((metric: Metric) => sendMetric({ context, metric, debug }));
		getCLS((metric: Metric) => sendMetric({ context, metric, debug }));
		getFCP((metric: Metric) => sendMetric({ context, metric, debug }));
	} catch (error) {
		console.error('[Analytics]', error);
	}
}

function sendMetric({ context, debug, metric }: IVitalSendOptions) {
	// @ts-ignore
	const speed: string = 'connection' in navigator && navigator['connection'] && 'effectiveType' in navigator['connection'] ? navigator['connection']['effectiveType'] : '';

	const body = {
		dsn: import.meta.env.VERCEL_ANALYTICS_ID as string,
		event_name: metric.name,
		href: context.href,
		id: metric.id,
		page: context.fullPath,
		speed,
		value: metric.value.toString(),
	};

	if (debug) console.debug(`${metric.name}:`, JSON.stringify(body, null, 4));

	// This content type is necessary for `sendBeacon`
	const blob = new Blob([new URLSearchParams(body).toString()], {
		type: 'application/x-www-form-urlencoded',
	});

	navigator.sendBeacon
		? navigator.sendBeacon(VITALS_URL, blob)
		: fetch(VITALS_URL, {
				body: blob,
				credentials: 'omit',
				keepalive: true,
				method: 'POST',
		  });
}

/**
 * Install & use vitals before each route change
 *
 * @param ctx - SSR Instance context
 *
 * @returns {void}
 */
export function install({ isClient, router }: ViteSSGContext): void {
	if (!isClient || !import.meta.env.PROD) return;

	router.beforeEach((to) => useVitals({ route: to }));
}

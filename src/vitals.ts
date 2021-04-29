import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

import type { RouteLocationNormalized } from 'vue-router';
import type { Metric } from 'web-vitals';

interface IVitalsOptions {
	debug?: true;
	route: RouteLocationNormalized;
}

interface IContext {
	fullPath: string;
	href: string;
}

interface ISendOptions {
	context: IContext;
	debug: boolean;
	metric: Metric;
}

const VITALS_URL = 'https://vitals.vercel-analytics.com/v1/vitals';

export function useVitals(options: IVitalsOptions): void {
	const { debug = import.meta.env.DEV, route } = options;

	const context: IContext = {
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

function sendMetric({ context, debug, metric }: ISendOptions) {
	const speed: string =
		'connection' in navigator &&
		navigator['connection'] &&
		'effectiveType' in navigator['connection']
			? navigator['connection']['effectiveType']
			: '';

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

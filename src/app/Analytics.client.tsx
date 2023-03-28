import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import type { AnalyticsProps } from '@vercel/analytics/react';

export function Analytics(props: AnalyticsProps): JSX.Element {
	return <VercelAnalytics {...props} />;
}

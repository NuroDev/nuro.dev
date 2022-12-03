'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export function Analytics(): JSX.Element {
	return <VercelAnalytics />;
}

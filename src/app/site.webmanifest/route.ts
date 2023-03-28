import { NextResponse } from 'next/server';

import { defineAppRouteHandler } from '~/utils/define';
import { colors } from '~/tailwind.config';

export const { GET, runtime } = defineAppRouteHandler({
	runtime: 'edge',
	GET: () =>
		NextResponse.json({
			background_color: colors.gray[900],
			display: 'standalone',
			name: 'developer ─ nuro',
			short_name: 'nuro',
			theme_color: colors.primary[600],
		}),
});

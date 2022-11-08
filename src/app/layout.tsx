import { Inter } from '@next/font/google';

import 'nprogress/nprogress.css';

import { AnalyticsWrapper } from '~/components/Analytics.component';

import './global.css';

import type { NextLayoutProps } from '~/types';

const inter = Inter({
	variable: '--font-inter',
});

export default function RootLayout({ children }: NextLayoutProps): JSX.Element {
	return (
		<html className={inter.variable} lang="en">
			<body className="bg-gray-50 text-gray-500 antialiased selection:bg-gray-900 selection:text-white dark:bg-gray-900 selection:dark:bg-white selection:dark:text-primary-500">
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	);
}

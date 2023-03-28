import { Inter as FontSans } from 'next/font/google';
import { ServerThemeProvider } from 'next-themes';

import { Analytics } from './Analytics.client';
import { Background } from './Background.client';
import { Click } from './Click.client';
import { cn } from '~/utils/cn';
import { ColorScheme } from '~/types/theme';

import '~/styles/globals.css';

import type { Metadata } from 'next';

import type { NextLayoutProps } from '~/types/next';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: {
		default: 'developer ─ nuro',
		template: '%s ─ nuro',
	},
	description: 'Developer, writer, and creator.',
	openGraph: {
		title: 'nuro',
		description: 'Developer, writer, and creator.',
		url: 'https://nuro.dev',
		siteName: 'nuro',
		images: [
			{
				url: 'https://nuro.dev/banner.png',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Ben',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
};

export default function RootLayout({ children }: NextLayoutProps): JSX.Element {
	return (
		<ServerThemeProvider
			attribute="class"
			defaultTheme={ColorScheme.SYSTEM}
			themes={Object.values(ColorScheme)}
		>
			<html
				lang="en"
				className={cn(fontSans.variable, 'scroll-smooth font-sans antialiased')}
			>
				<body
					className="bg-grid bg-gray-50 from-gray-200 to-gray-200 bg-[0_0] text-gray-500 dark:bg-gray-900 dark:from-gray-700 dark:to-gray-700"
					style={{
						backgroundSize: '25px 25px',
					}}
				>
					<Analytics />
					<Background />
					<Click />
					{children}
				</body>
			</html>
		</ServerThemeProvider>
	);
}

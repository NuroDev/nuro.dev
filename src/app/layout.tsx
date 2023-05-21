import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import isUserAgentBot from 'isbot';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { Background } from '~/components/Background';
import type { NextLayoutProps } from '~/types/next';
import { cn } from '~/util/cn';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const runtime = 'edge';

export const metadata: Metadata = {
	title: {
		default: 'developer ─ nuro',
		template: '%s ─ nuro',
	},
	description: "Hey 👋 I'm Ben, a developer",
};

export default function RootLayout({ children }: NextLayoutProps): JSX.Element {
	const userAgent = headers().get('user-agent');
	const showBackground = !isUserAgentBot(userAgent);

	return (
		<html lang="en">
			<body
				className={cn(
					inter.variable,
					'scroll-smooth font-sans antialiased',
					'bg-gradient-to-br from-white from-20% via-gray-100 to-white to-80% dark:from-black dark:via-gray-700 dark:to-black',
					'font-inter text-gray-500',
					'selection:bg-gray-900 selection:text-white selection:dark:bg-white selection:dark:text-primary-500',
				)}
			>
				{children}
				{showBackground ? <Background /> : null}
			</body>
			<Analytics />
		</html>
	);
}
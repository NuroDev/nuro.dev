import { Analytics } from '@vercel/analytics/react';
import { Inter as FontSans } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { useEvent } from 'react-use';
import { useSound } from 'use-sound';

import { Theme } from '~/types/theme';

import '~/styles/globals.css';

import type { AppProps } from 'next/app';
import { cn } from '~/utils/cn';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const [playClickSound] = useSound('/sounds/click.ogg', {
		volume: 0.05, // TODO: Make this configurable via user settings
	});

	useEvent('mousedown', playClickSound);
	useEvent('mouseup', playClickSound);

	return (
		<ThemeProvider attribute="class" defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)}>
			<Analytics />
			<div className={cn(fontSans.variable, 'font-sans')}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}

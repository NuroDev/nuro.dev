import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { css, Global as EmotionStyles } from '@emotion/react';
import { ThemeProvider } from 'next-themes';

import { useAnalytics } from '~/lib';

const GlobalStyles = css`
	&::selection {
		${tw`bg-gray-900 dark:bg-white text-white dark:text-primary-500`}
	}
`;

export default function App({ Component, pageProps }: AppProps) {
	useAnalytics();

	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
			<EmotionStyles styles={GlobalStyles} />
			<TailwindStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

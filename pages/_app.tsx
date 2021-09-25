import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { css, Global as EmotionStyles } from '@emotion/react';
import { ThemeProvider } from 'next-themes';

const GlobalStyles = css`
	body {
		${tw`antialiased bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-100`}
	}

	&::selection {
		${tw`dark:bg-white dark:text-primary-500`}
	}
`;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
			<EmotionStyles styles={GlobalStyles} />
			<TailwindStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { css, Global as EmotionStyles } from '@emotion/react';
import { ThemeProvider } from 'next-themes';

import 'inter-ui/inter.css';

import { useAnalytics } from '~/lib';
import { Theme } from '~/types';

const GlobalStyles = css`
	html {
		${tw`
			antialiased \
			bg-gray-50 text-gray-500 dark:text-gray-400 \
			transition ease-in-out duration-300
		`}
		font-family: "Inter", "system-ui";
	}

	html.dark {
		${tw`bg-gray-900`}

		* {
			--tw-ring-offset-color: #0c0e10;

			&::selection {
				${tw`
						bg-white \
						text-primary-500
					`}
			}
		}
	}

	*::selection {
		${tw`bg-gray-900 dark:bg-white text-white dark:text-primary-500`}
	}

	@supports (font-variation-settings: normal) {
		html {
			font-family: 'Inter', 'system-ui';
		}
	}
`;

export default function App({ Component, pageProps }: AppProps) {
	useAnalytics();

	return (
		<ThemeProvider attribute="class" defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)}>
			<EmotionStyles styles={GlobalStyles} />
			<TailwindStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

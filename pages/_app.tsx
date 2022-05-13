import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { css, Global as EmotionStyles } from '@emotion/react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { useEffectOnce, useEvent } from 'react-use';

import 'inter-ui/inter.css';
import 'nprogress/nprogress.css';
import 'windi.css';

import { useAnalytics, useClick } from '~/lib';
import { Theme } from '~/types';

NProgress.configure({
	minimum: 0.3,
	easing: 'ease',
	speed: 800,
	showSpinner: false,
});


const GlobalStyles = css`
	html {
		${tw`
			antialiased \
			bg-gray-50 \
			text-gray-500 dark:text-gray-400 \
			font-inter \
			transition ease-in-out duration-300
		`}

		&.dark {
			${tw`bg-gray-900`}

			* {
				--tw-ring-offset-color: #0c0e10;

				&::selection {
					${tw`bg-white text-primary-500`}
				}
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

	#nprogress .bar {
		${tw`h-1 bg-primary-500`}
	}
`;

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [play] = useClick();

	useAnalytics();

	useEvent('mousedown', () => play());
	useEvent('mouseup', () => play());

	useEffectOnce(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());
	});

	return (
		<ThemeProvider attribute="class" defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)}>
			<EmotionStyles styles={GlobalStyles} />
			<TailwindStyles />
			<Toaster />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

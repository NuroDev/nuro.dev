import NProgress from 'nprogress';
import splitbee from '@splitbee/web';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { useEffectOnce } from 'react-use';
import { useRouter } from 'next/router';

import 'inter-ui/inter.css';
import 'nprogress/nprogress.css';
import 'windi.css';

import { Theme } from '~/types';

import type { AppProps } from 'next/app';

NProgress.configure({
	minimum: 0.3,
	easing: 'ease',
	speed: 800,
	showSpinner: false,
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffectOnce(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());

		if (process.env.NODE_ENV === 'production') {
			splitbee.init({
				apiUrl: '/_hive',
				disableCookie: true,
				scriptUrl: '/bee.js',
			});
		}
	});

	return (
		<ThemeProvider attribute="class" defaultTheme={Theme.SYSTEM} themes={Object.values(Theme)}>
			<Toaster />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

import clsx from 'clsx';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<body
				className={clsx(
					'antialiased',
					'bg-gradient-to-br from-white via-gray-100 to-white dark:from-black from-20% dark:via-gray-700 dark:to-black to-80%',
					'font-inter text-gray-500',
					'selection:bg-gray-900 selection:dark:bg-white selection:text-white selection:dark:text-primary-500',
				)}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

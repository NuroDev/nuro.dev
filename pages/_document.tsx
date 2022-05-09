import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="antialiased font-inter">
			<Head>
				{/* TODO: Dynamic favicon */}
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

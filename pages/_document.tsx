import { Head, Html, Main, NextScript } from 'next/document';

import { colors } from '~/lib/theme';

export default function Document() {
	return (
		<Html lang="en" className="antialiased font-inter">
			<Head>
				{/* TODO: Dynamic favicon */}
				<link rel="icon" type="image/png" href="/favicon.png" />
				<style jsx global>{`
					#nprogress .bar {
						height: 0.25rem;
						background: ${colors.gray[500]};
					}
				`}</style>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

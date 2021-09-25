import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { css, Global as EmotionStyles } from '@emotion/react';

const GlobalStyles = css`
	body {
		${tw`antialiased`}
	}
`;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<EmotionStyles styles={GlobalStyles} />
			<TailwindStyles />
			<Component {...pageProps} />
		</>
	);
}

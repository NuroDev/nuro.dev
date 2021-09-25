import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

const Container = styled.div(
	tw`min-h-screen h-screen flex flex-col justify-center items-center py-0 px-2`,
);

const Content = styled.main(tw`flex flex-1 flex-col justify-center items-center py-20 px-0`);

const StyledIcon = styled(Icon)`
	${tw`m-4 text-7xl`}
`;

const Title = styled.h1`
	${tw`m-0 text-6xl font-bold leading-tight text-center hover:no-underline active:no-underline focus:no-underline`}

	a {
		${tw`text-primary-600 no-underline`}
	}
`;

const Description = styled.p(tw`text-2xl leading-normal text-center`);

const Code = styled.code`
	${tw`bg-gray-100 dark:bg-gray-700 p-1 rounded-md text-lg`}
	font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Grid = styled.div`
	${tw`max-w-[800px] flex flex-wrap justify-center items-center mt-12`}

	@media (max-width: 600px) {
		${tw`w-full flex-col`}
	}
`;

const Card = styled.a`
	${tw`w-[45%] m-4 p-6 text-left hover:text-primary-600 hover:border-primary-600 no-underline border border-gray-200 rounded-lg transition ease-in-out duration-300`}

	h2 {
		${tw`m-0 mb-4 font-bold text-2xl`}
	}

	p {
		${tw`m-0 text-xl leading-normal`}
	}
`;

export default function HomePage() {
	return (
		<Container>
			<Content>
				<StyledIcon icon="feather:feather" />
				<Title>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</Title>
				<Description>
					Get started by editing <Code>pages/index.tsx</Code>
				</Description>

				<Grid>
					<Card href="https://nextjs.org/docs">
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</Card>

					<Card href="https://nextjs.org/learn">
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</Card>

					<Card href="https://github.com/vercel/next.js/tree/master/examples">
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</Card>

					<Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
						<h2>Deploy &rarr;</h2>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</Card>
				</Grid>
			</Content>
		</Container>
	);
}

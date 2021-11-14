import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

const Main = styled.main(tw`flex flex-col justify-center px-8`);

const Container = styled.div(tw`
	relative h-screen \
	pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8
`);

export function ErrorLayout({ children, seo }: DefaultLayoutProps) {
	const seoProps = useSeoProps({
		title: 'nuro ─ Whoops!',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<Main>
				<Container>{children}</Container>
			</Main>
		</>
	);
}

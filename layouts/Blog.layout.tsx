import styled from '@emotion/styled';
import tw from 'twin.macro';
import { NextSeo } from 'next-seo';

import { Navbar } from '~/components';
import { useSeoProps } from '~/lib';

import type { ComponentProps, PropsWithChildren } from 'react';

interface BlogLayoutProps {
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

const Main = styled.main(tw`flex flex-col justify-center sm:px-8`);

export function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>) {
	const seoProps = useSeoProps({
		title: 'nuro ─ blog',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<Navbar.Standard />
			<Main>{children}</Main>
		</>
	);
}

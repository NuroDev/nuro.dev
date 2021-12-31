import styled from '@emotion/styled';
import tw from 'twin.macro';

import type { IframeHTMLAttributes } from 'react';

interface XStreamableProps {
	id: string;
	loop?: boolean;
	title: string;
}

interface IFrameProps extends IframeHTMLAttributes<HTMLElement> {}

const Container = styled.div`
	${tw`
		relative w-full h-0 \
		my-2
	`}
	padding-bottom: 56.250%;
`;

const IFrame = styled.iframe<IFrameProps>(tw`
	absolute top-0 left-0 w-full h-full \
	border-none \
	rounded-lg overflow-hidden
`);

export function XStreamable({ id, loop = false, title }: XStreamableProps) {
	return (
		<Container>
			<IFrame
				allowFullScreen
				frameBorder={0}
				height="100%"
				loading="lazy"
				src={`https://streamable.com/e/${id}?loop=${Number(loop)}`}
				title={title}
				width="100%"
			/>
		</Container>
	);
}

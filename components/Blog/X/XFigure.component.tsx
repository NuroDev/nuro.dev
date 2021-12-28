import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface XFigureProps {
	alt?: string;
	caption?: string;
	src: string;
}

const StyledImage = styled(Image)(tw`
	rounded-3xl object-cover select-none hover:shadow-xl
`);

export function XFigure({ alt, caption, src }: XFigureProps) {
	return (
		<figure>
			<StyledImage
				alt={alt ?? caption}
				draggable={false}
				height="100%"
				layout="responsive"
				src={src}
				width="100%"
			/>
			<figcaption>{alt ?? caption}</figcaption>
		</figure>
	);
}

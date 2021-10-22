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
				layout="responsive"
				width="100%"
				height="100%"
				src={src}
			/>
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}

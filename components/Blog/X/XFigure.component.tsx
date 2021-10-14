import styled from '@emotion/styled';
import tw from 'twin.macro';

interface XFigureProps {
	alt?: string;
	caption?: string;
	src: string;
}

const Image = styled.img(tw`
	w-full \
	rounded-3xl object-cover select-none hover:shadow-xl
`);

export function XFigure({ alt, caption, src }: XFigureProps) {
	return (
		<figure>
			<Image src={src} alt={alt ?? caption} draggable={false} />
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}

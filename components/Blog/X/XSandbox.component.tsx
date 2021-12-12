import styled from '@emotion/styled';
import tw from 'twin.macro';

interface XSandboxProps {
	height?: number;
	id?: string;
}

interface IFrameProps {
	$height: number;
	allow: string;
	sandbox: string;
}

const IFrame = styled.iframe<IFrameProps>`
	${tw`
		w-full \
		border-none \
		rounded overflow-hidden
	`}

	height: ${({ $height }) => $height}rem;
`;

export function XSandbox({ height = 32, id }: XSandboxProps) {
	const src = id
		? 'https://codesandbox.io/embed/new?codemirror=1'
		: `https://codesandbox.io/embed/${id}?hidenavigation=1&theme=dark`;

	return (
		<IFrame
			$height={height}
			allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
			loading="lazy"
			sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
			src={src}
		/>
	);
}

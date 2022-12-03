interface XFigureProps {
	height?: number;
	id?: string;
}

export function XSandbox({ height = 32, id }: XFigureProps): JSX.Element {
	const src = id
		? 'https://codesandbox.io/embed/new?codemirror=1'
		: `https://codesandbox.io/embed/${id}?hidenavigation=1&theme=dark`;

	return (
		<iframe
			allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
			className="w-full border-none rounded overflow-hidden"
			loading="lazy"
			sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
			style={{ height: `${height}rem` }}
			src={src}
		/>
	);
}

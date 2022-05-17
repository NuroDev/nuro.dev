import fragmentShader from '~/data/shaders/fragment.glsl';
import vertexShader from '~/data/shaders/vertex.glsl';
import { Layout } from '~/layouts';
import { useOgl } from '~/lib/useOgl';

export default function PlayIndexPage() {
	const [canvasRef] = useOgl({
		className: 'fixed inset-0 -z-10',
		fragmentShader,
		vertexShader,
	});

	return (
		<Layout.Base ref={canvasRef}>
			<div className="z-10 flex justify-center items-center min-h-screen px-4 py-2 default-focus default-transition">
				<div className="bg-blue-500 px-16 py-3 rounded-2xl ring-4 ring-blue-300">Play</div>
			</div>
		</Layout.Base>
	);
}

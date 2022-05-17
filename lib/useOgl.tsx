import { Color, Mesh, Program, Renderer, Triangle } from 'ogl-typescript';
import { useRef } from 'react';
import { useEffectOnce } from 'react-use';

import type { WithClassName } from '~/types';

interface UseOglProps extends WithClassName {
	fragmentShader: string;
	vertexShader: string;
}

export function useOgl({ className, fragmentShader, vertexShader }: UseOglProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffectOnce(() => {
		let animationId = 1;

		const renderer = new Renderer();

		const gl = renderer.gl;

		function handleResize(): void {
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		try {
			if (className) gl.canvas.className = className;
			if (containerRef.current) containerRef.current.appendChild(gl.canvas);
			gl.clearColor(0, 0, 0, 0);
			window.addEventListener('resize', handleResize, false);
			handleResize();
		} catch (error) {
			console.error('Failed to initialize background renderer canvas');
		}

		const geometry = new Triangle(gl);

		const program = new Program(gl, {
			vertex: vertexShader,
			fragment: fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uColor: { value: new Color(0.3, 0.2, 0.5) },
			},
		});

		const mesh = new Mesh(gl, {
			geometry,
			program,
		});

		function update(t: number): void {
			animationId = requestAnimationFrame(update);

			program.uniforms.uTime.value = t * 0.001;

			renderer.render({
				scene: mesh,
			});
		}
		animationId = requestAnimationFrame(update);

		return () => cancelAnimationFrame(animationId);
	});

	return [containerRef];
}

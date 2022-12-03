import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
import { log } from 'next-axiom';
import { useEffectOnce } from 'react-use';
import { useRef } from 'react';

import { colors } from '~/lib';
import VertexShader from './vertex.glsl';
import FragmentShader from './fragment.glsl';

export function Standard(): JSX.Element {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffectOnce(() => {
		let animationId = 1;

		const renderer = new Renderer({
			depth: false,
			dpr: 2,
			alpha: true,
		});

		const gl = renderer.gl;

		const camera = new Camera(gl, {
			fov: 15,
		});
		camera.position.z = 15;

		function handleReisze(): void {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.perspective({
				aspect: gl.canvas.width / gl.canvas.height,
			});
		}

		try {
			containerRef.current.appendChild(gl.canvas);
			gl.clearColor(0, 0, 0, 0);
			window.addEventListener('resize', handleReisze, false);
			handleReisze();
		} catch (error) {
			console.error(error);
			log.error('Failed to initialize canvas', error);
		}

		const numParticles = 100;
		const position = new Float32Array(numParticles * 3);
		const random = new Float32Array(numParticles * 4);

		for (let i = 0; i < numParticles; i++) {
			position.set([Math.random(), Math.random(), Math.random()], i * 3);
			random.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
		}

		const geometry = new Geometry(gl, {
			position: {
				size: 3,
				data: position,
			},
			random: {
				size: 4,
				data: random,
			},
		});

		const program = new Program(gl, {
			vertex: VertexShader,
			fragment: FragmentShader,
			uniforms: {
				uTime: {
					value: 0,
				},
				uColor: {
					value: new Color(colors.primary[500]),
				},
			},
			transparent: true,
			depthTest: false,
		});

		const particles = new Mesh(gl, {
			mode: gl.POINTS,
			geometry,
			program,
		});

		function update(t: number): void {
			animationId = requestAnimationFrame(update);

			particles.rotation.z += 0.0025;
			program.uniforms.uTime.value = t * 0.00025;

			renderer.render({
				scene: particles,
				camera: camera,
			});
		}
		animationId = requestAnimationFrame(update);

		return () => cancelAnimationFrame(animationId);
	});

	return <div className="fixed inset-0" ref={containerRef} />;
}

'use client';

import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
// import { log } from 'next-axiom';
import { useMount, useUnmount } from 'react-use';

// @ts-expect-error Importing CJS file
import tailwindCSS from '../../../tailwind.config.cjs';
import VertexShader from './vertex.glsl';
import FragmentShader from './fragment.glsl';
import { useState } from 'react';

export function Background(): JSX.Element {
	const [animationId, setAnimationId] = useState<number>(0);

	useMount((): void => {
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
			gl.canvas.className = 'fixed inset-0';
			gl.canvas.id = 'background';

			const existingCanvas = document.getElementById('background');
			if (!existingCanvas) document.body.prepend(gl.canvas);

			gl.clearColor(0, 0, 0, 0);
			window.addEventListener('resize', handleReisze, false);
			handleReisze();
		} catch (error) {
			console.error(error);
			// log.error('Failed to initialize canvas', error);
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
					value: new Color(tailwindCSS.theme.extend.colors.primary[500]),
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
			setAnimationId(requestAnimationFrame(update));

			particles.rotation.z += 0.0025;
			program.uniforms.uTime.value = t * 0.00025;

			renderer.render({
				scene: particles,
				camera: camera,
			});
		}

		setAnimationId(requestAnimationFrame(update));
	});

	useUnmount(() => cancelAnimationFrame(animationId));

	return <></>;
}

'use client';

import FragmentShader from './fragment.glsl';
import VertexShader from './vertex.glsl';
import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
import { useEffectOnce } from 'react-use';
import { colors } from '~/tailwind.config';

export function Background(): null {
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

		setTimeout(() => {
			try {
				gl.canvas.id = 'background';
				gl.canvas.classList.add(
					'-z-10',
					'animate-in',
					'duration-2000',
					'fade-in',
					'ease-bounce',
					'fixed',
					'inset-0',
					'zoom-in',
				);
				document.body.appendChild(gl.canvas);
				gl.clearColor(0, 0, 0, 0);
				window.addEventListener('resize', handleReisze, false);
				handleReisze();
			} catch (error) {
				console.error(error);
			}
		}, 500);

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
					value: new Color(colors.gray[500]),
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

			particles.rotation.z += 0.001;
			program.uniforms.uTime.value = t * 0.0001;

			renderer.render({
				scene: particles,
				camera: camera,
			});
		}
		animationId = requestAnimationFrame(update);

		return () => cancelAnimationFrame(animationId);
	});

	return null;
}

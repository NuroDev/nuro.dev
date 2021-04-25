<template>
	<div ref="background" class="background" />
</template>

<script lang="ts" setup>
import { useEventListener } from '@vueuse/core';
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl-typescript';
import { onMounted, ref } from 'vue';

import VertexShader from '../assets/shaders/background.vs?raw';
import FragmentShader from '../assets/shaders/background.fs?raw';

const background = ref<HTMLDivElement | null>(null);

onMounted(async () => {
	const renderer = new Renderer();
	const gl = renderer.gl;

	try {
		background.value && background.value.appendChild(gl.canvas);
	} catch (error) {
		console.error(`Failed to append canvas to DOM: `, error);
	}

	gl.clearColor(1, 1, 1, 1);

	const resize = () => renderer.setSize(window.innerWidth, window.innerHeight);
	useEventListener('resize', resize);
	resize();

	const geometry = new Triangle(gl);
	const program = new Program(gl, {
		vertex: VertexShader,
		fragment: FragmentShader,
		uniforms: {
			uTime: {
				value: 0,
			},
			uColor: {
				value: new Color(0.3, 0.2, 0.5),
			},
		},
	});
	const mesh = new Mesh(gl, {
		geometry,
		program,
	});

	const update = (t: number) => {
		requestAnimationFrame(update);
		program.uniforms.uTime.value = t * 0.001;
		renderer.render({ scene: mesh });
	};
	requestAnimationFrame(update);
});
</script>

<style lang="postcss" scoped>
.background {
	@apply fixed inset-0 -z-10;
}
</style>

<template>
	<transition
		enter-active-class="transition duration-500 ease-out"
		enter-from-class="transform opacity-0"
		enter-to-class="transform opacity-100"
		leave-active-class="transition duration-500 ease-in"
		leave-from-class="transform opacity-100"
		leave-to-class="transform opacity-0"
	>
		<div ref="background" class="background" />
	</transition>
</template>

<script lang="ts" setup>
import { useEventListener } from '@vueuse/core';
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl-typescript';
import { onMounted, ref } from 'vue';

import VertexShader from '../assets/shaders/background.vs?raw';
import FragmentShader from '../assets/shaders/background.fs?raw';

const background = ref<HTMLDivElement | null>(null);
const renderer = new Renderer({
	dpr: 2,
	alpha: true,
});
const gl = renderer.gl;

onMounted(async () => {
	try {
		if (background.value) background.value.appendChild(gl.canvas);
	} catch (error) {
		return console.error(`Failed to append canvas to DOM: `, error);
	}

	gl.clearColor(1, 1, 1, 1);

	const resize = () => renderer.setSize(window.innerWidth, window.innerHeight * 0.75);
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
		renderer.render({
			scene: mesh,
		});
	};
	requestAnimationFrame(update);
});
</script>

<style lang="postcss" scoped>
.background {
	@apply fixed inset-0 -z-10;
}
</style>

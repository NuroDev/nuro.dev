<template>
	<div ref="background" class="background" />
</template>

<script lang="ts" setup>
import { useEventListener } from '@vueuse/core';
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl-typescript';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import type { Ref } from 'vue';

import VertexShader from '../assets/shaders/background.vs?raw';
import FragmentShader from '../assets/shaders/background.fs?raw';

const background = ref<HTMLDivElement | null>(null);
const renderer: Ref<Renderer | null> = ref(null);
let request_id: number = 0;

onMounted(() => {
	if (!renderer.value)
		renderer.value = new Renderer({
			dpr: 2,
			alpha: true,
		});

	const gl = renderer.value.gl;
	const resize = () => {
		if (!renderer.value)
			throw new Error(`Failed to resize renderer. Renderer instance is null`);
		renderer.value.setSize(window.innerWidth, window.innerHeight * 0.75);
	};

	try {
		if (background.value) background.value.appendChild(gl.canvas);
		gl.clearColor(1, 1, 1, 1);
		useEventListener('resize', resize);
		resize();
	} catch (error) {
		throw error;
	}

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
		if (!renderer.value) throw new Error(`Update loop failed. Renderer instance is null`);
		request_id = requestAnimationFrame(update);
		program.uniforms.uTime.value = t * 0.001;
		renderer!.value.render({
			scene: mesh,
		});
	};
	request_id = requestAnimationFrame(update);
});

onBeforeUnmount(() => {
	cancelAnimationFrame(request_id);
	renderer.value = null;
});
</script>

<style lang="postcss" scoped>
.background {
	@apply fixed inset-0 -z-10;
}
</style>

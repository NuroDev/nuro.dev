<template>
	<div ref="background" class="background" />
</template>

<script lang="ts" setup>
import { useEventListener, useCounter } from '@vueuse/core';
import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import VertexShader from '../assets/shaders/background.vs?raw';
import FragmentShader from '../assets/shaders/background.fs?raw';

import type { Ref } from 'vue';

const background = ref<HTMLDivElement | null>(null);
const camera: Ref<Camera | null> = ref(null);
const renderer: Ref<Renderer | null> = ref(null);
const { count: animationId, inc: incrementAnimationId } = useCounter();

function handleResize (): void {
	if (!renderer.value)
		throw new Error(`Failed to resize renderer. Renderer instance is null`);

	const gl = renderer.value.gl;

	renderer.value.setSize(window.innerWidth, window.innerHeight);

	if (!camera.value)
		throw new Error(`Failed to resize renderer. Camera instance is null`);

	camera.value.perspective({
		aspect: gl.canvas.width / gl.canvas.height
	});
};

onMounted(() => {
	if (!renderer.value)
		renderer.value = new Renderer({
			depth: false,
			dpr: 2,
			alpha: true,
		});

	const gl = renderer.value.gl;

	if (!camera.value)
		camera.value = new Camera(gl, {
			fov: 15,
		})
	camera.value.position.z = 15;

	try {
		if (background.value) background.value.appendChild(gl.canvas);
		gl.clearColor(0, 0, 0, 0);
		useEventListener('resize', handleResize);
		handleResize();
	} catch (error) {
		throw error;
	}

	const num = 100;
	const position = new Float32Array(num * 3);
	const random = new Float32Array(num * 4);

	for (let i = 0; i < num; i++) {
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
				value: new Color("#0072ff")
			}
		},
		transparent: true,
		depthTest: false,
	});

	const particles = new Mesh(gl, {
		mode: gl.POINTS,
		geometry,
		program,
	});

	function update (t: number): void {
		if (!renderer.value) throw new Error(`Update loop failed. Renderer instance is null`);
		if (!camera.value) throw new Error(`Update loop failed. Camera instance is null`);

		incrementAnimationId(requestAnimationFrame(update))

		particles.rotation.z += 0.0025;
		program.uniforms.uTime.value = t * 0.00025;

		renderer.value.render({
			scene: particles,
			camera: camera.value,
		});
	};

	incrementAnimationId(requestAnimationFrame(update))
});

onBeforeUnmount(() => {
	cancelAnimationFrame(animationId.value);
	renderer.value = null;
	camera.value = null;
});
</script>

<style lang="postcss" scoped>
.background {
	@apply fixed inset-0 -z-10;
}
</style>

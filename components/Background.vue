<template></template>

<script lang="ts">
import Vue from 'vue';
import {
	Color,
	Mesh,
	Program,
	Renderer,
	Triangle,
} from 'ogl-typescript';

const vertex = `
	attribute vec2 uv;
	attribute vec2 position;

	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = vec4(position, 0, 1);
	}
`;

const fragment = `
	precision highp float;

	uniform float uTime;
	uniform vec3 uColor;

	varying vec2 vUv;

	void main() {
		gl_FragColor.rgb = 0.5 + 0.3 * cos(vUv.xyx + uTime) + uColor;
		gl_FragColor.a = 1.0;
	}
`;

export default Vue.extend({
	data() {
		return {
			renderer: new Renderer(),
		}
	},
	mounted() {
		// Initialize the renderer and push the canvas to the DOM
		const gl = this.renderer.gl;
		gl.canvas.id = 'background'
		gl.canvas.classList.add('fixed', 'inset-0');
		if (!document.getElementById('background')) {
			const layout = document.getElementById('__layout');
			if (layout) layout.appendChild(gl.canvas);
		}
		gl.clearColor(1, 1, 1, 1);

		// TODO: Convert to a Vue method
		// Handle resizing the window
		const resize = () => this.renderer.setSize(window.innerWidth, window.innerHeight);
		window.addEventListener('resize', resize, false);
		resize();

		const geometry = new Triangle(gl);
		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				uTime: {
					value: 0,
				},
				uColor: {
					value: new Color(0.3, 0.2, 0.5),
				}
			},
		});
		const mesh = new Mesh(gl, {
			geometry: new Triangle(gl),
			program
		});

		// Update every frame
		const update = (t: number) => {
			requestAnimationFrame(update);
			program.uniforms.uTime.value = t * 0.001;
			this.renderer.render({scene: mesh});
		}
		requestAnimationFrame(update);
	}
})
</script>

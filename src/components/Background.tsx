import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
import { Component, onCleanup, onMount } from 'solid-js';
import { colors } from '~/tailwind.config';

const FRAGMENT_SHADER = /* glsl */ `precision highp float;

uniform float uTime;
uniform vec3 uColor;

varying vec4 vRandom;

void main() {
	vec2 uv = gl_PointCoord.xy;
	
	float circle = smoothstep(0.5, 0.4, length(uv - 0.5)) * 1.0;
	
	gl_FragColor.rgb = uColor;
	gl_FragColor.a = circle;
}
`;

const VERTEX_SHADER = /* glsl */ `attribute vec3 position;
attribute vec4 random;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;

varying vec4 vRandom;

void main() {
	vRandom = random;
	
	// Positions are 0->1, so make -1->1
	vec3 pos = position * 2.0 - 1.0;
	
	// Scale towards camera to be more interesting
	pos.z *= 10.0;
	
	// modelMatrix is one of the automatically attached uniforms when using the Mesh class
	vec4 mPos = modelMatrix * vec4(pos, 1.0);

	// Add some movement in world space
	float t = uTime * 0.6;
	mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
	mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
	mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
	
	// Get the model view position so that we can scale the points off into the distance
	vec4 mvPos = viewMatrix * mPos;
	gl_PointSize = 300.0 / length(mvPos.xyz) * (random.x + 0.1);
	gl_Position = projectionMatrix * mvPos;
}
`;

const NUM_PARTICLES = 100;

export const Background: Component = () => {
	let animationId = 1;

	const renderer = new Renderer({
		alpha: true,
		depth: false,
		dpr: 2,
	});
	const { gl } = renderer;

	const camera = new Camera(gl, { fov: 15 });
	camera.position.z = 15;

	function handleReisze(): void {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.perspective({
			aspect: gl.canvas.width / gl.canvas.height,
		});
	}

	const position = new Float32Array(NUM_PARTICLES * 3);
	const random = new Float32Array(NUM_PARTICLES * 4);

	for (let i = 0; i < NUM_PARTICLES; i++) {
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
		depthTest: false,
		fragment: FRAGMENT_SHADER,
		transparent: true,
		uniforms: {
			uColor: { value: new Color(colors.gray[500]) },
			uTime: { value: 0 },
		},
		vertex: VERTEX_SHADER,
	});

	const particles = new Mesh(gl, {
		geometry,
		mode: gl.POINTS,
		program,
	});

	function update(t: number): void {
		animationId = requestAnimationFrame(update);

		particles.rotation.z += 0.001;
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		program.uniforms.uTime!.value = t * 0.0001;

		renderer.render({
			scene: particles,
			camera: camera,
		});
	}
	animationId = requestAnimationFrame(update);

	onMount((): void => {
		gl.canvas.id = 'background';
		gl.canvas.classList.add(
			'-z-10',
			'animate-in',
			'duration-2000',
			'fade-in',
			'ease-in',
			'fixed',
			'inset-0',
		);
		document.body.appendChild(gl.canvas);
		gl.clearColor(0, 0, 0, 0);
		window.addEventListener('resize', handleReisze, false);
		handleReisze();

		setTimeout(() => {
			gl.canvas.classList.remove('duration-2000', 'ease-in');
			gl.canvas.classList.add('duration-500', 'ease-bounce');
		}, 2000);
	});

	onCleanup((): void => cancelAnimationFrame(animationId));

	return null;
};

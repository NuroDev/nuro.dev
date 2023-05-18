precision highp float;

uniform float uTime;
uniform vec3 uColor;

varying vec4 vRandom;

void main() {
	vec2 uv = gl_PointCoord.xy;
	
	float circle = smoothstep(0.5, 0.4, length(uv - 0.5)) * 1.0;
	
	gl_FragColor.rgb = uColor;
	gl_FragColor.a = circle;
}

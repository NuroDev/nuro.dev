import { useEffectOnce } from 'react-use';
import { useRef } from 'react';

import { colors } from '~/lib';

export function Standard() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffectOnce(() => {
		import("particles.js").then(() => {
			particlesJS("background", {
				"particles": {
					"number": {
						"value": 50,
						"density": {
							"enable": true,
							"value_area": 1000
						}
					},
					"color": {
						"value": colors.primary[500]
					},
					"shape": {
						"type": "circle",
					},
					"opacity": {
						"value": 0.8,
						"random": true,
						"anim": {
							"enable": true,
							"speed": 0.4,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 12,
						"random": true,
						"anim": {
							"enable": true,
							"speed": 6,
							"size_min": 1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": false,
					},
					"move": {
						"enable": true,
						"speed": 3,
						"random": true,
						"direction": "none",
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": false,
							"mode": "repulse"
						},
						"onclick": {
							"enable": false,
							"mode": "push"
						},
						"resize": true
					},
				},
				"retina_detect": true
			});
		});

		return () => {
			try {
				const pjs = pJSDom[0].pJS.fn;
				cancelRequestAnimFrame(pjs.checkAnimFrame);
				cancelRequestAnimFrame(pjs.drawAnimFrame);
				pjs.particlesEmpty();
				pjs.canvasClear();
				pJSDom = [];
			} catch { }
		};
	});

	return <div className="fixed inset-0" id="background" ref={containerRef} />;
}

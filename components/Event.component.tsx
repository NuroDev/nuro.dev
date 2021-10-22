import styled from '@emotion/styled';
import tw from 'twin.macro';
import { create as createConfetti } from 'canvas-confetti';
import { useEffect, useRef } from 'react';

import { EventType } from '~/types';

interface EventProps {
	event: EventType;
}

const EventCanvas = styled.canvas(tw`fixed inset-0 z-20`);

export function Event({ event }: EventProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const confetti = createConfetti(canvasRef.current, {
		resize: true,
	});

	useEffect(() => {
		switch (event) {
			case EventType.BIRTHDAY: {
				setTimeout(() => {
					Promise.all([
						// Left Edge
						confetti({
							particleCount: 100,
							startVelocity: 100,
							angle: 60,
							spread: 70,
							origin: { x: 0, y: 1 },
						}),
						// Right Edge
						confetti({
							particleCount: 100,
							startVelocity: 100,
							angle: 120,
							spread: 70,
							origin: { x: 1, y: 1 },
						}),
					]);
				}, 1000);
			}
		}
	}, [confetti, event]);

	return <EventCanvas ref={canvasRef} />;
}

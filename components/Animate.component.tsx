import { animate } from 'motion';
import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';
import { spring } from 'motion';

import type { AnimationOptionsWithOverrides, MotionKeyframesDefinition } from '@motionone/dom';
import type { HTMLAttributes } from 'react';

interface AnimateProps extends HTMLAttributes<HTMLElement> {
	animation: MotionKeyframesDefinition;
	as?: React.ElementType;
	transition?: AnimationOptionsWithOverrides;
}

export function Animate({
	animation,
	as: Component = 'div',
	children,
	transition,
	...rest
}: AnimateProps): JSX.Element {
	const prefersReducedMotion = useMedia('(prefers-reduced-motion)', true);

	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (ref.current && !prefersReducedMotion)
			animate(
				ref.current,
				animation,
				Object.assign(
					{
						easing: spring(),
						repeat: 0,
					} as AnimationOptionsWithOverrides,
					transition,
				),
			);
	}, [animation, children, prefersReducedMotion, ref, transition]);

	return (
		<Component ref={ref} {...rest}>
			{children}
		</Component>
	);
}

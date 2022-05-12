import { animate, spring } from 'motion';
import { isCrawlerUserAgent } from 'is-web-crawler';
import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';

import type { AnimationOptionsWithOverrides, MotionKeyframesDefinition } from '@motionone/dom';
import type { ComponentPropsWithRef, ElementType } from 'react';

type AnimateProps<T extends ElementType> = {
	animation: MotionKeyframesDefinition;
	as?: T;
	enabled?: boolean;
	transition?: AnimationOptionsWithOverrides;
} & Omit<ComponentPropsWithRef<T>, 'animation' | 'as' | 'transition'>;

const defaultTransition: AnimationOptionsWithOverrides = {
	delay: 0,
	duration: 1500,
	easing: spring(),
	repeat: 0,
};

/**
 * Animate
 *
 * @description A small wrapper component for the `motion` library to make it easier to use with React.js
 */
export function Animate<T extends ElementType>({
	animation,
	as: Component = 'div' as T,
	children,
	enabled = true,
	transition,
	...rest
}: AnimateProps<T>): JSX.Element {
	const prefersReducedMotion = useMedia('(prefers-reduced-motion)', true);

	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (ref.current && enabled && !(prefersReducedMotion || isCrawlerUserAgent()))
			animate(ref.current, animation, {
				...defaultTransition,
				...transition,
			});
	}, [animation, enabled, prefersReducedMotion, transition]);

	return (
		// @ts-expect-error
		<Component ref={ref} {...rest}>
			{children}
		</Component>
	);
}

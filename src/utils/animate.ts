import { spring } from 'motion';

import type { AnimationOptionsWithOverrides } from 'motion';

export const defaultTransition: AnimationOptionsWithOverrides = {
	delay: 0,
	duration: 1500,
	easing: spring(),
	repeat: 0,
};

import * as icons from 'lucide-react';

import type { LucideProps } from 'lucide-react';

import type { IconName } from '~/types/icon';

interface IconProps extends Omit<LucideProps, 'name'> {
	name: IconName;
}

export function Icon({ color = 'currentColor', name, size = 14, ...rest }: IconProps): JSX.Element {
	const LucideIcon = icons[name];

	// @ts-expect-error - LucideIcon is a valid component
	return <LucideIcon color={color} size={size} {...rest} />;
}

'use client';

import { Icon as IconifyIcon } from '@iconify/react';

import type { IconProps } from '@iconify/react';

export function Icon(props: IconProps): JSX.Element {
	return <IconifyIcon {...props} />;
}

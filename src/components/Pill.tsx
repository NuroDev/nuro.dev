import { cn } from '~/utils/cn';

import type { HTMLAttributes } from 'react';

interface StandardPillProps extends HTMLAttributes<HTMLDivElement> {}

export function Pill({ children, className, ...rest }: StandardPillProps): JSX.Element {
	return (
		<div
			className={cn(
				'default-transition default-focus inline-flex rounded-2xl bg-primary-500 bg-opacity-[0.15] px-3 py-2 text-primary-200 saturate-200 filter backdrop-blur-sm backdrop-filter md:pb-4 lg:px-5',
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}

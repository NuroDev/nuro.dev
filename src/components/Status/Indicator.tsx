import clsx from 'clsx';
import { cva } from 'cva';

import type { VariantProps } from 'cva';

import type { WithClassName } from '~/types/react';

const indicatorStyles = cva([], {
	variants: {
		color: {
			gray: ['bg-gray-600'],
			green: ['bg-green-600'],
			red: ['bg-red-600'],
			yellow: ['bg-yellow-600'],
		},
	},
});

type StatusIndicatorStyleProps = VariantProps<typeof indicatorStyles>;

interface StatusIndicatorProps extends WithClassName, StatusIndicatorStyleProps {
	pulse?: boolean;
}

export function StatusIndicator({
	className,
	color = 'gray',
	pulse = false,
}: StatusIndicatorProps): JSX.Element {
	return (
		<span
			className={clsx(
				'relative mr-3 inline-flex h-5 w-5 items-center justify-center',
				className,
			)}
		>
			<span className="absolute flex h-3 w-3">
				{pulse && (
					<span
						className={indicatorStyles({
							className:
								'absolute inline-flex h-full w-full rounded-full opacity-75 motion-safe:animate-ping',
							color,
						})}
					/>
				)}
				<span
					className={indicatorStyles({
						className: 'relative inline-flex h-3 w-3 rounded-full',
						color,
					})}
				/>
			</span>
		</span>
	);
}

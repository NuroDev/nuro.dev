import clsx from 'clsx';

import { colors } from '~/lib';

import type { WithClassName } from '~/types';

interface IndicatorProps extends WithClassName {
	color?: string;
	pulse?: boolean;
}

export function Indicator({
	className,
	color = 'gray',
	pulse = false,
}: IndicatorProps): JSX.Element {
	return (
		<span
			className={clsx(
				'relative inline-flex justify-center items-center w-5 h-5 mr-3',
				className,
			)}>
			<span className="absolute flex h-3 w-3">
				{pulse && (
					<span
						className="absolute inline-flex w-full h-full opacity-75 rounded-full motion-safe:animate-ping"
						style={{ backgroundColor: colors?.[color]?.['400'] }}
					/>
				)}
				<span
					className="relative inline-flex w-3 h-3 rounded-full"
					style={{ backgroundColor: colors?.[color]?.['500'] }}
				/>
			</span>
		</span>
	);
}

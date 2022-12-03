import clsx from 'clsx';
import { forwardRef } from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
	{ children, className, onClick, ...rest },
	ref,
) {
	return (
		<button
			ref={ref}
			className={clsx(
				'group',
				'relative inline-flex items-center px-3 py-2 bg-gray-50 hover:(bg-gray-100 text-gray-700) dark:(bg-gray-900 hover:bg-gray-700 hover:text-white) text-gray-400 rounded-lg text-sm font-medium default-transition default-focus',
				className,
			)}
			onClick={(e): void => onClick && onClick(e)}
			{...rest}
		>
			{children}
		</button>
	);
});

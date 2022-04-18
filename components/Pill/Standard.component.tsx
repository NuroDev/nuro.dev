import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function Standard({ children, className, ...rest }: StandardPillProps) {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm saturate-200 text-primary-200 rounded-2xl default-transition focus:(outline-none ring-2 ring-offset-2 ring-primary-500)',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}
		>
			{children}
		</div>
	);
}

import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';

type ActionProps = {
	as?: ElementType;
} & (
	| ({
			as?: 'button';
	  } & ButtonHTMLAttributes<HTMLButtonElement>)
	| ({
			as?: 'a';
	  } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function Action({
	as: Component = 'button',
	children,
	className,
	...rest
}: ActionProps): JSX.Element {
	return (
		<Component
			className={clsx(
				'relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-white border border-gray-100 dark:border-gray-500 rounded-lg text-sm font-medium default-transition default-focus',
				className,
			)}
			{...rest}>
			{children}
		</Component>
	);
}

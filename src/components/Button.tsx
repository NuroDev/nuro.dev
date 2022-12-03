import { cva } from 'cva';

import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { VariantProps } from 'cva';

import type { WithChildren, WithClassName } from '~/types/react';

const buttonStyles = cva(['default-transition', 'default-focus', 'font-medium'], {
	variants: {
		border: {
			true: ['border-2', 'border-gray-100/50 dark:border-gray-800'],
			false: [],
		},
		disabled: {
			true: ['disabled:opacity-50', 'disabled:cursor-not-allowed'],
			false: [],
		},
		loading: {
			true: ['!cursor-wait'],
			false: [],
		},
		round: {
			none: [],
			sm: ['rounded-sm'],
			md: ['rounded'],
			lg: ['rounded-lg'],
			xl: ['rounded-xl'],
		},
		size: {
			xs: ['py-0.5', 'px-2'],
			sm: ['py-1', 'px-3'],
			md: ['py-1', 'px-5'],
			lg: ['py-2', 'px-6'],
			xl: ['py-4', 'px-8'],
		},
		variant: {
			danger: ['bg-red-600', 'hover:bg-red-700', 'text-white', 'focus:ring-red-600'],
			flat: [
				'bg-gray-50 hover:bg-gray-100/75 focus:bg-gray-100/75 dark:bg-gray-900/75 dark:hover:bg-gray-800/75 dark:focus:bg-gray-800/75',
				'text-gray-900 dark:text-white',
			],
			info: ['bg-blue-600', 'hover:bg-blue-700', 'text-white', 'focus:ring-blue-600'],
			primary: [
				'bg-gray-50 hover:bg-gray-100/75 focus:bg-gray-100/75 dark:bg-gray-900/75 dark:hover:bg-gray-800/75 dark:focus:bg-gray-800/75',
				'text-gray-900 dark:text-primary-600',
			],
			success: ['bg-green-600', 'hover:bg-green-700', 'text-white', 'focus:ring-green-600'],
			warning: [
				'bg-yellow-600',
				'hover:bg-yellow-700',
				'text-white',
				'focus:ring-yellow-600',
			],
		},
	},
	defaultVariants: {
		border: false,
		disabled: false,
		loading: false,
		round: 'lg',
		size: 'md',
		variant: 'flat',
	},
});

type ButtonStyleProps = VariantProps<typeof buttonStyles>;

interface BaseButtonProps extends WithChildren, WithClassName, ButtonStyleProps {
	as?: ElementType;
}

type ButtonProps<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> &
	BaseButtonProps;

export function Button<TElementType extends ElementType>({
	as: Component = 'button',
	border,
	children,
	className,
	disabled,
	loading = false,
	round,
	size,
	variant,
	...rest
}: ButtonProps<TElementType>): JSX.Element {
	return (
		<Component
			className={buttonStyles({
				border,
				class: className,
				disabled,
				loading,
				round,
				size,
				variant,
			})}
			disabled={loading || disabled}
			{...rest}
		>
			{children}
		</Component>
	);
}

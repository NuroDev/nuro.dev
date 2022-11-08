import { cva } from 'cva';

import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { VariantProps } from 'cva';

import type { WithChildren, WithClassName } from '~/types';

const buttonStyles = cva(['default-transition', 'default-focus', 'font-medium'], {
	variants: {
		round: {
			none: [],
			sm: ['rounded-sm'],
			md: ['rounded'],
			lg: ['rounded-lg'],
			xl: ['rounded-xl'],
		},
		size: {
			sm: ['py-1', 'px-3'],
			md: ['py-1', 'px-5'],
			lg: ['py-1.5', 'px-6'],
			xl: ['py-2', 'px-8'],
		},
		variant: {
			flat: ['hover:bg-gray-100 focus:bg-gray-100 text-gray-900'],
			primary: ['bg-primary-600', 'text-white', 'hover:bg-primary-500'],
		},
	},
	defaultVariants: {
		round: 'md',
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
	children,
	className,
	round,
	size,
	variant,
	...rest
}: ButtonProps<TElementType>): JSX.Element {
	return (
		<Component
			className={buttonStyles({
				class: className,
				round,
				size,
				variant,
			})}
			{...rest}
		>
			{children}
		</Component>
	);
}

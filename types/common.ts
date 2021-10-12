import type { JSXElementConstructor, PropsWithChildren } from 'react';

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithClassName<T = {}> = T & {
	className?: string;
};

export type WithProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
	React.ComponentProps<T>;

import type { ComponentProps, JSXElementConstructor, PropsWithChildren } from 'react';

/**
 * With Children
 *
 * @description Adds an optional `ReactNode` property called `children`
 *
 * @example
 * ```
 * interface Props extends WithChildren {
 * 	foo: string;
 * }
 * ```
 *
 * @example
 * ```
 * type Props = WithChildren<{
 * 	foo: string;
 * }>
 * ```
 */
export type WithChildren<T = Record<string, unknown>> = PropsWithChildren<T>;

/**
 * With ClassName
 *
 * @description Adds an optional `className` property to a provided generic type
 *
 * @example
 * ```
 * interface Props extends WithClassName {
 * 	foo: string;
 * }
 * ```
 *
 * @example
 * ```
 * type Props = WithClassName<{
 * 	foo: string;
 * }>
 * ```
 */
export type WithClassName<T = Record<string, unknown>> = T & {
	className?: string;
};

/**
 * With Props
 *
 * @description Extracts the prop types from the typeof of a provided React component
 *
 * @example
 * ```
 * interface ParentProps {
 * 	foo: string;
 * }
 *
 * const Parent = (props: ParentProps) => <></>
 *
 * interface Props extends WithProps<typeof Parent> {}
 * ```
 */
export type WithProps<
	T extends keyof JSX.IntrinsicElements | JSXElementConstructor<U>,
	U = unknown,
> = ComponentProps<T>;

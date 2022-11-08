import type { ComponentProps, JSXElementConstructor, PropsWithChildren } from 'react';

/**
 * With Children
 *
 * @description Adds an optional `ReactNode` property called `children`
 *
 * @example
 * ```ts
 * interface Props extends WithChildren {
 * 	foo: string;
 * }
 * ```
 *
 * @example
 * ```ts
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
 * ```ts
 * interface Props extends WithClassName {
 * 	foo: string;
 * }
 * ```
 *
 * @example
 * ```ts
 * type Props = WithClassName<{
 * 	foo: string;
 * }>
 * ```
 */
export type WithClassName<T = Record<string, unknown>> = T & {
	className?: string;
};

/**
 * Props From
 *
 * @description Extracts the prop types from the typeof of a provided React component
 *
 * @example
 * ```tsx
 * interface ParentProps {
 * 	foo: string;
 * }
 *
 * function Parent (props: ParentProps) {
 * 	return <>Hello World</>
 * }
 *
 * interface Props extends PropsFrom<typeof Parent> {}
 * ```
 */
export type PropsFrom<
	T extends keyof JSX.IntrinsicElements | JSXElementConstructor<U>,
	U = unknown,
> = ComponentProps<T>;

/**
 * Unwrap Promise
 *
 * @description Unwraps / extracts a type from a provided `Promise` type
 *
 * @example
 * ```ts
 * interface Props {
 * 	foo: string;
 * }
 *
 * type Example = UnwrapPromise<Promise<Props>>
 * // type Example = Props
 * ```
 */
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

/**
 * Merge
 *
 * @description Merges 2 provided types together
 */
export type Merge<T, U> = Omit<T, keyof U> & U;

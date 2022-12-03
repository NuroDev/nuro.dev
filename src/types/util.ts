/**
 * Awaitable
 *
 * @description Wraps the provided generic type to return either it or a `Promise` of it
 *
 * @example
 * ```ts
 * interface Props {
 * 	foo: string;
 * }
 *
 * type Example = Awaitable<Props>
 * // type Example = Props | Promise<Props>
 */
export type Awaitable<T> = T | Promise<T>;

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
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

/**
 * Merge
 *
 * @description Merges 2 provided types together
 */
export type Merge<T, U> = Omit<T, keyof U> & U;

/**
 * Array Element
 *
 * @description Get the type of the element(s) inside an array
 */
export type ArrayElement<A> = A extends ReadonlyArray<infer T> ? T : never;

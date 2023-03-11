/**
 * Awaitable
 *
 * @description A type that can be of type `T` or `Promise<T>`.
 *
 * @example
 * ```ts
 * interface Props {
 * 	foo: string;
 * }
 *
 * type Example = Awaitable<Props>
 * // type Example = Props | Promise<Props>
 * ```
 */
export type Awaitable<T> = T | Promise<T>;

/**
 * Unwraps / extracts a type from a provided `Promise` type
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
 * Get the type of the element(s) inside an array
 *
 * @example
 * ```ts
 * type Example = ArrayElement<Array<{ foo: string; bar: number }>>;
 * // type Example = { foo: string; bar: number }
 * ```
 */
export type ArrayElement<A> = A extends ReadonlyArray<infer T> ? T : never;

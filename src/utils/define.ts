import type { NextApiConfig, NextRouteHandler } from '~/types/next';

type SupportedHTTPMethods = 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';

type DefineAppRouteHandlerOptions<TParams extends Record<string, unknown>> = Record<
	SupportedHTTPMethods,
	NextRouteHandler<TParams>
> &
	Pick<NextApiConfig, 'runtime'>;

/**
 * Define a route handler for an app route.
 *
 * @template TParams
 * @template TOptions
 *
 * @param options The options object.
 *
 * @example
 * ```ts
 * export const { config, get } = defineAppRouteHandler({
 * 	config: {
 * 		runtime: 'edge',
 * 	},
 * 	get: (_req, { params }) => Response.json({ params }),
 * });
 * ```
 *
 * @returns {TOptions} The options object.
 */
export function defineAppRouteHandler<
	TParams extends Record<string, unknown> = Record<string, unknown>,
	TOptions extends Partial<DefineAppRouteHandlerOptions<TParams>> = Partial<
		DefineAppRouteHandlerOptions<TParams>
	>,
>(options: TOptions): TOptions {
	return options;
}

import type { ReactNode } from 'react';

import type { ArrayElement, UnwrapPromise } from './util';
import type { CRON } from './cron';

type ParamsValue = string | number | boolean;

export interface NextErrorPageProps {
	/**
	 * **Error**
	 *
	 * An instance of an Error object. This error can happen on the server or the client.
	 */
	error: Error;
	/**
	 * **Reset**
	 *
	 * A function to reset the error boundary, which does not return a response.
	 */
	reset: () => void;
}

export interface NextHeadProps<TParams = Record<string, ParamsValue>> {
	/**
	 * **Params** (Optional)
	 */
	params?: TParams;
}

export interface NextLayoutProps<TParams = Record<string, ParamsValue>> {
	/**
	 * **Children**
	 *
	 * React component containing the route segments the layout is wrapping.
	 */
	children: ReactNode;

	/**
	 * **Params** (Optional)
	 *
	 * The dynamic route parameters object from the root segment down to that layout.
	 */
	params?: TParams;
}

type GenerateStaticParamsFn<TParams extends Array<unknown>> = () => TParams | Promise<TParams>;

export interface NextPageProps<
	TGenerateStaticParams extends GenerateStaticParamsFn<TParams> | undefined = undefined,
	TParams extends Array<unknown> = Array<unknown>,
> {
	/**
	 * **params** (Optional)
	 *
	 * The dynamic route params object from the root segment down that to that page.
	 */
	params: TGenerateStaticParams extends GenerateStaticParamsFn<TParams>
		? ArrayElement<UnwrapPromise<ReturnType<TGenerateStaticParams>>>
		: Record<string, ParamsValue> | undefined;

	/**
	 * **searchParams** (Optional)
	 *
	 * The URL search params object.
	 *
	 * @example `acme.com/?q=cat` → `{ q: "cat" }`
	 */
	searchParams?: Record<string, ParamsValue>;
}

type Region =
	| 'arn1'
	| 'bom1'
	| 'cdg1'
	| 'cle1'
	| 'cpt1'
	| 'dub1'
	| 'fra1'
	| 'gru1'
	| 'hkg1'
	| 'hnd1'
	| 'iad1'
	| 'icn1'
	| 'kix1'
	| 'lhr1'
	| 'pdx1'
	| 'sfo1'
	| 'sin1'
	| 'syd1';

export interface NextApiConfig {
	cron?: CRON;
	runtime?: 'edge' | 'nodejs';
	regions?: Array<Region>;
}

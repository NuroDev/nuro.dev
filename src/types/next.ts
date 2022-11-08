import type { WithChildren } from './common';

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

export interface NextHeadProps {
	/**
	 * **Params** (Optional)
	 */
	params?: Record<string, ParamsValue>;
}

export interface NextLayoutProps extends WithChildren {
	/**
	 * **Params** (Optional)
	 *
	 * The dynamic route parameters object from the root segment down to that layout.
	 */
	params?: Record<string, ParamsValue>;
}

export interface NextPageProps {
	/**
	 * **params** (Optional)
	 *
	 * The dynamic route params object from the root segment down that to that page.
	 */
	params?: Record<string, ParamsValue>;

	/**
	 * **searchParams** (Optional)
	 *
	 * The URL search params object.
	 *
	 * @example `acme.com/?q=cat` → `{ q: "cat" }`
	 */
	searchParams?: Record<string, ParamsValue>;
}

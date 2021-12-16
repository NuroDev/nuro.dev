import type { Redirect } from 'next';

import type { GumroadProduct, GumroadResponse, StrippedGumroadProduct } from '~/types';

export async function getProducts(): Promise<
	{ products: Array<StrippedGumroadProduct>; error: null } | { products: null; error: Redirect }
> {
	const response = await fetch(`https://api.gumroad.com/v2/products/`, {
		headers: {
			Authorization: `Bearer ${process.env.GUMROAD_API_KEY}`,
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
	if (response.status !== 200)
		return {
			products: null,
			error: {
				destination: `/error?status=${response.status}`,
				permanent: false,
			},
		};

	const json = (await response.json()) as GumroadResponse<{
		products: Array<GumroadProduct>;
	}>;
	if (!json.success)
		return {
			products: null,
			error: {
				destination: `/error?status=${response.status}`,
				permanent: false,
			},
		};

	return {
		products: json.products.map(
			({ currency, custom_summary, id, name, preview_url, price, short_url }) =>
				({
					currency,
					description: custom_summary,
					id,
					name,
					price,
					thumbnail: preview_url,
					url: short_url,
				} as StrippedGumroadProduct),
		),
		error: null,
	};
}

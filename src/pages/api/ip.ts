import type { APIContext } from 'astro';

export async function get(_ctx: APIContext) {
	try {
		const response = await fetch('http://ip-api.com/json');

		const json = (await response.json()) as Response;

		return new Response(JSON.stringify(json, null, 4), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch ({ message = 'Internal server error', statusCode = 500 }) {
		return new Response(JSON.stringify(null), {
			status: +Number(statusCode),
			statusText: message as string,
		});
	}
}

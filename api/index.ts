import { join } from 'path';
import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

// @ts-ignore
globalThis.fetch = fetch;

export default async function(req: VercelRequest, res: VercelResponse) {
	try {
		const manifest = await import(join(__dirname, 'renderer', 'ssr-manifest.json'));
		const { default: render } = await import(join(__dirname, 'renderer', 'main.js'));

		// @ts-ignore
		const protocol = req.protocol || (req.headers.referer || '').split(':')[0] || 'http';

		const { html } = await render(`${protocol}://${process.env.VERCEL_URL}${req.url}`, {
			manifest,
			preload: true,
		});

		res.status(200);
		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400, stale-while-revalidate');
		res.setHeader('Permissions-Policy', 'interest-cohort=()');
		res.send(html);
	} catch (error) {
		console.error(error.stack);
		res.status(500);
		res.send(error.stack);
	}
}

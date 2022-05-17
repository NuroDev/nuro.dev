import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

const excludedPaths = ['.', '/api', '/favicon', '/sitemap.xml', '/robots.txt'];

const junctions = ['app', 'comic', 'grid', 'play'];

export default function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (excludedPaths.some((p) => pathname.includes(p))) return;

	const existingJunction = junctions.find((p) => pathname.startsWith(`/${p}`));

	const url = new URL(
		existingJunction === undefined
			? junctions.at(Math.floor(Math.random() * junctions.length))
			: pathname,
		req.nextUrl,
	);

	return NextResponse.rewrite(url.href);
}

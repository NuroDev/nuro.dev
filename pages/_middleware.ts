import { NextResponse } from 'next/server';

import { navigation } from '~/lib/navigation';

import type { NextRequest } from 'next/server';

const excludedPaths = ['.', '/api', '/favicon', '/sitemap.xml', '/robots.txt'];

export default function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (excludedPaths.some((p) => pathname.includes(p))) return;

	const existingJunction = navigation.find(({ path }) => pathname.startsWith(`/${path}`));

	const url = new URL(
		existingJunction === undefined
			? navigation.at(Math.floor(Math.random() * navigation.length)).path
			: pathname,
		req.nextUrl,
	);

	return NextResponse.rewrite(url.href);
}

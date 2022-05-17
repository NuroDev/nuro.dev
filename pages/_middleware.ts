import { NextResponse } from 'next/server';

import { navigation } from '~/lib/navigation';

import type { NextRequest } from 'next/server';

const excludedPaths = ['.', '/api', '/favicon', '/sitemap.xml', '/robots.txt'];

const junctions = navigation.map(({ path }) => path).filter((path) => path !== '/');

export default function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (excludedPaths.some((p) => pathname.includes(p))) return;

	if (pathname === '/') {
		const { href: randomIndexPage } = new URL(
			junctions.at(Math.floor(Math.random() * junctions.length)),
			req.nextUrl,
		);

		return NextResponse.rewrite(randomIndexPage);
	}
}

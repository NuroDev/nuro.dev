import type { Metadata } from 'next';
import type { NextLayoutProps } from '~/types/next';

export const metadata: Metadata = {
	title: {
		default: 'notes ─ nuro',
		template: '%s ─ notes',
	},
	description: "Hey 👋 I'm Ben, a developer",
};

export default function PostsLayout({ children }: NextLayoutProps) {
	return <>{children}</>;
}

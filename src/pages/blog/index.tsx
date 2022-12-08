import { Blog } from '~/components';
import { getAllPostsFrontMatter } from '~/lib/post';
import { Layout } from '~/layouts';

import type { GetStaticProps } from 'next';

import type { FrontMatter } from '~/types';

import profile from '~/data/profile.json';
import type { Profile } from '~/types/profile';
const { alias } = profile as unknown as Profile;

interface BlogProps {
	serialisedFrontmatters: string;
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const frontmatters = await getAllPostsFrontMatter();

	return {
		props: {
			serialisedFrontmatters: JSON.stringify(frontmatters),
		},
	};
};

export default function BlogPage({ serialisedFrontmatters }: BlogProps): JSX.Element {
	const frontmatters = JSON.parse(serialisedFrontmatters) as Array<FrontMatter>;

	if (frontmatters.length <= 0) return <Blog.Error routeBlog={false} />;

	const latestPost = frontmatters.shift();

	return (
		<Layout.Default seo={{ title: `${alias} ─ blog` }}>
			<div className="mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-6xl mx-auto">
					<Blog.Latest frontmatter={latestPost} />
					<div className="mt-4 lg:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
						{frontmatters.map((frontmatter, i) => (
							<Blog.Post key={i} frontmatter={frontmatter} index={i} />
						))}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}

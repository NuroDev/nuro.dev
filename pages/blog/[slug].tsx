import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Layout } from '~/layouts';

import { Blog } from '~/components';
import { deserialisePost } from '~/lib';
import { getPost, getPostSlugs } from '~/lib/build';

import type { GetStaticPaths, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import type { ParsedUrlQuery } from 'querystring';

interface PathProps extends ParsedUrlQuery {
	slug: string;
}

interface BlogPostProps {
	serialisedPost?: string;
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
	const posts = await getPostSlugs();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.replace(/\.md/, ''),
			},
		})),
		fallback: false,
	};
};

export async function getStaticProps({
	params,
}: GetStaticPropsContext<PathProps>): Promise<GetStaticPropsResult<BlogPostProps>> {
	const post = await getPost(params.slug);

	return {
		props: {
			serialisedPost: JSON.stringify(post),
		},
	};
}

const Container = styled.div(tw`
	relative \
	px-4 py-16 \
	overflow-hidden
`);

const Content = styled.div(tw`
	relative \
	px-4 sm:px-6 lg:px-8
`);

const Banner = styled.div`
	${tw`
		relative sm:max-w-2xl lg:sm:max-w-6xl \
		mx-auto my-2 sm:my-4
	`}

	img {
		${tw`
			absolute top-0 left-0 w-full h-auto max-h-64 lg:max-h-96 \
			mb-8 \
			rounded-3xl object-cover select-none shadow-xl \
			transition ease-in-out duration-300
		`}
	}
`;

const BannerPlaceholder = styled.div(tw`
	w-full h-full h-64 lg:h-96 \
	mb-8 \
	bg-gray-200 dark:bg-gray-600 \
	rounded-3xl \
	animate-pulse
`);

const Meta = styled.div(tw`
	mx-auto \
	text-lg max-w-prose
`);

const TitlePrefix = styled.span(tw`
	block \
	text-primary-600 
	font-semibold tracking-wide uppercase text-base text-center
`);

const Title = styled.span(tw`
	block \
	mt-2 \
	text-gray-900 dark:text-white \
	sm:text-4xl text-3xl text-center leading-8 font-extrabold tracking-tight
`);

const Date = styled.span(tw`
	flex justify-center items-center \
	mt-4
`);

const Description = styled.p(tw`
	mt-8 \
	text-xl text-gray-400 leading-8
`);

export default function BlogPost({ serialisedPost }: BlogPostProps) {
	const post = deserialisePost(serialisedPost);

	return (
		<Layout.Default
			back={true}
			background={false}
			seo={{
				title: `nuro ─ blog ─ ${post.title.value}`,
				description: post.description.value ?? undefined,
			}}>
			<Container>
				<Content>
					{post.banner && post.banner.show && (
						<Banner>
							<BannerPlaceholder />
							<img
								src={post.banner.url}
								alt={post.banner.alt ?? post.title.value}
								draggable={false}
							/>
						</Banner>
					)}

					<Meta>
						<h1>
							{post.title.prefix && <TitlePrefix>{post.title.prefix}</TitlePrefix>}
							<Title>{post.title.value}</Title>
						</h1>

						<Date>
							<Blog.Date date={post.date.value} />
						</Date>

						{post.description && post.description.show && (
							<Description>{post.description.value}</Description>
						)}
					</Meta>

					<div tw="mt-6 prose prose-primary prose-lg text-gray-300 dark:text-gray-400 mx-auto">
						<p>
							Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed{' '}
							<strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae
							sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
							tellus varius sit neque erat velit. Faucibus commodo massa rhoncus,
							volutpat. Dignissim sed eget risus enim.{' '}
							<a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
						</p>
						<ul role="list">
							<li>Quis elit egestas venenatis mattis dignissim.</li>
							<li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
							<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
						</ul>
						<p>
							Quis semper vulputate aliquam venenatis egestas sagittis quisque orci.
							Donec commodo sit viverra aliquam porttitor ultrices gravida eu.
							Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis.
							Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum
							dignissim.
						</p>
						<h2>From beginner to expert in 30 days</h2>
						<p>
							Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in.
							Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris
							enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
							mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
							Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
							diam.
						</p>
						<blockquote>
							<p>
								Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
								urna sed consectetur neque tristique pellentesque. Blandit amet, sed
								aenean erat arcu morbi.
							</p>
						</blockquote>
						<p>
							Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
							Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
							donec est. Odio penatibus risus viverra tellus varius sit neque erat
							velit.
						</p>
						<figure>
							<img
								tw="w-full rounded-lg"
								src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
								alt=""
								width={1310}
								height={873}
							/>
							<figcaption>
								Sagittis scelerisque nulla cursus in enim consectetur quam.
							</figcaption>
						</figure>
						<h2>Everything you need to get up and running</h2>
						<p>
							Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet,
							massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
							sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
							molestie. Gravida quis fringilla amet eget dui tempor dignissim.
							Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum
							convallis quam.
						</p>
						<p>
							Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
							Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
							donec est. Odio penatibus risus viverra tellus varius sit neque erat
							velit.
						</p>
					</div>
				</Content>
			</Container>
		</Layout.Default>
	);
}

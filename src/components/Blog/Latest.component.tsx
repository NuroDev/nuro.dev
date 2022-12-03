import Image from 'next/image';
import Link from 'next/link';

import { Pill } from '~/components';

import type { FrontMatter } from '~/types';

interface LatestProps {
	frontmatter: FrontMatter;
}

export function Latest({ frontmatter }: LatestProps): JSX.Element {
	const ariaLabel = `Read blog post: ${frontmatter.title}`;
	const href = `/blog/${frontmatter.slug}`;

	return (
		<Link aria-label={ariaLabel} href={href} passHref>
			<a
				aria-label={ariaLabel}
				className="flex flex-col lg:flex-row mt-12 bg-white/75 dark:bg-gray-900/75 dark:border-gray-500 backdrop-filter backdrop-blur-sm rounded-2xl hover:shadow-xl cursor-pointer border-2 border-gray-100 transform motion-safe:hover:-translate-y-1 default-transition default-focus"
				href={href}>
				{(frontmatter.banner_show ?? true) && (
					<div className="relative flex justify-center my-auto w-full xl:w-2/4 h-64 border-b-2 sm:h-72 sm:border-0 sm:border-r-2 border-gray-100 dark:border-gray-500 overflow-hidden rounded-2xl rounded-b-none lg:max-w-xl lg:h-96 lg:rounded-l-2xl lg:rounded-r-none default-transition">
						<div className="w-full h-full mb-8 bg-gray-200 dark:bg-gray-600 rounded-lg rounded-l-none lg:(rounded-l-lg rounded-r-none motion-safe:animate-pulse)" />
						<Image
							alt={frontmatter.banner_alt ?? frontmatter.title}
							className="absolute top-0 left-0 w-full h-full rounded-lg rounded-b-none lg:(rounded-l-lg rounded-r-none) object-cover select-none"
							draggable={false}
							layout="fill"
							src={frontmatter.banner}
						/>
					</div>
				)}
				<div className="flex flex-col flex-1 justify-evenly m-auto sm:m-0 pb-3 sm:p-1 sm:pt-0 lg:px-12 text-gray-300 dark:text-gray-400">
					<h2 className="mt-6 mx-4 py-4 text-3xl sm:text-4xl lg:mt-0 lg:mx-0 lg:text-5xl font-bold line-clamp-4 text-gray-500 dark:text-white text-left">
						{frontmatter.title || frontmatter.title}
					</h2>
					{((frontmatter.description && frontmatter.description_show) || true) && (
						<p className="mt-6 lg:mt-0 mx-6 lg:mx-0 text-lg line-clamp-3">
							{frontmatter.description || frontmatter.description}
						</p>
					)}
					<div className="flex items-center mt-6 lg:mt-0 mx-6 lg:mx-0 pb-4 lg:pb-0">
						<Pill.Date>{frontmatter.date}</Pill.Date>
					</div>
				</div>
			</a>
		</Link>
	);
}

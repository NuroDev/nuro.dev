import { motion } from '@motionone/react';

import { Background } from '~/components/Background';
import { BaseLayout } from '~/layouts/Base.layout';
import { Commander } from '~/components/Commander';
import { defaultTransition } from '~/utils/animate';
import { name as personName } from '~/data';
import { StatusPill } from '~/components/Status/Pill';

export default function HomePage(): JSX.Element {
	return (
		<BaseLayout>
			<Background />
			<main className="flex min-h-screen items-end justify-start px-8 py-32 sm:px-16 lg:px-32">
				<div className="w-full max-w-md text-left sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl">
					<div className="mb-4 space-y-4 lg:mb-0">
						<div className="w-full max-w-md sm:inline-flex sm:items-center sm:justify-between sm:space-x-2">
							<motion.h4
								animate={{
									opacity: [0, 1],
									x: [-100, 0],
								}}
								className="text-lg font-extrabold tracking-tight text-gray-700 dark:text-white sm:text-xl lg:text-2xl"
								transition={defaultTransition}
							>
								Hey{' '}
								<span
									className="inline-block origin-70 animate-wave"
									style={{
										animationDelay: '1.25s',
									}}
								>
									👋
								</span>
							</motion.h4>

							<StatusPill />
						</div>

						<motion.h1
							animate={{
								opacity: [0, 1],
								x: [-100, 0],
							}}
							className="flex max-w-md flex-col text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-9xl"
							transition={{
								...defaultTransition,
								delay: 0.25,
							}}
						>
							<span className="z-20 w-full whitespace-nowrap">
								I&apos;m {profile.name}
							</span>

							<div className="z-10 -mt-4 h-[0.58em] w-full max-w-[12rem] lg:-mt-8 lg:max-w-none">
								<svg
									aria-hidden={true}
									fill="none"
									preserveAspectRatio="none"
									viewBox="0 0 418 47"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className="animate-dash stroke-primary-600"
										d="M3.5 31C55.6044 18.119 84.5636 11.5337 138 6.5C159.039 4.51809 171.907 3.1994 193 4.5C214.093 5.8006 219 7.49999 220.5 8.5C222 9.5 219.5 14 193 23C180.691 27.1805 171.402 30.6059 164.984 33.0756C162.88 33.8851 163.543 36.7752 165.792 36.6131C182.78 35.3884 214.61 33.2961 237.5 33C268.164 32.6033 285.373 33.4573 316 35C354.35 36.9317 414 43 414 43"
										strokeLinecap="round"
										strokeWidth="4"
										style={{
											strokeDasharray: 800,
											strokeDashoffset: 800,
										}}
									/>
								</svg>
							</div>
						</motion.h1>

						<Commander />
					</div>
				</div>
			</main>
		</BaseLayout>
	);
}

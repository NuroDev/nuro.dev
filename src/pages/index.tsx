import { motion } from '@motionone/react';

import { Background } from '~/components/Background';
import { BaseLayout } from '~/layouts/Base.layout';
import { defaultTransition } from '~/utils/animate';

export default function HomePage(): JSX.Element {
	return (
		<BaseLayout>
			<Background />
			<main className="flex min-h-screen items-end justify-start px-8 py-32 sm:px-16 lg:px-32">
				<div className="w-full max-w-md text-left sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl">
					<div className="space-y-2">
						<motion.h4
							animate={{
								opacity: [0, 1],
								x: [-100, 0],
							}}
							className="text-lg font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-xl lg:text-2xl"
							transition={defaultTransition}
						>
							Hey{' '}
							<span className="inline-block origin-70 hover:animate-wave">👋</span>
						</motion.h4>

						<motion.h1
							animate={{
								opacity: [0, 1],
								x: [-100, 0],
							}}
							className="flex max-w-md flex-col text-5xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-6xl lg:text-9xl"
							transition={{
								...defaultTransition,
								delay: 0.25,
							}}
						>
							<span className="z-20">I&apos;m Ben</span>

							<motion.div
								animate={{
									opacity: [0, 1],
									x: [-100, 0],
								}}
								className="z-10 -mt-8 h-[0.58em] w-full"
								transition={{
									...defaultTransition,
									delay: 0.5,
								}}
							>
								<svg
									// height="47"
									// width="418"
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
											animationDelay: '0.5s',
											strokeDasharray: 1000,
											strokeDashoffset: 1000,
										}}
									/>
								</svg>
							</motion.div>
						</motion.h1>
					</div>

					{/* <div className="mt-8 flex w-full flex-col items-center justify-start space-y-4 sm:mt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
						{indexPageActions.map((action, index) => (
							<motion.div
								animate={{
									opacity: [0, 1],
									x: [-100, 0],
								}}
								className="w-full sm:w-auto"
								key={index}
								transition={{
									...defaultTransition,
									// delay: 0.1 * (index + 2) + 0.5,
									delay: 1.0 - 0.1 * index,
								}}>
								<Button
									as={Link}
									// border={true}
									href={action.href}
									rel={action.external ? 'noopener noreferrer' : undefined}
									size="xl"
									target={action.external ? '_blank' : undefined}
									variant="primary">
									<Icon className="mr-2 inline-block" name={action.icon} />
									<span>{action.label}</span>
								</Button>
							</motion.div>
						))}
					</div> */}
				</div>
			</main>
		</BaseLayout>
	);
}

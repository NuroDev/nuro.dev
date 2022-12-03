import { Icon } from '@iconify/react';
import { Layout } from '~/layouts';
import { Button } from '..';
import { NavigationItemType } from '~/types';

interface ErrorProps {
	routeBlog?: boolean;
}

export function Error({ routeBlog = true }: ErrorProps): JSX.Element {
	return (
		<Layout.Error>
			<div className="flex flex-grow min-h-full pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex-shrink-0 flex justify-center">
						<Icon
							className="h-12 text-primary-500 w-auto"
							icon="feather:alert-circle"
						/>
					</div>
					<div className="py-4 text-center">
						<h1 className="mt-2 text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl">
							No Posts Found
						</h1>
						<p className="mt-4 text-sm font-medium text-gray-300 dark:text-gray-400">
							Sorry, we couldn’t find any blog posts ¯\_(ツ)_/¯
						</p>
						<div className="mt-6 flex justify-center items-center space-x-4">
							<Button.Standard
								icon="feather:arrow-left"
								onClick={(): void => history.go(-1)}
								type={NavigationItemType.ACTION}>
								Back
							</Button.Standard>
							<Button.Standard
								href="/"
								icon="feather:home"
								type={NavigationItemType.LINK}>
								Home
							</Button.Standard>
							{routeBlog && (
								<Button.Standard
									href="/blog"
									icon="feather:book"
									type={NavigationItemType.LINK}>
									Blog
								</Button.Standard>
							)}
						</div>
					</div>
				</div>
			</div>
		</Layout.Error>
	);
}

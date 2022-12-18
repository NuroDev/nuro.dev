import { CommandBar } from '~/components/Command/bar';
import { CommandButton } from '~/components/Command/button';

export default function RootPage(): JSX.Element {
	return (
		<div className="flex min-h-screen items-start justify-start p-8 sm:p-16">
			<header>
				<CommandButton />
			</header>

			<main>
				<CommandBar />
			</main>
		</div>
	);
}

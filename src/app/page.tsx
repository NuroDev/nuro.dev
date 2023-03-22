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

				<div className="fixed bottom-0 left-0 h-32 w-screen bg-gradient-to-r from-teal-600 via-indigo-600 to-blue-600 mix-blend-normal blur-[120px] animate-in fade-in duration-1000 motion-safe:slide-in-from-bottom-96" />
			</main>
		</div>
	);
}

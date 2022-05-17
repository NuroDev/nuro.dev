import { Layout } from '~/layouts';

export default function AppIndexPage() {
	return (
		<Layout.Base as="div" className="min-h-screen flex flex-row items-stretch w-full p-2">
			<aside className="p-4 w-60 flex flex-col flex-shrink-0 items-stretch justify-between">
				<div className="w-full h-full bg-gray-500 bg-opacity-10 rounded-lg animate-pulse" />
			</aside>
			<main className="w-full static items-center flex flex-col flex-1 order-1 ml-4 mt-4 p-8 rounded-xl bg-gray-500 bg-opacity-10 animate-pulse">
				<div className="min-h-full flex items-center justify-center">App</div>
			</main>
		</Layout.Base>
	);
}

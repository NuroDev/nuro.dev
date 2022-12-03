import { Icon } from '@iconify/react';

export function Error(): JSX.Element {
	return (
		<div className="flex space-x-4 w-full max-w-sm mx-auto px-4 py-4 bg-red-900 backdrop-filter backdrop-blur-sm border-2 border-red-500 rounded-lg hover:shadow-lg default-transition motion-safe:animate-pulse">
			<div className="w-12 h-12 flex justify-center items-center my-auto text-red-500">
				<Icon className="w-8 h-8" icon="feather:alert-triangle" />
			</div>
			<div className="flex-1 space-y-4 py-1">
				<div className="w-3/4 h-4 rounded ring-2 ring-red-500" />
				<div className="h-4 rounded ring-2 ring-red-500" />
			</div>
		</div>
	);
}

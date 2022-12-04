import { StatusIndicator } from './Indicator';
import { useStatus } from '~/hooks/status.hook';
import Link from 'next/link';

export function StatusPill(): JSX.Element | null {
	const status = useStatus();
	if (status.loading || status.status?.discord_status === 'offline') return null;

	return (
		<Link
			className="default-transition default-focus inline-flex items-center space-x-2 rounded-full border border-gray-100/50 bg-gray-100/25 py-1 px-4 text-sm font-medium text-gray-900 backdrop-blur-md animate-in duration-1000 motion-safe:zoom-in dark:border-gray-800 dark:bg-gray-900/25 dark:text-white dark:hover:bg-gray-700/50"
			href="/status">
			<span>Live</span>
			<StatusIndicator color={status.color} pulse={!status.loading} />
		</Link>
	);
}

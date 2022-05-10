import clsx from 'clsx';
import { Layout } from '~/layouts';
import { WithChildren, WithClassName } from '~/types';

interface CardProps extends WithChildren, WithClassName {}

function Card({ children, className }: CardProps) {
	return (
		<div
			className={clsx(
				'flex justify-center items-center h-64 bg-white dark:(bg-gray-800 ring-gray-700 text-white) ring ring-gray-100 rounded-3xl hover:shadow-sm text-gray-700 text-2xl font-extrabold',
				className,
			)}>
			{children}
		</div>
	);
}

export default function GridIndexPage() {
	return (
		<Layout.Base className="min-h-screen p-8 overflow-hidden">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<Card>1</Card>
				<Card className="md:col-span-2">2</Card>
				<Card>3</Card>
				<Card className="md:col-span-2">4</Card>
				<Card>5</Card>
				<Card>6</Card>
			</div>
		</Layout.Base>
	);
}

interface ActivityTitleAndDescriptionProps {
	title: string;
	description: string | Array<string>;
}

export function ActivityTitleAndDescription({
	description,
	title,
}: ActivityTitleAndDescriptionProps): JSX.Element {
	return (
		<>
			<h1 className="overflow-ellipsis text-base font-extrabold tracking-wide text-gray-900 line-clamp-1 dark:text-white">
				{title}
			</h1>

			{Array.isArray(description) ? (
				description.map((description, descriptionIndex) => (
					<p
						className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400"
						key={descriptionIndex}
					>
						{description}
					</p>
				))
			) : (
				<p className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
					{description}
				</p>
			)}
		</>
	);
}

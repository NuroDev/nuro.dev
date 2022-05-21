interface ContainerProps<T> {
	item: (props: T, index: number) => JSX.Element;
	items: Array<T>;
}

export function Container<T>({ item: Component, items }: ContainerProps<T>) {
	return (
		<ul className="flex flex-col space-y-4" role="list">
			{items.map((item, index) => (
				<Component key={index} index={index} {...item} />
			))}
		</ul>
	);
}

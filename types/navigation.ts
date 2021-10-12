export interface NavigationItem {
	name: string;
	icon: string;
	href: string;
	current: boolean;
}

export type NavigationItems = Array<NavigationItem>;

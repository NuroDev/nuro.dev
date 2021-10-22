import type { ReactNode } from 'react';

interface NaviationItemBase {
	endIcon?: string | ReactNode;
	icon: string | ReactNode;
	text: string;
	onClick?: () => void;
	href?: string;
}

export enum NavigationItemType {
	ACTION = 'action',
	LINK = 'link',
}

export type NavigationItem =
	| ({
			type: NavigationItemType.ACTION;
	  } & Omit<NaviationItemBase, 'href'>)
	| ({
			external?: boolean;
			type: NavigationItemType.LINK;
	  } & NaviationItemBase);

export type NavigationItems = Array<Array<NavigationItem>>;

import type { ReactNode } from 'react';

interface SettingItem {
	icon: string;
	text: string;
	onClick?: () => void;
	href?: string;
}

export enum SettingsItemType {
	CUSTOM_ITEM = 'custom_item',
	ITEM = 'item',
}

export type SettingsItem =
	| ({
			type: SettingsItemType.CUSTOM_ITEM;
			icon: ReactNode;
	  } & Omit<SettingItem, 'icon'>)
	| ({
			type: SettingsItemType.ITEM;
	  } & SettingItem);

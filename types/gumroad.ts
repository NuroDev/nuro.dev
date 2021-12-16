export interface GumroadProduct {
	currency: string;
	custom_delivery_url: string;
	custom_fields: Array<unknown>;
	custom_permalink: null;
	custom_receipt: string;
	custom_summary: string;
	customizable_price: boolean;
	deleted: boolean;
	description: string;
	file_info: object;
	formatted_price: string;
	id: string;
	is_tiered_membership: boolean;
	max_purchase_count: null;
	name: string;
	preview_url: string;
	price: number;
	published: boolean;
	recurrences: null;
	require_shipping: boolean;
	sales_count: number;
	sales_usd_cents: number;
	short_url: string;
	shown_on_profile: boolean;
	subscription_duration: null;
	tags: Array<unknown>;
	thumbnail_url: null;
	url: string;
}

export interface StrippedGumroadProduct {
	currency: string;
	description: string;
	name: string;
	thumbnail: string;
	price: number;
	url: string;
}

export type GumroadResponse<T> = {
	success: boolean;
} & T;

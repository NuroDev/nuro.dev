export interface Referral {
	aliases?: Array<string>;
	bonus?: string;
	code?: string;
	color?: string;
	description: string;
	homepage: string;
	icon: string;
	name: string;
	url: string;
}

export type Referrals = Array<Referral>;

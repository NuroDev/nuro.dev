export interface Referral {
	aliases?: Array<string>;
	bonus?: string;
	code?: string;
	description: string;
	icon: string;
	name: string;
	url: string;
}

export type Referrals = Array<Referral>;

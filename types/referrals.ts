export interface Referral {
	bonus?: string;
	code?: string;
	description: string;
	icon: string;
	name: string;
	url: string;
}

export type Referrals = Array<Referral>;

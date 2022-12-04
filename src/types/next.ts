type Region =
	| 'arn1'
	| 'bom1'
	| 'cdg1'
	| 'cle1'
	| 'cpt1'
	| 'dub1'
	| 'fra1'
	| 'gru1'
	| 'hkg1'
	| 'hnd1'
	| 'iad1'
	| 'icn1'
	| 'kix1'
	| 'lhr1'
	| 'pdx1'
	| 'sfo1'
	| 'sin1'
	| 'syd1';

export interface NextApiConfig {
	runtime?: 'experimental-edge' | 'nodejs';
	regions?: Array<Region>;
}
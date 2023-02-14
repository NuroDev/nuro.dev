/**
 * @see https://twitter.com/lukeed05/status/1625366373445824513
 * @see https://tsplay.dev/wRBl1w
 */

export type CRON =
	`${CRON.Expression} ${CRON.Expression} ${CRON.Expression} ${CRON.Expression} ${CRON.Expression}`;

// ESLint tells you use `module` instead of namespace
// But then tells you to use `namespace` instead of `module
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace CRON {
	export type Expression = '*' | number | `*/${number}`;

	export type Human<T extends CRON> =
		T extends `${infer M} ${infer H} ${infer DM} ${infer MM} ${infer DW}`
			? Time<H, M> extends `${infer T extends string}`
				? Day<MM, DM, DW> extends `${infer D extends string}`
					? D extends ''
						? T
						: `${T} on ${D}`
					: never
				: never
			: never;

	type Time<Hour, Minute> = Minute extends '*'
		? Hour extends '*'
			? 'every minute' // * * _ _ _
			: Hour extends `${infer H extends number}`
			? `every minute of hour ${H}` // * H _ _ _
			: Hour extends `*/${infer H extends number}`
			? `every minute of every ${Every<H, 'hour'>}` // * */H _ _ _
			: never
		: Minute extends `${infer M extends number}`
		? Hour extends '*'
			? `at minute-${M}` // M * _ _ _
			: Hour extends `${infer H extends number}`
			? `at ${H}:${Pad<M>}` // M H _ _ _
			: Hour extends `*/${infer X extends number}`
			? `at minute-${M} past every ${Every<X, 'hour'>}` // M */H _ _ _
			: never
		: Minute extends `*/${infer M extends number}`
		? Hour extends '*'
			? `every ${Every<M, 'minute'>}` // */M * _ _ _
			: Hour extends `${infer H extends number}`
			? `every ${Every<M, 'minute'>} of hour-${H}` // */M H _ _ _
			: Hour extends `*/${infer X extends number}`
			? `every ${Every<M, 'minute'>} of every ${Every<X, 'hour'>}` // */M */H _ _ _
			: never
		: never;

	type Pad<N extends number> = N extends 0
		? '00'
		: N extends 1
		? '01'
		: N extends 2
		? '02'
		: N extends 3
		? '03'
		: N extends 4
		? '04'
		: N extends 5
		? '05'
		: N extends 6
		? '06'
		: N extends 7
		? '07'
		: N extends 8
		? '08'
		: N extends 9
		? '09'
		: `${N}`;

	type DayName<N extends number> = N extends 0
		? 'Sunday'
		: N extends 1
		? 'Monday'
		: N extends 2
		? 'Tuesday'
		: N extends 3
		? 'Wednesday'
		: N extends 4
		? 'Thursday'
		: N extends 5
		? 'Friday'
		: N extends 6
		? 'Saturday'
		: never;

	type MonthName<N extends number> = N extends 1
		? 'January'
		: N extends 2
		? 'February'
		: N extends 3
		? 'March'
		: N extends 4
		? 'April'
		: N extends 5
		? 'May'
		: N extends 6
		? 'June'
		: N extends 7
		? 'July'
		: N extends 8
		? 'August'
		: N extends 9
		? 'September'
		: N extends 10
		? 'October'
		: N extends 11
		? 'November'
		: N extends 12
		? 'December'
		: never;

	type Day<Month, Date, Weekday> = Date extends '*'
		? Month extends '*'
			? Weekday extends '*'
				? '' // _ _ * * *
				: Weekday extends `${infer W extends number}`
				? DayName<W> // _ _ * * W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Every<W, 'day of the week'>}` // _ _ * * */W
				: never
			: Month extends `${infer M extends number}`
			? Weekday extends '*'
				? `every day in ${MonthName<M>}` // _ _ * M *
				: Weekday extends `${infer W extends number}`
				? `every ${DayName<W>} in ${MonthName<M>}` // _ _ * M W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Every<W, 'day of the week'>} in ${MonthName<M>}` // _ _ * M */W
				: never
			: Month extends `*/${infer M extends number}`
			? Weekday extends '*'
				? `every day in every ${Every<M, 'month'>}` // _ _ * */M *
				: Weekday extends `${infer W extends number}`
				? `every ${DayName<W>} in every ${Every<M, 'month'>}` // _ _ * */M W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Every<W, 'day of the week'>} in every ${Every<M, 'month'>}` // _ _ * */M */W
				: never
			: never
		: Date extends `${infer D extends number}`
		? Month extends '*'
			? Weekday extends '*'
				? `the ${Ordinal<D>} of every month` // _ _ D * *
				: Weekday extends `${infer W extends number}`
				? `every ${DayName<W>} and the ${Ordinal<D>} of every month` // _ _ D * W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Ordinal<D>} of the month if it is on every ${Every<
						W,
						'day of the week'
				  >}` // _ _ D * */W
				: never
			: Month extends `${infer M extends number}`
			? Weekday extends '*'
				? `every ${MonthName<M>} ${Ordinal<D>}` // _ _ D M *
				: Weekday extends `${infer W extends number}`
				? `the ${Ordinal<D>} and all ${DayName<W>}s in ${MonthName<M>}` // _ _ D M W
				: Weekday extends `*/${infer W extends number}`
				? `the ${Ordinal<D>} and every ${Every<W, 'day of the week'>} in ${MonthName<M>}` // _ _ D M */W
				: never
			: Month extends `*/${infer M extends number}`
			? Weekday extends '*'
				? `the ${Ordinal<D>} of every ${Every<M, 'month'>}` // _ _ D */M *
				: Weekday extends `${infer W extends number}`
				? `the ${Ordinal<D>} and all ${DayName<W>}s in every ${Every<M, 'month'>}` // _ _ D */M W
				: Weekday extends `*/${infer W extends number}`
				? `the ${Ordinal<D>} of every ${Every<M, 'month'>} if it is on every ${Every<
						W,
						'day of the week'
				  >}` // _ _ D */M */W
				: never
			: never
		: Date extends `*/${infer D extends number}`
		? Month extends '*'
			? Weekday extends '*'
				? `every ${Every<D, 'day of the month'>}` // _ _ */D * *
				: Weekday extends `${infer W extends number}`
				? `every ${Every<D, 'day of the month'>} if it is a ${DayName<W>}` // _ _ */D * W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Every<D, 'of the month'>} if it is on every ${Every<
						W,
						'day of the week'
				  >}` // _ _ */D * */W
				: never
			: Month extends `${infer M extends number}`
			? Weekday extends '*'
				? `every ${Every<D, 'day'>} in ${MonthName<M>}` // _ _ */D M *
				: Weekday extends `${infer W extends number}`
				? `every ${Every<D, 'day'>} in ${MonthName<M>} if it is a ${DayName<W>}` // _ _ */D M W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Every<D, 'day'>} in ${MonthName<M>} if it is on every ${Every<
						W,
						'day of the week'
				  >}` // _ _ */D M */W
				: never
			: Month extends `*/${infer M extends number}`
			? Weekday extends '*'
				? `every ${Every<D, 'day of the month'>} in every ${Every<M, 'month'>}` // _ _ */D */M *
				: Weekday extends `${infer W extends number}`
				? `every ${Every<D, 'day of the month'>} if it is a ${DayName<W>} in every ${Every<
						M,
						'month'
				  >}` // _ _ */D */M W
				: Weekday extends `*/${infer W extends number}`
				? `every ${Every<D, 'day of the month'>} if it is on every ${Every<
						W,
						'day of the week'
				  >} in every ${Every<M, 'month'>}` // _ _ */D */M */W
				: never
			: never
		: never;
}

type Ordinal<N extends number> = N extends 11
	? '11th'
	: N extends 12
	? '12th'
	: N extends 13
	? '13th'
	: `${N}` extends `${string}1`
	? `${N}st`
	: `${N}` extends `${string}2`
	? `${N}nd`
	: `${N}` extends `${string}3`
	? `${N}rd`
	: `${N}th`;

type Every<N extends number, S extends string> = N extends 1 ? S : `${Ordinal<N>} ${S}`;

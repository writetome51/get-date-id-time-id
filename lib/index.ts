import { getArray_hoursMinutesSeconds, getArray_yearMonthDay }
	from '@writetome51/get-array-year-month-day-hours-minutes-seconds';
import { getDateIDOptions, getTimeIDOptions } from './privy/interfaces';
import { getDefaultsFor_SeparatorOptions, getDefaultsFor_YearSeparatorOptions }
	from '@writetome51/year-separator-options';
import { __getDateOrTimeID, __default_hmsOrder, __default_ymdOrder } from './privy';


// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.

export function getDateID(
	options: getDateIDOptions = undefined
): string {

	return __getDateOrTimeID(
		getDefaultsFor_getDateIDOptions(),
		options,
		(combinedOptions) => {
			let [year, month, day] = getArray_yearMonthDay(combinedOptions.includeFullYear);
			return {y: year, m: month, d: day};
		}
	);
}


// Returns current time as string of digits.
// Default format is hhmmss, i.e '162020' for 4:20pm and 20 seconds.

export function getTimeID(
	options: getTimeIDOptions = undefined
): string {

	return __getDateOrTimeID(
		getDefaultsFor_getTimeIDOptions(),
		options,
		() => {
			let [hour, mins, secs] = getArray_hoursMinutesSeconds();
			return {h: hour, m: mins, s: secs};
		}
	);
}


export function getDefaultsFor_getTimeIDOptions(): getTimeIDOptions {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['order'] = __default_hmsOrder;
	return defaults;
}


export function getDefaultsFor_getDateIDOptions(): getDateIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['order'] = __default_ymdOrder;
	return defaults;
}

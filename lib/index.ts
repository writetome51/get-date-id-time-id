import { getArray_hoursMinutesSeconds, getArray_yearMonthDay }
	from '@writetome51/get-array-year-month-day-hours-minutes-seconds';
import { getDateIDOptions, getTimeIDOptions } from './privy/interfaces';
import { getDefaultsFor_SeparatorOptions, getDefaultsFor_YearSeparatorOptions }
	from '@writetome51/year-separator-options';
import {
	__getAssembledIDParts, __default_hmsOrder, __default_ymdOrder,
	__getTimezoneOffset, __getMergedOptions
}
	from './privy';


// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.

export function getDateID(
	options: getDateIDOptions = undefined
): string {

	let mergedOptions: getDateIDOptions = __getMergedOptions(options, getDefaultsFor_getDateIDOptions);

	return __getAssembledIDParts(
		mergedOptions,
		() => {
			let [year, month, day] = getArray_yearMonthDay(mergedOptions.includeFullYear);
			return {y: year, m: month, d: day};
		}
	);
}


// Returns current time as string of digits, plus the timezone offset.
// Default format is hhmmss+-offset, i.e '162025-06' for 4:20:25pm, Denver daylight time.

export function getTimeID(
	options: getTimeIDOptions = undefined
): string {

	let mergedOptions: getTimeIDOptions = __getMergedOptions(options, getDefaultsFor_getTimeIDOptions);

	let timeID = __getAssembledIDParts(
		mergedOptions,
		() => {
			let [hour, mins, secs] = getArray_hoursMinutesSeconds();
			return {h: hour, m: mins, s: secs};
		}
	);

	let timezoneOffset = mergedOptions.includeTimezoneOffset ? __getTimezoneOffset() : '';
	return (timeID + timezoneOffset);
}


export function getDefaultsFor_getTimeIDOptions(): getTimeIDOptions {
	let defaults = getDefaultsFor_SeparatorOptions();
	defaults['order'] = __default_hmsOrder;
	defaults['includeTimezoneOffset'] = true;
	return defaults;
}


export function getDefaultsFor_getDateIDOptions(): getDateIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['order'] = __default_ymdOrder;
	return defaults;
}

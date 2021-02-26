import {
	getDefaultsFor_SeparatorOptions, getDefaultsFor_YearSeparatorOptions
} from '@writetome51/year-separator-options';
import {
	__default_hmsOrder, __default_ymdOrder,
	__getAssembledIDParts, __getMergedOptions, __getTimezoneOffset
} from './privy/index.js';
import {get_ymd_hms_local} from '@writetome51/get-ymd-hms';


// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.

export function getDateID(options = undefined) {
	let mergedOptions = __getMergedOptions(options, getDefaultDateIDOptions);
	return __getAssembledIDParts(mergedOptions, // @ts-ignore
		() => get_ymd_hms_local(new Date(), mergedOptions).ymd
	);
}


// Returns current time as string of digits, plus the timezone offset.
// Default format is hhmmss+-offset, i.e '162025-06' for 4:20:25pm, Denver daylight time.

export function getTimeID(options = undefined) {
	let mergedOptions = __getMergedOptions(options, getDefaultTimeIDOptions);
	let timeID = __getAssembledIDParts(mergedOptions, () => {
		let {hms} = get_ymd_hms_local(new Date());
		return hms;
	});
	let timezoneOffset = mergedOptions.includeTimezoneOffset ? __getTimezoneOffset() : '';
	return (timeID + timezoneOffset);
}


export function getDefaultTimeIDOptions() {
	let options = getDefaultsFor_SeparatorOptions();
	options['order'] = __default_hmsOrder;
	options['includeTimezoneOffset'] = true;
	return options;
}


export function getDefaultDateIDOptions() {
	let options = getDefaultsFor_YearSeparatorOptions();
	options['order'] = __default_ymdOrder;
	return options;
}

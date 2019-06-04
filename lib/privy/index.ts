import { getDateIDOptions, getTimeIDOptions } from './interfaces';
import { modifyObject } from '@writetome51/modify-object';
import { hasValue } from '@writetome51/has-value-no-value';


export function __getAssembledIDParts(
	options: getDateIDOptions | getTimeIDOptions,

	// must return object with 3 letter properties, either {y,m,d} or {h,m,s} .
	getParts: () => Object
) {
	// @ts-ignore
	options.order = options.order.toLowerCase();
	if (options.order.length !== 3) throw new Error('Input must be string 3 characters long');
	let sep = options.separateEach ? options.separator : '';

	let parts = getParts();

	return (parts[options.order[0]] + sep + parts[options.order[1]] +
		sep + parts[options.order[2]]);
}


export function __getTimezoneOffset(): string {
	let offsetMinutes = new Date().getTimezoneOffset();
	let sign = (offsetMinutes < 0) ? '+' : '-';
	let offsetHours = String(offsetMinutes / 60);
	if (offsetHours.split('.')[0].length === 1) offsetHours = ('0' + offsetHours);
	return (sign + offsetHours);
}


export function __getMergedOptions(userOptions, getDefaultOptions: () => Object) {
	let defaults = getDefaultOptions();
	if (hasValue(userOptions)) modifyObject(defaults, userOptions);
	return defaults;
}


export const __default_ymdOrder = 'ymd';
export const __default_hmsOrder = 'hms';

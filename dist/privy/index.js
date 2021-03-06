import {modifyObject} from '@writetome51/modify-object';
import {hasValue} from '@writetome51/has-value-no-value';
import {toStr} from '@writetome51/to-str';


export function __getAssembledIDParts(options, getParts) {
	// @ts-ignore
	options.order = options.order.toLowerCase();
	if (options.order.length !== 3) throw new Error('Input must be string 3 characters long');
	let sep = options.separateEach ? options.separator : '';
	let parts = getParts();
	return (parts[options.order[0]] + sep + parts[options.order[1]] +
		sep + parts[options.order[2]]);
}


export function __getTimezoneOffset() {
	let offsetMinutes = new Date().getTimezoneOffset();
	let sign = (offsetMinutes < 0) ? '+' : '-';
	let offsetHours = toStr(offsetMinutes / 60);
	if (offsetHours.split('.')[0].length === 1) offsetHours = ('0' + offsetHours);
	return (sign + offsetHours);
}


export function __getMergedOptions(userOptions, getDefaultOptions) {
	let defaults = getDefaultOptions();
	if (hasValue(userOptions)) modifyObject(defaults, userOptions);
	return defaults;
}


export const __default_ymdOrder = 'ymd';
export const __default_hmsOrder = 'hms';

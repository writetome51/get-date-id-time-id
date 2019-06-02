import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { getDateIDOptions, getTimeIDOptions } from './interfaces';


export function __getDateOrTimeID(
	defaultOptions,
	userProvidedOptions: getDateIDOptions | getTimeIDOptions,
	// `combinedOptions` is `defaultOptions` with `userProvidedOptions` merged into it.
	// must return object with 3 letter properties, either {y,m,d} or {h,m,s} .

	getParts: (combinedOptions) => Object
) {
	if (hasValue(userProvidedOptions)) modifyObject(defaultOptions, userProvidedOptions);
	// @ts-ignore
	defaultOptions.order = defaultOptions.order.toLowerCase();
	if (defaultOptions.order.length !== 3) throw new Error('Input must be string 3 characters long');

	let parts = getParts(defaultOptions);

	let sep = defaultOptions.separateEach ? defaultOptions.separator : '';

	return (parts[defaultOptions.order[0]] + sep + parts[defaultOptions.order[1]] +
		sep + parts[defaultOptions.order[2]]);
}


export const __default_ymdOrder = 'ymd';
export const __default_hmsOrder = 'hms';

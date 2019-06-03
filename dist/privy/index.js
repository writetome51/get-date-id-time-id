"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
function __getDateOrTimeID(defaultOptions, userProvidedOptions, 
// `combinedOptions` is `defaultOptions` with `userProvidedOptions` merged into it.
// must return object with 3 letter properties, either {y,m,d} or {h,m,s} .
getParts) {
    if (has_value_no_value_1.hasValue(userProvidedOptions))
        modify_object_1.modifyObject(defaultOptions, userProvidedOptions);
    // @ts-ignore
    defaultOptions.order = defaultOptions.order.toLowerCase();
    if (defaultOptions.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var parts = getParts(defaultOptions);
    var sep = defaultOptions.separateEach ? defaultOptions.separator : '';
    // @ts-ignore
    var timezoneOffset = (defaultOptions.includeTimezoneOffset) ?
        (defaultOptions.separator + getTimezoneOffset()) : '';
    return (parts[defaultOptions.order[0]] + sep + parts[defaultOptions.order[1]] +
        sep + parts[defaultOptions.order[2]] + timezoneOffset);
}
exports.__getDateOrTimeID = __getDateOrTimeID;
function getTimezoneOffset() {
    var offsetMinutes = new Date().getTimezoneOffset();
    var sign = (offsetMinutes < 0) ? '+' : '-';
    var offsetHours = (offsetMinutes / 60);
    return ('GMT' + sign + offsetHours);
}
exports.getTimezoneOffset = getTimezoneOffset;
exports.__default_ymdOrder = 'ymd';
exports.__default_hmsOrder = 'hms';

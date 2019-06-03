"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modify_object_1 = require("@writetome51/modify-object");
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
function __getAssembledIDParts(options, 
// must return object with 3 letter properties, either {y,m,d} or {h,m,s} .
getParts) {
    // @ts-ignore
    options.order = options.order.toLowerCase();
    if (options.order.length !== 3)
        throw new Error('Input must be string 3 characters long');
    var sep = options.separateEach ? options.separator : '';
    var parts = getParts();
    return (parts[options.order[0]] + sep + parts[options.order[1]] +
        sep + parts[options.order[2]]);
}
exports.__getAssembledIDParts = __getAssembledIDParts;
function __getTimezoneOffset() {
    var offsetMinutes = new Date().getTimezoneOffset();
    var sign = (offsetMinutes < 0) ? '+' : '-';
    var offsetHours = (offsetMinutes / 60);
    return ('GMT' + sign + offsetHours);
}
exports.__getTimezoneOffset = __getTimezoneOffset;
function __getMergedOptions(userOptions, getDefaultOptions) {
    var defaults = getDefaultOptions();
    if (has_value_no_value_1.hasValue(userOptions))
        modify_object_1.modifyObject(defaults, userOptions);
    return defaults;
}
exports.__getMergedOptions = __getMergedOptions;
exports.__default_ymdOrder = 'ymd';
exports.__default_hmsOrder = 'hms';

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_array_year_month_day_hours_minutes_seconds_1 = require("@writetome51/get-array-year-month-day-hours-minutes-seconds");
var year_separator_options_1 = require("@writetome51/year-separator-options");
var privy_1 = require("./privy");
// Returns current date as string of digits.
// Default format is yymmdd, i.e '190522' for May 22, 2019.
function getDateID(options) {
    if (options === void 0) { options = undefined; }
    return privy_1.__getDateOrTimeID(getDefaultsFor_getDateIDOptions(), options, function (combinedOptions) {
        var _a = get_array_year_month_day_hours_minutes_seconds_1.getArray_yearMonthDay(combinedOptions.includeFullYear), year = _a[0], month = _a[1], day = _a[2];
        return { y: year, m: month, d: day };
    });
}
exports.getDateID = getDateID;
// Returns current time as string of digits.
// Default format is hhmmss, i.e '162020' for 4:20pm and 20 seconds.
function getTimeID(options) {
    if (options === void 0) { options = undefined; }
    return privy_1.__getDateOrTimeID(getDefaultsFor_getTimeIDOptions(), options, function () {
        var _a = get_array_year_month_day_hours_minutes_seconds_1.getArray_hoursMinutesSeconds(), hour = _a[0], mins = _a[1], secs = _a[2];
        return { h: hour, m: mins, s: secs };
    });
}
exports.getTimeID = getTimeID;
function getDefaultsFor_getTimeIDOptions() {
    var defaults = year_separator_options_1.getDefaultsFor_SeparatorOptions();
    defaults['order'] = privy_1.__default_hmsOrder;
    return defaults;
}
exports.getDefaultsFor_getTimeIDOptions = getDefaultsFor_getTimeIDOptions;
function getDefaultsFor_getDateIDOptions() {
    var defaults = year_separator_options_1.getDefaultsFor_YearSeparatorOptions();
    defaults['order'] = privy_1.__default_ymdOrder;
    return defaults;
}
exports.getDefaultsFor_getDateIDOptions = getDefaultsFor_getDateIDOptions;

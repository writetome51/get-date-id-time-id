import { getDateIDOptions, getTimeIDOptions } from './interfaces';
export declare function __getDateOrTimeID(defaultOptions: getDateIDOptions | getTimeIDOptions, userProvidedOptions: getDateIDOptions | getTimeIDOptions, getParts: (combinedOptions: any) => Object): string;
export declare function getTimezoneOffset(): string;
export declare const __default_ymdOrder = "ymd";
export declare const __default_hmsOrder = "hms";

import { DateFormatOrder, TimeFormatOrder } from 'types-date-format-order-time-format-order';
import { SeparatorOptions, YearSeparatorOptions } from '@writetome51/year-separator-options';


export interface TimeIDOptions extends SeparatorOptions {
	order?: TimeFormatOrder;
	includeTimezoneOffset?: boolean;
}


export interface DateIDOptions extends YearSeparatorOptions {
	order?: DateFormatOrder;
}

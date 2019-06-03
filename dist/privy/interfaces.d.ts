import { DateFormatOrder, TimeFormatOrder } from 'types-date-format-order-time-format-order';
import { SeparatorOptions, YearSeparatorOptions } from '@writetome51/year-separator-options';


export interface getTimeIDOptions extends SeparatorOptions {
	order?: TimeFormatOrder;
	includeTimezoneOffset?: boolean;
}


export interface getDateIDOptions extends YearSeparatorOptions {
	order?: DateFormatOrder;
}

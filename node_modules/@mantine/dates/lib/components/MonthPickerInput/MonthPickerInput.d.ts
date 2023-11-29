/// <reference types="react" />
import { MonthPickerBaseProps } from '../MonthPicker';
import { DatePickerType } from '../../types';
import { DateInputSharedProps, PickerInputBaseStylesNames } from '../PickerInputBase';
export type MonthPickerInputStylesNames = PickerInputBaseStylesNames;
export interface MonthPickerInputProps<Type extends DatePickerType = 'default'> extends DateInputSharedProps, MonthPickerBaseProps<Type> {
    /** Dayjs format to display input value, "MMMM YYYY" by default  */
    valueFormat?: string;
}
type MonthPickerInputComponent = (<Type extends DatePickerType = 'default'>(props: MonthPickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
};
export declare const MonthPickerInput: MonthPickerInputComponent;
export {};
//# sourceMappingURL=MonthPickerInput.d.ts.map
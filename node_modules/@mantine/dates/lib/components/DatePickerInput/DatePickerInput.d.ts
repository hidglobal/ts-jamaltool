/// <reference types="react" />
import { DatePickerBaseProps } from '../DatePicker';
import { DatePickerType } from '../../types';
import { DateInputSharedProps, PickerInputBaseStylesNames } from '../PickerInputBase';
export type DatePickerInputStylesNames = PickerInputBaseStylesNames;
export interface DatePickerInputProps<Type extends DatePickerType = 'default'> extends DateInputSharedProps, DatePickerBaseProps<Type> {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
}
type DatePickerInputComponent = (<Type extends DatePickerType = 'default'>(props: DatePickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
};
export declare const DatePickerInput: DatePickerInputComponent;
export {};
//# sourceMappingURL=DatePickerInput.d.ts.map
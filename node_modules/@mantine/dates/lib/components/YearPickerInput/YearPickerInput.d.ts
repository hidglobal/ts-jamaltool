/// <reference types="react" />
import { YearPickerBaseProps } from '../YearPicker';
import { DatePickerType } from '../../types';
import { DateInputSharedProps, PickerInputBaseStylesNames } from '../PickerInputBase';
export type YearPickerInputStylesNames = PickerInputBaseStylesNames;
export interface YearPickerInputProps<Type extends DatePickerType = 'default'> extends DateInputSharedProps, YearPickerBaseProps<Type> {
    /** Dayjs format to display input value, "YYYY" by default  */
    valueFormat?: string;
}
type YearPickerInputComponent = (<Type extends DatePickerType = 'default'>(props: YearPickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
};
export declare const YearPickerInput: YearPickerInputComponent;
export {};
//# sourceMappingURL=YearPickerInput.d.ts.map
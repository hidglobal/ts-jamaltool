/// <reference types="react" />
import { DatesRangeValue, DateValue, DatePickerType } from '../../types';
export type HiddenDatesInputValue = DatesRangeValue | DateValue | DateValue[];
export interface HiddenDatesInputProps {
    value: HiddenDatesInputValue;
    type: DatePickerType;
    name: string;
    form: string;
}
export declare function HiddenDatesInput({ value, type, name, form }: HiddenDatesInputProps): JSX.Element;
export declare namespace HiddenDatesInput {
    var displayName: string;
}
//# sourceMappingURL=HiddenDatesInput.d.ts.map
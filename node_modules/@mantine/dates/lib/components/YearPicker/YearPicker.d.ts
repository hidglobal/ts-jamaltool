/// <reference types="react" />
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { PickerBaseProps, DatePickerType } from '../../types';
import { CalendarBaseProps, CalendarSystemProps } from '../Calendar';
export interface YearPickerBaseProps<Type extends DatePickerType = 'default'> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, Omit<CalendarBaseProps, 'onNextYear' | 'onPreviousYear' | 'onNextMonth' | 'onPreviousMonth'> {
}
export interface YearPickerProps<Type extends DatePickerType = 'default'> extends YearPickerBaseProps<Type>, CalendarSystemProps {
}
type YearPickerComponent = (<Type extends DatePickerType = 'default'>(props: YearPickerProps<Type>) => JSX.Element) & {
    displayName?: string;
};
export declare const YearPicker: YearPickerComponent;
export {};
//# sourceMappingURL=YearPicker.d.ts.map
/// <reference types="react" />
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { YearLevelBaseSettings } from '../YearLevel';
import { PickerBaseProps, DatePickerType, CalendarLevel } from '../../types';
import { CalendarBaseProps, CalendarSystemProps } from '../Calendar';
type MonthPickerLevel = Exclude<CalendarLevel, 'month'>;
export interface MonthPickerBaseProps<Type extends DatePickerType = 'default'> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, YearLevelBaseSettings, Omit<CalendarBaseProps, 'onNextMonth' | 'onPreviousMonth'> {
    /** Max level that user can go up to (decade, year), defaults to decade */
    maxLevel?: MonthPickerLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: MonthPickerLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: MonthPickerLevel;
    /** Called when level changes */
    onLevelChange?(level: MonthPickerLevel): void;
}
export interface MonthPickerProps<Type extends DatePickerType = 'default'> extends MonthPickerBaseProps<Type>, CalendarSystemProps {
}
type MonthPickerComponent = (<Type extends DatePickerType = 'default'>(props: MonthPickerProps<Type>) => JSX.Element) & {
    displayName?: string;
};
export declare const MonthPicker: MonthPickerComponent;
export {};
//# sourceMappingURL=MonthPicker.d.ts.map
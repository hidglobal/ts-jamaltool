/// <reference types="react" />
import { DatePickerType, PickerBaseProps } from '../../types';
interface UseDatesRangeInput<Type extends DatePickerType = 'default'> extends PickerBaseProps<Type> {
    level: 'year' | 'month' | 'day';
    type: Type;
    onMouseLeave?(event: React.MouseEvent<HTMLDivElement>): void;
}
export declare function useDatesState<Type extends DatePickerType = 'default'>({ type, level, value, defaultValue, onChange, allowSingleDateInRange, allowDeselect, onMouseLeave, }: UseDatesRangeInput<Type>): {
    onDateChange: (date: Date) => void;
    onRootMouseLeave: (event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onHoveredDateChange: import("react").Dispatch<import("react").SetStateAction<Date>>;
    getControlProps: (date: Date) => {
        selected: any;
        inRange: boolean;
        firstInRange: boolean;
        lastInRange: boolean;
        'data-autofocus': true;
    } | {
        selected: any;
        'data-autofocus': true;
        inRange?: undefined;
        firstInRange?: undefined;
        lastInRange?: undefined;
    };
    _value: any;
    setValue: any;
};
export {};
//# sourceMappingURL=use-dates-state.d.ts.map
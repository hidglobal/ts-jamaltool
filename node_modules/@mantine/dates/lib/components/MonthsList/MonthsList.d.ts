import React from 'react';
import { DefaultProps, Selectors, MantineSize } from '@mantine/core';
import { PickerControlStylesNames, PickerControlProps } from '../PickerControl';
import { ControlsGroupSettings } from '../../types';
import useStyles from './MonthsList.styles';
export type MonthsListStylesNames = PickerControlStylesNames | Selectors<typeof useStyles>;
export interface MonthsListSettings extends ControlsGroupSettings {
    /** dayjs format for months list  */
    monthsListFormat?: string;
    /** Adds props to month picker control based on date */
    getMonthControlProps?(date: Date): Partial<PickerControlProps>;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
export interface MonthsListProps extends DefaultProps<MonthsListStylesNames>, MonthsListSettings, React.ComponentPropsWithoutRef<'table'> {
    variant?: string;
    __staticSelector?: string;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Year for which months list should be displayed */
    year: Date;
    /** Component size */
    size?: MantineSize;
}
export declare const MonthsList: React.ForwardRefExoticComponent<MonthsListProps & React.RefAttributes<HTMLTableElement>>;
//# sourceMappingURL=MonthsList.d.ts.map
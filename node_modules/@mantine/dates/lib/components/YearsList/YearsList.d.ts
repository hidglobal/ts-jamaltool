import React from 'react';
import { DefaultProps, Selectors, MantineSize } from '@mantine/core';
import { PickerControlStylesNames, PickerControlProps } from '../PickerControl';
import { ControlsGroupSettings } from '../../types';
import useStyles from './YearsList.styles';
export type YearsListStylesNames = PickerControlStylesNames | Selectors<typeof useStyles>;
export interface YearsListSettings extends ControlsGroupSettings {
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** dayjs format for years list  */
    yearsListFormat?: string;
    /** Adds props to year picker control based on date */
    getYearControlProps?(date: Date): Partial<PickerControlProps>;
    /** Component size */
    size?: MantineSize;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
export interface YearsListProps extends DefaultProps<YearsListStylesNames>, YearsListSettings, React.ComponentPropsWithoutRef<'table'> {
    variant?: string;
    __staticSelector?: string;
    /** Decade for which years list should be displayed */
    decade: Date;
}
export declare const YearsList: React.ForwardRefExoticComponent<YearsListProps & React.RefAttributes<HTMLTableElement>>;
//# sourceMappingURL=YearsList.d.ts.map
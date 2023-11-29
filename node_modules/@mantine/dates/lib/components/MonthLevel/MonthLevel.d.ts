import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { CalendarHeaderStylesNames, CalendarHeaderSettings } from '../CalendarHeader';
import { MonthSettings, MonthStylesNames } from '../Month';
import useStyles from './MonthLevel.styles';
export type MonthLevelStylesNames = Selectors<typeof useStyles> | MonthStylesNames | CalendarHeaderStylesNames;
export interface MonthLevelBaseSettings extends MonthSettings {
    /** dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
    monthLabelFormat?: string | ((month: Date) => React.ReactNode);
}
export interface MonthLevelSettings extends MonthLevelBaseSettings, CalendarHeaderSettings {
}
export interface MonthLevelProps extends DefaultProps<MonthLevelStylesNames>, MonthLevelSettings, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Month that is currently displayed */
    month: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
export declare const MonthLevel: React.ForwardRefExoticComponent<MonthLevelProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MonthLevel.d.ts.map
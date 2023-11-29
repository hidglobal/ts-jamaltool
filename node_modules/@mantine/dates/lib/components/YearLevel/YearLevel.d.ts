import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { CalendarHeaderStylesNames, CalendarHeaderSettings } from '../CalendarHeader';
import { MonthsListSettings, MonthsListStylesNames } from '../MonthsList';
import useStyles from './YearLevel.styles';
export type YearLevelStylesNames = Selectors<typeof useStyles> | MonthsListStylesNames | CalendarHeaderStylesNames;
export interface YearLevelBaseSettings extends MonthsListSettings {
    /** dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY" */
    yearLabelFormat?: string | ((year: Date) => React.ReactNode);
}
export interface YearLevelSettings extends YearLevelBaseSettings, CalendarHeaderSettings {
}
export interface YearLevelProps extends DefaultProps<YearLevelStylesNames>, YearLevelSettings, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Year that is currently displayed */
    year: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
}
export declare const YearLevel: React.ForwardRefExoticComponent<YearLevelProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=YearLevel.d.ts.map
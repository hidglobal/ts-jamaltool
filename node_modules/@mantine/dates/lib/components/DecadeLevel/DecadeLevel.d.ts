import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { CalendarHeaderStylesNames, CalendarHeaderSettings } from '../CalendarHeader';
import { YearsListSettings, YearsListStylesNames } from '../YearsList';
import useStyles from './DecadeLevel.styles';
export type DecadeLevelStylesNames = Selectors<typeof useStyles> | YearsListStylesNames | CalendarHeaderStylesNames;
export interface DecadeLevelBaseSettings extends YearsListSettings {
    /** dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
    decadeLabelFormat?: string | ((startOfDecade: Date, endOfDecade: Date) => React.ReactNode);
}
export interface DecadeLevelSettings extends DecadeLevelBaseSettings, Omit<CalendarHeaderSettings, 'onLevelClick' | 'hasNextLevel'> {
}
export interface DecadeLevelProps extends DefaultProps<DecadeLevelStylesNames>, DecadeLevelSettings, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Decade that is currently displayed */
    decade: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
}
export declare const DecadeLevel: React.ForwardRefExoticComponent<DecadeLevelProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DecadeLevel.d.ts.map
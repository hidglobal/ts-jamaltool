import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { MonthLevelStylesNames, MonthLevelSettings } from '../MonthLevel';
import useStyles from './MonthLevelGroup.styles';
export type MonthLevelGroupStylesNames = Selectors<typeof useStyles> | MonthLevelStylesNames;
export interface MonthLevelGroupProps extends DefaultProps<MonthLevelGroupStylesNames>, Omit<MonthLevelSettings, 'withPrevious' | 'withNext' | '__onDayKeyDown' | '__getDayRef'>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Month that is currently displayed */
    month: Date;
    /** Function that returns level control aria-label based on month date */
    levelControlAriaLabel?: ((month: Date) => string) | string;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
export declare const MonthLevelGroup: React.ForwardRefExoticComponent<MonthLevelGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MonthLevelGroup.d.ts.map
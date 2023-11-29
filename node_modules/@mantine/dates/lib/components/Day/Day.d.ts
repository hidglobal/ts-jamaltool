import React from 'react';
import { DefaultProps, MantineNumberSize, Selectors, MantineSize } from '@mantine/core';
import useStyles, { DayStylesParams } from './Day.styles';
export type DayStylesNames = Selectors<typeof useStyles>;
export interface DayProps extends DefaultProps<DayStylesNames, DayStylesParams>, Omit<React.ComponentPropsWithoutRef<'button'>, 'type'> {
    variant?: string;
    __staticSelector?: string;
    /** Determines which element should be used as root, button by default, div if static prop is set */
    static?: boolean;
    /** Date that should be displayed */
    date: Date;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Day size */
    size?: MantineSize;
    /** Determines whether the day should be considered to be a weekend */
    weekend?: boolean;
    /** Determines whether the day is outside of current month */
    outside?: boolean;
    /** Determines whether the day is selected */
    selected?: boolean;
    /** Determines whether the day should not de displayed */
    hidden?: boolean;
    /** Determines whether day is selected in range */
    inRange?: boolean;
    /** Determines whether day is first in range selection */
    firstInRange?: boolean;
    /** Determines whether day is last in range selection */
    lastInRange?: boolean;
    /** Controls day value rendering */
    renderDay?(date: Date): React.ReactNode;
}
export declare const Day: React.ForwardRefExoticComponent<DayProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Day.d.ts.map
import React from 'react';
import { DefaultProps, Selectors, MantineSize } from '@mantine/core';
import useStyles from './CalendarHeader.styles';
export type CalendarHeaderStylesNames = Selectors<typeof useStyles>;
export interface CalendarHeaderSettings {
    __preventFocus?: boolean;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Change next icon */
    nextIcon?: React.ReactNode;
    /** Change previous icon */
    previousIcon?: React.ReactNode;
    /** aria-label for next button */
    nextLabel?: string;
    /** aria-label for previous button */
    previousLabel?: string;
    /** Called when next button is clicked */
    onNext?(): void;
    /** Called when previous button is clicked */
    onPrevious?(): void;
    /** Called when level button is clicked */
    onLevelClick?(): void;
    /** Determines whether next control should be disabled, defaults to true */
    nextDisabled?: boolean;
    /** Determines whether previous control should be disabled, defaults to true */
    previousDisabled?: boolean;
    /** Determines whether next level button should be enabled, defaults to true */
    hasNextLevel?: boolean;
    /** Determines whether next control should be rendered, defaults to true */
    withNext?: boolean;
    /** Determines whether previous control should be rendered, defaults to true */
    withPrevious?: boolean;
    /** Component size */
    size?: MantineSize;
}
export interface CalendarHeaderProps extends DefaultProps<CalendarHeaderStylesNames>, CalendarHeaderSettings, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Label displayed between next and previous buttons */
    label: React.ReactNode;
    /** aria-label for level control */
    levelControlAriaLabel?: string;
}
export declare const CalendarHeader: React.ForwardRefExoticComponent<CalendarHeaderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CalendarHeader.d.ts.map
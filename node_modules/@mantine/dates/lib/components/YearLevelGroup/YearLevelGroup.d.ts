import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { YearLevelStylesNames, YearLevelSettings } from '../YearLevel';
import useStyles from './YearLevelGroup.styles';
export type YearLevelGroupStylesNames = Selectors<typeof useStyles> | YearLevelStylesNames;
export interface YearLevelGroupProps extends DefaultProps<YearLevelGroupStylesNames>, Omit<YearLevelSettings, 'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Year that is currently displayed */
    year: Date;
    /** Function that returns level control aria-label based on year date */
    levelControlAriaLabel?: ((year: Date) => string) | string;
}
export declare const YearLevelGroup: React.ForwardRefExoticComponent<YearLevelGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=YearLevelGroup.d.ts.map
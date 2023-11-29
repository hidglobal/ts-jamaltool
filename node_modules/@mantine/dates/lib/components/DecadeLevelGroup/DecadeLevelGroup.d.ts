import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { DecadeLevelStylesNames, DecadeLevelSettings } from '../DecadeLevel';
import useStyles from './DecadeLevelGroup.styles';
export type DecadeLevelGroupStylesNames = Selectors<typeof useStyles> | DecadeLevelStylesNames;
export interface DecadeLevelGroupProps extends DefaultProps<DecadeLevelGroupStylesNames>, Omit<DecadeLevelSettings, 'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Decade that is currently displayed */
    decade: Date;
    /** Function that returns level control aria-label based on year date */
    levelControlAriaLabel?: ((decade: Date) => string) | string;
}
export declare const DecadeLevelGroup: React.ForwardRefExoticComponent<DecadeLevelGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DecadeLevelGroup.d.ts.map
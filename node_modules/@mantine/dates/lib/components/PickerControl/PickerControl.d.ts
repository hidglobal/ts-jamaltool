import React from 'react';
import { DefaultProps, Selectors, MantineSize } from '@mantine/core';
import useStyles from './PickerControl.styles';
export type PickerControlStylesNames = Selectors<typeof useStyles>;
export interface PickerControlProps extends DefaultProps<PickerControlStylesNames>, React.ComponentPropsWithoutRef<'button'> {
    variant?: string;
    __staticSelector?: string;
    /** Control children */
    children?: React.ReactNode;
    /** Determines whether control should be disabled */
    disabled?: boolean;
    /** Determines whether control should have selected styles */
    selected?: boolean;
    /** Determines whether control is selected in range */
    inRange?: boolean;
    /** Determines whether control is first in range selection */
    firstInRange?: boolean;
    /** Determines whether control is last in range selection */
    lastInRange?: boolean;
    /** Component size */
    size?: MantineSize;
}
export declare const PickerControl: React.ForwardRefExoticComponent<PickerControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=PickerControl.d.ts.map
import React from 'react';
import { TextInputProps, TextInputStylesNames } from '@mantine/core';
export type TimeInputStylesNames = TextInputStylesNames;
export interface TimeInputProps extends TextInputProps {
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
}
export declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TimeInput.d.ts.map
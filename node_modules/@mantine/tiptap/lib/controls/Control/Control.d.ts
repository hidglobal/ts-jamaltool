import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import useStyles from './Control.styles';
export type ControlStylesNames = Selectors<typeof useStyles>;
export interface PremadeControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    /** Icon component, should support size prop */
    icon?: React.FC<{
        size: number | string;
    }>;
}
export interface RichTextEditorControlProps extends PremadeControlProps {
    /** Determines whether the control should have active state, false by default */
    active?: boolean;
    /** Determines whether the control can be interacted with, set false to make the control to act as a label */
    interactive?: boolean;
}
export declare const Control: React.ForwardRefExoticComponent<RichTextEditorControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Control.d.ts.map
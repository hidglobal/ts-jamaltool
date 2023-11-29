import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import useStyles from './Toolbar.styles';
export type ToolbarStylesNames = Selectors<typeof useStyles>;
export interface RichTextEditorToolbarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Determines whether position: sticky styles should be added to the toolbar, false by default */
    sticky?: boolean;
    /** Sets top style to offset elements with fixed position, 0 by default */
    stickyOffset?: React.CSSProperties['top'];
}
export declare const Toolbar: React.ForwardRefExoticComponent<RichTextEditorToolbarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Toolbar.d.ts.map
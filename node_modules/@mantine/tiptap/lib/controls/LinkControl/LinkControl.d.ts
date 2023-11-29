import React from 'react';
import { PopoverProps, Selectors } from '@mantine/core';
import { RichTextEditorControlBaseProps } from '../ControlBase/ControlBase';
import useStyles from './LinkControl.styles';
export type LinkControlStylesNames = Selectors<typeof useStyles>;
export interface RichTextEditorLinkControlProps extends Partial<RichTextEditorControlBaseProps> {
    /** Props added to Popover component */
    popoverProps?: Partial<PopoverProps>;
    /** Determines whether external link control tooltip should be disabled */
    disableTooltips?: boolean;
}
export declare const LinkControl: React.ForwardRefExoticComponent<RichTextEditorLinkControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=LinkControl.d.ts.map
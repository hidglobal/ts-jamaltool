import React from 'react';
import { DefaultProps } from '@mantine/core';
export interface RichTextEditorColorControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    /** Color that will be set as text color, for example #ef457e */
    color: string;
}
export declare const ColorControl: React.ForwardRefExoticComponent<RichTextEditorColorControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ColorControl.d.ts.map
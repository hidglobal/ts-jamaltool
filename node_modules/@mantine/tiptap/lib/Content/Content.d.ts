import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import useStyles from './Content.styles';
export type ContentStylesNames = Selectors<typeof useStyles>;
export interface RichTextEditorContentProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
}
export declare const Content: React.ForwardRefExoticComponent<RichTextEditorContentProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Content.d.ts.map
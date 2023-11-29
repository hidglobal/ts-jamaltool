import React from 'react';
import { DefaultProps, Selectors, MantineNumberSize, MantineColor } from '@mantine/core';
import type { SpotlightAction } from '../types';
import useStyles from './DefaultAction.styles';
export type DefaultActionStylesNames = Selectors<typeof useStyles>;
export interface DefaultActionProps extends DefaultProps<DefaultActionStylesNames>, React.ComponentPropsWithoutRef<'button'> {
    action: SpotlightAction;
    hovered: boolean;
    onTrigger(): void;
    highlightQuery: boolean;
    highlightColor: MantineColor;
    query: string;
    radius: MantineNumberSize;
}
export declare function DefaultAction({ action, styles, classNames, hovered, onTrigger, highlightQuery, highlightColor, query, radius, ...others }: DefaultActionProps): JSX.Element;
export declare namespace DefaultAction {
    var displayName: string;
}
//# sourceMappingURL=DefaultAction.d.ts.map
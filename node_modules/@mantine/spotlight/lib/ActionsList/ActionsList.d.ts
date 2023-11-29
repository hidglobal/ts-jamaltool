import React from 'react';
import { DefaultProps, Selectors, MantineNumberSize, MantineColor } from '@mantine/core';
import type { SpotlightAction } from '../types';
import type { DefaultActionProps, DefaultActionStylesNames } from '../DefaultAction/DefaultAction';
import useStyles from './ActionsList.styles';
export type ActionsListStylesNames = Selectors<typeof useStyles> | DefaultActionStylesNames;
type GetGroupOptionsItem<T extends any[]> = {
    type: 'item';
    item: T[number];
    index: number;
};
type GetGroupOptionsLabel = {
    type: 'label';
    label: string;
};
export interface ActionsListProps extends DefaultProps<ActionsListStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    actions: (GetGroupOptionsItem<SpotlightAction[]> | GetGroupOptionsLabel)[];
    actionComponent?: React.FC<DefaultActionProps>;
    hovered: number;
    query: string;
    nothingFoundMessage?: React.ReactNode;
    onActionTrigger(action: SpotlightAction): void;
    highlightQuery: boolean;
    highlightColor: MantineColor;
    radius: MantineNumberSize;
    variant: string;
}
export declare function ActionsList({ actions, styles, classNames, actionComponent: Action, hovered, onActionTrigger, query, nothingFoundMessage, highlightQuery, highlightColor, radius, variant, ...others }: ActionsListProps): JSX.Element;
export declare namespace ActionsList {
    var displayName: string;
}
export {};
//# sourceMappingURL=ActionsList.d.ts.map
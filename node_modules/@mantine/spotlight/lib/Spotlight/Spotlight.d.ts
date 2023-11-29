import React from 'react';
import { DefaultProps, Selectors, MantineColor, TextInputProps, ModalProps, ModalStylesNames } from '@mantine/core';
import { DefaultActionProps } from '../DefaultAction/DefaultAction';
import { ActionsListStylesNames } from '../ActionsList/ActionsList';
import type { SpotlightAction } from '../types';
import useStyles from './Spotlight.styles';
export type SpotlightStylesNames = Selectors<typeof useStyles> | Exclude<ModalStylesNames, 'close' | 'header' | 'title'> | ActionsListStylesNames;
export interface InnerSpotlightProps extends Omit<ModalProps, 'styles' | 'classNames' | 'title' | 'withCloseButton' | 'opened' | 'onClose'>, DefaultProps<SpotlightStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Search input placeholder */
    searchPlaceholder?: string;
    /** Search input icon */
    searchIcon?: React.ReactNode;
    /** Function used to determine how actions will be filtered based on user input */
    filter?(query: string, actions: SpotlightAction[]): SpotlightAction[];
    /** Message displayed when actions were not found */
    nothingFoundMessage?: React.ReactNode;
    /** Number of actions displayed at a time */
    limit?: number;
    /** Should spotlight be closed when action is triggered */
    closeOnActionTrigger?: boolean;
    /** Component that is used to render actions */
    actionComponent?: React.FC<DefaultActionProps>;
    /** Component that is used to wrap actions list */
    actionsWrapperComponent?: React.FC<{
        children: React.ReactNode;
    }> | string;
    /** Should user query be highlighted in actions title */
    highlightQuery?: boolean;
    /** The highlight color */
    highlightColor?: MantineColor;
    /** Props spread to search input */
    searchInputProps?: TextInputProps;
    /** Component used as scrollable container for actions list, defaults to ScrollArea.Autosize */
    scrollAreaComponent?: React.FC<{
        children: React.ReactNode;
    }>;
}
interface SpotlightProps extends InnerSpotlightProps {
    actions: SpotlightAction[];
    onClose(): void;
    opened: boolean;
    query: string;
    onQueryChange(query: string): void;
}
export declare function Spotlight(props: SpotlightProps): JSX.Element;
export declare namespace Spotlight {
    var displayName: string;
}
export {};
//# sourceMappingURL=Spotlight.d.ts.map
import React from 'react';
import { InnerSpotlightProps } from './Spotlight/Spotlight';
import type { SpotlightAction } from './types';
export interface SpotlightProviderProps extends InnerSpotlightProps {
    /** Actions list */
    actions: SpotlightAction[];
    /** Called when actions change (registered or removed) */
    onActionsChange?(actions: SpotlightAction[]): void;
    /** Controlled search query */
    query?: string;
    /** Called when user enters text in search input */
    onQueryChange?(query: string): void;
    /** Your application */
    children?: React.ReactNode;
    /** Called when spotlight opens */
    onSpotlightOpen?(): void;
    /** Called when spotlight closes */
    onSpotlightClose?(): void;
    /** Keyboard shortcut or list of shortcuts to trigger spotlight */
    shortcut?: string | string[] | null;
    /** Should search be cleared when spotlight closes */
    cleanQueryOnClose?: boolean;
    /** Spotlight will not render if disabled is set to true */
    disabled?: boolean;
    /** Tags to ignore shortcut hotkeys on. */
    tagsToIgnore?: string[];
    /** Whether shortcuts should trigger based on contentEditable. */
    triggerOnContentEditable?: boolean;
}
export declare function SpotlightProvider({ actions, children, shortcut, query, onSpotlightClose, onSpotlightOpen, onQueryChange, onActionsChange, cleanQueryOnClose, transitionProps, disabled, tagsToIgnore, triggerOnContentEditable, ...others }: SpotlightProviderProps): JSX.Element;
export declare namespace SpotlightProvider {
    var displayName: string;
}
//# sourceMappingURL=SpotlightProvider.d.ts.map
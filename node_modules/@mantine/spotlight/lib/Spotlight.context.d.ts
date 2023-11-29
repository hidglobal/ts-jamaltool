/// <reference types="react" />
import type { SpotlightAction } from './types';
export interface SpotlightContextValue {
    /** Opens spotlight */
    openSpotlight(): void;
    /** Closes spotlight */
    closeSpotlight(): void;
    /** Toggles spotlight opened state */
    toggleSpotlight(): void;
    /** Triggers action with given id */
    triggerAction(actionId: string): void;
    /** Registers additional actions */
    registerActions(actions: SpotlightAction[]): void;
    /** Removes actions with given ids */
    removeActions(actionIds: string[]): void;
    /** Current opened state */
    opened: boolean;
    /** List of registered actions */
    actions: SpotlightAction[];
    /** Search query */
    query: string;
}
export declare const SpotlightContext: import("react").Context<SpotlightContextValue>;
export declare function useSpotlight(): SpotlightContextValue;
//# sourceMappingURL=Spotlight.context.d.ts.map
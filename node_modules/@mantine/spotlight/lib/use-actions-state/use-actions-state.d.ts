import type { SpotlightAction } from '../types';
interface UseActionsState {
    actions: SpotlightAction[];
    onActionsChange: (actions: SpotlightAction[]) => void;
}
export declare function useActionsState({ actions, onActionsChange }: UseActionsState): readonly [SpotlightAction[], {
    readonly registerActions: (payload: SpotlightAction[]) => void;
    readonly removeActions: (ids: string[]) => void;
    readonly triggerAction: (id: string) => void;
}];
export {};
//# sourceMappingURL=use-actions-state.d.ts.map
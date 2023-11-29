import type { SpotlightAction } from './types';
export type SpotlightEvents = {
    open(): void;
    close(): void;
    toggle(): void;
    triggerAction(id: string): void;
    registerActions(actions: SpotlightAction[]): void;
    removeActions(ids: string[]): void;
};
export declare const useSpotlightEvents: (events: SpotlightEvents) => void, createEvent: <EventKey extends keyof SpotlightEvents>(event: EventKey) => (...payload: Parameters<SpotlightEvents[EventKey]>[0] extends undefined ? [undefined?] : [Parameters<SpotlightEvents[EventKey]>[0]]) => void;
export declare const openSpotlight: (payload_0?: undefined) => void;
export declare const closeSpotlight: (payload_0?: undefined) => void;
export declare const toggleSpotlight: (payload_0?: undefined) => void;
export declare const triggerSpotlightAction: (payload_0: string) => void;
export declare const registerSpotlightActions: (payload_0: SpotlightAction[]) => void;
export declare const removeSpotlightActions: (payload_0: string[]) => void;
export declare const spotlight: {
    open: (payload_0?: undefined) => void;
    close: (payload_0?: undefined) => void;
    toggle: (payload_0?: undefined) => void;
    triggerAction: (payload_0: string) => void;
    registerActions: (payload_0: SpotlightAction[]) => void;
    removeActions: (payload_0: string[]) => void;
};
//# sourceMappingURL=events.d.ts.map
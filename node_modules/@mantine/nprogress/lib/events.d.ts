export type NavigationProgressEvents = {
    start(): void;
    stop(): void;
    set(progress: number): void;
    increment(progress: number): void;
    decrement(progress: number): void;
    reset(): void;
    complete(): void;
};
export declare const useNavigationProgressEvents: (events: NavigationProgressEvents) => void, createEvent: <EventKey extends keyof NavigationProgressEvents>(event: EventKey) => (...payload: Parameters<NavigationProgressEvents[EventKey]>[0] extends undefined ? [undefined?] : [Parameters<NavigationProgressEvents[EventKey]>[0]]) => void;
export declare const startNavigationProgress: (payload_0?: undefined) => void;
export declare const stopNavigationProgress: (payload_0?: undefined) => void;
export declare const resetNavigationProgress: (payload_0?: undefined) => void;
export declare const setNavigationProgress: (payload_0: number) => void;
export declare const incrementNavigationProgress: (payload_0: number) => void;
export declare const decrementNavigationProgress: (payload_0: number) => void;
export declare const completeNavigationProgress: (payload_0?: undefined) => void;
export declare const nprogress: {
    start: (payload_0?: undefined) => void;
    stop: (payload_0?: undefined) => void;
    reset: (payload_0?: undefined) => void;
    set: (payload_0: number) => void;
    increment: (payload_0: number) => void;
    decrement: (payload_0: number) => void;
    complete: (payload_0?: undefined) => void;
};
//# sourceMappingURL=events.d.ts.map
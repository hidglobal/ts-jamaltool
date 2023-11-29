import { MantineModal, MantineModals, ModalSettings, OpenConfirmModal, OpenContextModal } from './context';
type ModalsEvents = {
    openModal(payload: ModalSettings): void;
    closeModal(id: string): void;
    closeContextModal<TKey extends MantineModal>(id: TKey): void;
    closeAllModals(): void;
    openConfirmModal(payload: OpenConfirmModal): void;
    openContextModal<TKey extends MantineModal>(payload: OpenContextModal<Parameters<MantineModals[TKey]>[0]['innerProps']> & {
        modal: TKey;
    }): void;
};
export declare const useModalsEvents: (events: ModalsEvents) => void, createEvent: <EventKey extends keyof ModalsEvents>(event: EventKey) => (...payload: Parameters<ModalsEvents[EventKey]>[0] extends undefined ? [undefined?] : [Parameters<ModalsEvents[EventKey]>[0]]) => void;
export declare const openModal: (payload_0: ModalSettings) => void;
export declare const closeModal: (payload_0: string) => void;
export declare const closeContextModal: ModalsEvents['closeContextModal'];
export declare const closeAllModals: (payload_0?: undefined) => void;
export declare const openConfirmModal: (payload_0: OpenConfirmModal) => void;
export declare const openContextModal: ModalsEvents['openContextModal'];
export declare const modals: {
    open: (payload_0: ModalSettings) => void;
    close: (payload_0: string) => void;
    closeAll: (payload_0?: undefined) => void;
    openConfirmModal: (payload_0: OpenConfirmModal) => void;
    openContextModal: <TKey extends string>(payload: OpenContextModal<any> & {
        modal: TKey;
    }) => void;
};
export {};
//# sourceMappingURL=events.d.ts.map
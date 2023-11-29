import React from 'react';
import { ModalSettings, ConfirmLabels, ContextModalProps } from './context';
export interface ModalsProviderProps {
    /** Your app */
    children: React.ReactNode;
    /** Predefined modals */
    modals?: Record<string, React.FC<ContextModalProps<any>>>;
    /** Shared Modal component props, applied for every modal */
    modalProps?: ModalSettings;
    /** Confirm modal labels */
    labels?: ConfirmLabels;
}
export declare function ModalsProvider({ children, modalProps, labels, modals }: ModalsProviderProps): JSX.Element;
//# sourceMappingURL=ModalsProvider.d.ts.map
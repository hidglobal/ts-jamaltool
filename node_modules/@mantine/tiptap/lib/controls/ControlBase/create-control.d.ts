import React from 'react';
import { RichTextEditorLabels } from '../../labels';
import { PremadeControlProps } from '../Control/Control';
interface CreateControlProps {
    label: keyof RichTextEditorLabels;
    icon: React.FC<{
        size: number;
    }>;
    isActive?: {
        name: string;
        attributes?: Record<string, any> | string;
    };
    operation: {
        name: string;
        attributes?: Record<string, any> | string;
    };
}
export declare function createControl({ label, isActive, operation, icon }: CreateControlProps): React.ForwardRefExoticComponent<PremadeControlProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=create-control.d.ts.map
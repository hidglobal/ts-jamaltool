import React from 'react';
import { RichTextEditorControlProps } from '../Control/Control';
export interface RichTextEditorControlBaseProps extends RichTextEditorControlProps {
    icon: React.FC<{
        size: number | string;
    }>;
}
export declare const ControlBase: React.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ControlBase.d.ts.map
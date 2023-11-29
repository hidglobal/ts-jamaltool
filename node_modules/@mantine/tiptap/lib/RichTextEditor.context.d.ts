import { Styles, ClassNames } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { RichTextEditorLabels } from './labels';
import type { RichTextEditorStylesNames } from './RichTextEditor';
interface RichTextEditorContext {
    editor: Editor;
    labels: RichTextEditorLabels;
    withCodeHighlightStyles: boolean;
    withTypographyStyles: boolean;
    classNames: ClassNames<RichTextEditorStylesNames>;
    styles: Styles<RichTextEditorStylesNames>;
    unstyled: boolean;
    variant: string;
}
export declare const RichTextEditorProvider: ({ children, value }: {
    value: RichTextEditorContext;
    children: import("react").ReactNode;
}) => JSX.Element, useRichTextEditorContext: () => RichTextEditorContext;
export {};
//# sourceMappingURL=RichTextEditor.context.d.ts.map
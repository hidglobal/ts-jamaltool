import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import * as controls from './controls';
import { Content, ContentStylesNames } from './Content/Content';
import { Control, ControlStylesNames } from './controls/Control/Control';
import { ControlsGroup, ControlsGroupStylesNames } from './controls/ControlsGroup/ControlsGroup';
import { Toolbar, ToolbarStylesNames } from './Toolbar/Toolbar';
import { LinkControlStylesNames } from './controls/LinkControl/LinkControl';
import { RichTextEditorLabels } from './labels';
import useStyles from './RichTextEditor.styles';
export type RichTextEditorStylesNames = Selectors<typeof useStyles> | ContentStylesNames | ControlStylesNames | ControlsGroupStylesNames | ToolbarStylesNames | LinkControlStylesNames;
export interface RichTextEditorProps extends DefaultProps<RichTextEditorStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Tiptap editor instance */
    editor: Editor | null;
    /** Determines whether code highlight styles should be added, true by default */
    withCodeHighlightStyles?: boolean;
    /** Determines whether typography styles should be added, true by default */
    withTypographyStyles?: boolean;
    /** Labels that are used in controls */
    labels?: Partial<RichTextEditorLabels>;
    /** Child editor components */
    children: React.ReactNode;
}
type RichTextEditorComponent = ForwardRefWithStaticComponents<RichTextEditorProps, {
    Content: typeof Content;
    Control: typeof Control;
    ControlsGroup: typeof ControlsGroup;
    Toolbar: typeof Toolbar;
    Bold: typeof controls.BoldControl;
    Italic: typeof controls.ItalicControl;
    Strikethrough: typeof controls.StrikeThroughControl;
    Underline: typeof controls.UnderlineControl;
    ClearFormatting: typeof controls.ClearFormattingControl;
    H1: typeof controls.H1Control;
    H2: typeof controls.H2Control;
    H3: typeof controls.H3Control;
    H4: typeof controls.H4Control;
    H5: typeof controls.H5Control;
    H6: typeof controls.H6Control;
    BulletList: typeof controls.BulletListControl;
    OrderedList: typeof controls.OrderedListControl;
    Link: typeof controls.LinkControl;
    Unlink: typeof controls.UnlinkControl;
    Blockquote: typeof controls.BlockquoteControl;
    AlignLeft: typeof controls.AlignLeftControl;
    AlignRight: typeof controls.AlignRightControl;
    AlignCenter: typeof controls.AlignCenterControl;
    AlignJustify: typeof controls.AlignJustifyControl;
    Superscript: typeof controls.SuperscriptControl;
    Subscript: typeof controls.SubscriptControl;
    Code: typeof controls.CodeControl;
    CodeBlock: typeof controls.CodeBlockControl;
    ColorPicker: typeof controls.ColorPickerControl;
    Color: typeof controls.ColorControl;
    Highlight: typeof controls.HighlightControl;
    Hr: typeof controls.HrControl;
    UnsetColor: typeof controls.UnsetColorControl;
}>;
export declare const RichTextEditor: RichTextEditorComponent;
export {};
//# sourceMappingURL=RichTextEditor.d.ts.map
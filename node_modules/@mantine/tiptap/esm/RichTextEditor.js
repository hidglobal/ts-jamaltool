import React, { forwardRef, useMemo } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import { RichTextEditorProvider } from './RichTextEditor.context.js';
import { Content } from './Content/Content.js';
import { Control } from './controls/Control/Control.js';
import { ControlsGroup } from './controls/ControlsGroup/ControlsGroup.js';
import { Toolbar } from './Toolbar/Toolbar.js';
import { DEFAULT_LABELS } from './labels.js';
import useStyles from './RichTextEditor.styles.js';
import { BoldControl, ItalicControl, StrikeThroughControl, UnderlineControl, ClearFormattingControl, H1Control, H2Control, H3Control, H4Control, H5Control, H6Control, BulletListControl, OrderedListControl, UnlinkControl, BlockquoteControl, AlignLeftControl, AlignRightControl, AlignCenterControl, AlignJustifyControl, SuperscriptControl, SubscriptControl, CodeControl, CodeBlockControl, HighlightControl, HrControl, UnsetColorControl } from './controls/controls.js';
import { LinkControl } from './controls/LinkControl/LinkControl.js';
import { ColorPickerControl } from './controls/ColorPickerControl/ColorPickerControl.js';
import { ColorControl } from './controls/ColorControl/ColorControl.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  withCodeHighlightStyles: true,
  withTypographyStyles: true
};
const RichTextEditor = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("RichTextEditor", defaultProps, props), {
    editor,
    children,
    className,
    labels,
    withCodeHighlightStyles,
    withTypographyStyles,
    classNames,
    styles,
    unstyled,
    variant
  } = _a, others = __objRest(_a, [
    "editor",
    "children",
    "className",
    "labels",
    "withCodeHighlightStyles",
    "withTypographyStyles",
    "classNames",
    "styles",
    "unstyled",
    "variant"
  ]);
  const { classes, cx } = useStyles(null, {
    name: "RichTextEditor",
    classNames,
    styles,
    unstyled,
    variant
  });
  const mergedLabels = useMemo(() => __spreadValues(__spreadValues({}, DEFAULT_LABELS), labels), [labels]);
  return /* @__PURE__ */ React.createElement(RichTextEditorProvider, {
    value: {
      editor,
      labels: mergedLabels,
      withCodeHighlightStyles,
      withTypographyStyles,
      classNames,
      styles,
      unstyled,
      variant
    }
  }, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
    className: cx(classes.root, className)
  }, others), {
    ref
  }), children));
});
RichTextEditor.Content = Content;
RichTextEditor.Control = Control;
RichTextEditor.ControlsGroup = ControlsGroup;
RichTextEditor.Toolbar = Toolbar;
RichTextEditor.Bold = BoldControl;
RichTextEditor.Italic = ItalicControl;
RichTextEditor.Strikethrough = StrikeThroughControl;
RichTextEditor.Underline = UnderlineControl;
RichTextEditor.ClearFormatting = ClearFormattingControl;
RichTextEditor.H1 = H1Control;
RichTextEditor.H2 = H2Control;
RichTextEditor.H3 = H3Control;
RichTextEditor.H4 = H4Control;
RichTextEditor.H5 = H5Control;
RichTextEditor.H6 = H6Control;
RichTextEditor.BulletList = BulletListControl;
RichTextEditor.OrderedList = OrderedListControl;
RichTextEditor.Link = LinkControl;
RichTextEditor.Unlink = UnlinkControl;
RichTextEditor.Blockquote = BlockquoteControl;
RichTextEditor.AlignLeft = AlignLeftControl;
RichTextEditor.AlignRight = AlignRightControl;
RichTextEditor.AlignCenter = AlignCenterControl;
RichTextEditor.AlignJustify = AlignJustifyControl;
RichTextEditor.Superscript = SuperscriptControl;
RichTextEditor.Subscript = SubscriptControl;
RichTextEditor.Code = CodeControl;
RichTextEditor.CodeBlock = CodeBlockControl;
RichTextEditor.ColorPicker = ColorPickerControl;
RichTextEditor.Color = ColorControl;
RichTextEditor.Highlight = HighlightControl;
RichTextEditor.Hr = HrControl;
RichTextEditor.UnsetColor = UnsetColorControl;
RichTextEditor.displayName = "@mantine/tiptap/RichTextEditor";

export { RichTextEditor };
//# sourceMappingURL=RichTextEditor.js.map

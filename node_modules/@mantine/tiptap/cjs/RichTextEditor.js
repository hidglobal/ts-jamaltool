'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var RichTextEditor_context = require('./RichTextEditor.context.js');
var Content = require('./Content/Content.js');
var Control = require('./controls/Control/Control.js');
var ControlsGroup = require('./controls/ControlsGroup/ControlsGroup.js');
var Toolbar = require('./Toolbar/Toolbar.js');
var labels = require('./labels.js');
var RichTextEditor_styles = require('./RichTextEditor.styles.js');
var controls = require('./controls/controls.js');
var LinkControl = require('./controls/LinkControl/LinkControl.js');
var ColorPickerControl = require('./controls/ColorPickerControl/ColorPickerControl.js');
var ColorControl = require('./controls/ColorControl/ColorControl.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const RichTextEditor = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("RichTextEditor", defaultProps, props), {
    editor,
    children,
    className,
    labels: labels$1,
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
  const { classes, cx } = RichTextEditor_styles['default'](null, {
    name: "RichTextEditor",
    classNames,
    styles,
    unstyled,
    variant
  });
  const mergedLabels = React.useMemo(() => __spreadValues(__spreadValues({}, labels.DEFAULT_LABELS), labels$1), [labels$1]);
  return /* @__PURE__ */ React__default.createElement(RichTextEditor_context.RichTextEditorProvider, {
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
  }, /* @__PURE__ */ React__default.createElement(core.Box, __spreadProps(__spreadValues({
    className: cx(classes.root, className)
  }, others), {
    ref
  }), children));
});
RichTextEditor.Content = Content.Content;
RichTextEditor.Control = Control.Control;
RichTextEditor.ControlsGroup = ControlsGroup.ControlsGroup;
RichTextEditor.Toolbar = Toolbar.Toolbar;
RichTextEditor.Bold = controls.BoldControl;
RichTextEditor.Italic = controls.ItalicControl;
RichTextEditor.Strikethrough = controls.StrikeThroughControl;
RichTextEditor.Underline = controls.UnderlineControl;
RichTextEditor.ClearFormatting = controls.ClearFormattingControl;
RichTextEditor.H1 = controls.H1Control;
RichTextEditor.H2 = controls.H2Control;
RichTextEditor.H3 = controls.H3Control;
RichTextEditor.H4 = controls.H4Control;
RichTextEditor.H5 = controls.H5Control;
RichTextEditor.H6 = controls.H6Control;
RichTextEditor.BulletList = controls.BulletListControl;
RichTextEditor.OrderedList = controls.OrderedListControl;
RichTextEditor.Link = LinkControl.LinkControl;
RichTextEditor.Unlink = controls.UnlinkControl;
RichTextEditor.Blockquote = controls.BlockquoteControl;
RichTextEditor.AlignLeft = controls.AlignLeftControl;
RichTextEditor.AlignRight = controls.AlignRightControl;
RichTextEditor.AlignCenter = controls.AlignCenterControl;
RichTextEditor.AlignJustify = controls.AlignJustifyControl;
RichTextEditor.Superscript = controls.SuperscriptControl;
RichTextEditor.Subscript = controls.SubscriptControl;
RichTextEditor.Code = controls.CodeControl;
RichTextEditor.CodeBlock = controls.CodeBlockControl;
RichTextEditor.ColorPicker = ColorPickerControl.ColorPickerControl;
RichTextEditor.Color = ColorControl.ColorControl;
RichTextEditor.Highlight = controls.HighlightControl;
RichTextEditor.Hr = controls.HrControl;
RichTextEditor.UnsetColor = controls.UnsetColorControl;
RichTextEditor.displayName = "@mantine/tiptap/RichTextEditor";

exports.RichTextEditor = RichTextEditor;
//# sourceMappingURL=RichTextEditor.js.map

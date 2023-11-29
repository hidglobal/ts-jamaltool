import React from 'react';
import { IconItalic, IconUnderline, IconStrikethrough, IconClearFormatting, IconUnlink, IconList, IconListNumbers, IconH1, IconH2, IconH3, IconH4, IconH5, IconH6, IconBlockquote, IconAlignLeft, IconAlignRight, IconAlignCenter, IconAlignJustified, IconSubscript, IconSuperscript, IconCode, IconHighlight, IconLineDashed, IconCircleOff, IconBold } from '@tabler/icons-react';
import { createControl } from './ControlBase/create-control.js';

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
const BoldControl = createControl({
  label: "boldControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconBold, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "bold" },
  operation: { name: "toggleBold" }
});
const ItalicControl = createControl({
  label: "italicControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconItalic, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "italic" },
  operation: { name: "toggleItalic" }
});
const UnderlineControl = createControl({
  label: "underlineControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconUnderline, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "underline" },
  operation: { name: "toggleUnderline" }
});
const StrikeThroughControl = createControl({
  label: "strikeControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconStrikethrough, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "strike" },
  operation: { name: "toggleStrike" }
});
const ClearFormattingControl = createControl({
  label: "clearFormattingControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconClearFormatting, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "unsetAllMarks" }
});
const UnlinkControl = createControl({
  label: "unlinkControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconUnlink, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "unsetLink" }
});
const BulletListControl = createControl({
  label: "bulletListControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconList, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "bulletList" },
  operation: { name: "toggleBulletList" }
});
const OrderedListControl = createControl({
  label: "orderedListControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconListNumbers, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "orderedList" },
  operation: { name: "toggleOrderedList" }
});
const H1Control = createControl({
  label: "h1ControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconH1, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 1 } },
  operation: { name: "toggleHeading", attributes: { level: 1 } }
});
const H2Control = createControl({
  label: "h2ControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconH2, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 2 } },
  operation: { name: "toggleHeading", attributes: { level: 2 } }
});
const H3Control = createControl({
  label: "h3ControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconH3, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 3 } },
  operation: { name: "toggleHeading", attributes: { level: 3 } }
});
const H4Control = createControl({
  label: "h4ControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconH4, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 4 } },
  operation: { name: "toggleHeading", attributes: { level: 4 } }
});
const H5Control = createControl({
  label: "h5ControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconH5, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 5 } },
  operation: { name: "toggleHeading", attributes: { level: 5 } }
});
const H6Control = createControl({
  label: "h6ControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconH6, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 6 } },
  operation: { name: "toggleHeading", attributes: { level: 6 } }
});
const BlockquoteControl = createControl({
  label: "blockquoteControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconBlockquote, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "blockquote" },
  operation: { name: "toggleBlockquote" }
});
const AlignLeftControl = createControl({
  label: "alignLeftControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconAlignLeft, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "left" }
});
const AlignRightControl = createControl({
  label: "alignRightControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconAlignRight, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "right" }
});
const AlignCenterControl = createControl({
  label: "alignCenterControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconAlignCenter, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "center" }
});
const AlignJustifyControl = createControl({
  label: "alignJustifyControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconAlignJustified, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "justify" }
});
const SubscriptControl = createControl({
  label: "subscriptControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconSubscript, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "subscript" },
  operation: { name: "toggleSubscript" }
});
const SuperscriptControl = createControl({
  label: "superscriptControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconSuperscript, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "superscript" },
  operation: { name: "toggleSuperscript" }
});
const CodeControl = createControl({
  label: "codeControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconCode, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "code" },
  operation: { name: "toggleCode" }
});
const CodeBlockControl = createControl({
  label: "codeBlockControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconCode, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "codeBlock" },
  operation: { name: "toggleCodeBlock" }
});
const HighlightControl = createControl({
  label: "highlightControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconHighlight, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "highlight" },
  operation: { name: "toggleHighlight" }
});
const HrControl = createControl({
  label: "hrControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconLineDashed, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setHorizontalRule" }
});
const UnsetColorControl = createControl({
  label: "unsetColorControlLabel",
  icon: (props) => /* @__PURE__ */ React.createElement(IconCircleOff, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "unsetColor" }
});

export { AlignCenterControl, AlignJustifyControl, AlignLeftControl, AlignRightControl, BlockquoteControl, BoldControl, BulletListControl, ClearFormattingControl, CodeBlockControl, CodeControl, H1Control, H2Control, H3Control, H4Control, H5Control, H6Control, HighlightControl, HrControl, ItalicControl, OrderedListControl, StrikeThroughControl, SubscriptControl, SuperscriptControl, UnderlineControl, UnlinkControl, UnsetColorControl };
//# sourceMappingURL=controls.js.map

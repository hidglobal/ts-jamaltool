'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var createControl = require('./ControlBase/create-control.js');

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
const BoldControl = createControl.createControl({
  label: "boldControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconBold, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "bold" },
  operation: { name: "toggleBold" }
});
const ItalicControl = createControl.createControl({
  label: "italicControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconItalic, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "italic" },
  operation: { name: "toggleItalic" }
});
const UnderlineControl = createControl.createControl({
  label: "underlineControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconUnderline, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "underline" },
  operation: { name: "toggleUnderline" }
});
const StrikeThroughControl = createControl.createControl({
  label: "strikeControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconStrikethrough, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "strike" },
  operation: { name: "toggleStrike" }
});
const ClearFormattingControl = createControl.createControl({
  label: "clearFormattingControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconClearFormatting, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "unsetAllMarks" }
});
const UnlinkControl = createControl.createControl({
  label: "unlinkControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconUnlink, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "unsetLink" }
});
const BulletListControl = createControl.createControl({
  label: "bulletListControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconList, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "bulletList" },
  operation: { name: "toggleBulletList" }
});
const OrderedListControl = createControl.createControl({
  label: "orderedListControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconListNumbers, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "orderedList" },
  operation: { name: "toggleOrderedList" }
});
const H1Control = createControl.createControl({
  label: "h1ControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconH1, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 1 } },
  operation: { name: "toggleHeading", attributes: { level: 1 } }
});
const H2Control = createControl.createControl({
  label: "h2ControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconH2, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 2 } },
  operation: { name: "toggleHeading", attributes: { level: 2 } }
});
const H3Control = createControl.createControl({
  label: "h3ControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconH3, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 3 } },
  operation: { name: "toggleHeading", attributes: { level: 3 } }
});
const H4Control = createControl.createControl({
  label: "h4ControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconH4, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 4 } },
  operation: { name: "toggleHeading", attributes: { level: 4 } }
});
const H5Control = createControl.createControl({
  label: "h5ControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconH5, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 5 } },
  operation: { name: "toggleHeading", attributes: { level: 5 } }
});
const H6Control = createControl.createControl({
  label: "h6ControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconH6, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "heading", attributes: { level: 6 } },
  operation: { name: "toggleHeading", attributes: { level: 6 } }
});
const BlockquoteControl = createControl.createControl({
  label: "blockquoteControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconBlockquote, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "blockquote" },
  operation: { name: "toggleBlockquote" }
});
const AlignLeftControl = createControl.createControl({
  label: "alignLeftControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconAlignLeft, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "left" }
});
const AlignRightControl = createControl.createControl({
  label: "alignRightControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconAlignRight, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "right" }
});
const AlignCenterControl = createControl.createControl({
  label: "alignCenterControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconAlignCenter, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "center" }
});
const AlignJustifyControl = createControl.createControl({
  label: "alignJustifyControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconAlignJustified, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setTextAlign", attributes: "justify" }
});
const SubscriptControl = createControl.createControl({
  label: "subscriptControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconSubscript, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "subscript" },
  operation: { name: "toggleSubscript" }
});
const SuperscriptControl = createControl.createControl({
  label: "superscriptControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconSuperscript, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "superscript" },
  operation: { name: "toggleSuperscript" }
});
const CodeControl = createControl.createControl({
  label: "codeControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconCode, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "code" },
  operation: { name: "toggleCode" }
});
const CodeBlockControl = createControl.createControl({
  label: "codeBlockControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconCode, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "codeBlock" },
  operation: { name: "toggleCodeBlock" }
});
const HighlightControl = createControl.createControl({
  label: "highlightControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconHighlight, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  isActive: { name: "highlight" },
  operation: { name: "toggleHighlight" }
});
const HrControl = createControl.createControl({
  label: "hrControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconLineDashed, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "setHorizontalRule" }
});
const UnsetColorControl = createControl.createControl({
  label: "unsetColorControlLabel",
  icon: (props) => /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleOff, __spreadProps(__spreadValues({}, props), {
    stroke: 1.5
  })),
  operation: { name: "unsetColor" }
});

exports.AlignCenterControl = AlignCenterControl;
exports.AlignJustifyControl = AlignJustifyControl;
exports.AlignLeftControl = AlignLeftControl;
exports.AlignRightControl = AlignRightControl;
exports.BlockquoteControl = BlockquoteControl;
exports.BoldControl = BoldControl;
exports.BulletListControl = BulletListControl;
exports.ClearFormattingControl = ClearFormattingControl;
exports.CodeBlockControl = CodeBlockControl;
exports.CodeControl = CodeControl;
exports.H1Control = H1Control;
exports.H2Control = H2Control;
exports.H3Control = H3Control;
exports.H4Control = H4Control;
exports.H5Control = H5Control;
exports.H6Control = H6Control;
exports.HighlightControl = HighlightControl;
exports.HrControl = HrControl;
exports.ItalicControl = ItalicControl;
exports.OrderedListControl = OrderedListControl;
exports.StrikeThroughControl = StrikeThroughControl;
exports.SubscriptControl = SubscriptControl;
exports.SuperscriptControl = SuperscriptControl;
exports.UnderlineControl = UnderlineControl;
exports.UnlinkControl = UnlinkControl;
exports.UnsetColorControl = UnsetColorControl;
//# sourceMappingURL=controls.js.map

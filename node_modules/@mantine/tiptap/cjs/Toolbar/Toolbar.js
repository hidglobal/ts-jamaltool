'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var RichTextEditor_context = require('../RichTextEditor.context.js');
var Toolbar_styles = require('./Toolbar.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
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
  stickyOffset: 0
};
const Toolbar = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("RichTextEditorToolbar", defaultProps, props), { className, children, sticky, stickyOffset } = _a, others = __objRest(_a, ["className", "children", "sticky", "stickyOffset"]);
  const ctx = RichTextEditor_context.useRichTextEditorContext();
  const { classes, cx } = Toolbar_styles['default']({ sticky, stickyOffset }, {
    name: "RichTextEditor",
    classNames: ctx.classNames,
    styles: ctx.styles,
    unstyled: ctx.unstyled,
    variant: ctx.variant
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, __spreadValues({
    className: cx(classes.toolbar, className),
    ref
  }, others), children);
});
Toolbar.displayName = "@mantine/tiptap/Toolbar";

exports.Toolbar = Toolbar;
//# sourceMappingURL=Toolbar.js.map

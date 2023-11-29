'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var react = require('@tiptap/react');
var RichTextEditor_context = require('../RichTextEditor.context.js');
var Content_styles = require('./Content.styles.js');

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
const defaultProps = {};
const Content = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("RichTextEditorContent", defaultProps, props), { className } = _a, others = __objRest(_a, ["className"]);
  const {
    editor,
    withCodeHighlightStyles,
    withTypographyStyles,
    classNames,
    styles,
    unstyled,
    variant
  } = RichTextEditor_context.useRichTextEditorContext();
  const { classes, cx } = Content_styles['default']({ withCodeHighlightStyles, withTypographyStyles }, { name: "RichTextEditor", classNames, styles, unstyled, variant });
  return /* @__PURE__ */ React__default.createElement(core.TypographyStylesProvider, {
    className: cx(classes.typographyStylesProvider, className),
    unstyled: !withTypographyStyles || unstyled,
    ref
  }, /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    component: react.EditorContent,
    editor,
    className: classes.content
  }, others)));
});
Content.displayName = "@mantine/tiptap/Content";

exports.Content = Content;
//# sourceMappingURL=Content.js.map

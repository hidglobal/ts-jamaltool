import React, { forwardRef } from 'react';
import { useComponentDefaultProps, UnstyledButton } from '@mantine/core';
import { useRichTextEditorContext } from '../../RichTextEditor.context.js';
import useStyles from './Control.styles.js';

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
  interactive: true
};
const Control = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("RichTextEditorControl", defaultProps, props), { className, active, children, interactive } = _a, others = __objRest(_a, ["className", "active", "children", "interactive"]);
  const { classNames, styles, unstyled, variant } = useRichTextEditorContext();
  const { classes, cx } = useStyles(null, {
    name: "RichTextEditor",
    classNames,
    styles,
    unstyled,
    variant
  });
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadValues({
    className: cx(classes.control, className),
    "data-rich-text-editor-control": true,
    tabIndex: interactive ? 0 : -1,
    "data-interactive": interactive || void 0,
    "data-active": active || void 0,
    "aria-pressed": active && interactive || void 0,
    "aria-hidden": !interactive || void 0,
    ref,
    unstyled
  }, others), children);
});
Control.displayName = "@mantine/tiptap/Control";

export { Control };
//# sourceMappingURL=Control.js.map

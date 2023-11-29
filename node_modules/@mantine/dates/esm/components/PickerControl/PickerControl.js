import React, { forwardRef } from 'react';
import { useComponentDefaultProps, UnstyledButton } from '@mantine/core';
import useStyles from './PickerControl.styles.js';

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
  size: "sm"
};
const PickerControl = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("PickerControl", defaultProps, props), {
    className,
    children,
    disabled,
    selected,
    classNames,
    styles,
    unstyled,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    size,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "children",
    "disabled",
    "selected",
    "classNames",
    "styles",
    "unstyled",
    "firstInRange",
    "lastInRange",
    "inRange",
    "__staticSelector",
    "size",
    "variant"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["PickerControl", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadValues({
    className: cx(classes.pickerControl, className),
    ref,
    unstyled,
    "data-picker-control": true,
    "data-selected": selected && !disabled || void 0,
    "data-disabled": disabled || void 0,
    "data-in-range": inRange && !disabled && !selected || void 0,
    "data-first-in-range": firstInRange && !disabled || void 0,
    "data-last-in-range": lastInRange && !disabled || void 0,
    disabled
  }, others), children);
});
PickerControl.displayName = "@mantine/dates/PickerControl";

export { PickerControl };
//# sourceMappingURL=PickerControl.js.map

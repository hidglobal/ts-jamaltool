import React, { forwardRef } from 'react';
import { useComponentDefaultProps, UnstyledButton } from '@mantine/core';
import dayjs from 'dayjs';
import useStyles from './Day.styles.js';

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
  tabIndex: 0,
  size: "sm"
};
const Day = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("Day", defaultProps, props), {
    className,
    date,
    radius,
    disabled,
    styles,
    classNames,
    unstyled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    variant,
    size
  } = _a, others = __objRest(_a, [
    "className",
    "date",
    "radius",
    "disabled",
    "styles",
    "classNames",
    "unstyled",
    "__staticSelector",
    "weekend",
    "outside",
    "selected",
    "renderDay",
    "inRange",
    "firstInRange",
    "lastInRange",
    "hidden",
    "static",
    "variant",
    "size"
  ]);
  const { classes, cx } = useStyles({ radius, isStatic }, { name: ["Day", __staticSelector], classNames, styles, unstyled, variant, size });
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadValues({
    component: isStatic ? "div" : "button",
    ref,
    className: cx(classes.day, className),
    disabled,
    "data-today": dayjs(date).isSame(new Date(), "day") || void 0,
    "data-hidden": hidden || void 0,
    "data-disabled": disabled || void 0,
    "data-weekend": !disabled && !outside && weekend || void 0,
    "data-outside": !disabled && outside || void 0,
    "data-selected": !disabled && selected || void 0,
    "data-in-range": inRange && !disabled || void 0,
    "data-first-in-range": firstInRange && !disabled || void 0,
    "data-last-in-range": lastInRange && !disabled || void 0,
    unstyled
  }, others), (renderDay == null ? void 0 : renderDay(date)) || date.getDate());
});
Day.displayName = "@mantine/dates/Day";

export { Day };
//# sourceMappingURL=Day.js.map

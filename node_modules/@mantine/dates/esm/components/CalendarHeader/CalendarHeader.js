import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box, UnstyledButton } from '@mantine/core';
import { Chevron } from './Chevron.js';
import useStyles from './CalendarHeader.styles.js';

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
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true,
  size: "sm"
};
const CalendarHeader = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("CalendarHeader", defaultProps, props), {
    className,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    classNames,
    styles,
    unstyled,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
    size,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "label",
    "classNames",
    "styles",
    "unstyled",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    "__staticSelector",
    "__preventFocus",
    "__stopPropagation",
    "size",
    "variant"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["CalendarHeader", __staticSelector],
    classNames,
    styles,
    unstyled,
    size,
    variant
  });
  const preventFocus = __preventFocus ? (event) => event.preventDefault() : void 0;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.calendarHeader, className),
    ref
  }, others), withPrevious && /* @__PURE__ */ React.createElement(UnstyledButton, {
    className: classes.calendarHeaderControl,
    "data-previous": true,
    "aria-label": previousLabel,
    onClick: onPrevious,
    unstyled,
    onMouseDown: preventFocus,
    disabled: previousDisabled,
    "data-disabled": previousDisabled || void 0,
    tabIndex: __preventFocus ? -1 : 0,
    "data-mantine-stop-propagation": __stopPropagation || void 0
  }, previousIcon || /* @__PURE__ */ React.createElement(Chevron, {
    className: classes.calendarHeaderControlIcon,
    direction: "previous",
    "data-previous": true
  })), /* @__PURE__ */ React.createElement(UnstyledButton, {
    component: hasNextLevel ? "button" : "div",
    className: classes.calendarHeaderLevel,
    onClick: hasNextLevel ? onLevelClick : void 0,
    unstyled,
    onMouseDown: hasNextLevel ? preventFocus : void 0,
    disabled: !hasNextLevel,
    "data-static": !hasNextLevel || void 0,
    "aria-label": levelControlAriaLabel,
    tabIndex: __preventFocus || !hasNextLevel ? -1 : 0,
    "data-mantine-stop-propagation": __stopPropagation || void 0
  }, label), withNext && /* @__PURE__ */ React.createElement(UnstyledButton, {
    className: classes.calendarHeaderControl,
    "data-next": true,
    "aria-label": nextLabel,
    onClick: onNext,
    unstyled,
    onMouseDown: preventFocus,
    disabled: nextDisabled,
    "data-disabled": nextDisabled || void 0,
    tabIndex: __preventFocus ? -1 : 0,
    "data-mantine-stop-propagation": __stopPropagation || void 0
  }, nextIcon || /* @__PURE__ */ React.createElement(Chevron, {
    className: classes.calendarHeaderControlIcon,
    direction: "next",
    "data-next": true
  })));
});
CalendarHeader.displayName = "@mantine/dates/CalendarHeader";

export { CalendarHeader };
//# sourceMappingURL=CalendarHeader.js.map

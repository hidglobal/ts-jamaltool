import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesState } from '../../hooks/use-dates-state/use-dates-state.js';
import { Calendar } from '../Calendar/Calendar.js';

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
  type: "default",
  numberOfColumns: 1
};
const DatePicker = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("DatePicker", defaultProps, props), {
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getDayProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onMonthSelect,
    numberOfColumns
  } = _a, others = __objRest(_a, [
    "type",
    "defaultValue",
    "value",
    "onChange",
    "__staticSelector",
    "getDayProps",
    "allowSingleDateInRange",
    "allowDeselect",
    "onMouseLeave",
    "onMonthSelect",
    "numberOfColumns"
  ]);
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "day",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave
  });
  return /* @__PURE__ */ React.createElement(Calendar, __spreadValues({
    ref,
    minLevel: "month",
    __staticSelector: __staticSelector || "DatePicker",
    onMouseLeave: onRootMouseLeave,
    hideOutsideDates: numberOfColumns !== 1,
    numberOfColumns,
    __onDayMouseEnter: (_event, date) => onHoveredDateChange(date),
    __onDayClick: (_event, date) => onDateChange(date),
    getDayProps: (date) => __spreadValues(__spreadValues({}, getControlProps(date)), getDayProps == null ? void 0 : getDayProps(date))
  }, others));
});
DatePicker.displayName = "@mantine/dates/DatePicker";

export { DatePicker };
//# sourceMappingURL=DatePicker.js.map

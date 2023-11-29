'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var useDatesState = require('../../hooks/use-dates-state/use-dates-state.js');
var Calendar = require('../Calendar/Calendar.js');

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
  type: "default"
};
const MonthPicker = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("MonthPicker", defaultProps, props), {
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getMonthControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onMonthSelect
  } = _a, others = __objRest(_a, [
    "type",
    "defaultValue",
    "value",
    "onChange",
    "__staticSelector",
    "getMonthControlProps",
    "allowSingleDateInRange",
    "allowDeselect",
    "onMouseLeave",
    "onMonthSelect"
  ]);
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState.useDatesState({
    type,
    level: "month",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave
  });
  return /* @__PURE__ */ React__default.createElement(Calendar.Calendar, __spreadValues({
    ref,
    minLevel: "year",
    __updateDateOnMonthSelect: false,
    __staticSelector: __staticSelector || "MonthPicker",
    onMouseLeave: onRootMouseLeave,
    onMonthMouseEnter: (_event, date) => onHoveredDateChange(date),
    onMonthSelect: (date) => {
      onDateChange(date);
      onMonthSelect == null ? void 0 : onMonthSelect(date);
    },
    getMonthControlProps: (date) => __spreadValues(__spreadValues({}, getControlProps(date)), getMonthControlProps == null ? void 0 : getMonthControlProps(date))
  }, others));
});
MonthPicker.displayName = "@mantine/dates/MonthPicker";

exports.MonthPicker = MonthPicker;
//# sourceMappingURL=MonthPicker.js.map

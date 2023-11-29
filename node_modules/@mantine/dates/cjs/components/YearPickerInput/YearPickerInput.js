'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var pickCalendarLevelsProps = require('../Calendar/pick-calendar-levels-props/pick-calendar-levels-props.js');
var useDatesInput = require('../../hooks/use-dates-input/use-dates-input.js');
var PickerInputBase = require('../PickerInputBase/PickerInputBase.js');
var YearPicker = require('../YearPicker/YearPicker.js');
var getDefaultClampedDate = require('../../utils/get-default-clamped-date.js');

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
  valueFormat: "YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
const YearPickerInput = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("YearPickerInput", defaultProps, props), {
    type,
    value,
    defaultValue,
    onChange,
    valueFormat,
    labelSeparator,
    locale,
    classNames,
    styles,
    unstyled,
    closeOnChange,
    size,
    variant,
    dropdownType,
    sortDates,
    minDate,
    maxDate
  } = _a, rest = __objRest(_a, [
    "type",
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "labelSeparator",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "closeOnChange",
    "size",
    "variant",
    "dropdownType",
    "sortDates",
    "minDate",
    "maxDate"
  ]);
  const { calendarProps, others } = pickCalendarLevelsProps.pickCalendarProps(rest);
  const {
    _value,
    setValue,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClear,
    shouldClear
  } = useDatesInput.useDatesInput({
    type,
    value,
    defaultValue,
    onChange,
    locale,
    format: valueFormat,
    labelSeparator,
    closeOnChange,
    sortDates
  });
  return /* @__PURE__ */ React__default.createElement(PickerInputBase.PickerInputBase, __spreadValues({
    formattedValue,
    dropdownOpened,
    dropdownHandlers,
    classNames,
    styles,
    unstyled,
    __staticSelector: "YearPickerInput",
    ref,
    onClear,
    shouldClear,
    value: _value,
    type,
    size,
    variant,
    dropdownType
  }, others), /* @__PURE__ */ React__default.createElement(YearPicker.YearPicker, __spreadProps(__spreadValues({}, calendarProps), {
    size,
    variant,
    type,
    value: _value,
    defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate.getDefaultClampedDate({ maxDate, minDate }) : _value || getDefaultClampedDate.getDefaultClampedDate({ maxDate, minDate }),
    onChange: setValue,
    locale,
    classNames,
    styles,
    unstyled,
    __staticSelector: "YearPickerInput",
    __stopPropagation: dropdownType === "popover",
    minDate,
    maxDate
  })));
});
YearPickerInput.displayName = "@mantine/dates/YearPickerInput";

exports.YearPickerInput = YearPickerInput;
//# sourceMappingURL=YearPickerInput.js.map

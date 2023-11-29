import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { pickCalendarProps } from '../Calendar/pick-calendar-levels-props/pick-calendar-levels-props.js';
import { useDatesInput } from '../../hooks/use-dates-input/use-dates-input.js';
import { PickerInputBase } from '../PickerInputBase/PickerInputBase.js';
import { MonthPicker } from '../MonthPicker/MonthPicker.js';
import { getDefaultClampedDate } from '../../utils/get-default-clamped-date.js';

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
  valueFormat: "MMMM YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
const MonthPickerInput = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("MonthPickerInput", defaultProps, props), {
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
    variant,
    size,
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
    "variant",
    "size",
    "dropdownType",
    "sortDates",
    "minDate",
    "maxDate"
  ]);
  const { calendarProps, others } = pickCalendarProps(rest);
  const {
    _value,
    setValue,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClear,
    shouldClear
  } = useDatesInput({
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
  return /* @__PURE__ */ React.createElement(PickerInputBase, __spreadValues({
    formattedValue,
    dropdownOpened,
    dropdownHandlers,
    classNames,
    styles,
    unstyled,
    __staticSelector: "MonthPickerInput",
    ref,
    onClear,
    shouldClear,
    value: _value,
    type,
    variant,
    size,
    dropdownType
  }, others), /* @__PURE__ */ React.createElement(MonthPicker, __spreadProps(__spreadValues({}, calendarProps), {
    type,
    value: _value,
    defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({ maxDate, minDate }) : _value || getDefaultClampedDate({ maxDate, minDate }),
    onChange: setValue,
    locale,
    classNames,
    styles,
    unstyled,
    __staticSelector: "MonthPickerInput",
    __stopPropagation: dropdownType === "popover",
    variant,
    size,
    minDate,
    maxDate
  })));
});
MonthPickerInput.displayName = "@mantine/dates/MonthPickerInput";

export { MonthPickerInput };
//# sourceMappingURL=MonthPickerInput.js.map

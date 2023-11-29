import dayjs from 'dayjs';
import React, { forwardRef, useRef, useState } from 'react';
import { useComponentDefaultProps, ActionIcon, INPUT_SIZES, CheckIcon } from '@mantine/core';
import { useUncontrolled, useDisclosure, useDidUpdate } from '@mantine/hooks';
import useStyles from './DateTimePicker.styles.js';
import { pickCalendarProps } from '../Calendar/pick-calendar-levels-props/pick-calendar-levels-props.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { PickerInputBase } from '../PickerInputBase/PickerInputBase.js';
import { DatePicker } from '../DatePicker/DatePicker.js';
import { TimeInput } from '../TimeInput/TimeInput.js';
import { assignTime } from '../../utils/assign-time/assign-time.js';

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
  size: "sm",
  dropdownType: "popover"
};
const DateTimePicker = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("DateTimePicker", defaultProps, props), {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType
  } = _a, rest = __objRest(_a, [
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "timeInputProps",
    "submitButtonProps",
    "withSeconds",
    "level",
    "defaultLevel",
    "size",
    "variant",
    "dropdownType"
  ]);
  const _valueFormat = valueFormat || (withSeconds ? "DD/MM/YYYY HH:mm:ss" : "DD/MM/YYYY HH:mm");
  const { classes, cx } = useStyles(null, {
    name: "DateTimePicker",
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const timeInputRef = useRef();
  const _b = pickCalendarProps(rest), {
    calendarProps: _c
  } = _b, _d = _c, calendarProps = __objRest(_d, ["allowSingleDateInRange"]), {
    others
  } = _b;
  const ctx = useDatesContext();
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const formatTime = (dateValue) => dateValue ? dayjs(dateValue).format(withSeconds ? "HH:mm:ss" : "HH:mm") : "";
  const [timeValue, setTimeValue] = useState(formatTime(_value));
  const [currentLevel, setCurrentLevel] = useState(level || defaultLevel || "month");
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const formattedValue = _value ? dayjs(_value).locale(ctx.getLocale(locale)).format(_valueFormat) : "";
  const handleTimeChange = (event) => {
    var _a2;
    (_a2 = timeInputProps == null ? void 0 : timeInputProps.onChange) == null ? void 0 : _a2.call(timeInputProps, event);
    const val = event.currentTarget.value;
    setTimeValue(val);
    if (val) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      const timeDate = new Date();
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      seconds !== void 0 && timeDate.setSeconds(seconds);
      setValue(assignTime(timeDate, _value || new Date()));
    }
  };
  const handleDateChange = (date) => {
    var _a2;
    setValue(assignTime(_value, date));
    (_a2 = timeInputRef.current) == null ? void 0 : _a2.focus();
  };
  const handleTimeInputKeyDown = (event) => {
    var _a2;
    (_a2 = timeInputProps == null ? void 0 : timeInputProps.onKeyDown) == null ? void 0 : _a2.call(timeInputProps, event);
    if (event.key === "Enter") {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };
  useDidUpdate(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value));
    }
  }, [_value, dropdownOpened]);
  useDidUpdate(() => {
    if (dropdownOpened) {
      setCurrentLevel("month");
    }
  }, [dropdownOpened]);
  const __stopPropagation = dropdownType === "popover";
  return /* @__PURE__ */ React.createElement(PickerInputBase, __spreadValues({
    formattedValue,
    dropdownOpened,
    dropdownHandlers,
    classNames,
    styles,
    unstyled,
    __staticSelector: "DateTimePicker",
    ref,
    onClear: () => setValue(null),
    shouldClear: !!_value,
    value: _value,
    type: "default",
    size,
    variant,
    dropdownType
  }, others), /* @__PURE__ */ React.createElement(DatePicker, __spreadProps(__spreadValues({}, calendarProps), {
    size,
    variant,
    type: "default",
    value: _value,
    defaultDate: _value,
    onChange: handleDateChange,
    locale,
    classNames,
    styles,
    unstyled,
    __staticSelector: "DateTimePicker",
    __stopPropagation,
    level,
    defaultLevel,
    onLevelChange: (_level) => {
      var _a2;
      setCurrentLevel(_level);
      (_a2 = calendarProps.onLevelChange) == null ? void 0 : _a2.call(calendarProps, _level);
    }
  })), currentLevel === "month" && /* @__PURE__ */ React.createElement("div", {
    className: classes.timeWrapper
  }, /* @__PURE__ */ React.createElement(TimeInput, __spreadProps(__spreadValues({
    value: timeValue,
    withSeconds,
    ref: timeInputRef,
    unstyled
  }, timeInputProps), {
    className: cx(classes.timeInput, timeInputProps == null ? void 0 : timeInputProps.className),
    onChange: handleTimeChange,
    onKeyDown: handleTimeInputKeyDown,
    size,
    "data-mantine-stop-propagation": __stopPropagation || void 0
  })), /* @__PURE__ */ React.createElement(ActionIcon, __spreadValues({
    variant: "default",
    size: INPUT_SIZES[size],
    onClick: (event) => {
      var _a2;
      (_a2 = submitButtonProps == null ? void 0 : submitButtonProps.onClick) == null ? void 0 : _a2.call(submitButtonProps, event);
      dropdownHandlers.close();
    },
    unstyled,
    "data-mantine-stop-propagation": __stopPropagation || void 0,
    children: /* @__PURE__ */ React.createElement(CheckIcon, {
      width: `calc(${INPUT_SIZES[size]} / 3)`
    })
  }, submitButtonProps))));
});
DateTimePicker.displayName = "@mantine/dates/DateTimePicker";

export { DateTimePicker };
//# sourceMappingURL=DateTimePicker.js.map

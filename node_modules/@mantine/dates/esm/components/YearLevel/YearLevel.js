import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import useStyles from './YearLevel.styles.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader.js';
import { MonthsList } from '../MonthsList/MonthsList.js';

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
  yearLabelFormat: "YYYY",
  size: "sm"
};
const YearLevel = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("YearLevel", defaultProps, props), {
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    className,
    yearLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size,
    variant
  } = _a, others = __objRest(_a, [
    "year",
    "locale",
    "minDate",
    "maxDate",
    "monthsListFormat",
    "getMonthControlProps",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "withCellSpacing",
    "__preventFocus",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    "className",
    "yearLabelFormat",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "size",
    "variant"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["YearLevel", __staticSelector],
    classNames,
    styles,
    unstyled,
    size,
    variant
  });
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "YearLevel",
    classNames,
    styles,
    unstyled,
    size,
    variant
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs(year).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs(year).startOf("year").isAfter(minDate) : false;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.yearLevel, className),
    "data-year-level": true,
    ref
  }, others), /* @__PURE__ */ React.createElement(CalendarHeader, __spreadValues({
    label: typeof yearLabelFormat === "function" ? yearLabelFormat(year) : dayjs(year).locale(locale || ctx.locale).format(yearLabelFormat),
    className: classes.calendarHeader,
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled: _nextDisabled,
    previousDisabled: _previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious
  }, stylesApiProps)), /* @__PURE__ */ React.createElement(MonthsList, __spreadValues({
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing
  }, stylesApiProps)));
});
YearLevel.displayName = "@mantine/dates/YearLevel";

export { YearLevel };
//# sourceMappingURL=YearLevel.js.map

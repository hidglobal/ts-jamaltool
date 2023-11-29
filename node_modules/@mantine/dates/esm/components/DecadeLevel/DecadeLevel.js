import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import { getDecadeRange } from './get-decade-range/get-decade-range.js';
import useStyles from './DecadeLevel.styles.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader.js';
import { YearsList } from '../YearsList/YearsList.js';

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
  decadeLabelFormat: "YYYY"
};
const DecadeLevel = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("DecadeLevel", defaultProps, props), {
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
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
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    className,
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    variant,
    size
  } = _a, others = __objRest(_a, [
    "decade",
    "locale",
    "minDate",
    "maxDate",
    "yearsListFormat",
    "getYearControlProps",
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
    "nextDisabled",
    "previousDisabled",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    "className",
    "decadeLabelFormat",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "variant",
    "size"
  ]);
  const { classes, cx } = useStyles(null, {
    name: ["DecadeLevel", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);
  const stylesApiProps = {
    __staticSelector: __staticSelector || "DecadeLevel",
    classNames,
    styles,
    unstyled,
    variant,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs(endOfDecade).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs(startOfDecade).startOf("year").isAfter(minDate) : false;
  const formatDecade = (date, format) => dayjs(date).locale(locale || ctx.locale).format(format);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.decadeLevel, className),
    "data-decade-level": true,
    ref
  }, others), /* @__PURE__ */ React.createElement(CalendarHeader, __spreadValues({
    label: typeof decadeLabelFormat === "function" ? decadeLabelFormat(startOfDecade, endOfDecade) : `${formatDecade(startOfDecade, decadeLabelFormat)} \u2013 ${formatDecade(endOfDecade, decadeLabelFormat)}`,
    className: classes.calendarHeader,
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled: _nextDisabled,
    previousDisabled: _previousDisabled,
    hasNextLevel: false,
    levelControlAriaLabel,
    withNext,
    withPrevious
  }, stylesApiProps)), /* @__PURE__ */ React.createElement(YearsList, __spreadValues({
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing
  }, stylesApiProps)));
});
DecadeLevel.displayName = "@mantine/dates/DecadeLevel";

export { DecadeLevel };
//# sourceMappingURL=DecadeLevel.js.map

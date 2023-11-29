'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var core = require('@mantine/core');
var MonthLevel_styles = require('./MonthLevel.styles.js');
var useDatesContext = require('../DatesProvider/use-dates-context.js');
var CalendarHeader = require('../CalendarHeader/CalendarHeader.js');
var Month = require('../Month/Month.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
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
  monthLabelFormat: "MMMM YYYY"
};
const MonthLevel = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("MonthLevel", defaultProps, props), {
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    __preventFocus,
    __stopPropagation,
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
    monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size,
    variant,
    static: isStatic
  } = _a, others = __objRest(_a, [
    "month",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "__getDayRef",
    "__onDayKeyDown",
    "__onDayClick",
    "__onDayMouseEnter",
    "withCellSpacing",
    "__preventFocus",
    "__stopPropagation",
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
    "monthLabelFormat",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "size",
    "variant",
    "static"
  ]);
  const { classes, cx } = MonthLevel_styles['default'](null, {
    name: ["MonthLevel", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const ctx = useDatesContext.useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "MonthLevel",
    classNames,
    styles,
    unstyled,
    variant,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs__default(month).endOf("month").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs__default(month).startOf("month").isAfter(minDate) : false;
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.monthLevel, className),
    "data-month-level": true,
    ref
  }, others), /* @__PURE__ */ React__default.createElement(CalendarHeader.CalendarHeader, __spreadValues({
    label: typeof monthLabelFormat === "function" ? monthLabelFormat(month) : dayjs__default(month).locale(locale || ctx.locale).format(monthLabelFormat),
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
  }, stylesApiProps)), /* @__PURE__ */ React__default.createElement(Month.Month, __spreadValues({
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    static: isStatic,
    withCellSpacing
  }, stylesApiProps)));
});
MonthLevel.displayName = "@mantine/dates/MonthLevel";

exports.MonthLevel = MonthLevel;
//# sourceMappingURL=MonthLevel.js.map
